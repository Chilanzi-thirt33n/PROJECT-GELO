import getContent, { ContentItem } from "@/lib/getContent";
import Link from "next/link";

export const revalidate = 60;

export default async function BlogsPage() {
  const blogs: ContentItem[] = getContent("blogs");

  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Blog Posts</h1>
      <ul className="space-y-6">
        {blogs.map(({ slug, title, date }) => (
          <li key={slug}>
            <Link
              href={`/blogs/${slug}`}
              className="text-blue-600 hover:underline text-xl font-semibold"
            >
              {title}
            </Link>
            {date && <p className="text-gray-500">{date}</p>}
          </li>
        ))}
      </ul>
    </main>
  );
}
