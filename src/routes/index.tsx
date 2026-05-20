import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense, useEffect, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";
import { Loader2 } from "lucide-react";

function FlipbookClient() {
  const [Comp, setComp] = useState<any>(null);
  useEffect(() => {
    import("@/components/Flipbook").then((m) => setComp(() => m.Flipbook));
  }, []);
  return Comp ? <Comp /> : (
    <div className="flex min-h-[60vh] items-center justify-center">
      <Loader2 className="h-6 w-6 animate-spin text-primary" />
    </div>
  );
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NSS Magazine 2025 — Digital Edition" },
      {
        name: "description",
        content:
          "Read the NSS Magazine 2025 — an immersive digital flipbook of stories, service, and student voice. Curated and published by Dhruv Rupapara.",
      },
      { property: "og:title", content: "NSS Magazine 2025 — Digital Edition" },
      {
        property: "og:description",
        content: "An immersive digital flipbook of the NSS Magazine, 2025 edition.",
      },
      { property: "og:type", content: "article" },
    ],
  }),
  component: Index,
});

function SplashScreen() {
  return (
    <div className="fixed inset-0 z-[100] grid place-items-center bg-background">
      <div className="flex flex-col items-center gap-4">
        <div className="font-serif text-3xl text-primary">NSS</div>
        <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
      </div>
    </div>
  );
}

function Index() {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setReady(true), 600);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      {!ready && <SplashScreen />}
      <Navbar />
      <main>
        <Hero />
        <FlipbookClient />
        <About />
      </main>
      <Footer />
    </>
  );
}
