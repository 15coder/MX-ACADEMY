import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { ContactDialog } from "@/components/ui/contact-dialog";
import LogoMark from "@/assets/logo-mark.png";

export function Cta() {
  return (
    <section className="py-24 sm:py-32 md:py-40 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-primary" />
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--color-secondary)_0%,transparent_50%)]"
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,var(--color-secondary)_0%,transparent_40%)]"
        animate={{ opacity: [0.15, 0.3, 0.15] }}
        transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 1.5 }}
      />
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />

      <motion.img
        src={LogoMark}
        alt=""
        aria-hidden="true"
        className="pointer-events-none select-none absolute -right-14 -top-14 h-48 w-48 sm:h-64 sm:w-64 opacity-10"
        animate={{ rotate: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      />

      <div className="container relative mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            استثمر في مستقبلك، <br />
            <span className="text-secondary">وابدأ رحلة التفوق اليوم</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-primary-foreground/80 mb-8 sm:mb-10 max-w-xl mx-auto">
            المقاعد محدودة. تواصل معنا الآن عبر واتساب للاستفسار عن مواعيد الدورات وآلية التسجيل للعام الدراسي القادم.
          </p>

          <ContactDialog>
            {(openDialog) => (
              <Button
                size="lg"
                onClick={openDialog}
                className="rounded-full h-14 sm:h-16 px-8 sm:px-10 text-base sm:text-lg font-bold bg-white text-primary hover:bg-secondary hover:text-primary-foreground transition-all duration-300 shadow-xl shadow-black/10 hover:scale-105"
              >
                تواصل مع الإدارة للتسجيل
                <MessageCircle className="mr-3 h-5 w-5 sm:h-6 sm:w-6" />
              </Button>
            )}
          </ContactDialog>

          <p className="mt-5 sm:mt-6 text-xs sm:text-sm text-primary-foreground/60">
            يرد على الاستفسارات د. أ. أحمد عنزو وأ. معن الخلف مباشرة
          </p>
        </motion.div>
      </div>
    </section>
  );
}
