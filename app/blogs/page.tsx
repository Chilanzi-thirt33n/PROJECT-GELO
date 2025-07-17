import getContent, { ContentItem } from "@/lib/getContent";
import BlogList from "@/components/blogs/bloglist";

export default async function BlogsPage() {
  const blogs: ContentItem[] = getContent("blogs");

  return (
    <main className="w-full lg:max-w-5xl mx-auto p-6 my-20">
      <h1 className="text-3xl font-bold mb-6 text-center text-pink-950 mt-20">
        Blog Posts
      </h1>
      <BlogList blogs={blogs} />
    </main>
  );
}
