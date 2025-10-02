// app/signup/page.tsx
"use client";
import { useState } from "react";
import Image from "next/image";

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/placeholder-bg.jpg')" }} 
    >
      <div className="flex w-full max-w-5xl px-6">
        <div className="hidden md:flex flex-col items-start justify-center flex-1">
          <button className="flex items-center gap-2 w-[260px] py-2 px-4 bg-white rounded-full shadow mb-4 hover:bg-gray-50">
            <Image
              src="/google-icon.svg"
              alt="Google"
              width={20}
              height={20}
            />
            <span className="text-gray-700 font-medium">Sign Up with Google</span>
          </button>

          <button className="flex items-center gap-2 w-[260px] py-2 px-4 bg-white rounded-full shadow hover:bg-gray-50">
            <Image
              src="/hedera-icon.svg"
              alt="Hedera"
              width={20}
              height={20}
            />
            <span className="text-gray-700 font-medium">Sign Up with Hedera</span>
          </button>
        </div>

        {/* Right Section (Form) */}
        <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
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
                className="w-1/2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-1/2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Email */}
            <input
              type="email"
              placeholder="Email or Phone number"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Password */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2 text-sm text-blue-600"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>

            {/* Confirm Password */}
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-2 text-sm text-blue-600"
              >
                {showConfirmPassword ? "Hide" : "Show"}
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
                I accept the{" "}
                <a href="#" className="text-blue-600 underline">
                  Terms of Use
                </a>{" "}
                &{" "}
                <a href="#" className="text-blue-600 underline">
                  Privacy Policy
                </a>.
              </label>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-yellow-500 text-white py-2 rounded-md font-medium hover:bg-yellow-600 transition"
            >
              Sign Up
            </button>
          </form>

          <p className="text-sm text-gray-600 mt-6 text-center">
            Already have an account?{" "}
            <a href="/login" className="text-blue-600 underline">
              Log in here.
            </a>
          </p>
        </div>
      </div>

      <div className="absolute bottom-4 left-6 text-sm text-white space-x-6">
        <a href="#" className="hover:underline">
          Terms of Use
        </a>
        <a href="#" className="hover:underline">
          Privacy Policy
        </a>
      </div>
    </div>
  );
}
