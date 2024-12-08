import React from 'react';

const CheckoutPage: React.FC = () => {
  return (
    <div className="bg-gray-100">

      {/* Checkout Page */}
      <main className="container mx-auto py-8">
        <h2 className="text-2xl font-bold mb-4">Checkout</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Form Section */}
          <div className="md:col-span-2 bg-white p-6 rounded shadow">
            <h3 className="text-xl font-bold mb-4">Shipping Address</h3>
            <form className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="First name" className="border p-2 rounded" />
              <input type="text" placeholder="Last name" className="border p-2 rounded" />
              <input type="email" placeholder="Email address" className="border p-2 rounded col-span-2" />
              <input type="tel" placeholder="Phone number" className="border p-2 rounded col-span-2" />
              <input type="text" placeholder="Company" className="border p-2 rounded" />
              <select className="border p-2 rounded" defaultValue="">
                <option value="" disabled>Choose country</option>
              </select>
              <select className="border p-2 rounded" defaultValue="">
                <option value="" disabled>Choose city</option>
              </select>
              <input type="text" placeholder="Zip code" className="border p-2 rounded" />
              <input type="text" placeholder="Address 1" className="border p-2 rounded col-span-2" />
              <input type="text" placeholder="Address 2" className="border p-2 rounded col-span-2" />

              <div className="col-span-2 flex items-center">
                <input type="checkbox" id="billing-address" className="mr-2" />
                <label htmlFor="billing-address">Same as shipping address</label>
              </div>
            </form>

            <button
              className="mt-4 bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
              type="button"
            >
              Proceed to Shipping
            </button>
          </div>

          {/* Order Summary */}
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-xl font-bold mb-4">Order Summary</h3>
            <ul className="space-y-4">
              <li className="flex justify-between">
                <span>Burger</span>
                <span>$50</span>
              </li>
              <li className="flex justify-between">
                <span>Pizza</span>
                <span>$150</span>
              </li>
              <li className="flex justify-between">
                <span>Sub-total</span>
                <span>$200</span>
              </li>
              <li className="flex justify-between">
                <span>Tax</span>
                <span>$54</span>
              </li>
              <li className="flex justify-between font-bold">
                <span>Total</span>
                <span>$254</span>
              </li>
            </ul>

            <button
              className="mt-4 bg-yellow-500 text-white px-4 py-2 rounded w-full hover:bg-yellow-600"
              type="button"
            >
              Place Order
            </button>
          </div>
        </div>
      </main>

        </div>
  );
};

export default CheckoutPage;
