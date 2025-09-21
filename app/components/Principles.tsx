import React from 'react';

export function Principles() {
  return (
    <main className="w-full max-w-4xl mx-auto mt-24">
      <h2 className="text-center text-4xl font-bold tracking-tight mb-16">Our Guiding Principles</h2>
      
      <div className="flex flex-col gap-16">
          {/* Principle 1 */}
          <div className="relative pl-12">
            <div className="absolute left-0 top-1 font-mono text-2xl font-bold text-gray-400 dark:text-gray-600">01</div>
            <h3 className="text-2xl font-semibold mb-2">Lightweight by Design</h3>
            <p className="text-gray-400">
              Performance isn't a feature, it's the foundation. We relentlessly pursue efficiency, creating a system that is incredibly light and responsive. Packages can have build instructions for specific, supported instructions sets (such as AVX2, NEON, so on).
            </p>
          </div>

          {/* Principle 2 */}
          <div className="relative pl-12">
            <div className="absolute left-0 top-1 font-mono text-2xl font-bold text-gray-400 dark:text-gray-600">02</div>
            <h3 className="text-2xl font-semibold mb-2">Freedom from Legacy</h3>
            <p className="text-gray-400">
              We are not a remix or a fork. Weight Linux is a new operating system, built from the ground up with modern tools and a forward-thinking architecture. Heavily anti-GNU software as well.
            </p>
          </div>

          {/* Principle 3 */}
          <div className="relative pl-12">
            <div className="absolute left-0 top-1 font-mono text-2xl font-bold text-gray-400 dark:text-gray-600">03</div>
            <h3 className="text-2xl font-semibold mb-2">Optimized for Modern Hardware</h3>
            <p className="text-gray-400">
              We focus exclusively on modern 64-bit architectures like amd64 and aarch64. By dropping legacy 32-bit support, we give you a streamlined, no-bullshit experience on the hardware you actually use.
            </p>
          </div>

          {/* Principle 4 */}
          <div className="relative pl-12">
            <div className="absolute left-0 top-1 font-mono text-2xl font-bold text-gray-400 dark:text-gray-600">04</div>
            <h3 className="text-2xl font-semibold mb-2">Project, Not Product</h3>
            <p className="text-gray-400">
              Weight Linux is a passion project, forged by a global community of developers and users. It is not driven by commercial interests. Every contribution directly shapes the future of the OS, ensuring it stays open, transparent, and answers to its users, not a board room.
            </p>
          </div>
      </div>
    </main>
  );
}
