import { useEffect, useState } from "react";
import { BookOpen } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-soft" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2 font-serif text-xl font-semibold">
          <BookOpen className="h-5 w-5 text-primary" />
          <span>NSS Magazine</span>
        </Link>
        <ul className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
          <li><Link to="/" hash="read" className="transition-colors hover:text-foreground">Read</Link></li>
          <li><Link to="/" hash="about" className="transition-colors hover:text-foreground">About</Link></li>
          <li><Link to="/editor" className="transition-colors hover:text-foreground">Editor's Desk</Link></li>
        </ul>
      </nav>
    </header>
  );
}
