import { ExternalLink, MessageCircle } from "lucide-react";
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
        <div className="mt-10 border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-primary-foreground/35 order-2 sm:order-1">
            © {new Date().getFullYear()} أكاديمية ماكس مارك — جميع الحقوق محفوظة
          </p>
          <a
            href="https://needaa.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-primary-foreground/50 hover:text-primary-foreground transition-colors order-1 sm:order-2"
          >
            <span>تصميم وبرمجة</span>
            <span className="font-bold text-white">نداء الرحمن عبود</span>
            <ExternalLink className="h-3 w-3 shrink-0" />
          </a>
        </div>

      </div>
    </footer>
  );
}
