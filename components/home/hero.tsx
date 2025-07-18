"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

const locations = [
  {
    name: "Lusaka ",
    url: "https://maps.app.goo.gl/Xnfe3cc5o4X8m1eSA",
  },
  {
    name: "Kitwe",
    url: "https://maps.app.goo.gl/iHW4djrhB7g9xkVcA",
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
            className="text-sm uppercase tracking-widest text-pink-50 font-semibold"
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
            className="text-3xl sm:text-4xl font-bold text-pink-300 leading-tight"
          >
            Bake Better. Bake Smarter. <br className="hidden sm:inline" />
            Welcome to <span className="text-pink-50">Gelo’s Treats</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
            className="text-base sm:text-lg md:text-xl text-pink-50 max-w-2xl"
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
              <Button className="mt-4 text-white bg-pink-950 hover:bg-pink-600">
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
            className="flex flex-row flex-wrap gap-4 mt-6 text-pink-50"
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
