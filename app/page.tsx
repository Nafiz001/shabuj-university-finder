import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="relative hero-gradient overflow-hidden">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-green-300/20 dark:bg-green-900/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-blue-300/20 dark:bg-blue-900/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 md:pt-32 md:pb-32 text-center relative z-10">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm font-semibold mb-6 border border-green-200 dark:border-green-800">
              <span className="material-icons text-sm">public</span>
              Explore Global Opportunities
            </span>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6 leading-tight">
              Shabuj{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-400">
                University Finder
              </span>
            </h1>

            <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-10 leading-relaxed">
              Discover the perfect university for your study abroad journey. We
              connect ambitious students with world-class institutions across
              the globe.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/universities"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white transition-all duration-200 bg-green-600 rounded-xl shadow-lg hover:bg-green-700 hover:shadow-green-500/40 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-600 dark:focus:ring-offset-slate-900"
              >
                <span className="material-icons mr-2">search</span>
                Find Universities
              </Link>
              <Link
                href="/universities"  
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-all shadow-sm"
              >
                <span className="material-icons mr-2 text-green-600">
                  play_circle_filled
                </span>
                How it Works
              </Link>
            </div>

            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-slate-200/60 dark:border-slate-700/60 pt-10 max-w-4xl mx-auto">
              <div>
                <p className="text-3xl font-bold text-slate-900 dark:text-white">
                  30+
                </p>
                <p className="text-sm text-slate-500 dark:text-slate400 font-medium">
                  Universities
                </p>
              </div>
              <div>
                <p className="text-3xl font-bold text-slate-900 dark:text-white">
                  12+
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                  Countries
                </p>
              </div>
              <div>
                <p className="text-3xl font-bold text-slate-900 dark:text-white">
                  10k+
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                  Students
                </p>
              </div>
              <div>
                <p className="text-3xl font-bold text-slate-900 dark:text-white">
                  98%
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                  Success Rate
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Destinations */}
        <section className="py-20 bg-white dark:bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12">
              <div className="max-w-2xl">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                  Popular Study Destinations
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-400">
                  Explore top-tier educational hubs chosen by students
                  worldwide.
                </p>
              </div>
              <Link
                href="/universities"
                className="hidden md:inline-flex items-center font-medium text-green-600 hover:text-green-700 mt-4 md:mt-0 group"
              >
                View all destinations
                <span className="material-icons ml-1 transform group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  country: "United Kingdom",
                  region: "Europe",
                  description:
                    "Home to Oxford, Cambridge, and centuries of academic excellence.",
                  image:
                    "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80",
                },
                {
                  country: "United States",
                  region: "North America",
                  description:
                    "The world's largest international student population and diverse campus cultures.",
                  image:
                    "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&q=80",
                },
                {
                  country: "Canada",
                  region: "North America",
                  description:
                    "Known for its high quality of life, welcoming culture, and top research universities.",
                  image:
                    "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=800&q=80",
                },
              ].map((destination) => (
                <div
                  key={destination.country}
                  className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
                  <img
                    alt={`${destination.country} cityscape`}
                    className="w-full h-96 object-cover transform group-hover:scale-105 transition-transform duration-700"
                    src={destination.image}
                  />
                  <div className="absolute bottom-0 left-0 p-6 z-20 w-full">
                    <div className="flex justify-between items-end">
                      <div>
                        <p className="text-green-400 text-sm font-semibold mb-1 uppercase tracking-wider">
                          {destination.region}
                        </p>
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {destination.country}
                        </h3>
                        <p className="text-slate-300 text-sm line-clamp-2">
                          {destination.description}
                        </p>
                      </div>
                      <div className="bg-white/20 backdrop-blur-md p-2 rounded-full group-hover:bg-green-600 transition-colors">
                        <span className="material-icons text-white">
                          north_east
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="material-icons text-green-600 text-2xl">
                school
              </span>
              <span className="font-bold text-lg text-slate-900 dark:text-white">
                Shabuj<span className="text-green-600">Finder</span>
              </span>
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-sm">
              © 2024 Shabuj University Finder. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
