"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

const Cart: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { id: 1, name: "Burger", price: 35, quantity: 1, image: "/burger.png" },
    { id: 2, name: "Fresh Lime", price: 25, quantity: 1, image: "/lime.png" },
    { id: 3, name: "Pizza", price: 15, quantity: 1, image: "/p1.png" },
    { id: 4, name: "Chocolate Muffin", price: 45, quantity: 1, image: "/chocomuffin.jpg" },
    { id: 5, name: "Cheese Butter", price: 15, quantity: 1, image: "/cheesebutter.jpg" },
  ]);

  const updateQuantity = (id: number, quantity: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const calculateTotal = () =>
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const shippingCharge = 50;

  return (
    <main className="bg-gray-50 min-h-screen">
      
      <header className="bg-black text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold">Shopping Cart</h1>
          <p className="mt-2">Home / Shopping Cart</p>
        </div>
      </header>

      
      <div className="max-w-6xl mx-auto py-10 px-4">
        
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-lg rounded-lg">
            <thead>
              <tr className="bg-gray-200">
                <th className="py-3 px-4 text-left">Product</th>
                <th className="py-3 px-4 text-left">Price</th>
                <th className="py-3 px-4 text-left">Quantity</th>
                <th className="py-3 px-4 text-left">Total</th>
                <th className="py-3 px-4 text-left">Remove</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id} className="border-b">
                  <td className="py-3 px-4 flex items-center space-x-4">
                    <Image width={100} height={100}
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <span className="font-semibold">{item.name}</span>
                  </td>
                  <td className="py-3 px-4">${item.price.toFixed(2)}</td>
                  <td className="py-3 px-4">
                    <div className="flex items-center space-x-2">
                      <button
                        className="px-2 py-1 bg-gray-300 rounded"
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        className="px-2 py-1 bg-gray-300 rounded"
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    ${(item.price * item.quantity).toFixed(2)}
                  </td>
                  <td className="py-3 px-4">
                    <button
                      className="text-red-500"
                      onClick={() => removeItem(item.id)}
                    >
                      ✕
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
          
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold text-lg mb-4">Coupon Code</h3>
            <p className="text-gray-500 mb-4">
              Enter your coupon code to get a discount.
            </p>
            <div className="flex space-x-4">
              <input
                type="text"
                placeholder="Enter Here Code"
                className="border w-full p-2 rounded-lg"
              />
              <button className="bg-orange-500 text-white py-2 px-6 rounded-lg">
                Apply
              </button>
            </div>
          </div>

          
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold text-lg mb-4">Total Bill</h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span>Cart Subtotal</span>
                <span>${calculateTotal().toFixed(2)}</span>
              </li>
              <li className="flex justify-between">
                <span>Shipping Charge</span>
                <span>${shippingCharge.toFixed(2)}</span>
              </li>
              <li className="flex justify-between font-bold text-lg">
                <span>Total Amount</span>
                <span>${(calculateTotal() + shippingCharge).toFixed(2)}</span>
              </li>
            </ul>
            <button className="mt-4 w-full bg-orange-500 text-white py-2 px-6 rounded-lg">
             <Link href="/checkout"> Proceed to Checkout </Link>
            </button>
          </div>
        </div>
      </div>

      
    </main>
  );
};

export default Cart;
