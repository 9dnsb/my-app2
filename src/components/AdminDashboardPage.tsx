'use client'

import { useEffect, useState } from 'react'
import { Workbook } from 'exceljs'
import { saveAs } from 'file-saver'
import { Session } from 'next-auth'
import LogoutButton from '@/components/LogoutButton'

interface CreditCardEntry {
  cardName: string
  bankName: string
  balance: number
  interestRate: number
}

interface Submission {
  id: number
  userEmail: string
  formName: string
  data: CreditCardEntry[]
  createdAt: string
}

export default function AdminDashboardPage({ session }: { session: Session }) {
  const [submissions, setSubmissions] = useState<Submission[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchSubmissions() {
      try {
        const res = await fetch('/api/admin/submissions')
        const data = await res.json()
        setSubmissions(data.submissions)
      } catch (error) {
        console.error('Failed to fetch submissions', error)
      } finally {
        setLoading(false)
      }
    }
    fetchSubmissions()
  }, [])

  const exportToExcel = async () => {
    const workbook = new Workbook()
    const worksheet = workbook.addWorksheet('Submissions')

    worksheet.addRow([
      'Submission ID',
      'User Email',
      'Form Name',
      'Card Name',
      'Bank Name',
      'Balance',
      'Interest Rate',
      'Created At',
    ])

    submissions.forEach((submission) => {
      if (Array.isArray(submission.data)) {
        submission.data.forEach((card) => {
          worksheet.addRow([
            submission.id,
            submission.userEmail,
            submission.formName,
            card.cardName,
            card.bankName,
            card.balance,
            card.interestRate,
            submission.createdAt,
          ])
        })
      }
    })

    const buffer = await workbook.xlsx.writeBuffer()
    saveAs(new Blob([buffer]), 'submissions.xlsx')
  }

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p>Loading submissions...</p>
      </main>
    )
  }

  return (
    <main className="min-h-screen p-8 bg-white text-gray-900">
      <h1 className="text-3xl font-bold mb-6">
        Admin Dashboard. Welcome, {session.user?.email} (Admin)
      </h1>
      <LogoutButton />

      <div className="mt-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">All Credit Card Submissions</h2>
          <button
            onClick={exportToExcel}
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Export to Excel
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full border">
            <thead>
              <tr className="bg-gray-100 text-center">
                <th className="p-2 border">Submission ID</th>
                <th className="p-2 border">User Email</th>
                <th className="p-2 border">Form Name</th>
                <th className="p-2 border">Card Name</th>
                <th className="p-2 border">Bank Name</th>
                <th className="p-2 border">Balance</th>
                <th className="p-2 border">Interest Rate</th>
                <th className="p-2 border">Created At</th>
              </tr>
            </thead>
            <tbody>
              {submissions
                .filter((submission) => submission.formName === 'creditCards')
                .map((submission) =>
                  Array.isArray(submission.data) ? (
                    submission.data.map(
                      (card: CreditCardEntry, idx: number) => (
                        <tr
                          key={`${submission.id}-${idx}`}
                          className="text-center"
                        >
                          <td className="p-2 border">{submission.id}</td>
                          <td className="p-2 border">{submission.userEmail}</td>
                          <td className="p-2 border">{submission.formName}</td>
                          <td className="p-2 border">{card.cardName}</td>
                          <td className="p-2 border">{card.bankName}</td>
                          <td className="p-2 border">
                            ${card.balance.toFixed(2)}
                          </td>
                          <td className="p-2 border">{card.interestRate}%</td>
                          <td className="p-2 border">
                            {new Date(submission.createdAt).toLocaleString()}
                          </td>
                        </tr>
                      )
                    )
                  ) : (
                    <tr
                      key={`invalid-${submission.id}`}
                      className="text-center text-red-600"
                    >
                      <td className="p-2 border" colSpan={8}>
                        Invalid data format
                      </td>
                    </tr>
                  )
                )}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  )
}
