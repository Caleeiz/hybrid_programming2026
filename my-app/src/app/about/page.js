"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function About() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const facts = [
    {
      title: "Scale",
      description:
        "The observable universe is 93 billion light-years in diameter",
    },
    {
      title: "Age",
      description: "The universe is approximately 13.8 billion years old",
    },
    {
      title: "Galaxies",
      description:
        "There are an estimated 200 billion galaxies in the universe",
    },
    {
      title: "Stars",
      description: "Each galaxy contains billions to trillions of stars",
    },
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
            About Our Universe
          </h1>
          <p className="text-xl md:text-2xl text-purple-200 font-light">
            Fascinating facts about the cosmos
          </p>
        </div>

        {/* Facts grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mb-16">
          {facts.map((fact) => (
            <div
              key={fact.title}
              className="group p-6 rounded-lg border border-purple-500/30 bg-gradient-to-br from-purple-900/20 to-slate-900/30 backdrop-blur-sm hover:border-purple-400/60 hover:bg-purple-900/40 transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold text-purple-300 mb-3">
                {fact.title}
              </h3>
              <p className="text-purple-200/70">{fact.description}</p>
            </div>
          ))}
        </div>

        {/* Description */}
        <div className="max-w-2xl text-center mb-16 px-4">
          <p className="text-lg text-purple-200/80 leading-relaxed mb-6">
            The universe is a vast and mysterious place, containing countless
            wonders waiting to be discovered. From the smallest subatomic
            particles to the largest superclusters of galaxies, the cosmos
            reveals the remarkable intricacy of existence.
          </p>
          <p className="text-lg text-purple-200/80 leading-relaxed">
            Our understanding of the universe continues to evolve through
            advances in astronomy, physics, and technology, allowing us to peer
            deeper into space and time than ever before.
          </p>
        </div>

        {/* Back button */}
        <Link href="/">
          <button className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-purple-500 text-white font-semibold hover:from-purple-500 hover:to-purple-400 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/50">
            ← Back to Home
          </button>
        </Link>

        {/* Footer info */}
        <div className="mt-20 text-center text-purple-300/60 text-sm">
          <p>🌟 Exploring the infinite cosmos 🌟</p>
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
