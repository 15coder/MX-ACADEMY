import { motion } from "framer-motion";
import { Calendar, Megaphone, ArrowLeft } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { ContactDialog } from "@/components/ui/contact-dialog";

const news = [
  {
    icon: Megaphone,
    date: "٧ تموز ٢٠٢٦",
    title: "مسرورون بافتتاح شعب التاسع والثالث الثانوي العلمي لعام 2027",
    excerpt: "يسعد أكاديمية ماكس مارك الإعلان عن افتتاح شعب الصف التاسع والثالث الثانوي العلمي للعام الدراسي 2027. المقاعد محدودة لضمان جودة التعليم والمتابعة الفردية لكل طالب، فبادروا بالتسجيل.",
  },
];

export function News() {
  return (
    <section id="news" className="py-24 sm:py-32 bg-transparent relative overflow-hidden min-h-screen flex flex-col justify-center">
      <div className="container relative mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="text-2xl sm:text-3xl font-bold text-primary md:text-4xl mb-3 sm:mb-4"
          >
            آخر الأخبار
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.08 }}
            className="text-muted-foreground text-base sm:text-lg"
          >
            تابع معنا أهم مستجدات الأكاديمية من إعلانات وإنجازات ودورات جديدة
          </motion.p>
        </div>

        <div className="max-w-2xl mx-auto">
          {news.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: index * 0.08, ease: "easeOut" }}
              whileHover={{ y: -4 }}
              style={{ cursor: "pointer" }}
            >
              <Card className="h-full border-border/70 hover:border-secondary/40 transition-colors shadow-sm hover:shadow-lg overflow-hidden group">
                <div className="h-1.5 w-full bg-gradient-to-l from-secondary to-primary scale-x-0 group-hover:scale-x-100 origin-right transition-transform duration-500" />
                <CardContent className="p-6 sm:p-8 flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <div className="h-12 w-12 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Calendar className="h-3.5 w-3.5" />
                      {item.date}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-foreground leading-snug">{item.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{item.excerpt}</p>
                  <ContactDialog>
                    {(openDialog) => (
                      <button
                        onClick={openDialog}
                        className="inline-flex items-center gap-1.5 text-sm font-bold text-secondary mt-1 hover:underline"
                      >
                        سجّل الآن
                        <ArrowLeft className="h-4 w-4" />
                      </button>
                    )}
                  </ContactDialog>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
