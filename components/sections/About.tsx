'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import profilePic from '@/public/images/profile.jpeg';



export default function About() {
    return (
        <section className="relative min-h-screen bg-black text-white flex items-center justify-center overflow-hidden font-serif">
            <div className="container mx-auto px-6 md:px-16 grid md:grid-cols-2 gap-24 items-center">
                <div className="space-y-10 italic">
                    <div>
                        <h2 className="text-2xl font-semibold mb-2 tracking-widest">ABOUT ME</h2>
                        <p className="text-sm leading-relaxed text-gray-300 max-w-md">
                            I am a brand creative and graphic designer searching for an opportunity to gain more experience.
                            I aim to become an outstanding professional by enhancing my abilities and taking on new challenges.
                            I identify myself as someone with a strong sense of cultural awareness and familiarity with multicultural
                            environments. My biggest life passion is expanding my technological knowledge to succeed at an extremely high level.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-2xl font-semibold mb-2 tracking-widest">EDUCATION</h2>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            <span className="font-bold text-white">CHIANG MAI UNIVERSITY</span><br />
                            Faculty of Education Home Economic
                        </p>
                    </div>
                    <div>
                        <h2 className="text-2xl font-semibold mb-2 tracking-widest">EXPERIENCE</h2>
                        <p className="text-gray-300 text-sm">Freelance<br />2010 - 2024</p>
                    </div>
                    <div>
                        <h2 className="text-2xl font-semibold mb-3 tracking-widest">SKILL</h2>
                        <div className="flex gap-3">
                          
                        </div>
                    </div>
                    <div>
                        <h2 className="text-2xl font-semibold mb-2 tracking-widest">CONTACT ME</h2>
                        <p className="text-gray-300 text-sm">
                            zenumistz@gmail.com<br />
                            instagram.com/zencensen<br />
                            Line ID: zemumist<br />
                            Tel: 082-628-8266
                        </p>
                    </div>
                </div>
                {/* ภาพที่ลอยขึ้นลง */}
                <motion.div
                    style={{ willChange: "transform", transform: "translateZ(0)" }}
                    animate={{ y: [0, -20, 0] }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "mirror",
                        ease: "easeInOut",
                    }}
                >
                    {/* แสงขาวเคลื่อนผ่านจากบนลงล่าง */}
                    <div className="relative w-[350px] h-[500px] overflow-hidden rounded-lg">
                        <Image
                            src={profilePic}
                            alt="profile"
                            fill
                            className="object-cover rounded-lg"
                            priority
                        />


                        {/* เอฟเฟกต์แสงขาวเลื่อนลง */}
                        <motion.div
                            className="absolute inset-0 z-20 pointer-events-none"
                            animate={{ x: ['-100%', '100%'], y: ['100%', '-100%'] }}
                            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                        >
                            <div className="absolute bottom-0 left-0 w-[10%] h-full bg-gradient-to-t from-transparent via-white/70 to-transparent blur-lg transform -rotate-45"></div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
