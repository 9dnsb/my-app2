'use client'

import { useState } from 'react'
import StartPage from './StartPage'
import FormStep1 from './FormStep1'
import FormStep2 from './FormStep2'
import FormStep3 from './FormStep3'
import ReviewStep from './ReviewStep'

type EmploymentStatus =
  | 'FULL_TIME'
  | 'PART_TIME'
  | 'SEASONAL'
  | 'RETIRED'
  | 'UNEMPLOYED'
  | 'STUDENT'
type PaymentFrequency = 'WEEKLY' | 'BIWEEKLY' | 'MONTHLY' | 'SEMIMONTHLY'
type PaystubPeriod = 'ONE_WEEK' | 'TWO_WEEKS' | 'HALF_MONTH' | 'ONE_MONTH'
type Step = 'start' | 1 | 2 | 3 | 'review'

export type FormData = {
  // Step 1
  employmentStatus: EmploymentStatus | ''
  employerName: string
  roleTitle: string
  paymentFrequency: PaymentFrequency | ''

  // Step 2
  paystubPeriod: PaystubPeriod | ''
  grossSalary: number | undefined
  taxDeductions: number | undefined
  healthInsurance: number | undefined
  retirementContributions: number | undefined
  netSalary: number | undefined
  otherDeductions: { name: string; amount?: number }[]

  // Step 3
  otherIncomes: {
    sourceType: string
    frequency: string
    amount?: number
    additionalContext?: string
  }[]
}

export default function FinancialPicturePage() {
  const [step, setStep] = useState<Step>('start')

  const [formData, setFormData] = useState<FormData>({
    employmentStatus: '',
    employerName: '',
    roleTitle: '',
    paymentFrequency: '',
    paystubPeriod: '',
    grossSalary: undefined,
    taxDeductions: undefined,
    healthInsurance: undefined,
    retirementContributions: undefined,
    netSalary: undefined,
    otherDeductions: [],
    otherIncomes: [],
  })

  // Centralized Handlers
  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  function addOtherDeduction() {
    setFormData((prev) => ({
      ...prev,
      otherDeductions: [
        ...prev.otherDeductions,
        { name: '', amount: undefined },
      ],
    }))
  }

  function removeOtherDeduction(index: number) {
    setFormData((prev) => ({
      ...prev,
      otherDeductions: prev.otherDeductions.filter((_, idx) => idx !== index),
    }))
  }

  function handleOtherDeductionChange(
    index: number,
    field: 'name' | 'amount',
    value: string | number
  ) {
    setFormData((prev) => ({
      ...prev,
      otherDeductions: prev.otherDeductions.map((deduction, idx) =>
        idx === index ? { ...deduction, [field]: value } : deduction
      ),
    }))
  }

  function handleOtherIncomeToggle(sourceType: string, isChecked: boolean) {
    setFormData((prev) => ({
      ...prev,
      otherIncomes: isChecked
        ? [
            ...prev.otherIncomes,
            {
              sourceType,
              frequency: '',
              amount: undefined,
              additionalContext: '',
            },
          ]
        : prev.otherIncomes.filter(
            (income) => income.sourceType !== sourceType
          ),
    }))
  }

  function handleOtherIncomeFieldChange(
    index: number,
    field: 'frequency' | 'amount' | 'additionalContext',
    value: string | number
  ) {
    setFormData((prev) => ({
      ...prev,
      otherIncomes: prev.otherIncomes.map((income, idx) =>
        idx === index ? { ...income, [field]: value } : income
      ),
    }))
  }

  function handleNext() {
    if (step === 3) {
      setStep('review')
    } else if (step === 'start') {
      setStep(1)
    } else {
      setStep((prev) =>
        typeof prev === 'number' ? ((prev + 1) as Step) : prev
      )
    }
  }

  function handleBack() {
    if (step === 1 || step === 'start') return
    if (step === 'review') {
      setStep(3)
    } else {
      setStep((prev) =>
        typeof prev === 'number' ? ((prev - 1) as Step) : prev
      )
    }
  }

  return (
    <main className="min-h-screen p-8 bg-white text-gray-900">
      <div className="max-w-2xl mx-auto mt-12 px-4 space-y-8">
        {/* Step Content */}
        {step === 'start' && <StartPage onStart={() => setStep(1)} />}
        {step === 1 && (
          <FormStep1 formData={formData} onChange={handleChange} />
        )}
        {step === 2 && (
          <FormStep2
            formData={formData}
            onChange={handleChange}
            setFormData={setFormData}
            addOtherDeduction={addOtherDeduction}
            removeOtherDeduction={removeOtherDeduction}
            handleOtherDeductionChange={handleOtherDeductionChange}
          />
        )}
        {step === 3 && (
          <FormStep3
            formData={formData}
            handleOtherIncomeToggle={handleOtherIncomeToggle}
            handleOtherIncomeFieldChange={handleOtherIncomeFieldChange}
          />
        )}
        {step === 'review' && <ReviewStep formData={formData} />}

        {/* Navigation Buttons */}
        {step !== 'start' && (
          <div className="flex justify-between mt-8">
            <button
              onClick={handleBack}
              disabled={step === 1}
              className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 disabled:opacity-50"
            >
              Back
            </button>
            <button
              onClick={handleNext}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              {step === 'review' ? 'Submit' : 'Next'}
            </button>
          </div>
        )}
      </div>
    </main>
  )
}
