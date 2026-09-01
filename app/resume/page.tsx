"use client";

import { useState } from "react";

export default function Resume() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
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

    try {
      setLoading(true);

      const formData = new FormData();

      formData.append("name", name);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("resume", resumeFile);

      // Call POST /api/resume
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
        setResumeFile(null);

        // Clear file input
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
      <div className="text-center mb-10">
        <p className="text-gray-400 text-sm font-medium mb-3">
          CAREERS @ SIMCASYS
        </p>

        <h1 className="text-4xl md:text-5xl font-bold">
          <span className="text-black">Submit Your </span>
          <span className="text-green-600">Resume</span>
        </h1>

        <p className="text-gray-500 mt-4">
          Join our team and explore career opportunities at Simcasys.
        </p>
      </div>

      {/* RESUME BOX */}
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-8 md:p-10">

          <h2 className="text-2xl font-bold text-black mb-2">
            Resume Application
          </h2>

          <p className="text-gray-500 mb-8">
            Please enter your details and upload your latest resume.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">

            {/* NAME */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-black outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
              />
            </div>

            {/* EMAIL */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address
              </label>

              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-black outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
              />
            </div>

            {/* PHONE */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Phone Number
              </label>

              <input
                type="tel"
                placeholder="Enter your phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-black outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
              />
            </div>

            {/* RESUME */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Upload Resume
              </label>

              <input
                id="resume"
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={(e) => {
                  setResumeFile(e.target.files?.[0] || null);
                }}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-600 bg-white file:mr-4 file:rounded-md file:border-0 file:bg-green-600 file:px-4 file:py-2 file:text-white file:font-semibold hover:file:bg-green-700"
              />

              <p className="text-xs text-gray-400 mt-2">
                Accepted formats: PDF, DOC, DOCX
              </p>
            </div>

            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-green-600 text-white py-3.5 rounded-lg font-semibold text-lg hover:bg-green-700 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {loading ? "Submitting..." : "Submit Resume"}
            </button>

          </form>
        </div>
      </div>

    </main>
  );
}

