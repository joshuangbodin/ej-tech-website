import { services } from "../data/home";

type Props = {};

const Offers = ({}: Props) => {
  return (
    <section className="w-full mt-20 justify-center gap-8 items-center flex flex-col">
      <div className="justify-center items-center flex   gap-8 flex-col  w-5/6">
        <h3 className="text-purple-950 font-bold text-3xl ">Our Services</h3>

        <div className="flex flex-col md:flex-row gap-20">
          {services.map((item) => (
            <div className="inf" key={item.index}>
              <p className=" text-orange-600   opacity-55 text-4xl font-extrabold ">
                {item.index}
              </p>
              <p className=" capitalize text-xl text-purple-950 font-bold">
                {item.name}
              </p>
              <ul className=" flex flex-col gap-1 justify-center relative   text-gray-500 list-disc text-sm">
                {item.more?.map((itemi) => (
                  <li>{itemi}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offers;
