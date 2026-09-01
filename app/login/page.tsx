"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();

    setError("");

    if (!email || !password) {
      setError("Please enter email and password");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch("/api/login", {
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

      if (!response.ok) {
        setError(data.message || "Login failed");
        return;
      }

      console.log("Login successful:", data);

      if (data.user) {
        localStorage.setItem("user", JSON.stringify(data.user));
      }

      router.push("/dashboard");

    } catch (error) {
      console.error("Login error:", error);
      setError("Unable to connect to server");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg">

        <h1 className="mb-2 text-center text-3xl font-bold">
          Login
        </h1>

        <p className="mb-6 text-center text-gray-500">
          Login to your account
        </p>

        <form onSubmit={handleLogin} className="space-y-5">

          {/* Email */}
          <div>
            <label className="mb-2 block font-medium">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="mb-2 block font-medium">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
            />

            {/* Forgot Password */}
            <div className="mt-2 text-right">
              <button
                type="button"
                onClick={() => router.push("/forgot-password")}
                className="text-sm text-blue-600 hover:underline"
              >
                Forgot Password?
              </button>
            </div>
          </div>

          {/* Error */}
          {error && (
            <p className="rounded-lg bg-red-100 p-3 text-sm text-red-600">
              {error}
            </p>
          )}

          {/* Login Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-green-600 py-3 font-semibold text-white hover:bg-green-700 disabled:opacity-50"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

        </form>

        {/* Sign Up */}
        <p className="mt-6 text-center text-sm text-gray-600">
          Don&apos;t have an account?{" "}
          <button
            type="button"
            onClick={() => router.push("/register")}
            className="font-semibold text-blue-600 hover:underline"
          >
            Sign Up
          </button>
        </p>

      </div>
    </main>
  );
}