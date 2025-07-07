import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface ContentItem {
  title: string;
  date?: string;
  content: string; // raw markdown content
  slug: string;
  images?: string[];
  [key: string]: unknown;
}

const getContent = (type: string): ContentItem[] => {
  const dir = path.join(process.cwd(), "content", type);
  const files = fs.readdirSync(dir);

  return files.map((filename) => {
    const filePath = path.join(dir, filename);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContent);

    if (typeof data.title !== "string") {
      throw new Error(`Missing or invalid 'title' in ${filename}`);
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
        throw new Error(`Invalid 'images' in ${filename}`);
      }
    }

    return {
      title: data.title,
      date: typeof data.date === "string" ? data.date : undefined,
      content,
      slug: filename.replace(/\.md$/, ""),
      images,
      ...data,
    };
  });
};

export default getContent;
