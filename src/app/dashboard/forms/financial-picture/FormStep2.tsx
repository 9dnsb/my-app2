'use client'

import { FormData } from './page'
import PaystubConfirmation from './FormStep2/PaystubConfirmation'
import PaystubPeriodInput from './FormStep2/PaystubPeriodInput'
import GrossSalaryInput from './FormStep2/GrossSalaryInput'
import DeductionsSection from './FormStep2/DeductionsSection'
import NetSalaryCalculator from './FormStep2/NetSalaryCalculator'

type FormStep2Props = {
  formData: FormData
  setFormData: React.Dispatch<React.SetStateAction<FormData>>

  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
  addOtherDeduction: () => void
  removeOtherDeduction: (index: number) => void
  handleOtherDeductionChange: (
    index: number,
    field: 'name' | 'amount',
    value: string | number
  ) => void
}

export default function FormStep2({
  formData,
  onChange,
  setFormData,
  addOtherDeduction,
  removeOtherDeduction,
  handleOtherDeductionChange,
}: FormStep2Props) {
  return (
    <section className="space-y-8">
      <h1 className="text-2xl font-bold">Paystub Details</h1>

      <PaystubConfirmation />
      <PaystubPeriodInput formData={formData} onChange={onChange} />
      <GrossSalaryInput formData={formData} onChange={onChange} />
      <DeductionsSection
        formData={formData}
        onChange={onChange}
        addOtherDeduction={addOtherDeduction}
        removeOtherDeduction={removeOtherDeduction}
        handleOtherDeductionChange={handleOtherDeductionChange}
      />
      <NetSalaryCalculator formData={formData} setFormData={setFormData} />
    </section>
  )
}
