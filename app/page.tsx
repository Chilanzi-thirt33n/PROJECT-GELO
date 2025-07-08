import { HeroSection } from "@/components/home/hero";
import { ProductCategories } from "@/components/home/category";
export default function Home() {
  return (
    <div className=" font-[family-name:var(--font-geist-sans)] w-full overflow-hidden">
      <HeroSection />
      <main className="w-full flex flex-col justify-center items-center">
        <section className="w-full lg:w-[70vw]">
          <ProductCategories />
        </section>
        <section></section>
      </main>
    </div>
  );
}
