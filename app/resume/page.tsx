"use client";

import { useState } from "react";

export default function Resume() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [jobRole, setJobRole] = useState("");
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (!resumeFile) {
      alert("Please upload your resume");
      return;
    }

    setLoading(true);

    try {
      const formData = new FormData();

      formData.append("name", name);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("jobRole", jobRole);
      formData.append("resume", resumeFile);

      const response = await fetch("/api/resume", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      console.log("API Response:", result);

      if (response.ok && result.success) {
        alert("Resume submitted successfully!");

        setName("");
        setEmail("");
        setPhone("");
        setJobRole("");
        setResumeFile(null);

        const fileInput = document.getElementById(
          "resume"
        ) as HTMLInputElement;

        if (fileInput) {
          fileInput.value = "";
        }
      } else {
        alert(result.message || "Resume submission failed");
      }
    } catch (error) {
      console.error("Submit Resume Error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#fffdf8] px-6 py-16">
      {/* PAGE TITLE */}
      <div className="mb-10 text-center">
        <p className="mb-3 text-sm font-medium text-gray-400">
          CAREERS @ SIMCASYS
        </p>

        <h1 className="text-4xl font-bold md:text-5xl">
          <span className="text-black">Submit Your </span>
          <span className="text-green-600">Resume</span>
        </h1>

        <p className="mt-4 text-gray-500">
          Join our team and explore career opportunities at Simcasys.
        </p>
      </div>

      {/* RESUME BOX */}
      <div className="mx-auto max-w-2xl">
        <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-md md:p-10">
          <h2 className="mb-2 text-2xl font-bold text-black">
            Resume Application
          </h2>

          <p className="mb-8 text-gray-500">
            Please enter your details and upload your latest resume.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* NAME */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-black outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
              />
            </div>

            {/* EMAIL */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Email Address
              </label>

              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-black outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
              />
            </div>

            {/* PHONE */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Phone Number
              </label>

              <input
                type="tel"
                placeholder="Enter your phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-black outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
              />
            </div>

            {/* JOB ROLE */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Job Role
              </label>

              <input
                type="text"
                placeholder="Enter the job role"
                value={jobRole}
                onChange={(e) => setJobRole(e.target.value)}
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-black outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
              />
            </div>

            {/* RESUME */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Upload Resume
              </label>

              <input
                id="resume"
                type="file"
                accept=".pdf"
                onChange={(e) => {
                  setResumeFile(e.target.files?.[0] || null);
                }}
                required
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-600 file:mr-4 file:rounded-md file:border-0 file:bg-green-600 file:px-4 file:py-2 file:font-semibold file:text-white hover:file:bg-green-700"
              />

              <p className="mt-2 text-xs text-gray-400">
                Accepted format: PDF. Maximum size: 5 MB.
              </p>
            </div>

            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-lg bg-green-600 py-3.5 text-lg font-semibold text-white transition hover:bg-green-700 disabled:cursor-not-allowed disabled:bg-gray-400"
            >
              {loading ? "Submitting..." : "Submit Resume"}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}