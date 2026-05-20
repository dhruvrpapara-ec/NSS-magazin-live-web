
import { ArrowDown, Download } from "lucide-react";

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-screen items-center overflow-hidden bg-gradient-hero pt-24"
    >
      <div
        aria-hidden
        className="absolute -top-32 -right-32 h-[480px] w-[480px] rounded-full bg-primary/20 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -bottom-40 -left-32 h-[420px] w-[420px] rounded-full bg-primary/15 blur-3xl"
      />

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-16 px-6 pb-20 lg:grid-cols-2">
        <div className="animate-float-in">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Edition 2025
          </p>
          <h1 className="font-serif text-5xl leading-[1.05] text-foreground sm:text-6xl lg:text-7xl">
            The NSS<br />
            <span className="text-primary">Magazine</span>
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
            A celebration of service, dedication, and success — a curated chronicle of the CHARUSAT National Service Scheme presented as an immersive digital reading experience.
          </p>
          <p className="mt-4 max-w-lg text-sm italic text-muted-foreground">
            “Not Me, But You.” — Inspiring stories, social initiatives, and unforgettable milestones from a transformative journey of volunteerism and community upliftment.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#read"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-elegant transition-all hover:bg-[var(--primary-deep)] hover:shadow-book"
            >
              Read Magazine
              <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </a>
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="animate-book-rise [transform-style:preserve-3d]">
            <div className="relative">
              <div
                aria-hidden
                className="absolute inset-y-2 -left-2 w-3 rounded-l-sm bg-[var(--primary-deep)]/80"
                style={{ transform: "translateZ(-8px)" }}
              />
              <img
                src="/First_NSS– सेवा, समर्पण, सफलता.jpg"
                alt="NSS Magazine 2025 cover"
                width={520}
                height={690}
                className="relative h-auto w-[320px] rounded-sm shadow-book sm:w-[400px] lg:w-[440px]"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-y-0 left-0 w-8 rounded-l-sm bg-gradient-to-r from-black/15 to-transparent"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
