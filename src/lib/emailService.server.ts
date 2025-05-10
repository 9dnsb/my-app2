// src/lib/emailService.ts
import nodemailer from 'nodemailer'

// In development, use a test account
// In production, configure with real SMTP credentials
let transporter: nodemailer.Transporter

/**
 * Creates and returns a nodemailer transporter
 */
async function createTransporter() {
  // For development
  if (process.env.NODE_ENV !== 'production') {
    // Create a test account
    const testAccount = await nodemailer.createTestAccount()

    transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      secure: false,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass,
      },
    })

    return transporter
  }

  // For production
  transporter = nodemailer.createTransport({
    host: process.env.EMAIL_SERVER_HOST,
    port: Number(process.env.EMAIL_SERVER_PORT),
    secure: process.env.EMAIL_SERVER_SECURE === 'true',
    auth: {
      user: process.env.EMAIL_SERVER_USER,
      pass: process.env.EMAIL_SERVER_PASSWORD,
    },
  })

  return transporter
}

/**
 * Generates email HTML template
 */
function generateVerificationEmailTemplate(
  verificationUrl: string,
  name?: string | null
) {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2>Verify Your Email Address</h2>
      <p>Hello ${name || 'there'},</p>
      <p>Please verify your email address by clicking the button below:</p>
      <div style="text-align: center; margin: 30px 0;">
        <a href="${verificationUrl}" style="background-color: #000; color: #fff; padding: 12px 24px; text-decoration: none; border-radius: 4px; display: inline-block;">Verify Email</a>
      </div>
      <p>Or copy and paste this link in your browser:</p>
      <p style="word-break: break-all; color: #666;">${verificationUrl}</p>
      <p>This link will expire in 24 hours.</p>
      <p>If you didn't create an account, you can safely ignore this email.</p>
    </div>
  `
}

/**
 * Generates plain text email
 */
function generateVerificationEmailText(
  verificationUrl: string,
  name?: string | null
) {
  return `Hello ${
    name || 'there'
  },\n\nPlease verify your email by clicking the link below:\n\n${verificationUrl}\n\nThe link will expire in 24 hours.\n\nIf you didn't create an account, you can safely ignore this email.`
}

/**
 * Sends a verification email to the user
 */
export async function sendVerificationEmail(
  email: string,
  token: string,
  name?: string | null
) {
  if (!transporter) {
    await createTransporter()
  }

  const verificationUrl = `${process.env.NEXTAUTH_URL}/api/auth/verify-token?token=${token}`

  const mailOptions = {
    from: `"Your App" <${process.env.EMAIL_FROM}>`,
    to: email,
    subject: 'Verify Your Email',
    text: generateVerificationEmailText(verificationUrl, name),
    html: generateVerificationEmailTemplate(verificationUrl, name),
  }

  const info = await transporter.sendMail(mailOptions)

  // For development, log the test email URL
  if (process.env.NODE_ENV !== 'production') {
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info))
  }

  return info
}
