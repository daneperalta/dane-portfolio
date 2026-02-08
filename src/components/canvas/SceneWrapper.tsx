"use client";

import dynamic from "next/dynamic";

const Scene = dynamic(() => import("./Scene").then((mod) => mod.Scene), {
  ssr: false,
  loading: () => <div className="fixed inset-0 -z-10 bg-zinc-950" aria-hidden="true" />,
});

export function SceneWrapper() {
  return <Scene />;
}
