import React from "react";

type Props = {};

const ContactUs: React.FC = ({}: Props) => {
  return (
    <section className="w-full flex-col md:flex-row md flex justify-center mt-40 mb-40">
      <div className="flex flex-col md:flex-row w-full justify-center items-center gap-10 md:gap-20">
        <form
          className="w-4/5 md:w-3/4 lg:w-2/5 flex flex-col order-1 p-4 gap-6  rounded-xl"
          action="mailto:ejtechofficial@gmail.com"
        >
          <h3 className="text-purple-950 font-bold text-3xl">Contact Us </h3>
          <input
            className=" h-12 bg-slate-50 rounded p-1"
            type="text"
            placeholder="name"
            required
          />
          <input
            className=" h-12 bg-slate-50 rounded p-1"
            type="email"
            placeholder="email"
            required
          />
          <textarea
            className=" bg-slate-50 rounded p-1"
            placeholder="Write Your Message"
            name=""
            id=""
            required
          ></textarea>
          <button
            className=" h-12 bg-purple-900 text-white rounded-full hover:bg-white hover:text-purple-900 hover:border hover:border-purple-900 transition-all ease-linear delay-300"
            type="submit"
          >
            Submit
          </button>
        </form>
        <div className="w-4/6 md:w-1/3 bg-purple-950 rounded-full  md:rounded-3xl md:h-4/5 flex justify-center items-center">
          <img src="Black Clay Isometric Apple Devices.png" className="imgSkew" alt="" />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
