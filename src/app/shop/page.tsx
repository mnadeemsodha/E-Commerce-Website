import React from "react";
import Image from "next/image";
const Shop = () => {
  return (
    <div className="bg-white text-gray-800 font-sans">
      

      {/* Hero Section */}
      <section className="bg-gray-100 py-10">
        <div className="text-center">
          <h2 className="text-4xl font-bold">Our Shop</h2>
          <p className="text-gray-500 mt-2">Home &gt; Shop</p>
        </div>
      </section>

      {/* Shop Content */}
      <section className="container mx-auto py-10 px-6">
        <div className="grid md:grid-cols-4 gap-6">
          {/* Filters Section */}
          <aside className="md:col-span-1">
            <div className="mb-6">
              <h3 className="font-bold text-lg">Search Product</h3>
              <input
                type="text"
                placeholder="Search..."
                className="w-full p-2 border border-gray-300 rounded mt-2"
              />
            </div>
            <div className="mb-6">
              <h3 className="font-bold text-lg">Category</h3>
              <ul className="space-y-2 mt-2">
                <li className="text-gray-600">Sandwiches</li>
                <li className="text-gray-600">Burger</li>
                <li className="text-gray-600">Pizza</li>
                <li className="text-gray-600">Drinks</li>
                <li className="text-gray-600">Non-Veg</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg">Filter By Price</h3>
              <input
                type="range"
                min="0"
                max="100"
                className="w-full mt-2"
              />
            </div>
          </aside>

          {/* Products Section */}
          
          <div className="md:col-span-3">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: "Fresh Lime",
                  price: "$38.00",
                  originalPrice: "$45.00",
                  imgSrc: "/freshlime.jpg",
                
                },
                {
                  name: "Chocolate Muffin",
                  price: "$28.00",
                  originalPrice: "$45.00",
                  imgSrc: "/muffin.jpg",
                },
                {
                  name: "Burger",
                  price: "$21.00",
                  imgSrc: "/burger.png",
                },
              ].map((product, index) => (
                <div
                  key={index}
                  className="border p-4 rounded hover:shadow-lg"
                >
                  <Image
                    src={product.imgSrc}
                    alt={product.name}
                    className="w-full h-40 object-cover rounded"
                  />
                  <h3 className="text-lg font-bold mt-4">{product.name}</h3>
                  <p className="text-yellow-500 text-lg">{product.price}</p>
                  {product.originalPrice && (
                    <p className="text-gray-400 line-through">
                      {product.originalPrice}
                    </p>
                  )}
                  <button className="mt-4 bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center space-x-4 mt-10">
              <button className="p-2 border rounded">1</button>
              <button className="p-2 border rounded bg-yellow-500 text-white">
                2
              </button>
              <button className="p-2 border rounded">3</button>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default Shop;
