
'use client';
import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <svg width="200" height="200" viewBox="0 0 200 200">
            <motion.svg
                animate={{
                    y: [0, 100, 0], 
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity, // วนลูปตลอด
                    ease: "linear"
                }}
                width="100"
                height="100"
            >
                <circle cx="50" cy="50" r="40" fill="blue" />
            </motion.svg>

        </svg>
    );
}