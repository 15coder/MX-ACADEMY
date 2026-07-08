import { motion } from "framer-motion";
import LogoMark from "@/assets/logo-mark.png";

interface Motif {
  top: string;
  left?: string;
  right?: string;
  size: number;
  rotate: number;
  opacity: number;
  duration: number;
  delay: number;
}

const motifs: Motif[] = [
  { top: "2%",   right: "-5%",  size: 360, rotate: 15,  opacity: 0.06, duration: 18, delay: 0   },
  { top: "16%",  left: "-7%",   size: 280, rotate: -20, opacity: 0.05, duration: 22, delay: 2   },
  { top: "36%",  right: "-3%",  size: 210, rotate: 35,  opacity: 0.07, duration: 16, delay: 1   },
  { top: "52%",  left: "-5%",   size: 300, rotate: -12, opacity: 0.05, duration: 24, delay: 3   },
  { top: "68%",  right: "2%",   size: 190, rotate: 50,  opacity: 0.06, duration: 20, delay: 0.5 },
  { top: "83%",  left: "1%",    size: 250, rotate: -30, opacity: 0.05, duration: 19, delay: 1.5 },
  { top: "26%",  left: "40%",   size: 170, rotate: 70,  opacity: 0.04, duration: 26, delay: 4   },
  { top: "60%",  right: "28%",  size: 230, rotate: -55, opacity: 0.04, duration: 23, delay: 2.5 },
];

export function BackgroundMotifs() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden" style={{ zIndex: -1 }} aria-hidden="true">
      {motifs.map((m, i) => (
        <motion.img
          key={i}
          src={LogoMark}
          alt=""
          style={{
            position: "absolute",
            top: m.top,
            left: m.left,
            right: m.right,
            width: m.size,
            height: m.size,
            opacity: m.opacity,
            objectFit: "contain",
            filter: "grayscale(20%)",
          }}
          initial={{ rotate: m.rotate, scale: 1 }}
          animate={{
            rotate: [m.rotate, m.rotate + 8, m.rotate],
            scale: [1, 1.04, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: m.duration,
            ease: "easeInOut",
            delay: m.delay,
          }}
        />
      ))}
    </div>
  );
}
