'use client'

import { useState } from 'react'

interface CreditCard {
  cardName: string
  bankName: string
  balance: number
  interestRate: number
}

export default function CreditCardForm() {
  const [cards, setCards] = useState<CreditCard[]>([
    { cardName: '', bankName: '', balance: 0, interestRate: 0 },
  ])

  const handleCardChange = (
    index: number,
    field: keyof CreditCard,
    value: string
  ) => {
    const updatedCards = [...cards]
    if (field === 'balance' || field === 'interestRate') {
      updatedCards[index][field] = parseFloat(value) || 0
    } else {
      updatedCards[index][field] = value
    }
    setCards(updatedCards)
  }

  const addCard = () => {
    setCards([
      ...cards,
      { cardName: '', bankName: '', balance: 0, interestRate: 0 },
    ])
  }

  const removeCard = (index: number) => {
    const updatedCards = cards.filter((_, i) => i !== index)
    setCards(updatedCards)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const res = await fetch('/api/credit-cards/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ cards }),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.message || 'Something went wrong')
      }

      console.log('Submission successful:', data)
      alert('Credit card information submitted successfully!')
    } catch (error) {
      console.error('Submission error:', error)
      alert('Failed to submit. Please try again.')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {cards.map((card, index) => (
        <div key={index} className="space-y-4 border p-4 rounded-lg shadow-sm">
          <div>
            <label className="block mb-1 font-semibold">Credit Card Name</label>
            <input
              type="text"
              value={card.cardName}
              onChange={(e) =>
                handleCardChange(index, 'cardName', e.target.value)
              }
              className="w-full border rounded p-2"
              placeholder="e.g., Chase Freedom"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Bank Name</label>
            <input
              type="text"
              value={card.bankName}
              onChange={(e) =>
                handleCardChange(index, 'bankName', e.target.value)
              }
              className="w-full border rounded p-2"
              placeholder="e.g., Chase Bank"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">
              Balance Owed (USD)
            </label>
            <input
              type="number"
              value={card.balance}
              onChange={(e) =>
                handleCardChange(index, 'balance', e.target.value)
              }
              className="w-full border rounded p-2"
              placeholder="e.g., 4500"
              required
              min="0"
              step="0.01"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">
              Interest Rate (%)
            </label>
            <input
              type="number"
              value={card.interestRate}
              onChange={(e) =>
                handleCardChange(index, 'interestRate', e.target.value)
              }
              className="w-full border rounded p-2"
              placeholder="e.g., 17.99"
              required
              min="0"
              step="0.01"
            />
          </div>

          <div className="flex justify-end">
            {cards.length > 1 && (
              <button
                type="button"
                onClick={() => removeCard(index)}
                className="text-red-600 hover:underline text-sm"
              >
                Remove Card
              </button>
            )}
          </div>
        </div>
      ))}

      <div className="flex gap-4">
        <button
          type="button"
          onClick={addCard}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Add Another Card
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          Submit
        </button>
      </div>
    </form>
  )
}
