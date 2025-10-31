// app/components/ContactForm.tsx
"use client";

import React from "react";
import { MailsIcon, Upload } from "lucide-react";

const ContactForm = () => {
  return (
    <section className="bg-white py-10 px-6 md:px-20 lg:px-28 flex flex-col md:flex-row items-center justify-between rounded-lg mb-10">
      {/* Left Section */}
      <div className="w-full md:w-1/2 space-y-5">
        <h1 className="text-3xl font-semibold font-serif inline-flex items-center gap-2">
          Inquire <MailsIcon className="w-6 h-6 text-gray-600" />
        </h1>
        <p className="text-gray-400 font-light text-sm">
          Our friendly customer support team is always here to help you
        </p>

        {/* Form */}
        <form className="mt-6 space-y-4">
          {/* Full Name */}
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="First Name"
              className="w-1/2  bg-[#B0C3FE33]  rounded-md p-4 text-sm focus:outline-none focus:ring-1 focus:ring-gray-300"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-1/2  bg-[#B0C3FE33]  rounded-md p-4 text-sm focus:outline-none focus:ring-1 focus:ring-gray-300"
            />
          </div>

          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            defaultValue="udezechristian23@gmail.com"
            className="w-full  bg-[#B0C3FE33]  rounded-md px-3 py-3 text-sm  placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-300"
          />

          {/* Phone Number */}
          <input
            type="tel"
            placeholder="Phone Number"
            defaultValue="+2348105236938"
            className="w-full  bg-[#B0C3FE33]  rounded-md px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-gray-300"
          />

          {/* Message */}
          <textarea
            placeholder="Message"
            rows={3}
            className="w-full  bg-[#B0C3FE33]  rounded-md px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-gray-300 resize-none"
          />

          {/* Attach File */}
          <div className="  rounded-md px-4 py-8 bg-[#B0C3FE33] text-center text-gray-400 text-sm">
            <Upload className="mx-auto mb-8 w-5 h-5 opacity-60" />
            <p>
              Click or drag and drop to upload your file <br />
              <span className="text-xs">PNG, JPG, JPEG, PDF</span>
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row md:gap-20 gap-4 mt-10 ">
            <button
              type="submit"
              className="bg-[#E8912E] text-white px-5 py-2.5 text-sm hover:bg-orange-600 transition-colors"
            >
              Submit Message
            </button>
            <button
              type="button"
              className="border  px-7 py-3 text-sm hover:bg-black hover:text-white transition-colors"
            >
              Schedule Call
            </button>
          </div>
        </form>
      </div>

      {/* Right Section (Image) */}
      <div className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0">
        <img
          src="/rubiks.jpg"
          alt="Rubix illustration"
          className="max-w-sm md:max-w-lg object-contain"
        />
      </div>
    </section>
  );
};

export default ContactForm;
