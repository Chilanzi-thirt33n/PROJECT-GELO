import getContent, { ContentItem } from "@/lib/getContent";
import ProductGrid from "@/components/products/ProductGrid"; // update this component

export default async function ProductsPage() {
  const products: ContentItem[] = getContent("products");

  return (
    <main className="w-full lg:max-w-6xl mx-auto p-6 my-20">
      <h1 className="text-3xl font-bold mb-6 text-center text-pink-950 mt-20">
        Our Products
      </h1>
      <ProductGrid products={products} />
    </main>
  );
}
