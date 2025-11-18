import { services } from "../data/home.d";

type Props = {};

const Offers = ({}: Props) => {
  return (
    <section className="w-full bg-black pt-24 px-6 md:px-12 flex flex-col items-center">
      {/* Section Header */}
      <div className="text-center max-w-2xl mb-16">
        <h3 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Our Services
        </h3>
        <p className="text-gray-400 mt-4 text-lg md:text-xl">
          Delivering innovative solutions to empower your business in the
          digital era.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-7xl">
        {services.map((item) => (
          <div
            key={item.index}
            className="bg-gray-900  border border-gray-800 backdrop-blur-md rounded-2xl p-8 flex flex-col justify-start items-start transition-all duration-300 hover:scale-105  cursor-pointer"
          >
            <p className="text-orange-500 text-5xl font-extrabold mb-4">
              {item.index}
            </p>
            <h4 className="text-white text-2xl font-bold mb-4">{item.name}</h4>
            <ul className="list-disc list-inside text-gray-400 flex flex-col gap-2">
              {item.more?.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Offers;
