"use client";

import { motion } from "framer-motion";

export const Ribbon = () => {
  return (
    <div className="w-full overflow-hidden bg-[#00D37F] py-3 ">
      <motion.div
        animate={{
          x: ["100%", "-100%"]
        }}
        transition={{
          x: {
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }
        }}
        className="whitespace-nowrap"
      >
        <span className="inline-block text-white px-4 text-sm md:text-base">
          NEED HELP? USE LIVE CHAT! ↓ NEED HELP? USE LIVE CHAT! ↓ NEED HELP? USE LIVE CHAT! ↓
        </span>
      </motion.div>
    </div>
  );
}; 