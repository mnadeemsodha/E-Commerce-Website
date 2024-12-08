import type { FC } from "react";
const HeroSection: FC = () => (
    <section className="bg-cover bg-center py-20" style={{ backgroundImage: "url('/hero-image.jpg')" }}>
      <div className="text-center text-blue-500">
        <h1 className="text-4xl font-bold">About Us</h1>
        <p className="mt-2 col-span-1 md:col-span-1">Food is an important part of a balanced diet</p>
        
      </div>
    </section>
  );
  
  export default HeroSection;
  