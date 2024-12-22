"use client"

import * as motion from "motion/react-client";
import { useState } from "react";
import DonationCard from "./DonationCard";

export default function Header() {
  const [showDonation, setShowDonation] = useState(false);

  const handleOpenDonation = () => {
    setShowDonation(true);
  };

  const handleCloseDonation = () => {
    setShowDonation(false);
  };

  return (
    <div className="bg-secondary py-3 flex justify-center gap-2 relative">
      <div>
        <button
          type="button"
          onClick={handleOpenDonation}
          className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-primary bg-highlight rounded-lg hover:bg-purple-100"
        >
          <img src="/img/coffee-icon.svg" alt="coffee icon" />
          Buy me a coffee
        </button>
      </div>
      <div className="flex items-center gap-3 text-primary">
        <img src="/img/arrow-icon.svg" alt="arrow icon" />
        <p>Apoie meu trabalho</p>
      </div>

        {showDonation && (
          <motion.div
            key="donation-card"
            initial={{ y: "-50vh", opacity: 0 }}
            animate={{ y: -270, opacity: 1 }}
            exit={{ y: "-50vh", opacity: 0 }}
            transition={{ type: "keyframes", stiffness: 100 }}
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-10"
            onClick={handleCloseDonation}
          >
            <motion.div
              className="bg-white p-8 rounded-lg shadow-lg"
              onClick={(e) => e.stopPropagation()}  // Evita fechar ao clicar no card
            >
              <DonationCard />
            </motion.div>
          </motion.div>
        )}
      
    </div>
  );
}