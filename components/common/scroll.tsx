"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function ScrollMeter() {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const percent = (scrollTop / scrollHeight) * 100;
      setScrollPercent(percent);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-2 bg-transparent z-50">
      <motion.div
        className="h-full bg-pink-300"
        initial={{ width: 0 }}
        animate={{ width: `${scrollPercent}%` }}
        transition={{ type: "spring", stiffness: 60, damping: 20 }}
      />
    </div>
  );
}
