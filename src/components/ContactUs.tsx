import React from "react";

type Props = {};

const ContactUs: React.FC<Props> = ({}: Props) => {
  return (
    <section className="w-full mt-32 mb-32 px-6 md:px-12 flex flex-col items-center">
      <div className="flex flex-col md:flex-row gap-12 w-full max-w-7xl justify-center items-start">

        {/* Contact Form */}
        <form
          className="w-full md:w-1/2 flex flex-col gap-6"
          action="mailto:ejtechofficial@gmail.com"
        >
          <h3 className="text-3xl md:text-4xl font-extrabold text-white">
            Contact Us
          </h3>

          <input
            className="h-12 px-4 rounded-lg bg-transparent border border-gray-600 text-white placeholder-gray-400 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-all duration-300"
            type="text"
            placeholder="Your Name"
            required
          />
          <input
            className="h-12 px-4 rounded-lg bg-transparent border border-gray-600 text-white placeholder-gray-400 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-all duration-300"
            type="email"
            placeholder="Your Email"
            required
          />
          <textarea
            className="h-32 px-4 py-2 rounded-lg bg-transparent border border-gray-600 text-white placeholder-gray-400 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-all duration-300 resize-none"
            placeholder="Write Your Message"
            required
          />

          <button
            type="submit"
            className="h-12 bg-orange-500 text-purple-950 font-semibold rounded-full hover:bg-purple-950 hover:text-orange-500 border border-orange-500 transition-all duration-300"
          >
            Submit
          </button>
        </form>

        {/* Map Section */}
        <div className="w-full md:w-1/2 h-80 md:h-[400px] rounded-2xl overflow-hidden border border-gray-700">
          {/* Replace this iframe with your real map */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1980.123456!2d3.3792!3d6.5244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf0fdf1234567%3A0x1234567890abcdef!2sLagos%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus"
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
