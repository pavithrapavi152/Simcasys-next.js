"use client";

import { FormEvent, useState } from "react";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e: FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phoneNumber,
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setMessage(data.message || "Registration failed");
        return;
      }

      setMessage("Registration successful!");

      setName("");
      setEmail("");
      setPhoneNumber("");
      setPassword("");
      setConfirmPassword("");
    } catch (error) {
      setMessage("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center mb-6">
          Create Account
        </h1>

        <form onSubmit={handleRegister} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block mb-1 font-medium">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border rounded-md px-3 py-2"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border rounded-md px-3 py-2"
              required
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block mb-1 font-medium">
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="Enter phone number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full border rounded-md px-3 py-2"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block mb-1 font-medium">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border rounded-md px-3 py-2"
              required
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block mb-1 font-medium">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full border rounded-md px-3 py-2"
              required
            />
          </div>

          {/* Register Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700"
          >
            {loading ? "Registering..." : "Register"}
          </button>

          {/* Message */}
          {message && (
            <p className="text-center text-sm mt-3">
              {message}
            </p>
          )}
        </form>

        <p className="text-center mt-5 text-sm">
          Already have an account?{" "}
          <a href="/login" className="text-green-600 font-medium">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}