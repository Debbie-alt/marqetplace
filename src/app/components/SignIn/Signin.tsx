"use client";
import { useState } from "react";
import Image from "next/image";

export default function SigninPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
 <div
  className=" px-4 md:px-16 py-6 relative min-h-screen bg-cover  bg-no-repeat"
 style={{
  backgroundImage: `
    linear-gradient(
       to top right,
      rgba(92, 164, 184, 0.45),
      rgba(41, 73, 82, 0.8)
    ),
    url('/signup.png')
  `,
}}
>
      {/* Top Navigation */}
      <nav className="flex w-fit items-center text-white gap-10">
        <div>
          <div className="logo flex gap-3 items-center">
            <div className="px-2 py-1 font-semibold text-3xl bg-[#2D2C2C] text-[#8FD7ED]">
              M
            </div>
            <h3 className=" text-xl sm:text-2xl font-semibold text-white">
              Marqetplace
            </h3>
          </div>
        </div>
        <a href="/store" className="ml-auto text-sm sm:text-base text-center text-white hover:underline">
          Sell on Marqetplace
        </a>
      </nav>

      {/* Main Content */}
      <div className="min-h-[90vh] flex items-center justify-center bg-[#8FD7ED0D]">
        <div className="flex w-full mx-auto justify-center  ">
          {/* Left side */}
          
          <div className="bg-white shadow-lg px-5 sm:px-10 mt-6 md:mt-0 md:px-14 py-16  w-full max-w-xl rounded-md">
            <h2 className="text-4xl font-medium text-gray-900 mb-2 text-center">
             Sign In
            </h2>
            <p className="text-gray-600 text-sm mb-6">
             Welcome Back to Marqetplace!
            </p>

            <form className="  space-y-4">
              

              <input
                type="email"
                placeholder="Hedera ID/Email"
                className="w-full px-3 py-2 bg-[#8FD7ED33] border-b border-b-gray-400 focus:outline-none rounded-md"
              />

              {/* Password */}
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="w-full px-3 py-2 bg-[#8FD7ED33] border-b border-b-gray-400 focus:outline-none rounded-md"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-2 text-sm text-gray-400"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>

             

              <button
                type="submit"
                className="w-fit px-7 bg-[#E8912E] text-white py-2  text-lg rounded-full font-medium hover:bg-yellow-600 transition"
              >
                Sign In
              </button>
            </form>

           
          </div>
        </div>

        <div className="absolute bottom-4 left-6 text-sm text-white space-x-6 px-10">
          <a href="#" className="hover:underline">
            Terms of Use
          </a>
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  );
}
