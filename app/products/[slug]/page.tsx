"use server";

import { getSingleContent, SingleContent } from "@/lib/getSingleContent";
import ProductDetails from "@/components/products/productDetail";

export default async function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const product: SingleContent = await getSingleContent(
    "products",
    params.slug,
  );

  return <ProductDetails product={product} />;
}
