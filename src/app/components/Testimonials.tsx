const Testimonials: React.FC = () => (
    <section className="py-10 bg-gray-50">
      <div className="text-center">
        <h2 className="text-3xl font-bold">What Our Clients Are Saying</h2>
        <p className="text-gray-600 mt-2">We value our customers feedback</p>
      </div>
      <div className="mt-8 px-6 max-w-4xl mx-auto">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-700 italic">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
            pellentesque bibendum non dui volutpat fringilla bibendum.
          </p>
          <div className="flex items-center mt-4">
            <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
            <div className="ml-4">
              <h4 className="font-bold">Alamin Hasan</h4>
              <p className="text-gray-500 text-sm">Food Specialist</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
  
  export default Testimonials;
  