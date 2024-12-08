import React from 'react';
import Link from 'next/link';
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-bold mb-4">About Us</h4>
            <p>Corporate clients and leisure travelers rely on Foodtuck for reliable service in major cities worldwide.</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Useful Links</h4>
            <ul>
              <li><Link href="/about" className="hover:text-yellow-500">About</Link></li>
              <li><Link href="/menu" className="hover:text-yellow-500">Menu</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Help</h4>
            <ul>
              <li><a href="#" className="hover:text-yellow-500">FAQ</a></li>
              <li><a href="#" className="hover:text-yellow-500">Support</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Recent Posts</h4>
            <p>Is fast food good for your body?</p>
          </div>
        </div>
      </footer>
  );
};

export default Footer;