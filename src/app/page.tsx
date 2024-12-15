import Link from "next/link";
import React from "react";
import Image from "next/image";
const Home = () => {
  return (
    <div
     style={{ backgroundImage: "url('/back2.jpg')",
             backgroundSize: "cover",
             backgroundPosition: "center",
             backgroundRepeat: "no-repeat",
             minHeight: "100vh",
             display: "flex",
             flexDirection: "column",
             width: "100%"
      }} 
      >
      {/* Hero Section */}
      <header className="flex flex-col items-center text-center p-10">
        <h1 className="text-4xl font-bold">
         <span className="text-white">The Art of </span> <span className="text-yellow-500">speed food Quality</span>
        </h1>
        <p className="mt-4 text-gray-300">
          Experience the best cuisines with speed and quality in every bite.
        </p>
        <button className="mt-6 bg-yellow-500 px-4 py-2 rounded hover:bg-yellow-600">
         <Link legacyBehavior href="/menu">Explore Menu</Link>
        </button>
      </header>

      {/* Featured Dishes Section */}
      <section className="p-10">
        <h2 className="text-2xl font-bold text-center"><span className="text-white">Extraordinary Taste</span></h2>
        <p className="text-center text-gray-300 mt-2">
          Over 30 years of culinary excellence.
        </p>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
          <Image src="/b1.png" alt="Dish 1" className="rounded shadow-lg" width={400} height={200} />
          <Image src="/a1.png" alt="Dish 2" className="rounded shadow-lg" width={400} height={400} />
          <Image src="/g1.png" alt="Dish 3" className="rounded shadow-lg" width={400} height={400}  />
          <Image src="/l2.png" alt="Dish 4" className="rounded shadow-lg" width={400} height={400} />
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-800 text-center py-10">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-yellow-500">
          <div>
            <h3 className="text-3xl font-bold">420</h3>
            <p className="text-gray-300">Pro Dishes</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">320</h3>
            <p className="text-gray-300">Menu Items</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">30+</h3>
            <p className="text-gray-300">Years of Experience</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">220</h3>
            <p className="text-gray-300">Happy Customers</p>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="p-10">
        <h2 className="text-2xl font-bold text-center"><span className="text-white">From Our Menu</span></h2>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-gray-800 p-4 rounded text-center">
            <h3 className="text-xl font-bold text-yellow-500">Lemon Salad</h3>
            <p className="text-gray-300">$12.99</p>
          </div>
          <div className="bg-gray-800 p-4 rounded text-center">
            <h3 className="text-xl font-bold text-yellow-500">Grilled Salmon</h3>
            <p className="text-gray-300">$15.99</p>
          </div>
          <div className="bg-gray-800 p-4 rounded text-center">
            <h3 className="text-xl font-bold text-yellow-500">Pasta Alfredo</h3>
            <p className="text-gray-300">$14.99</p>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default Home;
