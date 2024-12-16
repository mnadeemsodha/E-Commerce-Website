import type { FC } from "react";
const TeamSection: FC = () => (
    <section className="py-10 bg-yellow-100">
      <div className="text-center">
        <h2 className="text-3xl font-bold">Team Members</h2>
        <p className="mt-2 text-gray-600">Meet our amazing team</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8 px-6">
        {[  'Mark Henry', 'Lucky Helen', 'Moon Henry', 'Tom Morrow'].map((name) => (
          <div className="text-center" key={name}>
            <div className="w-24 h-24 mx-auto bg-gray-300 rounded-full"></div>
            <h3 className="mt-4 font-bold">{name}</h3>
            <p className="text-gray-500">Role</p>
          </div>
        ))}
      </div>
    </section>
  );
  
  export default TeamSection;
  