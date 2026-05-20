import { Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <p className="font-serif text-2xl text-foreground">NSS Magazine</p>
            <p className="mt-3 max-w-xs text-sm italic text-muted-foreground">
              “Not Me, But You.”
            </p>
          </div>
          
          <div className="text-sm text-muted-foreground md:col-span-1">
            <p className="mb-3 text-xs uppercase tracking-[0.18em] text-foreground">Edition</p>
            <p>2026 Digital Edition</p>
            <a href="/NSS_Magazine_2025.pdf" download className="mt-2 inline-block text-primary hover:underline">
              Download PDF
            </a>
          </div>

          <div className="text-sm text-muted-foreground md:col-span-2">
            <p className="mb-3 text-xs uppercase tracking-[0.18em] text-foreground">Stay Connected</p>
            <div className="flex flex-col gap-2">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>Top Floor, A-3 Building, Ramanbhai Patel College of Pharmacy (RPCP), CHARUSAT Campus, Changa – 388421</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0" />
                <a href="mailto:coordinator.nss@charusat.ac.in" className="hover:text-primary transition-colors">coordinator.nss@charusat.ac.in</a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0" />
                <span>+91 97244 42255</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>© {year} NSS Magazine. All rights reserved.</p>
          <p>Designed & Developed by <span className="text-foreground">Dhruv Rupapara</span></p>
        </div>
      </div>
    </footer>
  );
}
