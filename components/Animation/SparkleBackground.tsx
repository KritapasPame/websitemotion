"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Sparkle {
  id: number;
  size: number;
  x: number;
  y: number;
  delay: number;
  duration: number;
}

export default function SparkleBackground() {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  useEffect(() => {
    // สร้างวงกลมหลายวงแบบสุ่ม
    const total = 20; 
    const generated = Array.from({ length: total }).map((_, i) => ({
      id: i,
      size: Math.random() * 10 + 5, // ขนาด 5–100 px
      x: Math.random() * 100, // ตำแหน่งแนวนอน %
      y: Math.random() * 100, // ตำแหน่งแนวตั้ง %
      delay: Math.random() * 3, // หน่วงเวลาเริ่ม
      duration: Math.random() * 3 + 2, // เวลา fade in/out
    }));
    setSparkles(generated);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {sparkles.map((s) => (
        <motion.div
          key={s.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{
            duration: s.duration,
            delay: s.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute rounded-full   "
          style={{
            width: s.size,
            height: s.size,
            left: `${s.x}%`,
            top: `${s.y}%`,
            background: "radial-gradient(circle, rgba(255,255,255,0.9) 0%, rgba(200,150,255,0.5) 100%)",
            boxShadow: "0 0 40px 10px rgba(200,150,255,0.3)",
          }}
        />
      ))}
    </div>
  );
}
