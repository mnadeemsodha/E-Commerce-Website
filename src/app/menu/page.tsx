
import React from "react";
import Image from "next/image";
const Menu = () => {
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
}} >
      {/* Hero Section */}
      <section className="bg-gray-100 py-10">
        <div className="text-center">
          <h2 className="text-4xl font-bold">Our Menu</h2>
          <p className="text-gray-500 mt-2">Home &gt; Menu</p>
        </div>
      </section>

      {/* Starter Menu */}
      <section className="container mx-auto py-10 px-6">
        <div className="grid md:grid-cols-2 gap-6 ">
          <Image
            src="/be1.png" width={400} height={400}
            alt="Starter Dish"
            className="w-full rounded shadow-lg"
          />
          <div className="bg-slate-100 h-min w-auto gap-0" >
            <h3 className="text-2xl font-bold bg-slate-100">Starter Menu</h3>
            <ul className="mt-4 space-y-4 ">
              <li className="bg-slate-100 flex items-center gap-4 p-4 rounded">
              <Image
            src="/g1.png" width={400} height={400}
            alt="veg soup"
            className="w-12 h-12 rounded"
            />
                <strong>Alder Grilled Chinook Salmon</strong> - $32
                <p className="text-sm text-gray-500">500 CAL</p>
              </li>
              <li className="bg-slate-100 flex items-center gap-4 p-4 rounded">
              <Image
            src="/be1.png" width={400} height={400}
            alt="veg soup"
            className="w-12 h-12 rounded"
            />   
              <strong>Berries and Creme Tart</strong> - $43
                <p className="text-sm text-gray-500">700 CAL</p>
              </li>
              <li className="bg-slate-100 flex items-center gap-4 p-4 rounded">
              <Image
            src="/p1.png" width={400} height={400}
            alt="veg soup"
            className="w-12 h-12 rounded"
            />    
            <strong>Tormentoso Bush Pizza</strong> - $14
                <p className="text-sm text-gray-500">1000 CAL</p>
              </li>
              <li className="bg-slate-100 flex items-center gap-4 p-4 rounded">
              <Image
            src="/o1.png" width={400} height={400}
            alt="veg curry"
            className="w-12 h-12 rounded"
            />
                <strong>Spicy Vegan Potato Curry</strong> - $35
                <p className="text-sm text-gray-500">580 CAL</p>
              </li>
              <li className="bg-slate-100 flex items-center gap-4 p-4 rounded">
             <Image
            src="/c1.png" width={400} height={400}
            alt="veg soup"
            className="w-12 h-12 rounded"
            />
                <strong>Corn Soup</strong> - $20 <strong></strong>
              <p className="text-sm text-gray-500">102 CAL</p>
              </li>
              <li className="bg-slate-100 flex items-center gap-4 p-4 rounded">
             <Image
            src="/v1.png" width={400} height={400}
            alt="veg soup"
            className="w-12 h-12 rounded"
            />
                <strong>  Veg Soup</strong> - $20
                <p className="text-sm text-gray-500">98 CAL</p>
              </li>
              </ul>
          </div>
        </div>
      </section>

      {/* Main Course */}
      <section className="container mx-auto py-10 px-6">
       
        <div className="bg-slate-100 flex flex-col md:flex-row items-center md:items-start gap">
        <h3 className="text-2xl font-bold mb-6">Main Course</h3>
        <ul className="mt-4 space-y-4">
            <li className="bg-slate-100 flex items-center gap-4 p-4 rounded">
              <strong>Optic Big Breakfast Combo Menu</strong> - $32
              <p className="text-sm text-gray-500">500 CAL</p>
            </li>
            <li className="bg-slate-100 flex items-center gap-4 p-4 rounded">
              <strong>Cashew Chicken with Stir-Fry</strong> - $43
              <p className="text-sm text-gray-500">700 CAL</p>
            </li>
            <li className="bg-slate-100 flex items-center gap-4 p-4 rounded">
              <strong>Vegetables & Green Salad</strong> - $14
              <p className="text-sm text-gray-500">1000 CAL</p>
            </li>
            <li className="bg-slate-100 flex items-center gap-4 p-4 rounded">
              <strong>Spicy Vegan Potato Curry</strong> - $35
              <p className="text-sm text-gray-500">580 CAL</p>
            </li>
          </ul>
          <div >
          <Image
            src="/m1.png" width={400} height={400}
            alt="Main Course"
            className="w-full rounded shadow-lg"  
          />
          </div>
        </div>
      </section>
       </div>
          
    
  );
};
export default Menu;
