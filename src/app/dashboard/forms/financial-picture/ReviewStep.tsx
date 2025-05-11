'use client'

import { FormData } from './page'

type ReviewStepProps = {
  formData: FormData
}

const incomeSourceLabels: Record<string, string> = {
  PRIMARY_EMPLOYER: 'Primary Employer',
  UNEMPLOYMENT: 'Unemployment',
  DISABILITY: 'Disability',
  RETIREMENT: 'Retirement (Social Security, Pension)',
  PUBLIC_ASSISTANCE: 'Public Assistance (Housing, Medical, Food)',
  CHILD_SUPPORT: 'Child Support',
  VETERANS_BENEFITS: "Veterans' Benefits",
  ALIMONY: 'Alimony',
  STUDENT_LOANS_GRANTS: 'Student Loans / Grants',
  SCHOLARSHIPS: 'Scholarships',
  TAX_REFUND: 'Income Tax Refund',
  RENTAL_INCOME: 'Rental Income',
  INVESTMENT_INCOME: 'Investment Income',
  OTHER: 'Other',
}

// Convert paystub period → multiplier to monthly
function getMonthlyMultiplierFromPaystubPeriod(period: string): number {
  switch (period) {
    case 'ONE_WEEK':
      return 4
    case 'TWO_WEEKS':
      return 2
    case 'HALF_MONTH':
      return 2
    case 'ONE_MONTH':
      return 1
    default:
      return 0
  }
}

// Convert income frequency → multiplier to monthly
function getMonthlyMultiplierFromFrequency(frequency: string): number {
  switch (frequency) {
    case 'WEEKLY':
      return 4
    case 'BIWEEKLY':
      return 2
    case 'SEMIMONTHLY':
      return 2
    case 'MONTHLY':
      return 1
    default:
      return 0
  }
}

function toTitleCase(str: string) {
  return str
    .toLowerCase()
    .split(/_| /)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

export default function ReviewStep({ formData }: ReviewStepProps) {
  // Primary Employer calculation
  const grossPerPeriod = Number(formData.grossSalary) || 0
  const taxDeductions = Number(formData.taxDeductions) || 0
  const healthInsurance = Number(formData.healthInsurance) || 0
  const retirementContributions = Number(formData.retirementContributions) || 0
  const otherDeductionsTotal = formData.otherDeductions.reduce(
    (acc, deduction) => acc + (Number(deduction.amount) || 0),
    0
  )

  const netPerPeriod =
    grossPerPeriod -
    taxDeductions -
    healthInsurance -
    retirementContributions -
    otherDeductionsTotal

  const primaryEmployerMonthlyIncome =
    netPerPeriod * getMonthlyMultiplierFromPaystubPeriod(formData.paystubPeriod)

  // Other Income calculations
  const otherIncomeSources = formData.otherIncomes.map((income) => {
    const multiplier = getMonthlyMultiplierFromFrequency(income.frequency)
    const monthlyAmount = (income.amount ?? 0) * multiplier
    return {
      label: income.sourceType,
      amount: monthlyAmount,
    }
  })

  const allIncomeSources = [
    ...(primaryEmployerMonthlyIncome > 0
      ? [{ label: 'PRIMARY_EMPLOYER', amount: primaryEmployerMonthlyIncome }]
      : []),
    ...otherIncomeSources,
  ]

  const totalMonthlyIncome = allIncomeSources.reduce(
    (acc, source) => acc + source.amount,
    0
  )

  return (
    <section className="space-y-6">
      <h1 className="text-2xl font-bold">Review Your Information</h1>

      {/* Income Summary Table */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Income Summary (Per Month)</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2 border-b">Income Source</th>
                <th className="p-2 border-b">Amount ($)</th>
                <th className="p-2 border-b">% of Total</th>
              </tr>
            </thead>
            <tbody>
              {allIncomeSources.map((source, idx) => (
                <tr key={idx} className="border-t">
                  <td className="p-2">
                    {incomeSourceLabels[source.label.toUpperCase()] ||
                      toTitleCase(source.label)}
                  </td>
                  <td className="p-2">{source.amount.toFixed(2)}</td>
                  <td className="p-2">
                    {totalMonthlyIncome > 0
                      ? ((source.amount / totalMonthlyIncome) * 100).toFixed(
                          1
                        ) + '%'
                      : '-'}
                  </td>
                </tr>
              ))}
              {/* Total Row */}
              <tr className="font-bold border-t">
                <td className="p-2">Total</td>
                <td className="p-2">{totalMonthlyIncome.toFixed(2)}</td>
                <td className="p-2">100%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Raw JSON Preview */}
      <div className="space-y-2">
        <h2 className="text-xl font-semibold">Raw Form Data</h2>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
          {JSON.stringify(formData, null, 2)}
        </pre>
      </div>
    </section>
  )
}
