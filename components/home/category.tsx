"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { Lobster } from "next/font/google";

const lobster = Lobster({ subsets: ["latin"], weight: "400" });
const details = {
  title: "Our Products",
  description:
    "Essential tools and ingredients to help Zambian bakers create confidently — at home or for business.",
};
const categories = [
  {
    title: "Ingredients",
    image: "/images/products/ingredients/cover.webp",
    description: "Flours, powders, sugars & more.",
    href: "/products",
  },
  {
    title: "Appliances",
    image: "/images/products/appliance/cover.webp",
    description: "Mixers, ovens, trays, and tools.",
    href: "/products",
  },
  {
    title: "Packaging",
    image: "/images/products/packaging/cover.webp",
    description: "Boxes, wraps, and containers.",
    href: "/products",
  },
  {
    title: "Ready-Made Treats",
    image: "/images/products/baked/cover.webp",
    description: "Cupcakes, cakes & sweet orders.",
    href: "/products",
  },
];

export const ProductCategories = () => {
  return (
    <section className="w-full py-12 flex flex-col space-y-8 justify-center items-center px-4 sm:px-8 lg:px-16">
      <div>
        {" "}
        <motion.h1
          className={`text-pink-900 text-center text-4xl font-extrabold ${lobster.className}`}
        >
          {details.title}
        </motion.h1>
        <motion.p className="text-pink-700 text-lg text-center max-w-3xl">
          {details.description}
        </motion.p>
      </div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.1 } },
        }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center gap-5"
      >
        {categories.map((cat, i) => (
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              href={cat.href}
              className="group flex items-center gap-5 bg-white hover:bg-pink-50 rounded-xl transition-all shadow-sm hover:shadow-md w-full sm:w-auto h-24" // fixed height here
            >
              <div className="relative w-28 h-full rounded-bl-lg rounded-tl-lg overflow-hidden bg-pink-200 border border-pink-200">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col text-left px-6 py-4 h-full justify-center">
                <span className="text-pink-800 font-semibold text-base">
                  {cat.title}
                </span>
                <span className="text-sm text-pink-600">{cat.description}</span>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
