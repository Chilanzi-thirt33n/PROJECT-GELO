"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

const categories = [
  {
    title: "Ingredients",
    image: "/images/categories/ingredients.jpg",
    description: "Flours, powders, sugars & more.",
    href: "/products/ingredients",
  },
  {
    title: "Appliances",
    image: "/images/categories/appliances.jpg",
    description: "Mixers, ovens, trays, and tools.",
    href: "/products/appliances",
  },
  {
    title: "Packaging",
    image: "/images/categories/packaging.jpg",
    description: "Boxes, wraps, and containers.",
    href: "/products/packaging",
  },
  {
    title: "Ready-Made Treats",
    image: "/images/categories/treats.jpg",
    description: "Cupcakes, cakes & sweet orders.",
    href: "/products/treats",
  },
];

export const ProductCategories = () => {
  return (
    <section className="py-12 px-4 sm:px-8 lg:px-16">
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
              className="group flex items-center gap-5 bg-white hover:bg-pink-50 rounded-xl px-6 py-5 transition-all shadow-sm hover:shadow-md w-full sm:w-auto"
            >
              <div className="relative w-12 h-12 rounded-full overflow-hidden bg-white border border-pink-200">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col text-left">
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
