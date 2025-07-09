"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

const locations = [
  {
    name: "Lusaka",
    url: "https://www.google.com/maps/place/Lusaka,+Zambia",
  },
  {
    name: "Ndola",
    url: "https://www.google.com/maps/place/Ndola,+Zambia",
  },
  {
    name: "Kitwe",
    url: "https://www.google.com/maps/place/Kitwe,+Zambia",
  },
];

export const HeroSection = () => {
  return (
    <motion.div
      className="relative w-full flex flex-col items-center justify-center min-h-[80dvh] text-center lg:text-start overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* ✅ Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url('/hero.jpg')`, // ✅ Use your image path
        }}
      />

      {/* ✅ Overlay */}
      <div className="absolute inset-0 bg-black/30 z-10" />

      {/* ✅ Your original content unchanged */}
      <motion.header
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="relative z-20 w-full lg:w-3/4 grid grid-cols-1 lg:grid-cols-2 h-max"
      >
        {/* Hero content */}
        <motion.section
          className="space-y-4 p-2 flex flex-col items-center justify-center lg:items-start lg:justify-start text-center lg:text-left"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {/* Tagline */}
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
            className="text-sm uppercase tracking-widest text-pink-600 font-semibold"
          >
            Suppliers of Premium Baking Ingredients & Appliances in Lusaka
          </motion.p>

          {/* Main Heading */}
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-pink-50 leading-tight"
          >
            Bake Better. Bake Smarter. <br className="hidden sm:inline" />
            Welcome to <span className="text-pink-600">Gelo’s Treats</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
            className="text-base sm:text-lg md:text-xl text-pink-50 font-bold max-w-2xl"
          >
            Shop at Gelo’s Treats for top-quality baking tools, ingredients, and
            fresh delights. Whether you are in Lusaka or anywhere in Zambia — we
            deliver flavor and quality to your kitchen.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/products">
              <Button className="mt-4 text-white bg-pink-600 hover:bg-pink-700">
                View Our Catalogue
              </Button>
            </Link>
          </motion.div>

          {/* Desktop-only Location Links */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
            className="hidden lg:flex flex-row flex-wrap gap-4 mt-6 text-pink-50"
          >
            {locations.map((location, index) => (
              <a
                key={index}
                href={location.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-pink-500 transition"
              >
                <MapPin className="w-4 h-4 text-pink-600" />
                <span>{location.name}</span>
              </a>
            ))}
          </motion.div>
        </motion.section>
      </motion.header>
    </motion.div>
  );
};
