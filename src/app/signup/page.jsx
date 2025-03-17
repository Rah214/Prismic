"use client";

import React, { useState } from "react";
import Link from "next/link"; // Import Link from next/link

const Page = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Sign-up successful!");
    setName("");
    setEmail("");
    setPassword("");
    // Handle sign-up logic here
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-purple-500 to-white">
      <div className="bg-white p-8 rounded-3xl shadow-2xl w-full max-w-sm">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          Create an Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2" htmlFor="name">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-4 rounded-xl border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your full name"
              required
            />
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-4 rounded-xl border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-4 rounded-xl border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Sign Up Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-400 to-teal-500 text-white text-lg font-semibold hover:from-purple-500 hover:to-white transition duration-300"
          >
            Sign Up
          </button>
        </form>

        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <Link href="/login" className="text-blue-500 font-semibold hover:underline">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
