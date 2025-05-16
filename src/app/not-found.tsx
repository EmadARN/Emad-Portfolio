"use client";

import { FaArrowLeft } from "react-icons/fa6";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center  dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2] text-white px-4 text-center">
      {/* 404 Number Animation */}
      <motion.h1
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 10 }}
        className="text-[80px] md:text-[120px] font-extrabold tracking-widest drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]"
      >
        404
      </motion.h1>

      {/* Message */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-lg md:text-xl text-purple-200 mt-4 max-w-md"
      >
        The page you&apos;re looking for couldn&apos;t be found.
      </motion.p>

      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 mt-6 px-6 py-3 bg-purple-700 hover:bg-purple-600 text-white font-semibold rounded-md shadow-lg transition-all duration-300 cursor-pointer"
        >
          <FaArrowLeft className="w-5 h-5" />
          <span>Go Back</span>
        </button>
      </motion.div>

      {/* Floating Logo / Text Animation */}
      <motion.div
        className="absolute bottom-10 text-[40px] md:text-[80px] text-white/10 select-none"
        initial={{ y: 20 }}
        animate={{ y: -20 }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 4,
          ease: "easeInOut",
        }}
      >
        Emad&apos;s Portfolio
      </motion.div>
    </div>
  );
}
