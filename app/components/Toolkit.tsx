import React from 'react';

export function Toolkit() {
  return (
    <section className="w-full max-w-6xl mx-auto mt-32">
      <h2 className="text-center text-4xl font-bold tracking-tight mb-16">A Modern Toolkit</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-8 rounded-lg border border-solid border-black/[.08] dark:border-white/[.145] bg-black/[.02] dark:bg-white/[.03]">
          <h3 className="font-mono text-xl font-semibold mb-2">pound</h3>
          <p className="text-gray-400">A lightweight, no-bullshit, and fast-as-fuck source-based package manager, written from scratch for Weight Linux.</p>
        </div>
        <div className="p-8 rounded-lg border border-solid border-black/[.08] dark:border-white/[.145] bg-black/[.02] dark:bg-white/[.03]">
          <h3 className="font-mono text-xl font-semibold mb-2">tonne</h3>
          <p className="text-gray-400">Optionally pair <code>pound</code> with <code>tonne</code> to redistribute the building process across volunteering machines. A tonne of compute for your pound.</p>
        </div>
        <div className="p-8 rounded-lg border border-solid border-black/[.08] dark:border-white/[.145] bg-black/[.02] dark:bg-white/[.03]">
          <h3 className="font-mono text-xl font-semibold mb-2">uutils</h3>
          <p className="text-gray-400">As part of our anti-GNU stance, we use <code>uutils</code>, the cross-platform Rust rewrite of coreutils, for a safer, modern, and GNU-free command-line.</p>
        </div>
        <div className="p-8 rounded-lg border border-solid border-black/[.08] dark:border-white/[.145] bg-black/[.02] dark:bg-white/[.03]">
          <h3 className="font-mono text-xl font-semibold mb-2">musl libc</h3>
          <p className="text-gray-400">The system is built upon <code>musl</code>, a lightweight, fast, and simple libc implementation that avoids the bloat and legacy of glibc.</p>
        </div>
        <div className="p-8 rounded-lg border border-solid border-black/[.08] dark:border-white/[.145] bg-black/[.02] dark:bg-white/[.03]">
          <h3 className="font-mono text-xl font-semibold mb-2">Limine</h3>
          <p className="text-gray-400">No GRUB or <code>systemd-boot</code> bullshit, just a fast, portable, and lightweight bootloader: Limine.</p>
        </div>
        <div className="p-8 rounded-lg border border-solid border-black/[.08] dark:border-white/[.145] bg-black/[.02] dark:bg-white/[.03]">
          <h3 className="font-mono text-xl font-semibold mb-2">s6</h3>
          <p className="text-gray-400">No <code>systemd</code> on my watch. We want an init system, not [insert 20 different things].</p>
        </div>
      </div>
    </section>
  );
}
