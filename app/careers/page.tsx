"use client";

import Link from "next/link";
import Image from "next/image";

export default function Careers() {
  return (
    <main className="w-full bg-white">
      <header className="w-full h-16 bg-white flex items-center justify-between px-8 shadow-sm">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/simcasys.svg"
            alt="SIMCASYS Logo"
            width={42}
            height={28}
            className="object-contain"
          />

          <span className="text-lg font-bold text-black">SIMCASYS</span>
        </Link>

        <nav className="flex items-center gap-7">
          <Link
            href="/"
            className="text-black font-semibold hover:text-green-600 transition"
          >
            Home
          </Link>

          <Link
            href="/about-us"
            className="text-black font-semibold hover:text-green-600 transition"
          >
            About Us
          </Link>

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
            </div>

            {/* ================= BOX 2 ================= */}

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
            </div>

            {/* ================= BOX 3 ================= */}

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
        </div>
      </section>
    </main>
  );
}
<<<<<<< HEAD

=======
>>>>>>> origin/feature/login-page
