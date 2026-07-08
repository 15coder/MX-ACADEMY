import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { ContactDialog } from "@/components/ui/contact-dialog";

export function FloatingWhatsapp() {
  return (
    <ContactDialog>
      {(openDialog) => (
        <motion.button
          onClick={openDialog}
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="fixed bottom-5 left-5 sm:bottom-6 sm:left-6 z-50 flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition-transform duration-300 hover:-translate-y-2 hover:scale-110 hover:shadow-xl hover:shadow-[#25D366]/30"
          aria-label="تواصل معنا عبر واتساب"
        >
          <motion.span
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
          >
            <MessageCircle className="h-7 w-7 sm:h-8 sm:w-8" />
          </motion.span>
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex h-4 w-4 rounded-full bg-red-500"></span>
          </span>
        </motion.button>
      )}
    </ContactDialog>
  );
}
