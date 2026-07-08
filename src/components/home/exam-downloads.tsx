import { motion } from "framer-motion";
import { FileText, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactDialog } from "@/components/ui/contact-dialog";

export function ExamDownloads() {
  return (
    <section id="exams" className="py-24 sm:py-32 bg-transparent relative overflow-hidden min-h-screen flex flex-col justify-center">
      <div className="container relative mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          whileTap={{ scale: 1.02, boxShadow: "0 0 40px hsl(var(--primary)/0.25)" }}
          style={{ cursor: "pointer" }}
          className="max-w-4xl mx-auto bg-card border border-border rounded-[2rem] sm:rounded-[2.5rem] shadow-xl p-7 sm:p-10 md:p-14 text-center flex flex-col items-center gap-5 sm:gap-6"
        >
          <div className="h-16 w-16 sm:h-20 sm:w-20 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center">
            <FileText className="h-8 w-8 sm:h-10 sm:w-10" />
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary dark:text-white">
            تحميل الأسئلة والنماذج الامتحانية
          </h2>

          <p className="text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed">
            احصل على نماذج الأسئلة والملخصات الخاصة بجميع المسارات. تواصل مع إدارة الأكاديمية مباشرة عبر واتساب للحصول على المواد التعليمية.
          </p>

          <ContactDialog>
            {(openDialog) => (
              <Button
                size="lg"
                onClick={openDialog}
                className="rounded-full h-13 sm:h-14 px-8 text-base font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-transform"
              >
                <MessageCircle className="ml-2 h-5 w-5" />
                تواصل معنا للحصول على المواد
              </Button>
            )}
          </ContactDialog>

        </motion.div>
      </div>
    </section>
  );
}
