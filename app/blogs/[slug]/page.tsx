import { getSingleContent, SingleContent } from "@/lib/getSingleContent";
import Image from "next/image";
interface Props {
  params: { slug: string };
}

export const revalidate = 60;

export default async function BlogPost({ params }: Props) {
  const blog: SingleContent = await getSingleContent("blogs", params.slug);

  return (
    <article className="max-w-3xl mx-auto p-6 prose prose-lg">
      <h1>{blog.title}</h1>
      {blog.date && <p className="text-gray-500">{blog.date}</p>}

      <section className="mb-6 flex gap-4 flex-wrap">
        {(blog.images?.length ? blog.images : [null]).map((src, i) =>
          src ? (
            <Image
              key={src}
              src={src}
              alt={blog.title}
              width={480}
              height={320}
              className="rounded shadow object-cover max-w-full h-auto"
            />
          ) : (
            <div
              key={i}
              className="w-60 h-40 bg-pink-100 animate-pulse rounded flex items-center justify-center text-pink-600 text-sm"
            >
              No Image
            </div>
          ),
        )}
      </section>

      <section className="prose max-w-none mx-auto">
        <div dangerouslySetInnerHTML={{ __html: blog.contentHtml }} />
      </section>
    </article>
  );
}
