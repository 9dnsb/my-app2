'use client'
import { FormData } from '../page'

type PaystubPeriodInputProps = {
  formData: FormData
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

export default function PaystubPeriodInput({
  formData,
  onChange,
}: PaystubPeriodInputProps) {
  return (
    <div className="space-y-2">
      <label className="block font-medium">Paystub Period</label>
      <select
        name="paystubPeriod"
        value={formData.paystubPeriod}
        onChange={onChange}
        className="w-full border rounded p-2"
      >
        <option value="">Select...</option>
        <option value="ONE_WEEK">1 Week</option>
        <option value="TWO_WEEKS">2 Weeks</option>
        <option value="HALF_MONTH">0.5 Month</option>
        <option value="ONE_MONTH">1 Month</option>
      </select>
    </div>
  )
}
