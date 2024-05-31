import React from "react";

type Props = {};

const ContactUs: React.FC = ({}: Props) => {
  return (
    <section className="w-full flex justify-center mt-40">
      <form
        className="w-2/3 md:w-3/4 lg:w-1/5 flex flex-col p-4 gap-6  rounded-xl shadow-purple-200 shadow-inner"
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
          className=" h-12 bg-purple-950 text-white rounded-full hover:bg-white hover:text-purple-950 hover:border hover:border-purple-950 transition-all ease-linear delay-300"
          type="submit"
        >
          Submit
        </button>
      </form>
      <div></div>
    </section>
  );
};

export default ContactUs;
