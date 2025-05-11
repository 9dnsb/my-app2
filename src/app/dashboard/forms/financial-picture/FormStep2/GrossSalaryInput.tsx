'use client'

import { FormData } from '../page'

type GrossSalaryInputProps = {
  formData: FormData
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function GrossSalaryInput({
  formData,
  onChange,
}: GrossSalaryInputProps) {
  return (
    <div className="space-y-2">
      <label className="block font-medium">Gross Salary</label>
      <input
        type="number"
        name="grossSalary"
        value={formData.grossSalary ?? ''}
        onChange={onChange}
        className="w-full border rounded p-2"
        placeholder="Enter gross salary"
        min="0"
        step="0.01"
      />
    </div>
  )
}
