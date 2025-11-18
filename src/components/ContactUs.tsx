import React from "react";

type Props = {};

const ContactUs: React.FC<Props> = ({}: Props) => {
  return (
    <section className="w-full bg-black pt-32 pb-32 px-6 md:px-12 flex flex-col items-center">
      <div className="flex flex-col md:flex-row gap-12 w-full max-w-7xl justify-center items-start">
        {/* Contact Form */}
        <form
          className="w-full md:w-1/2 flex flex-col gap-6 md:bg-gray-900/40 backdrop-blur-md md:p-8 rounded-2xl shadow-lg"
          action="mailto:ejtechofficial@gmail.com"
        >
          <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Contact Us
          </h3>

          <input
            className="h-12 px-4 rounded-lg bg-gray-800/60 border border-gray-700 text-white placeholder-gray-400 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-all duration-300 shadow-sm"
            type="text"
            placeholder="Your Name"
            required
          />
          <input
            className="h-12 px-4 rounded-lg bg-gray-800/60 border border-gray-700 text-white placeholder-gray-400 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-all duration-300 shadow-sm"
            type="email"
            placeholder="Your Email"
            required
          />
          <textarea
            className="h-32 px-4 py-2 rounded-lg bg-gray-800/60 border border-gray-700 text-white placeholder-gray-400 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-all duration-300 resize-none shadow-sm"
            placeholder="Write Your Message"
            required
          />

          <button
            type="submit"
            className="h-12 bg-orange-600/70 text-white font-semibold rounded-xl hover:bg-gray-900 hover:text-orange-500 border border-orange-500/60 transition-all duration-300 shadow-md"
          >
            Submit
          </button>
        </form>

        {/* Map Section */}
        <div className="w-full md:w-1/2 h-80 md:h-[520px] rounded-2xl overflow-hidden border border-gray-700 shadow-inner">
          {/* Dark themed map iframe */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1980.123456!2d3.3792!3d6.5244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf0fdf1234567%3A0x1234567890abcdef!2sLagos%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus&theme=dark"
            className="w-full h-full border-0"
            loading="lazy"
            title="Location Map"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
