import Image from "next/image";
import type { FC } from "react";

const TeamSection: FC = () => {
  
  const teamMembers = [
    {
      name: "Mark Henry",
      role: "Owner",
      image: "/m1.jpg", 
    },
    {
      name: "Lucky Helen",
      role: "Chef",
      image: "/m1.jpg", 
    },
    {
      name: "Moon Henry",
      role: "Founder",
      image: "/m1.jpg", 
    },
    {
      name: "Tom Morrow",
      role: "Specialist",
      image: "/m1.jpg", 
    },
  ];

  return (
    <section className="py-10 bg-yellow-100">
      <div className="text-center">
        <h2 className="text-3xl font-bold">Team Members</h2>
        <p className="mt-2 text-gray-600">Meet our amazing team</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8 px-6">
        {teamMembers.map(({ name, role, image }) => (
          <div className="text-center" key={name}>
            
            <div className="relative w-24 h-24 mx-auto">
              <Image
                src={image}
                alt={name}
                width={96} 
                height={96} 
                className="rounded-full object-cover" 
              />
            </div>
            
            <h3 className="mt-4 font-bold">{name}</h3>
            
            <p className="text-gray-500">{role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
