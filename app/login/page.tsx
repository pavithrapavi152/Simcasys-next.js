"use client";

import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Login successfully completed!");
        console.log(data);
      } else {
        alert(data.message || "Invalid email or password");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        {/* Welcome Message */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-800">
            Welcome to Simcasys Technologies
          </h1>

          <p className="text-gray-600 font-medium mt-1">Private Limited</p>

          <p className="text-gray-500 text-sm mt-3">Login to your account</p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin}>
          {/* Email */}
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email
            </label>

            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 border border-gray-300
              rounded-lg focus:outline-none focus:ring-2
              focus:ring-green-500"
            />
          </div>

          {/* Password */}
          <div className="mb-2">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Password
            </label>

            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-3 pr-12 border
                border-gray-300 rounded-lg focus:outline-none
                focus:ring-2 focus:ring-green-500"
              />

              {/* Show / Hide Password */}
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2
                -translate-y-1/2 text-gray-500
                hover:text-gray-700"
              >
                {showPassword ? "text" : "password"}
              </button>
            </div>
          </div>

          {/* Forgot Password */}
          <div className="text-right mb-6">
            <Link
              href="/forgot-password"
              className="text-sm text-green-600
              hover:text-green-700 hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-green-600
            hover:bg-green-700 text-white
            font-semibold py-3 rounded-lg
            transition duration-200"
          >
            Login
          </button>
        </form>

        {/* Register */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <Link
              href="/signup"
              className="text-green-600 font-semibold
              hover:text-green-700 hover:underline"
            >
              SingUp
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
