"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Facebook, Instagram } from "lucide-react";

const details = {
  title: "About Us",
  sub_title: "Where Baking Begins – And Tastes Amazing",
  image: "/hero.jpg",
  description:
    "GelosTreat is your one-stop shop for all things baking in Zambia. From delicious custom cakes and pastries to quality baking tools and supplies, we help you create sweet moments at home or for your business. Whether you're celebrating a birthday, hosting an event, or starting your baking journey, we’ve got the ingredients, tools, and treats to make it unforgettable. Proudly based in Lusaka, we serve bakers and dessert lovers across Zambia.",
  facebook: "https://www.facebook.com/yourcompany",
  instagram: "https://www.instagram.com/yourcompany",
};

export function About() {
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-2 bg-pink-200 min-h-[50dvh]">
      {/* Image Section */}
      <span className="relative bg-pink-100 w-full min-h-[40dvh] lg:h-auto hidden lg:block">
        <Image
          src={details.image}
          alt={details.title}
          fill
          className="object-cover"
        />
      </span>

      {/* Content Section */}
      <motion.div
        className="flex flex-col justify-center gap-4 p-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.h1 className="text-4xl font-bold text-pink-900">
          {details.title}
        </motion.h1>

        <motion.h2 className="text-2xl text-pink-800 font-semibold">
          {details.sub_title}
        </motion.h2>

        <motion.p className="text-pink-700 text-lg">
          {details.description}
        </motion.p>

        <motion.div
          className="flex items-center gap-4 mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <p className="font-semibold text-pink-900">Check out our socials:</p>

          <Link
            href={details.facebook}
            target="_blank"
            className="flex items-center gap-2 text-blue-600 hover:underline"
          >
            <Facebook className="w-5 h-5" />
            Facebook
          </Link>

          <Link
            href={details.instagram}
            target="_blank"
            className="flex items-center gap-2 text-pink-600 hover:underline"
          >
            <Instagram className="w-5 h-5" />
            Instagram
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
