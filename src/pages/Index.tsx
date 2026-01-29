import { useState } from 'react';
import HypnoticBackground from '@/components/HypnoticBackground';
import AgeVerificationModal from '@/components/AgeVerificationModal';

const Index = () => {
  const [isVerified, setIsVerified] = useState(false);
  const [isDenied, setIsDenied] = useState(false);

  const handleVerified = () => {
    setIsVerified(true);
  };

  const handleDenied = () => {
    setIsDenied(true);
  };

  if (isDenied) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-wine">
        <div className="bg-card p-10 text-center">
          <h1 className="text-foreground text-2xl font-display font-semibold">
            Access Denied
          </h1>
          <p className="text-muted-foreground mt-4">
            You must be of legal drinking age to access this site.
          </p>
        </div>
      </div>
    );
  }

  if (isVerified) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-wine">
        <div className="bg-card p-10 text-center">
          <h1 className="text-foreground text-2xl font-display font-semibold">
            Welcome to Hightail Vodka
          </h1>
          <p className="text-muted-foreground mt-4">
            Thank you for verifying your age.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center overflow-hidden">
      <HypnoticBackground />
      <div className="relative z-10">
        <AgeVerificationModal 
          onVerified={handleVerified} 
          onDenied={handleDenied} 
        />
      </div>
    </div>
  );
};

export default Index;
