import FloatingSkills from "@/components/FloatingSkills";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main
      className="w-full min-h-screen grid grid-rows-[auto_1fr_auto] items-center justify-items-center font-sans sm:p-20 text-[var(--primary-text-color)] transition-[background] duration-500 ease-in-out"
      style={{
        background: 'var(--background)',
      }}

    >
      <FloatingSkills/>
      <Hero />
    </main>
  );
}
