"use client";

import { useState } from "react";

export const NewsletterSignup = () => {
  const [email, setEmail] = useState<string>('');

  return (
    <div className="relative p-4 rounded-lg bg-gradient-to-r from-blue-600 via-purple-600 to-red-600">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-white mb-2">
          Don&apos;t Be Left Out! 🚀
        </h2>
        <p className="text-white mb-4">
          Be the first to know about our latest news. Subscribe now!
        </p>
        <div className="flex justify-center items-center gap-x-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="p-2 rounded-md outline-none focus:border-blue-500"
          />
          <button className="border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-md h-10 px-4 py-2 inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" >
            Subscribe
          </button>
          {/* <Button variant="outline" className="rounded-md">
              Subscribe
            </Button> */}
        </div>
      </div>
    </div>
  );
};