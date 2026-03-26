"use client";

import Link from "next/link";
import { Search } from "lucide-react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function NavBar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const [query, setQuery] = useState(searchParams.get("q") || "");

  // Debounced update of URL
  useEffect(() => {
    const timer = setTimeout(() => {
      if (pathname === "/series") {
        const params = new URLSearchParams(searchParams.toString());
        if (query) {
          params.set("q", query);
        } else {
          params.delete("q");
        }
        router.push(`${pathname}?${params.toString()}`);
      }
    }, 400);

    return () => clearTimeout(timer);
  }, [query, pathname, router, searchParams]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (pathname !== "/series") {
      router.push(`/series?q=${query}`);
    }
  };

  return (
    <nav className="glass-nav sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-8">
        <div className="flex items-center gap-10">
          <Link href="/" className="text-2xl font-black tracking-tighter text-white">
            NEXT<span className="text-blue-600">FLIX</span>
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold">
            <Link href="/" className="text-gray-300 hover:text-white transition-colors">
              Inicio
            </Link>
            <Link href="/series" className="text-gray-300 hover:text-white transition-colors">
              Series
            </Link>
          </div>
        </div>

        <form onSubmit={handleSearch} className="flex-1 max-w-md relative hidden sm:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Buscar series..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-full py-2 pl-10 pr-4 text-sm text-white focus:outline-none focus:bg-white/10 focus:border-blue-600 transition-all"
          />
        </form>

        <div className="flex items-center gap-6">
          <Link href="/about" className="text-gray-300 hover:text-white text-sm font-semibold transition-colors hidden lg:block">
            Acerca de
          </Link>
          <button className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full transition-colors md:hidden">
            <Search size={20} />
          </button>
        </div>
      </div>
    </nav>
  );
}
