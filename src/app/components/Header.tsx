"use client"

import { useState } from "react"
import DonationCard from "./DonationCard"

export default function Header() {
  const [showDonation, setShowDonation] = useState(false)

  const handleOpenDonation = () => {
    setShowDonation(true)
  }

  const handleCloseDonation = () => {
    setShowDonation(false)
  }

  return (
    <div className="bg-secondary py-3 flex justify-center gap-2 relative">
      <div>
        <button
          type="button"
          onClick={handleOpenDonation}
          className="flex items-center gap-2 px-2 py-2 text-xs font-medium text-primary bg-highlight rounded-lg hover:bg-purple-100"
        >
          <img src="/img/coffee-icon.svg" alt="coffee icon" />
          Buy me a coffee
        </button>
      </div>
      <div className="flex items-center gap-3 text-primary text-xs">
        <img src="/img/arrow-icon.svg" alt="arrow icon" />
        <p>Apoie meu trabalho</p>
      </div>

      {showDonation && (
        <DonationCard handleCloseDonationCard={handleCloseDonation} />
      )}
    </div>
  )
}
