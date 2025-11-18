import React, { useState } from "react";
import { services } from "../data/home.d";

type Props = {};

const ServicesPage: React.FC<Props> = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredServices = services.filter((service) =>
    service.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="w-full min-h-screen px-6 md:px-12 py-20 bg-black flex flex-col items-center ">
      {/* Top Section */}
      <div className="w-full max-w-7xl mb-12 text-center">
        <p className=" mb-2">Home / Services</p>
        <h1 className="text-4xl md:text-5xl font-extrabold ">Our Services</h1>
        <p className=" mt-2 md:text-lg">
          Explore the wide range of services we offer to help your business
          grow.
        </p>
      </div>

      {/* Search Bar */}
      <div className="w-full max-w-4xl mb-12">
        <input
          type="text"
          placeholder="Search services..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
        />
      </div>

      {/* Service Cards */}
      <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredServices.length > 0 ? (
          filteredServices.map((service) => (
            <a
              key={service.name}
              href="#"
              className=" rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group"
            >
              {/* Image */}
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={
                    service.more[0]?.includes("Web")
                      ? "code3.jpg"
                      : "graphics1.jpg"
                  }
                  alt={service.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col gap-3">
                <h3 className="text-xl font-bold ">{service.name}</h3>
                <p className=" text-sm md:text-base line-clamp-4">
                  {service.more?.join(", ")}
                </p>
              </div>
            </a>
          ))
        ) : (
          <p className="text-gray-500 col-span-full text-center">
            No services found.
          </p>
        )}
      </div>
    </section>
  );
};

export default ServicesPage;
