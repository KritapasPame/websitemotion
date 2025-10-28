"use client";
import { motion } from "framer-motion";

export default function GlowingWave() {
  return (
    <div className="absolute bottom-0 left-0 w-full overflow-hidden">
      <svg
        viewBox="0 0 1440 320"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-[200px]"
      >
        {/* แสงฟุ้งสีฟ้า */}
        <motion.path
          fill="url(#grad)"
          fillOpacity="0.8"
          d="M0,160 C360,280 1080,40 1440,160 L1440,320 L0,320 Z"
          animate={{
            d: [
              "M0,160 C360,280 1080,40 1440,160 L1440,320 L0,320 Z",
              "M0,180 C360,260 1080,60 1440,180 L1440,320 L0,320 Z",
              "M0,160 C360,280 1080,40 1440,160 L1440,320 L0,320 Z",
            ],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            filter: "blur(25px)",
          }}
        />

        {/* Gradient ไล่สีน้ำเงิน-ม่วง */}
        <defs>
          <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.7" />
            <stop offset="50%" stopColor="#6366f1" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.3" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
