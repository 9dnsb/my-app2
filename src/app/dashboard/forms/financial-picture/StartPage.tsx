'use client'

type StartPageProps = {
  onStart: () => void
}

export default function StartPage({ onStart }: StartPageProps) {
  return (
    <section className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold text-gray-900">
          Client Portal - Financial Picture Section: Income Information
        </h1>
        <p className="text-gray-700 text-lg">
          Objective: You’re taking the first step toward understanding your
          financial picture, starting with income. We&apos;re here to guide you
          through it, step-by-step.
        </p>
      </div>

      <button
        onClick={onStart}
        className="px-6 py-3 bg-blue-600 text-white rounded-lg text-lg hover:bg-blue-700 transition"
      >
        Start
      </button>
    </section>
  )
}
