const MenuSection: React.FC = () => (
    <section className="py-10">
      <div className="text-center">
        <h2 className="text-3xl font-bold">Our Food Menu</h2>
        <p className="text-gray-600 mt-2">Explore our delicious offerings</p>
      </div>
      <div className="mt-8 px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {Array(6).fill(0).map((_, index) => (
            <div
              key={index}
              className="flex justify-between items-center border-b pb-4"
            >
              <div>
                <h4 className="font-bold">Alder Grilled Chinook Salmon</h4>
                <p className="text-gray-500 text-sm">550 CAL</p>
              </div>
              <span className="text-orange-500 font-bold">$32</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
  
  export default MenuSection;
  