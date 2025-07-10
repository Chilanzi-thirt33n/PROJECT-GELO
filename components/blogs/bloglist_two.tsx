"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

type Blog = {
  slug: string;
  title: string;
  date?: string;
  images?: string[];
};

export default function BlogList({ blogs }: { blogs: Blog[] }) {
  const latestBlogs = [...blogs]
    .sort((a, b) => {
      const dateA = new Date(a.date || "").getTime();
      const dateB = new Date(b.date || "").getTime();
      return dateB - dateA; // Newest first
    })
    .slice(0, 3); // Only 3 posts

  return (
    <motion.ul
      className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-min"
      initial="hidden"
      animate="visible"
      variants={{
        visible: { transition: { staggerChildren: 0.1 } },
        hidden: {},
      }}
    >
      <AnimatePresence mode="popLayout">
        {latestBlogs.map(({ slug, title, date, images }) => (
          <motion.li
            key={slug}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            layout
            className="flex flex-col bg-white rounded-lg shadow overflow-hidden w-full min-h-[400px] transition hover:shadow-lg"
          >
            <Link
              href={`/blogs/${slug}`}
              className="flex flex-col flex-1 group"
            >
              <div className="relative h-2/3 bg-pink-100">
                <Image
                  src={images?.[0] || "/default-image.jpg"}
                  alt={title}
                  fill
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="flex-1 p-4 flex flex-col justify-start">
                <h2 className="text-lg font-semibold text-pink-950 group-hover:text-pink-600 transition">
                  {title}
                </h2>
                {date && (
                  <p className="text-sm text-gray-500 mt-1">
                    {new Date(date).toLocaleDateString()}
                  </p>
                )}
              </div>
            </Link>
          </motion.li>
        ))}
      </AnimatePresence>
    </motion.ul>
  );
}
