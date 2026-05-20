import { useEffect, useRef, useState } from "react";
import { Maximize2, Minimize2 } from "lucide-react";

export function Flipbook() {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onFs = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", onFs);
    return () => document.removeEventListener("fullscreenchange", onFs);
  }, []);

  const toggleFullscreen = async () => {
    if (!document.fullscreenElement) {
      await containerRef.current?.requestFullscreen?.();
    } else {
      await document.exitFullscreen?.();
    }
  };

  return (
    <section id="read" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5 pointer-events-none" />
      <div className="mx-auto max-w-[90rem] px-4 sm:px-6 relative z-10">
        <div className="mb-16 text-center">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-primary font-bold">
            The Digital Experience
          </p>
          <h2 className="font-serif text-5xl text-foreground sm:text-6xl mb-6">
            Explore the Magazine
          </h2>
          <p className="mx-auto max-w-xl text-lg text-muted-foreground font-medium">
            Scroll through the full edition natively. For the best reading experience, open it in full screen.
          </p>
        </div>

        <div className="glass-card rounded-[2rem] p-3 sm:p-5 mx-auto w-full shadow-elegant relative group">
          <div className="absolute -inset-1 bg-gradient-primary opacity-20 blur-2xl group-hover:opacity-40 transition duration-1000 -z-10 rounded-[3rem]" />
          
          {/* macOS window header */}
          <div className="flex items-center px-4 py-3 border-b border-border/50 bg-white/60 rounded-t-[1.5rem] relative">
            <div className="flex gap-2 absolute left-4">
              <div className="w-3 h-3 rounded-full bg-red-400/90 shadow-inner" />
              <div className="w-3 h-3 rounded-full bg-amber-400/90 shadow-inner" />
              <div className="w-3 h-3 rounded-full bg-green-400/90 shadow-inner" />
            </div>
            <div className="w-full text-center">
              <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">NSS_Magazine_2025.pdf</span>
            </div>
          </div>

          <div
            ref={containerRef}
            className={`relative overflow-hidden bg-[#e5e7eb] ${
              isFullscreen ? "fixed inset-0 z-[100] h-screen w-screen" : "h-[85vh] min-h-[700px] rounded-b-[1.5rem] border-x border-b border-border/50"
            }`}
          >
            <iframe 
              src="/NSS_Magazine_2025.pdf#toolbar=0&navpanes=0&view=FitH" 
              className="w-full h-full border-none"
              title="NSS Magazine Viewer"
            />
            
            {isFullscreen && (
              <button 
                onClick={toggleFullscreen}
                className="absolute top-4 right-4 bg-black/50 hover:bg-black/80 text-white rounded-full p-3 backdrop-blur-md transition-colors"
              >
                <Minimize2 className="h-5 w-5" />
              </button>
            )}
          </div>

          <div className="mt-8 flex justify-center pb-2">
             <a
                href="/NSS_Magazine_2025.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 text-sm font-bold text-primary-foreground shadow-elegant transition-all hover:scale-105 hover:shadow-book"
              >
                <Maximize2 className="h-5 w-5" />
                Open Full Screen
              </a>
          </div>
        </div>
      </div>
    </section>
  );
}
