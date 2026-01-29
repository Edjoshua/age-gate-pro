import { useState } from 'react';
import HightailLogo from './HightailLogo';

interface AgeVerificationModalProps {
  onVerified: () => void;
  onDenied: () => void;
}

const AgeVerificationModal = ({ onVerified, onDenied }: AgeVerificationModalProps) => {
  return (
    <div className="bg-card p-10 flex flex-col items-center max-w-md w-full mx-4">
      {/* Logo */}
      <HightailLogo />
      
      {/* Heading */}
      <h1 className="text-foreground text-3xl md:text-4xl font-display font-semibold text-center mt-8 mb-8 leading-tight">
        Are You of Legal<br />
        Drinking Age in<br />
        Your Territory?
      </h1>
      
      {/* Buttons */}
      <div className="flex gap-4">
        <button
          onClick={onDenied}
          className="bg-wine text-wine-foreground px-10 py-3 text-sm font-medium tracking-widest uppercase"
        >
          NO
        </button>
        <button
          onClick={onVerified}
          className="bg-wine text-wine-foreground px-10 py-3 text-sm font-medium tracking-widest uppercase"
        >
          YES
        </button>
      </div>
    </div>
  );
};

export default AgeVerificationModal;
