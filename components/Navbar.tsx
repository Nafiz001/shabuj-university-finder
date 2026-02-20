'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 backdrop-blur-md bg-white/70 dark:bg-slate-900/80 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex-shrink-0 flex items-center gap-2 hover:opacity-80 transition-opacity">
            <span className="material-icons text-green-600 text-3xl">school</span>
            <span className="font-bold text-xl tracking-tight text-slate-900 dark:text-white">
              Shabuj<span className="text-green-600">Finder</span>
            </span>
          </Link>

          <div className="hidden md:flex space-x-8 items-center">
            <Link
              href="/"
              className="text-slate-600 dark:text-slate-300 hover:text-green-600 dark:hover:text-green-600 font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              href="/universities"
              className="text-slate-600 dark:text-slate-300 hover:text-green-600 dark:hover:text-green-600 font-medium transition-colors"
            >
              Universities
            </Link>
            <Link
              href="/universities"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-2.5 rounded-full font-medium transition-all shadow-lg shadow-green-500/30"
            >
              Get Started
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white p-2"
              aria-label="Toggle mobile menu"
            >
              <span className="material-icons">
                {mobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-200 dark:border-slate-800">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-600 dark:text-slate-300 hover:text-green-600 dark:hover:text-green-600 font-medium transition-colors px-4 py-2"
              >
                Home
              </Link>
              <Link
                href="/universities"
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-600 dark:text-slate-300 hover:text-green-600 dark:hover:text-green-600 font-medium transition-colors px-4 py-2"
              >
                Universities
              </Link>
              <Link
                href="/universities"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-2.5 rounded-full font-medium transition-all shadow-lg shadow-green-500/30 mx-4 text-center"
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
