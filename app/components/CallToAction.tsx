import React from 'react';

export function CallToAction() {
  return (
    <section className="w-full mt-32 text-center">
      <h2 className="text-4xl font-bold tracking-tight mb-8">Ready to try something different?</h2>
      <div className="flex gap-4 items-center justify-center flex-col sm:flex-row">
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
    </section>
  );
}
