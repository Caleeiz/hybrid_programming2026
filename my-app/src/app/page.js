"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const galaxies = [
    { name: "Andromeda", distance: "2.5M light-years", icon: "🌌" },
    { name: "Whirlpool", distance: "23M light-years", icon: "🌀" },
    { name: "Milky Way", distance: "Our Home", icon: "✨" },
    { name: "Sombrero", distance: "30M light-years", icon: "🎩" },
  ];

  return (
    <div className="min-h-screen w-full overflow-hidden bg-gradient-to-b from-slate-950 via-purple-950 to-slate-950 relative">
      {/* Animated stars background */}
      <div className="absolute inset-0 overflow-hidden">
        {mounted &&
          Array.from({ length: 100 }).map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white animate-pulse"
              style={{
                width: Math.random() * 2 + "px",
                height: Math.random() * 2 + "px",
                left: Math.random() * 100 + "%",
                top: Math.random() * 100 + "%",
                opacity: Math.random() * 0.7 + 0.3,
                animationDuration: Math.random() * 3 + 2 + "s",
              }}
            />
          ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-20">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-purple-300 via-purple-400 to-purple-500 bg-clip-text text-transparent">
            Explore the Cosmos
          </h1>
          <p className="text-xl md:text-2xl text-purple-200 font-light">
            Journey through billions of galaxies
          </p>
        </div>

        {/* Galaxy cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mb-16">
          {galaxies.map((galaxy) => (
            <div
              key={galaxy.name}
              className="group p-6 rounded-lg border border-purple-500/30 bg-gradient-to-br from-purple-900/20 to-slate-900/30 backdrop-blur-sm hover:border-purple-400/60 hover:bg-purple-900/40 transition-all duration-300 cursor-pointer"
            >
              <div className="text-4xl mb-3">{galaxy.icon}</div>
              <h3 className="text-xl font-semibold text-purple-300 mb-2">
                {galaxy.name}
              </h3>
              <p className="text-purple-200/70 text-sm">{galaxy.distance}</p>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-purple-500 text-white font-semibold hover:from-purple-500 hover:to-purple-400 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/50">
            Start Exploring
          </button>
          <Link href="/about">
            <button className="px-8 py-3 rounded-full border-2 border-purple-400 text-purple-300 font-semibold hover:bg-purple-500/10 transition-all duration-300">
              Learn More
            </button>
          </Link>
        </div>

        {/* Footer info */}
        <div className="mt-20 text-center text-purple-300/60 text-sm">
          <p>🌟 Vast universe · Infinite possibilities 🌟</p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
      `}</style>
    </div>
  );
}
