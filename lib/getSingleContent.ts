import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

export interface SingleContent {
  title: string;
  date?: string;
  contentHtml: string; // HTML string rendered from markdown
  slug: string;
  images?: string[];
  [key: string]: unknown;
}

export async function getSingleContent(
  type: string,
  slug: string,
): Promise<SingleContent> {
  const filePath = path.join(process.cwd(), "content", type, `${slug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  if (typeof data.title !== "string") {
    throw new Error(`Missing or invalid 'title' in ${slug}.md`);
  }

  // Normalize images array
  let images: string[] | undefined;
  if (data.images) {
    if (
      Array.isArray(data.images) &&
      data.images.every((img) => typeof img === "string")
    ) {
      images = data.images;
    } else if (typeof data.images === "string") {
      images = [data.images];
    } else {
      throw new Error(`Invalid 'images' in ${slug}.md`);
    }
  }

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    title: data.title,
    date: typeof data.date === "string" ? data.date : undefined,
    contentHtml,
    slug,
    images,
    ...data,
  };
}
