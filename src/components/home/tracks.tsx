import { motion } from "framer-motion";
import { BookOpen, Atom } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const tracks = [
  {
    title: "الصف التاسع",
    description: "تأسيس قوي ومكثف للمرحلة الإعدادية يضمن انتقالاً واثقاً للمرحلة الثانوية مع التركيز على المواد الأساسية.",
    icon: BookOpen,
    color: "bg-blue-500/10 text-blue-500",
    border: "border-blue-500/20",
    delay: 0.1
  },
  {
    title: "الثالث الثانوي العلمي",
    description: "تحضير شامل لاجتياز البكالوريا العلمية بتفوق، مع شرح معمق لمواد الفيزياء والكيمياء والرياضيات والعلوم.",
    icon: Atom,
    color: "bg-primary/10 text-primary dark:bg-secondary/10 dark:text-secondary",
    border: "border-primary/20 dark:border-secondary/20",
    delay: 0.2
  },
];

export function Tracks() {
  return (
    <section id="tracks" className="py-24 sm:py-32 bg-transparent relative min-h-screen flex flex-col justify-center">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="text-2xl sm:text-3xl font-bold text-primary md:text-4xl mb-3 sm:mb-4 dark:text-white"
          >
            مساراتنا التعليمية
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.08 }}
            className="text-muted-foreground text-base sm:text-lg"
          >
            برامج مخصصة تناسب احتياجات كل مرحلة، صُممت بعناية لتوجيه الطالب نحو أقصى درجات التفوق
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 max-w-3xl mx-auto">
          {tracks.map((track, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: track.delay * 0.5, ease: "easeOut" }}
              whileTap={{ scale: 1.02 }}
              whileHover={{ y: -4 }}
              style={{ cursor: "pointer" }}
            >
              <Card className={`h-full transition-all duration-300 hover:shadow-2xl border-2 ${track.border}`}>
                <CardHeader className="text-center pb-2">
                  <motion.div
                    whileHover={{ rotate: [0, -8, 8, 0] }}
                    transition={{ duration: 0.5 }}
                    className={`mx-auto h-16 w-16 sm:h-20 sm:w-20 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 ${track.color}`}
                  >
                    <track.icon className="h-8 w-8 sm:h-10 sm:w-10" />
                  </motion.div>
                  <CardTitle className="text-xl sm:text-2xl font-bold">{track.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {track.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
