"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Input } from "../ui/input";

type Blog = {
  slug: string;
  title: string;
  date?: string;
  images?: string[];
};

export default function BlogList({ blogs }: { blogs: Blog[] }) {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [sortNewest, setSortNewest] = useState(true);
  const blogsPerPage = 6;

  const filteredAndSorted = useMemo(() => {
    return blogs
      .filter((blog) => blog.title.toLowerCase().includes(search.toLowerCase()))
      .sort((a, b) => {
        const dateA = new Date(a.date || "").getTime();
        const dateB = new Date(b.date || "").getTime();
        return sortNewest ? dateB - dateA : dateA - dateB;
      });
  }, [search, blogs, sortNewest]);

  const totalPages = Math.ceil(filteredAndSorted.length / blogsPerPage);
  const paginatedBlogs = filteredAndSorted.slice(
    (page - 1) * blogsPerPage,
    page * blogsPerPage,
  );

  return (
    <>
      <Input
        type="text"
        placeholder="Search blog posts..."
        className="w-full mb-4 px-4 py-2 border border-pink-300 rounded"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setPage(1);
        }}
      />

      {/* Sort Toggle Buttons */}
      <div className="mb-6 flex justify-center gap-4">
        <button
          className={`px-4 py-1.5 rounded-full text-sm transition ${
            sortNewest
              ? "bg-pink-600 text-white shadow-lg"
              : "bg-gray-100 text-gray-800 hover:bg-gray-200"
          }`}
          onClick={() => {
            setSortNewest(true);
            setPage(1);
          }}
          aria-pressed={sortNewest}
        >
          Newest First
        </button>

        <button
          className={`px-4 py-1.5 rounded-full text-sm transition ${
            !sortNewest
              ? "bg-pink-600 text-white shadow-lg"
              : "bg-gray-100 text-gray-800 hover:bg-gray-200"
          }`}
          onClick={() => {
            setSortNewest(false);
            setPage(1);
          }}
          aria-pressed={!sortNewest}
        >
          Oldest First
        </button>
      </div>

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
          {paginatedBlogs.map(({ slug, title, date, images }) => (
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

      {filteredAndSorted.length === 0 && (
        <p className="text-center text-gray-500 mt-10">No blog posts found.</p>
      )}

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 mt-8">
          <button
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            disabled={page === 1}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
          >
            Prev
          </button>

          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i + 1)}
              className={`px-4 py-2 rounded ${
                page === i + 1
                  ? "bg-pink-600 text-white"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={page === totalPages}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </>
  );
}
