// app/signup/page.tsx
"use client";
import { useState } from "react";
import Image from "next/image";
import { Link } from "react-router-dom";

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="px-16 py-6 bg-[#8FD7ED] relative"
     style={{background:"url('/signup.png')"}}
    >
    <nav className="flex w-fit items-center text-white gap-10">
      <div>
        <div className='logo flex gap-3 items-center'>
        <div className='px-2 py-1 font-semibold text-3xl bg-[#2D2C2C] text-[#8FD7ED]'>M</div>
        <h3 className='text-2xl font-semibold text-black'>Marqetplace</h3>

      </div>
      </div>
      <a href="/store" className="ml-auto">Sell on Marqetplace</a>
      
    </nav>
    <div
      className="min-h-screen flex items-center justify-center bg-[#8FD7ED0D] "
    >
      <div className="flex w-full max-w-5xl px-6">
        <div className="hidden md:flex flex-col items-start justify-center flex-1">
          <button className="flex items-center justify-center gap-2 w-[300px] py-2 px-2 border border-gray-700 rounded-full shadow mb-4 bg-gray-50">
           <Image
            src="/google.png"
            alt="Google"
            width={25}
            height={25}
          />
            <span className="text-gray-700 text-center font-medium">Sign Up with Google</span>
          </button>

          <button className="flex items-center justify-center gap-2 w-[300px] py-1.5 px-2 border border-gray-700 rounded-full shadow text-center bg-gray-50">
            <Image
              src="/hedera.png"
              alt="Hedera"
              width={30}
              height={30}
            />
            <span className="text-gray-700 font-medium text-center">Sign Up with Hedera</span>
          </button>
        </div>

        {/* Right Section (Form) */}
        <div className="bg-white  shadow-lg px-8 py-12 w-full max-w-xl">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            Create Account
          </h2>
          <p className="text-gray-600 text-sm mb-6">
            Please fill in this form to create an account on Marqetplace!
          </p>

          <form className="space-y-4">
            {/* First / Last Name */}
            <div className="flex gap-3">
              <input
                type="text"
                placeholder="First Name"
                className="w-1/2 px-3 py-2 bg-[#8FD7ED33] border-b border-b-gray-400 focus:outline-none rounded-md "
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-1/2 px-3 py-2 bg-[#8FD7ED33] border-b border-b-gray-400 focus:outline-none rounded-md "
              />
            </div>

            {/* Email */}
            <input
              type="email"
              placeholder="Email or Phone number"
              className="w-full px-3 py-2 bg-[#8FD7ED33] border-b border-b-gray-400 focus:outline-none rounded-md "
            />

            {/* Password */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full px-3 py-2  bg-[#8FD7ED33] border-b border-b-gray-400 focus:outline-none rounded-md "
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2 text-sm text-gray-400"
              >
                {showPassword ? "Hide" : "Show Password#"}
              </button>
            </div>

            {/* Confirm Password */}
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                className="w-full px-3 py-2bg-[#8FD7ED33] not-visited: border-b border-b-gray-400 focus:outline-none rounded-md "
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-2 text-sm text-gray-400"
              >
                {showConfirmPassword ? "Hide" : "Show Password#"}
              </button>
            </div>

            {/* Terms */}
            <div className="flex items-center text-sm">
              <input
                type="checkbox"
                id="terms"
                className="mr-2"
              />
              <label htmlFor="terms">
                <span className="text-[#2BBCE8]">I accept the{" "}</span>
                <a href="#" className="">
                  Terms of Use
                </a>{" "}
                &{" "}
                <a href="#" >
                  Privacy Policy
                </a>.
              </label>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-fit px-5 bg-[#E8912E] text-white py-2 rounded-full font-medium hover:bg-yellow-600 transition"
            >
              Sign Up
            </button>
          </form>

          <p className="text-sm text-gray-600 mt-6 text-center">
            Already have an account?{" "}
            <a href="/login" className="">
              Log in here.
            </a>
          </p>
        </div>
      </div>

      <div className="absolute bottom-4 left-6 text-sm textite space-x-6 px-10">
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
