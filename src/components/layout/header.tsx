import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#tracks", label: "المسارات" },
  { href: "#teachers", label: "المدرسون" },
  { href: "#news", label: "الأخبار" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-4 pt-3">
      <div
        className={`rounded-[2rem] border px-5 h-14 flex items-center justify-between transition-all duration-300 ${
          scrolled
            ? "bg-background/65 backdrop-blur-2xl shadow-xl border-border/50"
            : "bg-background/25 backdrop-blur-md shadow-sm border-border/15"
        }`}
      >
        {/* Left: hamburger */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden flex h-9 w-9 items-center justify-center rounded-2xl text-foreground/60 hover:text-primary hover:bg-muted transition-colors"
          aria-label="القائمة"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        {/* Center: desktop nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href}
              className="text-sm font-medium text-foreground/60 hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        {/* Right: name + icon */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <span className="font-bold text-sm text-primary leading-none">أكاديمية ماكس مارك</span>
          <div className="h-9 w-9 rounded-full overflow-hidden border-2 border-secondary/40 shadow-sm shrink-0">
            <img src="/favicon.png" alt="أكاديمية ماكس مارك" className="h-full w-full object-cover" />
          </div>
        </Link>
      </div>

      {/* Mobile dropdown */}
      <div className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out ${open ? "max-h-72 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="mt-2 rounded-[1.5rem] bg-background/85 backdrop-blur-2xl shadow-xl border border-border/40 px-4 py-3 flex flex-col gap-0.5">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="rounded-2xl px-4 py-3 text-base font-medium text-foreground/75 hover:bg-muted hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
