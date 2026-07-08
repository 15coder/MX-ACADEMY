import { motion } from "framer-motion";
import { MapPin, ExternalLink } from "lucide-react";

export function Location() {
  return (
    <section
      id="location"
      className="py-24 sm:py-32 bg-transparent relative overflow-hidden min-h-screen flex flex-col justify-center"
    >
      <div className="container relative mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          whileTap={{ scale: 1.02, boxShadow: "0 0 40px hsl(167 100% 50% / 0.2)" }}
          style={{ cursor: "pointer" }}
          className="max-w-4xl mx-auto bg-card border border-border rounded-[2rem] sm:rounded-[2.5rem] shadow-xl p-7 sm:p-10 md:p-14 text-center flex flex-col items-center gap-5 sm:gap-6"
        >
          <div className="h-16 w-16 sm:h-20 sm:w-20 rounded-2xl bg-teal-500/10 text-teal-600 flex items-center justify-center">
            <MapPin className="h-8 w-8 sm:h-10 sm:w-10" />
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">
            موقع الأكاديمية
          </h2>

          <p className="text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed">
            الميسر — المفرق المقابل لصيدلية النائب. يسعدنا استقبالكم في مقر الأكاديمية، تفضلوا بزيارتنا أو افتح الموقع على الخريطة مباشرة.
          </p>

          <motion.a
            href="https://maps.app.goo.gl/LzGA8pXZ8ArSW1BB6?g_st=ac"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 rounded-full h-13 sm:h-14 px-8 text-base font-bold bg-primary text-primary-foreground shadow-lg shadow-primary/20 transition-colors hover:bg-primary/90"
          >
            <ExternalLink className="h-5 w-5" />
            فتح في خرائط جوجل
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
