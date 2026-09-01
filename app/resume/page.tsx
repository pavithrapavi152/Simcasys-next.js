"use client";

import { useState } from "react";

export default function CareersPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [jobRole, setJobRole] = useState("");
  const [resume, setResume] = useState<File | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!resume) {
      alert("Please upload your resume");
      return;
    }

    const formData = new FormData();

    formData.append("fullName", fullName);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("jobRole", jobRole);
    formData.append("resume", resume);

    try {
      const response = await fetch("/api/resume", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message);

        // Clear Form
        setFullName("");
        setEmail("");
        setPhone("");
        setJobRole("");
        setResume(null);
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Resume Upload Error:", error);
      alert("Something went wrong");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        encType="multipart/form-data"
        className="w-full max-w-lg rounded-lg bg-white p-6 shadow-lg"
      >
        <h1 className="mb-6 text-center text-3xl font-bold">Apply for Job</h1>

        <div className="mb-4">
          <label className="block mb-2">Full Name</label>
          <input
            type="text"
            className="w-full rounded border p-2"
            placeholder="Enter Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">Email</label>
          <input
            type="email"
            className="w-full rounded border p-2"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">Phone</label>
          <input
            type="tel"
            className="w-full rounded border p-2"
            placeholder="Enter Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">Job Role</label>
          <input
            type="text"
            className="w-full rounded border p-2"
            placeholder="Enter Job Role"
            value={jobRole}
            onChange={(e) => setJobRole(e.target.value)}
            required
          />
        </div>

        <div className="mb-6">
          <label className="block mb-2">Upload Resume</label>
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            className="w-full rounded border p-2"
            onChange={(e) => {
              if (e.target.files && e.target.files.length > 0) {
                setResume(e.target.files[0]);
              }
            }}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full rounded bg-green-600 p-3 text-white hover:bg-green-700"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
}
