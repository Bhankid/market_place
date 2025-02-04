
import Auth from "@/app/components/Auth";


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-300">
      {/* Header Section */}
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-center text-blue-600 tracking-wide">
          Welcome to Marketplace
        </h1>
        <p className="mt-2 text-lg text-center text-gray-600">
          Discover, connect, and grow your business.
        </p>
      </header>

      {/* Authentication Section */}
      <main className="w-full max-w-md px-4 py-8 bg-white rounded-lg shadow-sm">
        <Auth />
      </main>
    </div>
  );
}
