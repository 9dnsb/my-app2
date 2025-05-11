'use client'

import { useState } from 'react'
import { FormData } from '../page'

type NetSalaryCalculatorProps = {
  formData: FormData
  setFormData: React.Dispatch<React.SetStateAction<FormData>>
}

export default function NetSalaryCalculator({
  formData,
  setFormData,
}: NetSalaryCalculatorProps) {
  const [calculatedMonthlyNetSalary, setCalculatedMonthlyNetSalary] = useState<
    number | null
  >(null)
  const [calculatedNetPerPeriod, setCalculatedNetPerPeriod] = useState<
    number | null
  >(null)

  function calculateNetSalary() {
    const grossSalary = Number(formData.grossSalary) || 0
    const taxDeductions = Number(formData.taxDeductions) || 0
    const healthInsurance = Number(formData.healthInsurance) || 0
    const retirementContributions =
      Number(formData.retirementContributions) || 0
    const otherDeductionsTotal = formData.otherDeductions.reduce(
      (acc, deduction) => acc + (Number(deduction.amount) || 0),
      0
    )

    const netPerPeriod =
      grossSalary -
      taxDeductions -
      healthInsurance -
      retirementContributions -
      otherDeductionsTotal

    const paystubPeriod = formData.paystubPeriod
    let payPeriodsPerMonth = 0

    switch (paystubPeriod) {
      case 'ONE_WEEK':
        payPeriodsPerMonth = 4 // 52 weeks / 12 months
        break
      case 'TWO_WEEKS':
        payPeriodsPerMonth = 2 // 26 bi-weeks / 12 months
        break
      case 'HALF_MONTH':
        payPeriodsPerMonth = 2 // exactly twice per month
        break
      case 'ONE_MONTH':
        payPeriodsPerMonth = 1 // once per month
        break
      default:
        payPeriodsPerMonth = 0
    }

    if (payPeriodsPerMonth === 0) {
      console.warn('Missing or invalid paystub period.')
      return
    }

    const monthlyNetSalary = netPerPeriod * payPeriodsPerMonth

    console.log('--- Net Salary Calculation Triggered ---')
    console.log({
      grossSalary,
      deductions: {
        taxDeductions,
        healthInsurance,
        retirementContributions,
        otherDeductionsTotal,
      },
      netPerPeriod,
      payPeriodsPerMonth,
      monthlyNetSalary,
    })

    // Save calculated results
    setCalculatedNetPerPeriod(Number(netPerPeriod.toFixed(2)))
    setCalculatedMonthlyNetSalary(Number(monthlyNetSalary.toFixed(2)))

    // (Optional) If you want to store monthly into formData as well:
    setFormData((prev) => ({
      ...prev,
      netSalary: Number(monthlyNetSalary.toFixed(2)),
    }))
  }

  return (
    <div className="space-y-4">
      <button
        type="button"
        onClick={calculateNetSalary}
        className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
      >
        Calculate Net Salary
      </button>

      {/* Net Per Paycheck */}
      <div className="space-y-2">
        <label className="block font-medium">Net Salary (Per Paycheck)</label>
        <input
          type="number"
          name="netSalaryPerPeriod"
          value={calculatedNetPerPeriod ?? ''}
          readOnly
          disabled
          className="w-full border rounded p-2 bg-gray-100 cursor-not-allowed"
          placeholder="Net salary after deductions per pay period"
        />
      </div>

      {/* Net Per Month */}
      <div className="space-y-2">
        <label className="block font-medium">
          Estimated Monthly Net Salary
        </label>
        <input
          type="number"
          name="monthlyNetSalary"
          value={calculatedMonthlyNetSalary ?? ''}
          readOnly
          disabled
          className="w-full border rounded p-2 bg-gray-100 cursor-not-allowed"
          placeholder="Monthly take-home pay"
        />
      </div>
    </div>
  )
}
