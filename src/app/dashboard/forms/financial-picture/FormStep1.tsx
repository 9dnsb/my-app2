'use client'

import { FormData } from './page'

type FormStep1Props = {
  formData: FormData
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
}

export default function FormStep1({ formData, onChange }: FormStep1Props) {
  return (
    <section className="space-y-6">
      <h1 className="text-2xl font-bold">Employment Information</h1>

      {/* Employment Status */}
      <div className="space-y-2">
        <label className="block font-medium">Employment Status</label>
        <select
          name="employmentStatus"
          value={formData.employmentStatus}
          onChange={onChange}
          className="w-full border rounded p-2"
        >
          <option value="">Select...</option>
          <option value="FULL_TIME">Full-time</option>
          <option value="PART_TIME">Part-time</option>
          <option value="SEASONAL">Seasonal</option>
          <option value="RETIRED">Retired</option>
          <option value="UNEMPLOYED">Unemployed</option>
          <option value="STUDENT">Student</option>
        </select>
      </div>

      {/* Employer Name */}
      <div className="space-y-2">
        <label className="block font-medium">Employer Name</label>
        <input
          type="text"
          name="employerName"
          value={formData.employerName}
          onChange={onChange}
          className="w-full border rounded p-2"
          placeholder="Who do you work for?"
        />
      </div>

      {/* Role Title */}
      <div className="space-y-2">
        <label className="block font-medium">Role Title</label>
        <input
          type="text"
          name="roleTitle"
          value={formData.roleTitle}
          onChange={onChange}
          className="w-full border rounded p-2"
          placeholder="What’s your job title?"
        />
      </div>

      {/* Payment Frequency */}
      <div className="space-y-2">
        <label className="block font-medium">Payment Frequency</label>
        <select
          name="paymentFrequency"
          value={formData.paymentFrequency}
          onChange={onChange}
          className="w-full border rounded p-2"
        >
          <option value="">Select...</option>
          <option value="WEEKLY">Weekly</option>
          <option value="BIWEEKLY">Bi-weekly</option>
          <option value="MONTHLY">Monthly</option>
          <option value="SEMIMONTHLY">Semi-monthly</option>
        </select>
      </div>
    </section>
  )
}
