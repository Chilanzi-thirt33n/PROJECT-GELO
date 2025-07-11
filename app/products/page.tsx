"use client";

import { motion } from "framer-motion";

export default function UnderConstruction() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-50 px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-4xl sm:text-5xl font-bold text-pink-800 mb-4">
          🚧 Under Construction
        </h1>
        <p className="text-lg sm:text-xl text-pink-600">
          This page is currently being worked on. Please check back later.
        </p>
      </motion.div>
    </div>
  );
}
