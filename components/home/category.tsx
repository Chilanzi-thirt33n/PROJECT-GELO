"use client";

import Link from "next/link";
import { motion } from "motion/react";
import Image from "next/image";

const categories = [
  {
    title: "Ingredients",
    image: "/images/categories/ingredients.jpg",
    description: "Flours, powders, sugars & more.",
    href: "/products/ingredients",
    span: "sm:col-span-4",
  },
  {
    title: "Appliances",
    image: "/images/categories/appliances.jpg",
    description: "Mixers, ovens, trays, and tools.",
    href: "/products/appliances",
    span: "sm:col-span-2",
  },
  {
    title: "Packaging",
    image: "/images/categories/packaging.jpg",
    description: "Boxes, wraps, and containers.",
    href: "/products/packaging",
    span: "sm:col-span-2",
  },
  {
    title: "Ready-Made Treats",
    image: "/images/categories/treats.jpg",
    description: "Cupcakes, cakes & sweet orders.",
    href: "/products/treats",
    span: "sm:col-span-4",
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
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
        className="grid grid-cols-1 sm:grid-cols-6 gap-6"
      >
        {categories.map((cat, i) => (
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            whileHover={{ scale: 1.02 }}
            className={`bg-white rounded-xl shadow hover:shadow-lg overflow-hidden col-span-1 ${cat.span}`}
          >
            <Link href={cat.href}>
              <div className="bg-pink-100 h-48 w-full relative">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 text-center sm:text-left">
                <h3 className="text-lg font-semibold text-pink-800">
                  {cat.title}
                </h3>
                <p className="text-sm text-pink-600">{cat.description}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
