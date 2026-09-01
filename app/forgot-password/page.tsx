"use client";

import { useState } from "react";
import Link from "next/link";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    setMessage("");
    setError("");

    try {
      const response = await fetch("/api/auth/forgot-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message);
        setEmail("");
      } else {
        setError(data.message);
      }
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-2">Forgot Password</h1>

        <p className="text-center text-gray-600 mb-6">
          Enter your email address to continue.
        </p>

        {message && (
          <div className="mb-4 rounded bg-green-100 p-3 text-green-700">
            {message}
          </div>
        )}

        {error && (
          <div className="mb-4 rounded bg-red-100 p-3 text-red-700">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label className="block mb-2 font-medium">Email Address</label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-blue-600 py-3 text-white font-semibold hover:bg-blue-700 disabled:bg-gray-400"
          >
            {loading ? "Please wait..." : "Submit"}
          </button>
        </form>

        <div className="mt-6 text-center">
          <Link href="/login" className="text-blue-600 hover:underline">
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
}
