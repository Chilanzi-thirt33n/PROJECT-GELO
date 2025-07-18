"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Facebook, Instagram } from "lucide-react";
import { Pacifico } from "next/font/google";
import { Lobster } from "next/font/google";

const lobster = Lobster({ subsets: ["latin"], weight: "400" });
const pacifico = Pacifico({ subsets: ["latin"], weight: "400" });

const details = {
  title: "About Us",
  sub_title: "Where Baking Begins – And Tastes Amazing",
  image: "/About.jpg",
  description:
    "GelosTreat is Zambia’s go-to for all things baking. From custom cakes and pastries to top-quality baking tools, we help you create sweet moments—whether at home or in business. Based in Lusaka, we proudly serve dessert lovers and bakers nationwide.",
  facebook: "https://www.facebook.com/GelosTreats",
  instagram: "https://www.instagram.com/gelos_treats",
};

export function About() {
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-2 bg-pink-100 min-h-[50dvh]">
      {/* Content Section */}
      <motion.div
        className="flex flex-col justify-center items-center gap-4 p-10 order-2 lg:order-1"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.h1
          className={`text-pink-950 text-4xl font-extrabold ${lobster.className}`}
        >
          {details.title}
        </motion.h1>

        <motion.h2
          className={`text-2xl text-pink-800 font-semibold ${pacifico.className}`}
        >
          {details.sub_title}
        </motion.h2>

        <motion.p className="text-pink-700 text-lg text-center">
          {details.description}
        </motion.p>

        <motion.div
          className="flex items-center gap-4 mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <p className="font-semibold text-pink-900">Socials:</p>

          <Link
            href={details.facebook}
            target="_blank"
            className="flex items-center gap-2 text-blue-600 hover:underline"
          >
            <Facebook className="w-5 h-5" />
          </Link>

          <Link
            href={details.instagram}
            target="_blank"
            className="flex items-center gap-2 text-pink-600 hover:underline"
          >
            <Instagram className="w-5 h-5" />
          </Link>
        </motion.div>
      </motion.div>
      {/* Image Section */}
      <span className="relative bg-pink-200 w-full min-h-[40dvh] lg:h-auto order-1 lg:order-2">
        <Image
          src={details.image}
          alt={details.title}
          fill
          className="object-cover"
        />
      </span>
    </div>
  );
}
