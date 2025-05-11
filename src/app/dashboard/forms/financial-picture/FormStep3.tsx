'use client'

import { FormData } from './page'

type FormStep3Props = {
  formData: FormData
  handleOtherIncomeToggle: (sourceType: string, isChecked: boolean) => void
  handleOtherIncomeFieldChange: (
    index: number,
    field: 'frequency' | 'amount' | 'additionalContext',
    value: string | number
  ) => void
}

const otherIncomeOptions = [
  { label: 'Unemployment', value: 'UNEMPLOYMENT' },
  { label: 'Disability', value: 'DISABILITY' },
  { label: 'Retirement (Social Security, Pension)', value: 'RETIREMENT' },
  {
    label: 'Public Assistance (Housing, Medical, Food)',
    value: 'PUBLIC_ASSISTANCE',
  },
  { label: 'Child Support', value: 'CHILD_SUPPORT' },
  { label: "Veterans' Benefits", value: 'VETERANS_BENEFITS' },
  { label: 'Alimony', value: 'ALIMONY' },
  { label: 'Student Loans or Grants', value: 'STUDENT_LOANS_GRANTS' },
  { label: 'Scholarships', value: 'SCHOLARSHIPS' },
  { label: 'Income Tax Refund', value: 'TAX_REFUND' },
  { label: 'Rental Income', value: 'RENTAL_INCOME' },
  { label: 'Investment Income', value: 'INVESTMENT_INCOME' },
  { label: 'Other', value: 'OTHER' },
]

export default function FormStep3({
  formData,
  handleOtherIncomeToggle,
  handleOtherIncomeFieldChange,
}: FormStep3Props) {
  return (
    <section className="space-y-6">
      <h1 className="text-2xl font-bold">Other Income Sources</h1>

      {/* Checkboxes */}
      {otherIncomeOptions.map((source) => (
        <div key={source.value} className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={formData.otherIncomes.some(
              (income) => income.sourceType === source.value
            )}
            onChange={(e) =>
              handleOtherIncomeToggle(source.value, e.target.checked)
            }
          />
          <label>{source.label}</label>
        </div>
      ))}

      {/* For each selected source */}
      {formData.otherIncomes.map((income, idx) => (
        <div key={idx} className="border p-4 rounded space-y-4 mt-4 bg-gray-50">
          <div className="text-lg font-semibold">{income.sourceType}</div>

          {/* Frequency */}
          <div className="space-y-2">
            <label className="block font-medium">Payment Frequency</label>
            <select
              value={income.frequency}
              onChange={(e) =>
                handleOtherIncomeFieldChange(idx, 'frequency', e.target.value)
              }
              className="w-full border rounded p-2"
            >
              <option value="">Select...</option>
              <option value="WEEKLY">Weekly</option>
              <option value="BIWEEKLY">Bi-weekly</option>
              <option value="MONTHLY">Monthly</option>
              <option value="SEMIMONTHLY">Semi-monthly</option>
            </select>
          </div>

          {/* Amount */}
          <div className="space-y-2">
            <label className="block font-medium">Average Amount ($)</label>
            <input
              type="number"
              value={income.amount ?? ''}
              onChange={(e) =>
                handleOtherIncomeFieldChange(
                  idx,
                  'amount',
                  parseFloat(e.target.value)
                )
              }
              className="w-full border rounded p-2"
              placeholder="Enter average monthly amount"
              min="0"
              step="0.01"
            />
          </div>

          {/* Additional Details */}
          <div className="space-y-2">
            <label className="block font-medium">
              Additional Details (Optional)
            </label>
            <input
              type="text"
              value={income.additionalContext || ''}
              onChange={(e) =>
                handleOtherIncomeFieldChange(
                  idx,
                  'additionalContext',
                  e.target.value
                )
              }
              className="w-full border rounded p-2"
              placeholder="Any extra notes?"
            />
          </div>
        </div>
      ))}
    </section>
  )
}
