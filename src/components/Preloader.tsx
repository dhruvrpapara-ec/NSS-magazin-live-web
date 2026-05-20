import { useEffect, useState } from "react";

export function Preloader() {
  const [step, setStep] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Step 0: Initial state (everything light)
    // Step 1: NSS lights up
    // Step 2: Seva lights up
    // Step 3: Samarpan lights up
    // Step 4: Safalta lights up
    // Step 5: Fade out preloader
    // Step 6: Unmount

    const timeouts = [
      setTimeout(() => setStep(1), 400),
      setTimeout(() => setStep(2), 1100),
      setTimeout(() => setStep(3), 1800),
      setTimeout(() => setStep(4), 2500),
      setTimeout(() => setStep(5), 3400),
      setTimeout(() => setVisible(false), 4200), // wait for fade out
    ];

    return () => timeouts.forEach(clearTimeout);
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background transition-opacity duration-700 ${
        step >= 5 ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
      
      <div className="relative flex flex-col items-center gap-12 sm:gap-16">
        {/* Network Connections SVG */}
        <svg className="absolute inset-0 w-full h-full -z-10" style={{ minHeight: '300px' }}>
            {/* Draw lines between words (conceptual neural links) */}
            <line x1="50%" y1="20%" x2="20%" y2="80%" stroke="currentColor" strokeWidth="2" className={`text-primary transition-all duration-1000 ${step >= 2 ? 'opacity-30' : 'opacity-5'}`} />
            <line x1="50%" y1="20%" x2="50%" y2="80%" stroke="currentColor" strokeWidth="2" className={`text-primary transition-all duration-1000 ${step >= 3 ? 'opacity-30' : 'opacity-5'}`} />
            <line x1="50%" y1="20%" x2="80%" y2="80%" stroke="currentColor" strokeWidth="2" className={`text-primary transition-all duration-1000 ${step >= 4 ? 'opacity-30' : 'opacity-5'}`} />
        </svg>

        <h1
          className={`font-serif text-5xl sm:text-7xl font-bold tracking-tight transition-all duration-700 ${
            step >= 1 ? "text-foreground drop-shadow-[0_0_15px_rgba(0,0,0,0.1)] scale-110" : "text-muted-foreground/30 scale-100"
          }`}
        >
          NSS
        </h1>

        <div className="flex w-full max-w-lg items-center justify-center gap-6 sm:gap-12 px-6">
          <span
            className={`font-serif text-2xl sm:text-4xl font-semibold transition-all duration-700 translate-y-4 ${
              step >= 2 ? "text-foreground drop-shadow-[0_0_15px_rgba(0,0,0,0.1)] opacity-100 translate-y-0" : "text-muted-foreground/30 opacity-40"
            }`}
          >
            सेवा
          </span>
          <span
            className={`font-serif text-2xl sm:text-4xl font-semibold transition-all duration-700 translate-y-4 ${
              step >= 3 ? "text-foreground drop-shadow-[0_0_15px_rgba(0,0,0,0.1)] opacity-100 translate-y-0" : "text-muted-foreground/30 opacity-40"
            }`}
          >
            समर्पण
          </span>
          <span
            className={`font-serif text-2xl sm:text-4xl font-semibold transition-all duration-700 translate-y-4 ${
              step >= 4 ? "text-foreground drop-shadow-[0_0_15px_rgba(0,0,0,0.1)] opacity-100 translate-y-0" : "text-muted-foreground/30 opacity-40"
            }`}
          >
            सफलता
          </span>
        </div>
      </div>
    </div>
  );
}
