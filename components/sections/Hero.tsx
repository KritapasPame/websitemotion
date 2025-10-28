'use client';
import { motion } from 'framer-motion';
import GlowingWave from '../Animation/GlowingWave';

export default function Hero() {
    return (
        <div className="h-screen mt-[10rem]">
            <h1 className="text-6xl font-bold text-center">Portfolio</h1>

            <div className="m-auto mt-[10rem] bg-yellow-400 h-[300px] w-[900px] flex items-center justify-center">
                <p className="m-auto">image</p>
            </div>
            <div>
                <svg viewBox="0 0 500 100" className="m-auto ">
                    <text
                        x="50%"
                        y="50%"
                        dominantBaseline="middle"
                        textAnchor="middle"
                        fontFamily="Orbitron, sans-serif"
                        fontSize="20"
                        fontWeight="800"
                        fill="none"
                        stroke="white"
                        strokeWidth="1"
                    >
                        PORTFOLIO
                    </text>
                </svg>
            </div>
            {/* <div className="relative mt-[8rem] flex items-center justify-center text-white bg-gradient-to-b from-indigo-900 to-indigo-800">
                <div
                    className="
      absolute bottom-0 w-[50%] h-[200px]  bg-[rgba(120,0,255,0.3)]
      from-indigo-800/40 via-indigo-500/30 to-transparent 
      rounded-t-full overflow-hidden shadow-[0_-10px_60px_30px_rgba(120,0,255,0.3)]
    "
                ></div>
            </div> */}

            {/*
      <svg width="200" height="200" viewBox="0 0 200 200">
        <motion.svg
          animate={{ y: [0, 100, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          width="100"
          height="100"
        >
          <circle cx="50" cy="50" r="40" fill="blue" />
        </motion.svg>
      </svg>
      */}
        </div>
    );
}
