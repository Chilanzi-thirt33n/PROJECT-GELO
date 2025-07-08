"use server";

import { getSingleContent, SingleContent } from "@/lib/getSingleContent";
import Image from "next/image";
import * as motion from "motion/react-client";

export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const blog: SingleContent = await getSingleContent(
    "blogs",
    (await params).slug,
  );

  return (
    <div className="w-full flex flex-col items-center">
      {/* Header Section */}
      <section className="w-full mt-20 max-h-max flex justify-center items-center bg-pink-100 p-2 lg:p-4">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="w-full max-h-max lg:w-[70vw] grid grid-cols-1 lg:grid-cols-2 gap-6 py-8 justify-center my-auto"
        >
          {/* Text Content */}
          <div className="flex flex-col justify-center">
            <h1 className="text-xl lg:text-6xl font-bold text-pink-900 leading-tight mb-2">
              {blog.title}
            </h1>
            <p className="text-sm text-pink-600 mb-1">
              Written by: {blog.author}
            </p>
            {blog.date && (
              <p className="text-sm text-pink-600">
                Published Date:{" "}
                {new Date(blog.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            )}
          </div>

          {/* Featured Image – Instant Camera Style */}
          {blog.images?.[0] && (
            <div className="hidden sm:block transform rotate-[-2deg] transition-all duration-300 hover:rotate-0 hover:scale-105">
              <div className="bg-white rounded-sm shadow-2xl w-full max-w-lg pb-10 pt-4 px-4 relative">
                {/* Simulate wider aspect and thick bottom like Polaroid */}
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm">
                  <Image
                    src={blog.images[0]}
                    alt={blog.title}
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          )}
        </motion.header>
      </section>

      {/* Blog Content */}
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="prose prose-sm sm:prose-base max-w-5xl pb-6 sm:pb-12"
      >
        <div
          className="markdown-body p-2"
          dangerouslySetInnerHTML={{ __html: blog.contentHtml }}
          style={{
            lineHeight: "1.6",
            color: "#374151",
          }}
        />
      </motion.article>
    </div>
  );
}
