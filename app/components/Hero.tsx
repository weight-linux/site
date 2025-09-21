import React from 'react';

export function Hero() {
  return (
    <header className="flex flex-col gap-8 items-center text-center max-w-4xl mx-auto my-16">
      <h1 className="text-5xl sm:text-7xl font-bold tracking-tighter">
        Weight Linux
      </h1>
      <p className="text-lg sm:text-xl text-gray-400 max-w-2xl">
        An innovative, community-driven operating system built from scratch to be lightweight, and free from legacy constraints.
      </p>
      <div className="flex gap-4 items-center flex-col sm:flex-row mt-8">
        <a
          className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
          href="#"
          rel="noopener noreferrer"
        >
          Download Now
        </a>
        <a
          className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto"
          href="https://discord.gg/gqn8cR6xSa"
          rel="noopener noreferrer"
        >
          Join the Project
        </a>
      </div>
    </header>
  );
}
