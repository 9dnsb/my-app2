'use client'

import { useEffect, useState } from 'react'
import { Workbook } from 'exceljs'
import { saveAs } from 'file-saver'
import { Session } from 'next-auth'
import LogoutButton from '@/components/LogoutButton'

interface CreditCardRecord {
  id: number
  userEmail: string
  cardName: string
  bankName: string
  balance: number
  interestRate: number
  createdAt: string
}

export default function AdminDashboardPage({ session }: { session: Session }) {
  const [creditCards, setCreditCards] = useState<CreditCardRecord[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchCreditCards() {
      try {
        const res = await fetch('/api/admin/credit-cards')
        const data: { creditCards: CreditCardRecord[] } = await res.json()
        setCreditCards(data.creditCards)
      } catch (error) {
        console.error('Failed to fetch credit cards', error)
      } finally {
        setLoading(false)
      }
    }
    fetchCreditCards()
  }, [])

  const exportToExcel = async () => {
    const workbook = new Workbook()
    const worksheet = workbook.addWorksheet('Credit Cards')

    worksheet.addRow([
      'ID',
      'User Email',
      'Card Name',
      'Bank Name',
      'Balance',
      'Interest Rate',
      'Created At',
    ])

    creditCards.forEach((card) => {
      worksheet.addRow([
        card.id,
        card.userEmail,
        card.cardName,
        card.bankName,
        card.balance,
        card.interestRate,
        new Date(card.createdAt).toLocaleString(),
      ])
    })

    const buffer = await workbook.xlsx.writeBuffer()
    saveAs(new Blob([buffer]), 'credit_cards.xlsx')
  }

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p>Loading credit cards...</p>
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
          <h2 className="text-2xl font-bold">All Credit Cards</h2>
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
                <th className="p-2 border">ID</th>
                <th className="p-2 border">User Email</th>
                <th className="p-2 border">Card Name</th>
                <th className="p-2 border">Bank Name</th>
                <th className="p-2 border">Balance</th>
                <th className="p-2 border">Interest Rate</th>
                <th className="p-2 border">Created At</th>
              </tr>
            </thead>
            <tbody>
              {creditCards.length === 0 ? (
                <tr>
                  <td className="p-4 text-center" colSpan={7}>
                    No credit card entries found.
                  </td>
                </tr>
              ) : (
                creditCards.map((card) => (
                  <tr key={card.id} className="text-center">
                    <td className="p-2 border">{card.id}</td>
                    <td className="p-2 border">{card.userEmail || '-'}</td>
                    <td className="p-2 border">{card.cardName || '-'}</td>
                    <td className="p-2 border">{card.bankName || '-'}</td>
                    <td className="p-2 border">
                      {typeof card.balance === 'number'
                        ? new Intl.NumberFormat('en-US', {
                            style: 'currency',
                            currency: 'USD',
                          }).format(card.balance)
                        : '-'}
                    </td>
                    <td className="p-2 border">
                      {typeof card.interestRate === 'number'
                        ? `${card.interestRate}%`
                        : '-'}
                    </td>
                    <td className="p-2 border">
                      {new Date(card.createdAt).toLocaleString()}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  )
}
