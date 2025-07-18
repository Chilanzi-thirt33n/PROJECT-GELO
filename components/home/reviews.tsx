"use client";

import React, { useState, useEffect } from "react";
import { motion, Variants, Transition } from "framer-motion";

type Review = {
  id: number;
  name: string;
  text: string;
  tags?: string[];
};

const reviews: Review[] = [
  {
    id: 1,
    name: "Anna Chanda.",
    text: "The shop is good, customer care is good but there’s no price tags most of the times. Have to ask each item the price from a cashier",
    tags: ["Recommends", "6th Jul 2025"],
  },
  {
    id: 2,
    name: "Aissa Weston.",
    text: "I am new in the country and finding gelos treat was really a blessing. They have almost everything that you need and everyday they improving and add more products to the shop.",
    tags: ["Recommends", "4th Apr 2025"],
  },
  {
    id: 3,
    name: "Evwananji Mwale.",
    text: "They have amazing products, always stocked, customer service is superb and their products are affordable.",
    tags: ["Recommends", "13th feb 2025"],
  },
  {
    id: 4,
    name: "Susan s Soko.",
    text: "its easy for me because I can even make payment from.home via airtel Money then pick the stuff later,",
    tags: ["Recommends", "6th dec 2024"],
  },
  {
    id: 5,
    name: "Princess Safila Janet.",
    text: "they've everything under one roof , fair prices and good customer service",
    tags: ["Recommends", "31th oct 2024"],
  },
  {
    id: 6,
    name: "Mumbo Kauseni.",
    text: "Have most of baking utensils and the shops are open from Monday to Sunday making it easy to bake and access ingredients even on weekends",
    tags: ["Recommends", "10th oct 2024"],
  },
];

const springTransition: Transition = {
  type: "spring",
  stiffness: 300,
  damping: 30,
};

const cardVariants: Variants = {
  initial: { opacity: 0, scale: 0.8, rotate: -8, y: 30 },
  animate: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    y: 0,
    transition: springTransition,
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    rotate: 8,
    y: 30,
    transition: { duration: 0.3 },
  },
};

export default function Reviews() {
  const [isMobile, setIsMobile] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    function updateIsMobile() {
      setIsMobile(window.innerWidth < 768);
    }
    updateIsMobile();
    window.addEventListener("resize", updateIsMobile);
    return () => window.removeEventListener("resize", updateIsMobile);
  }, []);

  // Clamp index between 0 and max
  const prev = () =>
    setCurrentIndex((i) => (i <= 0 ? reviews.length - 1 : i - 1));
  const next = () =>
    setCurrentIndex((i) => (i >= reviews.length - 1 ? 0 : i + 1));

  if (isMobile) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold text-pink-800 mb-2 text-center">
          What Our Customers Say
        </h2>
        <p className="text-center text-sm text-gray-500 italic mb-8">
          Reviews sourced from Facebook
        </p>

        <div className="relative w-full max-w-sm mx-auto overflow-hidden rounded-lg shadow-lg bg-white">
          {/* Slider container */}
          <motion.div
            className="flex"
            animate={{ x: `-${currentIndex * 100}%` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {reviews.map((review) => (
              <motion.div
                key={review.id}
                variants={cardVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="flex-shrink-0 w-full p-6 flex flex-col"
              >
                <p className="text-gray-700 flex-grow text-base leading-relaxed">
                  &quot;{review.text}&quot;
                </p>
                <p className="mt-4 font-semibold text-pink-700 text-right">
                  - {review.name}
                </p>
                {review.tags && (
                  <div className="mt-3 flex flex-wrap justify-end gap-2">
                    {review.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="bg-pink-100 text-pink-700 text-xs font-semibold px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Navigation Buttons */}
          <button
            aria-label="Previous"
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-pink-100 text-pink-700 hover:bg-pink-200 transition cursor-pointer z-10"
          >
            ◀
          </button>
          <button
            aria-label="Next"
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-pink-100 text-pink-700 hover:bg-pink-200 transition cursor-pointer z-10"
          >
            ▶
          </button>
        </div>
      </div>
    );
  } else {
    // Desktop grid with animation
    return (
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold text-pink-800 mb-2 text-center">
          What Our Customers Say
        </h2>
        <p className="text-center text-sm text-gray-500 italic mb-8">
          Reviews sourced from Facebook
        </p>

        <div className="grid grid-cols-3 gap-6">
          {reviews.slice(0, 6).map((review) => (
            <motion.div
              key={review.id}
              variants={cardVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="bg-white rounded-lg shadow-md p-6 flex flex-col h-full"
            >
              <p className="text-gray-700 flex-grow text-base leading-relaxed">
                &quot;{review.text}&quot;
              </p>
              <p className="mt-4 font-semibold text-pink-700 text-right">
                - {review.name}
              </p>
              {review.tags && (
                <div className="mt-3 flex flex-wrap justify-end gap-2">
                  {review.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-pink-100 text-pink-700 text-xs font-semibold px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    );
  }
}
