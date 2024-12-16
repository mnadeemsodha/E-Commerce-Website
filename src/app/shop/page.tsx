import React from "react";
import Image from "next/image";
const Shop = () => {
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

      
      <section className="bg-gray-100 py-10">
        <div className="text-center">
          <h2 className="text-4xl font-bold">Our Shop</h2>
          <p className="text-gray-500 mt-2">Home &gt; Shop</p>
        </div>
      </section>

      
      <section className="container mx-auto py-10 px-6">
        <div className="grid md:grid-cols-4 gap-6">
          
          <aside className="md:col-span-1">
            <div className="mb-6">
              <h3 className="font-bold text-lg text-white">Search Product</h3>
              <input
                type="text"
                placeholder="Search..."
                className="w-full p-2 border border-gray-300 rounded mt-2"
              />
            </div>
            <div className="mb-6">  
              <h3 className="font-bold text-lg text-white">Category</h3>
              <ul className="space-y-2 mt-2">
                <li className="text-white">Sandwiches</li>
                <li className="text-white">Burger</li>
                <li className="text-white">Pizza</li>
                <li className="text-white">Drinks</li>
                <li className="text-white">Non-Veg</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg text-white">Filter By Price</h3>
              <input
                type="range"
                min="0"
                max="100"
                className="w-full mt-2"
              />
            </div>
          </aside>

          
          
          <div className="md:col-span-3">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 bg-white" >
              {[
                {
                  name: "Fresh Lime",
                  price: "$38.00",
                  originalPrice: "$45.00",
                  imgSrc: "/lime.png",
                  width: 400,
                  height: 400
                },
                {
                  name: "Chocolate Muffin",
                  price: "$28.00",
                  originalPrice: "$45.00",
                  imgSrc: "/chocomuffin.jpg",
                  width: 400,
                  height: 400
                },
                {
                  name: "Burger",
                  price: "$21.00",
                  imgSrc: "/b1.png",
                  width: 400,
                  height: 400
                },
                {
                  name: "Pizza",
                  price: "$25.00",
                  imgSrc: "/p1.png",
                  width: 400,
                  height: 400
                },
                {
                  name:"Chinese",
                  price: "$23.00",
                  imgSrc: "/chinese.jpg",
                  width: 400,
                  height: 400
                },
                {
                  name:"Sandwich",
                  price: "$15.00",
                  imgSrc: "/sandwich.jpg",
                  width: 400,
                  height: 400
                },
                

            
              ].map((product, index) => (
                <div
                  key={index}
                  className="border p-4 rounded hover:shadow-lg"
                >
                  <Image
                    src={product.imgSrc}
                    alt={product.name}
                    width={product.width}
                    height={product.height}
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
