import getContent, { ContentItem } from "@/lib/getContent";
import BlogList from "@/components/blogs/bloglist_two";

export default async function BlogsPage() {
  const blogs: ContentItem[] = getContent("blogs");

  return (
    <main className="w-full lg:max-w-[75vw] mx-auto p-6 mb-20">
      <h1 className="text-3xl font-bold mb-6 text-center text-pink-800">
        Latest Posts
      </h1>
      <BlogList blogs={blogs} />
    </main>
  );
}
