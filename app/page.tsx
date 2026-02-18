import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="text-center max-w-2xl">
        <h1 className="text-5xl font-bold mb-6 text-gray-900">
          Shabuj University Finder
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Discover the perfect university for your study abroad journey
        </p>
        <Link
          href="/universities"
          className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-200"
        >
          Find Universities
        </Link>
      </div>
    </main>
  );
}
