import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";

const admins = [
  {
    name: "د. أ. أحمد عنزو",
    phone: "0945867745",
    wa: "https://wa.me/963945867745",
  },
  {
    name: "أ. معن الخلف",
    phone: "0936239554",
    wa: "https://wa.me/963936239554",
  },
];

interface ContactDialogProps {
  children: (open: () => void) => React.ReactNode;
}

export function ContactDialog({ children }: ContactDialogProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {children(() => setIsOpen(true))}

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />

            {/* Dialog */}
            <motion.div
              key="dialog"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", stiffness: 320, damping: 28 }}
              className="fixed inset-0 z-[101] flex items-center justify-center p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-full max-w-sm bg-card rounded-[2rem] border border-border shadow-2xl overflow-hidden" dir="rtl">
                {/* Header */}
                <div className="relative bg-primary px-6 py-5 text-center">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="absolute left-4 top-4 h-8 w-8 flex items-center justify-center rounded-full bg-white/10 text-white/70 hover:bg-white/20 hover:text-white transition-colors"
                    aria-label="إغلاق"
                  >
                    <X className="h-4 w-4" />
                  </button>
                  <div className="h-12 w-12 rounded-2xl bg-white/15 flex items-center justify-center mx-auto mb-3">
                    <MessageCircle className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-lg font-bold text-white leading-tight">تواصل مع الإدارة</h2>
                  <p className="text-sm text-white/70 mt-1">اختر المدير الذي تريد التواصل معه</p>
                </div>

                {/* Admin cards */}
                <div className="p-5 flex flex-col gap-3">
                  {admins.map((admin) => (
                    <motion.a
                      key={admin.phone}
                      href={admin.wa}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-4 rounded-2xl border border-border bg-muted/40 hover:bg-teal-50 hover:border-teal-300 p-4 transition-colors group"
                    >
                      <div className="h-11 w-11 rounded-xl bg-[#25D366]/10 flex items-center justify-center shrink-0 group-hover:bg-[#25D366]/20 transition-colors">
                        <MessageCircle className="h-5 w-5 text-[#25D366]" />
                      </div>
                      <div className="flex-1 text-right">
                        <p className="font-bold text-foreground text-sm">{admin.name}</p>
                        <p className="text-xs text-muted-foreground mt-0.5">{admin.phone}</p>
                      </div>
                      <div className="text-xs font-semibold text-[#25D366] shrink-0">واتساب ←</div>
                    </motion.a>
                  ))}
                </div>

                <p className="text-center text-xs text-muted-foreground pb-5">
                  سيتم فتح محادثة واتساب مباشرة
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
