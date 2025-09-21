import React from 'react';

export function Community() {
  return (
    <section className="w-full max-w-6xl mx-auto mt-32 text-center">
      <h2 className="text-4xl font-bold tracking-tight mb-16">We Build in the Open</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <a href="https://discord.gg/gqn8cR6xSa" className="p-8 rounded-lg border border-solid border-black/[.08] dark:border-white/[.145] bg-black/[.02] dark:bg-white/[.03] hover:bg-black/[.05] dark:hover:bg-white/[.05] transition-colors">
          <h3 className="text-2xl font-semibold mb-2">Discord</h3>
          <p className="text-gray-400">Chat with developers and users in real-time. This is the heart of our community.</p>
        </a>
        <a href="https://reddit.com/r/WeightLinux" className="p-8 rounded-lg border border-solid border-black/[.08] dark:border-white/[.145] bg-black/[.02] dark:bg-white/[.03] hover:bg-black/[.05] dark:hover:bg-white/[.05] transition-colors">
          <h3 className="text-2xl font-semibold mb-2">Reddit</h3>
          <p className="text-gray-400">Share your setups, ask questions, and join the broader conversation on our subreddit.</p>
        </a>
        <a href="https://docs.weightlinux.xyz/" className="p-8 rounded-lg border border-solid border-black/[.08] dark:border-white/[.145] bg-black/[.02] dark:bg-white/[.03] hover:bg-black/[.05] dark:hover:bg-white/[.05] transition-colors">
          <h3 className="text-2xl font-semibold mb-2">Documentation</h3>
          <p className="text-gray-400">Read the fucking manual. Our comprehensive docs have everything you need to get started.</p>
        </a>
      </div>
    </section>
  );
}
