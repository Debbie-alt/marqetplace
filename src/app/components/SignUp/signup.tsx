"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  UserCredential,
} from "firebase/auth";
import { app } from "@/config/firebaseConfig";
import toast, { Toaster } from "react-hot-toast";

export default function SignupPage() {
  const router = useRouter();
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  function validateForm() {
    if (!firstName.trim() || !lastName.trim()) {
      toast.error("Please provide your full name.");
      return false;
    }
    if (!email.trim()) {
      toast.error("Please provide an email address.");
      return false;
    }
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters.");
      return false;
    }
    if (password !== confirmPassword) {
      toast.error("Passwords do not match.");
      return false;
    }
    return true;
  }

  async function handleSignup(e: React.FormEvent) {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    try {
      const userCredential: UserCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      toast.success(`Welcome ${firstName}! Account created successfully.`);
      router.push("/app/sellerupload");
    } catch (err: any) {
      const code = err?.code || "";
      if (code === "auth/email-already-in-use") {
        toast.error("This email is already in use. Try logging in instead.");
      } else if (code === "auth/invalid-email") {
        toast.error("Please provide a valid email address.");
      } else {
        toast.error(err?.message || "An unexpected error occurred.");
      }
    } finally {
      setLoading(false);
    }
  }

  async function handleGoogleSignup() {
    setLoading(true);
    try {
      await signInWithPopup(auth, provider);
      toast.success("Signed in successfully with Google!");
      router.push("/app/sellerupload");
    } catch (err: any) {
      toast.error(err?.message || "Google sign in failed.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      className="px-4 md:px-16 py-7 md:py-6 relative min-h-screen bg-cover bg-no-repeat"
      style={{
        backgroundImage: `
          linear-gradient(to top right, rgba(92, 164, 184, 0.45), rgba(41, 73, 82, 0.8)),
          url('/signup.png')
        `,
      }}
    >
      <Toaster position="top-right" reverseOrder={false} />

      <nav className="flex flex-col sm:flex-row w-fit items-center  text-white gap-4 sm:gap-10">
        <div className="logo flex gap-3 items-center">
          <div className="px-2 py-1 font-semibold text-3xl bg-[#2D2C2C] text-[#8FD7ED]">
            M
          </div>
          <h3 className="text-xl sm:text-2xl font-semibold text-white">
            Marqetplace
          </h3>
        </div>
        <a
          href="/store"
          className="ml-auto text-sm sm:text-base text-center text-white hover:underline"
        >
          Sell on Marqetplace
        </a>
      </nav>

      <div className="min-h-[90vh] flex items-center justify-center bg-[#8FD7ED0D]">
        <div className="flex w-full gap-4 mt-4 max-w-5xl">
          <div className="hidden md:flex flex-col items-start justify-center flex-1">
            <button
              type="button"
              onClick={handleGoogleSignup}
              disabled={loading}
              className="flex items-center justify-center gap-2 w-[300px] py-2 px-2 border border-gray-700 rounded-full shadow mb-4 bg-gray-50 hover:bg-gray-100"
            >
              <Image src="/google.png" alt="Google" width={25} height={25} />
              <span className="text-gray-700 font-medium">
                Sign Up with Google
              </span>
            </button>

            {/* <button className="flex items-center justify-center gap-2 w-[300px] py-1.5 px-2 border border-gray-700 rounded-full shadow bg-gray-50 hover:bg-gray-100">
              <Image src="/hedera.png" alt="Hedera" width={30} height={30} />
              <span className="text-gray-700 font-medium">
                Sign Up with Hedera
              </span>
            </button> */}
          </div>

          <div className="bg-white shadow-lg px-5 sm:px-10 mt-6 md:mt-0 md:px-14 py-16 w-full max-w-xl rounded-md">
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              Create Account
            </h2>
            <p className="text-gray-600 text-sm mb-6">
              Please fill in this form to create an account on Marqetplace!
            </p>

            <form onSubmit={handleSignup} className="space-y-4">
              <div className="flex gap-3">
                <input
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  type="text"
                  placeholder="First Name"
                  className="w-1/2 px-3 py-2 bg-[#8FD7ED33] border-b border-b-gray-400 focus:outline-none rounded-md"
                />
                <input
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  type="text"
                  placeholder="Last Name"
                  className="w-1/2 px-3 py-2 bg-[#8FD7ED33] border-b border-b-gray-400 focus:outline-none rounded-md"
                />
              </div>

              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Email"
                className="w-full px-3 py-2 bg-[#8FD7ED33] border-b border-b-gray-400 focus:outline-none rounded-md"
              />

              <div className="relative">
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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

              <div className="relative">
                <input
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm Password"
                  className="w-full px-3 py-2 bg-[#8FD7ED33] border-b border-b-gray-400 focus:outline-none rounded-md"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-2 text-sm text-gray-400"
                >
                  {showConfirmPassword ? "Hide" : "Show"}
                </button>
              </div>

              <div className="flex items-center text-sm">
                <input type="checkbox" id="terms" className="mr-2" />
                <label htmlFor="terms" className="text-gray-700">
                  <span className="text-[#2BBCE8]">I accept the </span>
                  <a href="#" className="underline">
                    Terms of Use
                  </a>{" "}
                  &{" "}
                  <a href="#" className="underline">
                    Privacy Policy
                  </a>.
                </label>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-fit px-7 bg-[#E8912E] text-white py-2 rounded-full font-medium hover:bg-yellow-600 transition disabled:opacity-60"
              >
                {loading ? "Creating..." : "Sign Up"}
              </button>
            </form>

            <p className="text-sm text-gray-600 mt-8 text-center">
              Already have an account?{" "}
              <a href="/signin" className="text-[#2BBCE8] hover:underline">
                Log in here.
              </a>
            </p>
          </div>
        </div>

        <div className="absolute bottom mb-8 sm:bottom-4 left-6 text-sm text-white space-x-6 px-10">
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
