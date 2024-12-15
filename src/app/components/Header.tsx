import { MdOutlineShoppingBag } from 'react-icons/md';
import React from 'react';
import Link from 'next/link';
import { Input } from "@/components/ui/input"
import { CiSearch } from 'react-icons/ci';


const Header = () => {
  return (
    <header className="bg-black text-white">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <Link legacyBehavior href="/">
            <a className="font-bold text-lg"><span className='text-yellow-500'>Food</span>Tuck</a>
          </Link>

          <nav>
            <ul className="flex space-x-4">
              <li><Link legacyBehavior href="/"><a>Home</a></Link></li>
              <li><Link legacyBehavior href="/menu"><a>Menu</a></Link></li>
              <li><Link legacyBehavior href="/blog"><a>Blog</a></Link></li>
              <li><Link legacyBehavior href="/about"><a>About</a></Link></li>
              <li><Link legacyBehavior href="/shop"><a>Shop</a></Link></li>
              <li><Link legacyBehavior href="/cart"><a> <MdOutlineShoppingBag /></a></Link></li>
              <div className='flex items-center'>
              <Input type="text" placeholder="Search"/>
              <CiSearch/>
                  
              </div>    
            </ul>
          </nav>

          
        </div>
      </div>
    </header>
  );
};

export default Header;