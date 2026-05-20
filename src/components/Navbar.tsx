import { useEffect, useState } from "react";
import { BookOpen, Menu, X } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled || mobileMenuOpen ? "glass shadow-soft" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 relative z-10">
        <Link to="/" className="flex items-center gap-2 font-serif text-xl font-semibold">
          <BookOpen className="h-5 w-5 text-primary" />
          <span>NSS Magazine</span>
        </Link>
        
        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
          <li><Link to="/" hash="read" className="transition-colors hover:text-foreground">Read</Link></li>
          <li><Link to="/" hash="about" className="transition-colors hover:text-foreground">About</Link></li>
          <li><Link to="/editor" className="transition-colors hover:text-foreground">Editor's Desk</Link></li>
        </ul>

        {/* Mobile Menu Toggle Button */}
        <button 
          className="md:hidden text-foreground p-2" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Navigation Dropdown */}
      <div 
        className={`md:hidden absolute top-16 left-0 w-full glass border-b border-border shadow-soft flex flex-col p-4 gap-2 text-center transition-all duration-300 ${
          mobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <Link to="/" hash="read" className="text-base font-medium hover:text-primary transition-colors py-3" onClick={() => setMobileMenuOpen(false)}>Read</Link>
        <div className="w-full h-px bg-border/50 mx-auto max-w-[200px]" />
        <Link to="/" hash="about" className="text-base font-medium hover:text-primary transition-colors py-3" onClick={() => setMobileMenuOpen(false)}>About</Link>
        <div className="w-full h-px bg-border/50 mx-auto max-w-[200px]" />
        <Link to="/editor" className="text-base font-medium hover:text-primary transition-colors py-3" onClick={() => setMobileMenuOpen(false)}>Editor's Desk</Link>
      </div>
    </header>
  );
}
