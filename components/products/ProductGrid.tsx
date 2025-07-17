"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ContentItem } from "@/lib/getContent";
import { motion, AnimatePresence, Variants } from "framer-motion";

type Props = {
  products: ContentItem[];
};

const ITEMS_PER_PAGE = 8;

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 25 },
  },
  exit: { opacity: 0, y: -20, transition: { duration: 0.15 } },
};

export default function ProductGrid({ products }: Props) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [currentPage, setCurrentPage] = useState<number>(1);

  const categories = Array.from(
    new Set(
      products
        .map((p) => (typeof p.category === "string" ? p.category : undefined))
        .filter((cat): cat is string => typeof cat === "string"),
    ),
  );

  const filtered =
    selectedCategory === "all"
      ? products
      : products.filter(
          (p) =>
            typeof p.category === "string" && p.category === selectedCategory,
        );

  const pageCount = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const start = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginated = filtered.slice(start, start + ITEMS_PER_PAGE);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="space-y-8">
      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 justify-center">
        <button
          onClick={() => {
            setSelectedCategory("all");
            setCurrentPage(1);
          }}
          className={`px-4 py-1.5 rounded-full text-sm ${
            selectedCategory === "all"
              ? "bg-pink-700 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => {
              setSelectedCategory(category);
              setCurrentPage(1);
            }}
            className={`px-4 py-1.5 rounded-full text-sm capitalize ${
              selectedCategory === category
                ? "bg-pink-700 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Product Grid with animation */}
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <AnimatePresence>
          {paginated.map((product) => (
            <motion.div
              key={product.slug}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="flex flex-col bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
              style={{ height: "100%" }}
            >
              <Link
                href={`/products/${product.slug}`}
                className="flex flex-col flex-grow"
              >
                <div className="relative w-full h-48">
                  <Image
                    src={product.images?.[0] || "/placeholder.jpg"}
                    alt={product.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {product.title}
                  </h3>
                  {typeof product.price === "number" && (
                    <p className="text-pink-700 font-bold mt-2">
                      K {product.price}
                    </p>
                  )}
                  <p className="text-sm text-gray-500 mt-1 flex-grow">
                    {typeof product.description === "string"
                      ? product.description.slice(0, 60) + "..."
                      : ""}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Pagination */}
      {pageCount > 1 && (
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: pageCount }, (_, i) => (
            <button
              key={i}
              onClick={() => handlePageChange(i + 1)}
              className={`px-3 py-1 rounded-md text-sm ${
                currentPage === i + 1
                  ? "bg-pink-700 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
