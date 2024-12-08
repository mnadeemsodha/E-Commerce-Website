import React from "react";
import Image from "next/image";
const Menu = () => {
  return (
    <div className="bg-white text-gray-800 font-sans">
      

      {/* Hero Section */}
      <section className="bg-gray-100 py-10">
        <div className="text-center">
          <h2 className="text-4xl font-bold">Our Menu</h2>
          <p className="text-gray-500 mt-2">Home &gt; Menu</p>
        </div>
      </section>

      {/* Starter Menu */}
      <section className="container mx-auto py-10 px-6">
        <div className="grid md:grid-cols-2 gap-6">
          <Image
            src="/starterdish.png"
            alt="Starter Dish"
            className="w-full rounded shadow-lg"
          />
          <div>
            <h3 className="text-2xl font-bold">Starter Menu</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <strong>Alder Grilled Chinook Salmon</strong> - $32
                <p className="text-sm text-gray-500">500 CAL</p>
              </li>
              <li>
                <strong>Berries and Creme Tart</strong> - $43
                <p className="text-sm text-gray-500">700 CAL</p>
              </li>
              <li>
                <strong>Tormentoso Bush Pizza</strong> - $14
                <p className="text-sm text-gray-500">1000 CAL</p>
              </li>
              <li>
                <strong>Spicy Vegan Potato Curry</strong> - $35
                <p className="text-sm text-gray-500">580 CAL</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Main Course */}
      <section className="container mx-auto py-10 px-6">
        <h3 className="text-2xl font-bold mb-6">Main Course</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <ul className="space-y-4">
            <li>
              <strong>Optic Big Breakfast Combo Menu</strong> - $32
              <p className="text-sm text-gray-500">500 CAL</p>
            </li>
            <li>
              <strong>Cashew Chicken with Stir-Fry</strong> - $43
              <p className="text-sm text-gray-500">700 CAL</p>
            </li>
            <li>
              <strong>Vegetables & Green Salad</strong> - $14
              <p className="text-sm text-gray-500">1000 CAL</p>
            </li>
            <li>
              <strong>Spicy Vegan Potato Curry</strong> - $35
              <p className="text-sm text-gray-500">580 CAL</p>
            </li>
          </ul>
          <Image
            src="/maincourse.png"
            alt="Main Course"
            className="w-full rounded shadow-lg"
          />
        </div>
      </section>

      
    </div>
  );
};

export default Menu;
