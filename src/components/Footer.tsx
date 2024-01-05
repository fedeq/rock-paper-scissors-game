"use client";
import {useState} from "react";

import RulesModal from "./RulesModal";

export function Footer() {
  const [showModal, setShowModal] = useState(false);

  function handleClose() {
    setShowModal(false);
  }

  return (
    <footer className="flex h-20 items-center justify-end text-center leading-[4rem] opacity-70">
      <button
        className="border-dark_text flex h-8 w-20 items-center justify-center rounded-md border-2 bg-transparent text-xs uppercase tracking-widest hover:border-white"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Rules
      </button>
      {showModal ? <RulesModal isOpen={showModal} onClose={handleClose} /> : null}
    </footer>
  );
}
