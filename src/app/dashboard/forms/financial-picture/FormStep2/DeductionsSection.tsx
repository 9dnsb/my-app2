'use client'

import { FormData } from '../page'

type DeductionsSectionProps = {
  formData: FormData
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  addOtherDeduction: () => void
  removeOtherDeduction: (index: number) => void
  handleOtherDeductionChange: (
    index: number,
    field: 'name' | 'amount',
    value: string | number
  ) => void
}

export default function DeductionsSection({
  formData,
  onChange,
  addOtherDeduction,
  removeOtherDeduction,
  handleOtherDeductionChange,
}: DeductionsSectionProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-gray-800">
        Now, let&apos;s look at what comes out before you get paid
      </h2>

      {/* Tax Deductions */}
      <div className="space-y-2">
        <label className="block font-medium">Tax Deductions</label>
        <input
          type="number"
          name="taxDeductions"
          value={formData.taxDeductions ?? ''}
          onChange={onChange}
          className="w-full border rounded p-2"
          min="0"
          step="0.01"
        />
      </div>

      {/* Health Insurance */}
      <div className="space-y-2">
        <label className="block font-medium">Health Insurance</label>
        <input
          type="number"
          name="healthInsurance"
          value={formData.healthInsurance ?? ''}
          onChange={onChange}
          className="w-full border rounded p-2"
          min="0"
          step="0.01"
        />
      </div>

      {/* Retirement Contributions */}
      <div className="space-y-2">
        <label className="block font-medium">
          Retirement Contributions (401k, 403b)
        </label>
        <input
          type="number"
          name="retirementContributions"
          value={formData.retirementContributions ?? ''}
          onChange={onChange}
          className="w-full border rounded p-2"
          min="0"
          step="0.01"
        />
      </div>

      {/* Other Deductions */}
      <div className="space-y-2">
        <label className="block font-medium">Other Deductions</label>

        {formData.otherDeductions.map((deduction, idx) => (
          <div key={idx} className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Deduction name"
              value={deduction.name}
              onChange={(e) =>
                handleOtherDeductionChange(idx, 'name', e.target.value)
              }
              className="flex-1 border rounded p-2"
            />
            <input
              type="number"
              placeholder="Amount"
              value={deduction.amount ?? ''}
              onChange={(e) =>
                handleOtherDeductionChange(
                  idx,
                  'amount',
                  parseFloat(e.target.value)
                )
              }
              className="w-32 border rounded p-2"
              min="0"
              step="0.01"
            />
            <button
              type="button"
              onClick={() => removeOtherDeduction(idx)}
              className="text-red-600 font-bold"
            >
              ✕
            </button>
          </div>
        ))}

        <button
          type="button"
          onClick={addOtherDeduction}
          className="text-blue-600 font-medium mt-2"
        >
          + Add Deduction
        </button>
      </div>
    </div>
  )
}
