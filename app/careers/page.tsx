"use client";

<<<<<<< HEAD
import Link from "next/link";
import Image from "next/image";
=======
import { useState } from "react";

export default function Resume() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!resumeFile) {
      alert("Please upload your resume");
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();

      formData.append("fullName", name);
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
        const fileInput = document.getElementById("resume") as HTMLInputElement;

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

      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-8 md:p-10">
          <h2 className="text-2xl font-bold text-black mb-2">
            Resume Application
          </h2>

<<<<<<< HEAD
          <Link
            href="/services"
            className="text-black font-semibold hover:text-green-600 transition"
          >
            Services
          </Link>

          <Link href="/careers" className="text-green-600 font-semibold">
            Careers
          </Link>

          <Link
            href="/blogs"
            className="text-black font-semibold hover:text-green-600 transition"
          >
            Blogs
          </Link>

          <Link
            href="/contact"
            className="text-black font-semibold hover:text-green-600 transition"
          >
            Contact Us
          </Link>
        </nav>
      </header>

<<<<<<< HEAD

      {/* ================= CAREERS HERO SECTION ================= */}

=======
>>>>>>> origin/feature/login-page
      <section className="w-full min-h-[calc(100vh-64px)] bg-white flex items-center justify-center px-8 py-10">
        <div className="max-w-5xl w-full grid grid-cols-2 gap-10 items-center">
<<<<<<< HEAD

          {/* ================= LEFT SIDE ================= */}
=======
          {/* LEFT SIDE - CONTENT */}
>>>>>>> origin/feature/login-page

          <div>
            {/* SMALL HEADING */}

            <p className="text-gray-400 text-sm font-medium mb-3">Join us</p>

            {/* MAIN HEADING */}

            <h1 className="text-4xl font-bold leading-tight mb-5">
              <span className="text-black block">Become part</span>

              <span className="text-green-600 block">of our team</span>
            </h1>

            {/* PARAGRAPH */}

            <p className="text-gray-600 text-lg leading-8">
              We foster creativity, respect individuality, and believe in a
              healthy balance between work and life. Join a team where
              collaboration drives success and growth feels meaningful. Discover
              our career opportunities and build a future where your skills
              truly shine.
            </p>

<<<<<<< HEAD

            {/* ================= BOTTOM BOXES ================= */}

            <div className="flex gap-4 mt-7">

              {/* ================= EMAIL RESUME BOX ================= */}

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=contact@simcasys.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-left bg-[#fafafa] border-2 border-gray-300 rounded-xl px-5 py-4 shadow-sm cursor-pointer hover:border-green-600 hover:bg-green-50 hover:shadow-md transition duration-200 block"
              >

                <p className="text-gray-500 text-sm">
                  Email us your resume at
                </p>
=======
            {/* BOTTOM BOXES */}

            <div className="flex gap-4 mt-7">
              {/* EMAIL BOX */}

              <Link
                href="/careers"
                className="bg-[#fafafa] border border-gray-200 rounded-xl px-5 py-4 shadow-sm block cursor-pointer hover:shadow-md transition"
              >
                <p className="text-gray-400 text-sm">Email us your resume at</p>
>>>>>>> origin/feature/login-page

                <p className="text-black text-base font-bold mt-1">
                  contact@simcasys.com
                </p>
              </Link>

<<<<<<< HEAD
              </a>


              {/* ================= APPLY FOR A JOB ================= */}

              <Link
                href="/resume"
                className="bg-[#fafafa] border-2 border-gray-300 rounded-xl px-5 py-4 shadow-sm cursor-pointer hover:border-green-600 hover:bg-green-50 hover:shadow-md transition duration-200 flex items-center justify-center"
              >

                <span className="text-green-600 text-base font-semibold">
                  Apply for a Job
                </span>

              </Link>

=======
              {/* APPLY FOR THE JOB BOX */}
              <div className="bg-[#fafafa] border border-gray-200 rounded-xl px-5 py-4 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Apply for the Job
                </h3>

                <Link
                  href="/resume"
                  className="inline-block bg-[#1f7a2a] text-white px-5 py-2 rounded-lg font-medium hover:bg-[#16d830] transition"
                >
                  Apply Now
                </Link>
              </div>
>>>>>>> origin/feature/login-page
            </div>
          </div>

<<<<<<< HEAD

          {/* ================= RIGHT SIDE IMAGE ================= */}
=======
          {/* RIGHT SIDE - IMAGE */}
>>>>>>> origin/feature/login-page

          <div className="w-full h-[360px]">
            <Image
              src="/careers.png"
              alt="Careers at Simcasys"
              width={650}
              height={500}
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>
      </section>

<<<<<<< HEAD

      {/* ================= LIFE @ SIMCASYS ================= */}
=======
      {/* ================================================= */}
      {/* SECOND SECTION - LIFE @ SIMCASYS */}
      {/* ================================================= */}
>>>>>>> origin/feature/login-page

      <section className="w-full min-h-screen bg-[#fffdf8] px-10 py-12">
        <div className="max-w-6xl mx-auto">
<<<<<<< HEAD

=======
>>>>>>> origin/feature/login-page
          {/* SMALL TOP HEADING */}

          <p className="text-gray-400 text-sm font-medium tracking-wide mb-8">
            LIFE @ SIMCASYS
          </p>

<<<<<<< HEAD

          {/* ================= THREE BOXES ================= */}
=======
          {/* THREE BOXES */}
>>>>>>> origin/feature/login-page

          <div className="grid grid-cols-3 gap-7">
            {/* ================= BOX 1 ================= */}

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
<<<<<<< HEAD
=======
              {/* IMAGE */}
>>>>>>> origin/feature/login-page

              <div className="w-full h-[240px]">
                <Image
                  src="/life1.jpeg"
                  alt="Restart with Simcasys"
                  width={600}
                  height={450}
                  className="w-full h-full object-cover"
                />
              </div>

<<<<<<< HEAD
              <div className="p-6">

=======
              {/* CONTENT */}

              <div className="p-6">
>>>>>>> origin/feature/login-page
                <h2 className="text-2xl font-bold text-black mb-4">
                  Restart with Simcasys
                </h2>

                <p className="text-green-600 text-base leading-7">
                  Restart with Simcasys is a launchpad for professionals. This
                  is an opportunity to learn new skills and build digital
                  capabilities in the latest and emerging technologies.
                </p>
              </div>
=======
          <p className="text-gray-500 mb-8">
            Please enter your details and upload your latest resume.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
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
>>>>>>> feature/resume-upload
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address
              </label>

<<<<<<< HEAD
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
<<<<<<< HEAD
=======
              {/* IMAGE */}
>>>>>>> origin/feature/login-page

              <div className="w-full h-[240px]">
                <Image
                  src="/life2.jpeg"
                  alt="Learning Experience"
                  width={600}
                  height={450}
                  className="w-full h-full object-cover"
                />
              </div>

<<<<<<< HEAD
              <div className="p-6">

=======
              {/* CONTENT */}

              <div className="p-6">
>>>>>>> origin/feature/login-page
                <h2 className="text-2xl font-bold text-black mb-4">
                  LEARNING EXPERIENCE (LEX)
                </h2>

                <p className="text-green-600 text-base leading-7">
                  We hire minds that think and hearts that care. Our employees
                  grow into leaders, not just roles. That’s how Simcasys moves
                  forward.
                </p>
              </div>
=======
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-black outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
              />
>>>>>>> feature/resume-upload
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Phone Number
              </label>

<<<<<<< HEAD
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
<<<<<<< HEAD
=======
              {/* IMAGE */}
>>>>>>> origin/feature/login-page

              <div className="w-full h-[240px]">
                <Image
                  src="/life3.jpg"
                  alt="Culture at Simcasys"
                  width={600}
                  height={450}
                  className="w-full h-full object-cover"
                />
              </div>

<<<<<<< HEAD
              <div className="p-6">

                <h2 className="text-2xl font-bold text-black mb-4">
                  CULTURE
                </h2>
=======
              {/* CONTENT */}

              <div className="p-6">
                <h2 className="text-2xl font-bold text-black mb-4">CULTURE</h2>
>>>>>>> origin/feature/login-page

                <p className="text-green-600 text-base leading-7">
                  A culture that encourages learning and innovation. Employees
                  grow through teamwork and shared goals. Success is built
                  together.
                </p>
              </div>
            </div>
<<<<<<< HEAD

=======
>>>>>>> origin/feature/login-page
          </div>
=======
              <input
                type="tel"
                placeholder="Enter your phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-black outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
              />
            </div>

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

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-green-600 text-white py-3.5 rounded-lg font-semibold text-lg hover:bg-green-700 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {loading ? "Submitting..." : "Submit Resume"}
            </button>
          </form>
>>>>>>> feature/resume-upload
        </div>
      </div>
    </main>
  );
}
<<<<<<< HEAD

=======
>>>>>>> origin/feature/login-page
