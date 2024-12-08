import type { FC } from "react";
const WhyChooseUs: FC = () => (
  <section className="py-10">
    <div className="text-center">
      <h2 className="text-3xl font-bold">Why Choose Us</h2>
      <p className="mt-4 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 px-6">
      <div className="text-center">
        <h3 className="font-bold text-xl">Best Chef</h3>
        <p className="text-gray-500 mt-2">Lorem ipsum dolor sit amet consectetur.</p>
      </div>
      <div className="text-center">
        <h3 className="font-bold text-xl">120 Items</h3>
        <p className="text-gray-500 mt-2">Lorem ipsum dolor sit amet consectetur.</p>
      </div>
      <div className="text-center">
        <h3 className="font-bold text-xl">Clean Environment</h3>
        <p className="text-gray-500 mt-2">Lorem ipsum dolor sit amet consectetur.</p>
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
