import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="font-sans grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 gap-16 sm:p-20 bg-[var(--background)] text-[var(--primary-text-color)] transition-colors duration-300">
      <Hero/>
    </main>
  );
}
