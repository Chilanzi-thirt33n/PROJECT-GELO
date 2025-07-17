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
      <div className="w-full  max-h-max flex justify-center items-center bg-pink-100 p-2 lg:p-4">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="w-full max-h-max lg:w-[70vw] mt-24 mb-10 grid grid-cols-1 lg:grid-cols-2 gap-6 py-8 justify-center"
        >
          {/* Text Content */}
          <div className="flex flex-col justify-center">
            <h1 className="text-xl lg:text-6xl font-bold text-pink-900 leading-tight mb-2">
              {blog.title}
            </h1>
            {/* Safe check for unknown intro */}
            {typeof blog.intro === "string" && (
              <p className="text-pink-600 mb-4">{blog.intro}</p>
            )}
            <p className="text-sm text-pink-300 mb-1">
              Written by: {blog.author}
            </p>
            {blog.date && (
              <p className="text-sm text-pink-300">
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
                <div className="relative aspect-[4/3] w-full overflow-hidden ">
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
      </div>

      {/* Blog Content */}
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="prose prose-sm sm:prose-base max-w-5xl pb-6 sm:pb-12 prose-p:text-gray-700 prose-h2:text-pink-800 prose-li:marker:text-pink-500 prose-img:rounded-xl prose-img:shadow-md prose-img:my-6 prose-img:mx-auto prose-blockquote:border-l-4 prose-blockquote:border-pink-300 prose-blockquote:pl-4 prose-blockquote:text-gray-600 prose-hr:border-pink-300"
      >
        <div
          className="markdown-body text-pink-600 p-2"
          dangerouslySetInnerHTML={{ __html: blog.contentHtml }}
          style={{
            lineHeight: "1.6",
          }}
        />
      </motion.article>
    </div>
  );
}
