import { Code2, MessageCircle, Sparkles } from "lucide-react";
import { ContactDialog } from "@/components/ui/contact-dialog";

const navLinks = [
  { href: "#tracks", label: "المسارات" },
  { href: "#teachers", label: "المدرسون" },
  { href: "#news", label: "الأخبار" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-primary text-primary-foreground" dir="rtl">
      <div className="container mx-auto px-6 py-12">

        {/* Top grid */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">

          {/* Column 1 — Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <img
                src="/favicon.png"
                alt="أكاديمية ماكس مارك"
                className="h-12 w-12 rounded-2xl object-cover shrink-0 shadow-lg shadow-black/20"
              />
              <div>
                <p className="font-bold text-base leading-tight">أكاديمية ماكس مارك</p>
                <p className="text-primary-foreground/50 text-xs mt-0.5">MAX MARK ACADEMY</p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/60 leading-relaxed max-w-xs">
              طريقك نحو العلامة التامة — أكاديمية متخصصة في المجال التعليمي في مدينة حلب
            </p>
          </div>

          {/* Column 2 — Quick links */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-sm text-primary-foreground/80 uppercase tracking-wider">
              روابط سريعة
            </h3>
            <ul className="flex flex-col gap-2">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Contact */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-sm text-primary-foreground/80 uppercase tracking-wider">
              تواصل معنا
            </h3>
            <p className="text-sm text-primary-foreground/60 leading-relaxed">
              للتسجيل والاستفسار تواصل مع الإدارة عبر واتساب مباشرة.
            </p>
            <ContactDialog>
              {(open) => (
                <button
                  onClick={open}
                  className="inline-flex items-center gap-2 self-start rounded-2xl bg-white/10 hover:bg-white/20 px-4 py-2.5 text-sm font-semibold text-white transition-colors"
                >
                  <MessageCircle className="h-4 w-4" />
                  تواصل مع الإدارة
                </button>
              )}
            </ContactDialog>
          </div>

        </div>

        {/* Divider */}
        <div className="mt-10 border-t border-white/10 pt-8 flex flex-col items-center gap-5">

          {/* Credit card — prominent & modern */}
          <div className="relative group flex flex-col items-center gap-3">
            {/* Glow */}
            <div className="absolute -inset-4 rounded-3xl bg-white/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <p className="relative text-xs font-medium text-primary-foreground/45 tracking-widest uppercase">
              تقدُمة
            </p>

            <div className="relative inline-flex items-center gap-3 rounded-2xl border border-white/15 bg-white/8 backdrop-blur-sm px-6 py-3 shadow-lg shadow-black/20 group-hover:border-white/25 group-hover:bg-white/12 transition-all duration-300">
              {/* Icon left */}
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-violet-400/30 to-fuchsia-400/20 border border-white/10 shrink-0">
                <Code2 className="h-4 w-4 text-violet-300" />
              </span>

              {/* Name */}
              <span className="text-base font-bold tracking-wide text-white">
                م. مروَة عقّاد
              </span>

              {/* Sparkle right */}
              <Sparkles className="h-4 w-4 text-fuchsia-300/70 shrink-0 group-hover:text-fuchsia-300 transition-colors duration-300" />
            </div>
          </div>

          {/* Copyright */}
          <p className="text-xs text-primary-foreground/30">
            © {new Date().getFullYear()} أكاديمية ماكس مارك — جميع الحقوق محفوظة
          </p>

        </div>

      </div>
    </footer>
  );
}
