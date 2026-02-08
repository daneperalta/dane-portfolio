import { SceneWrapper } from "@/components/canvas";
import { Hero } from "@/components/ui";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-zinc-950 text-zinc-50">
      <SceneWrapper />
      <Hero />
    </main>
  );
}
