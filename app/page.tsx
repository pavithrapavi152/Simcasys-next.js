
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const words = ["Succeed", "Create", "Collaborate"];
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setWordIndex((current) => (current + 1) % words.length);
    }, 1500);

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="w-full min-h-screen scroll-smooth">

      {/* ================================================= */}
      {/* HEADER */}
      {/* ================================================= */}

      <header className="fixed top-0 left-0 z-50 w-full bg-white shadow-md">

        <div className="w-full h-16 px-8 flex items-center justify-between">

          {/* LOGO */}

          <div className="flex items-center gap-3">

            <Image
              src="/simcasys.svg"
              alt="SIMCASYS Logo"
              width={50}
              height={30}
              className="w-[50px] h-auto object-contain"
            />

            <span className="text-xl font-bold text-black">
              SIMCASYS
            </span>

          </div>


          {/* MENU */}

          <nav className="flex items-center gap-7">

            <Link
              href="#home"
              className="font-semibold text-black hover:text-green-600"
            >
              Home
            </Link>

            <Link
              href="#about"
              className="font-semibold text-black hover:text-green-600"
            >
              About Us
            </Link>

            <Link
              href="#services"
              className="font-semibold text-black hover:text-green-600"
            >
              Services
            </Link>

            <Link
              href="#careers"
              className="font-semibold text-black hover:text-green-600"
            >
              Careers
            </Link>

            <Link
              href="#blogs"
              className="font-semibold text-black hover:text-green-600"
            >
              Blogs
            </Link>

            <Link
              href="#contact"
              className="font-semibold text-black hover:text-green-600"
            >
              Contact Us
            </Link>

          </nav>

        </div>

      </header>


      {/* ================================================= */}
      {/* HOME */}
      {/* ================================================= */}

      <section
        id="home"
        className="relative w-full min-h-screen flex items-center justify-center scroll-mt-16"
      >

        {/* BACKGROUND IMAGE */}

        <Image
          src="/background.png"
          alt="SIMCASYS"
          fill
          priority
          className="object-cover"
        />

        {/* DARK OVERLAY */}

        <div className="absolute inset-0 bg-black/30"></div>


        {/* HOME CONTENT */}

        <div className="relative z-10 text-center px-6">

          {/* MAIN HEADING */}

          <h1 className="text-4xl md:text-5xl font-bold">

            <span className="text-white">
              Turning Ideas into
            </span>

            <span className="text-green-400">
              {" "}Real Solutions
            </span>

          </h1>


          {/* ANIMATED WORD */}

          <div className="mt-5 h-10 flex items-center justify-center">

            <span
              key={words[wordIndex]}
              className="text-orange-400 font-semibold text-xl animate-fadeIn"
            >
              {words[wordIndex]}
            </span>

          </div>


          {/* COMPANY NAME */}

          <p className="text-xl text-white">
            SIMCASYS TECHNOLOGIES
          </p>


          {/* BUTTONS */}

          <div className="mt-8 flex justify-center gap-5">

            <Link
              href="#services"
              className="rounded-lg border-2 border-white bg-white/10 px-7 py-3 font-semibold text-white backdrop-blur-sm transition hover:bg-white hover:text-black"
            >
              Our Services
            </Link>


            <Link
              href="#contact"
              className="rounded-lg border-2 border-white bg-white/10 px-7 py-3 font-semibold text-white backdrop-blur-sm transition hover:bg-white hover:text-black"
            >
              Contact Us
            </Link>

          </div>

        </div>

      </section>


      {/* ================================================= */}
      {/* ABOUT US */}
      {/* ================================================= */}

      <section
        id="about"
        className="w-full bg-white px-8 py-20 scroll-mt-16"
      >

        {/* FIRST ABOUT SECTION */}

        <div className="max-w-6xl mx-auto min-h-screen flex items-center">

          <div className="w-full grid grid-cols-2 gap-12 items-center">

            {/* IMAGE */}

            <div className="w-full h-[420px]">

              <Image
                src="/about1.png"
                alt="Our Mission"
                width={700}
                height={500}
                className="w-full h-full object-cover rounded-xl"
              />

            </div>


            {/* CONTENT */}

            <div className="bg-[#fffaf0] p-8 rounded-xl">

              <h2 className="text-4xl font-bold mb-6">

                <span className="text-black">
                  Our{" "}
                </span>

                <span className="text-green-600">
                  Mission
                </span>

              </h2>

              <p className="text-gray-700 leading-8">

                Simcasys Technologies Pvt. Ltd. is a modern IT solutions
                company focused on building high-quality digital products.
                We develop responsive websites, Android & iOS mobile apps,
                e-commerce platforms, and custom ERP software tailored to
                business needs.

                <br />
                <br />

                Our team combines smart design, strong engineering, and
                scalable cloud technologies to help companies launch faster
                and grow smoother. At Simcasys, we believe technology should
                be simple, reliable, and built around real users.

                <br />
                <br />

                We aim to be a trusted partner for businesses looking to
                transform their ideas into powerful digital solutions.

              </p>

            </div>

          </div>

        </div>


        {/* SECOND ABOUT SECTION */}

        <div className="max-w-6xl mx-auto min-h-screen flex items-center">

          <div className="w-full grid grid-cols-2 gap-12 items-center">

            {/* CONTENT */}

            <div className="bg-[#fffaf0] p-8 rounded-xl">

              <h2 className="text-4xl font-bold mb-6">

                <span className="text-black">
                  Our{" "}
                </span>

                <span className="text-green-600">
                  Culture
                </span>

              </h2>

              <p className="text-gray-700 leading-8">

                At Simcasys, we foster an environment where open
                communication, integrity, and empowered decision-making
                build trust among employees. We are proud to be an equal
                opportunity employer.

                <br />
                <br />

                We promote technological excellence by investing in modern
                resources and encouraging continuous learning. Transparency
                is promoted through open dialogue, visible decision-making
                processes, and shared responsibility.

                <br />
                <br />

                Simcasys is a fun and enjoyable work environment shaped by
                social events and wellness programs. Together, these values
                cultivate a vibrant and inclusive workplace, attracting top
                talent and driving innovation for sustainable success.

              </p>

            </div>


            {/* IMAGE */}

            <div className="w-full h-[420px]">

              <Image
                src="/about2.jpg"
                alt="Our Culture"
                width={700}
                height={500}
                className="w-full h-full object-cover rounded-xl"
              />

            </div>

          </div>

        </div>

      </section>


      {/* ================================================= */}
      {/* SERVICES */}
      {/* ================================================= */}

      <section
        id="services"
        className="w-full min-h-screen bg-[#fffdf7] px-8 py-20 scroll-mt-16"
      >

        <div className="max-w-7xl mx-auto">

          <h2 className="text-4xl font-bold leading-tight">

            <span className="block text-black">
              SERVICES OFFERED
            </span>

            <span className="block text-green-600">
              INDUSTRY EXPERTISE
            </span>

          </h2>


          <div className="mt-10 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">


            {/* SERVICE 1 */}

            <div className="group relative overflow-hidden rounded-2xl bg-white shadow-sm">

              <div className="relative h-[280px] w-full">

                <Image
                  src="/services1.jpg"
                  alt="Consulting Services"
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/20"></div>

                <div className="absolute inset-x-0 bottom-0 p-5">

                  <h2 className="pr-12 text-xl font-bold text-white">
                    Consulting Services
                  </h2>

                </div>

                <Link
                  href="/services/consulting-services"
                  className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-green-600 text-xl font-bold text-white hover:bg-green-700"
                >
                  →
                </Link>

              </div>

            </div>


            {/* SERVICE 2 */}

            <div className="group relative overflow-hidden rounded-2xl bg-white shadow-sm">

              <div className="relative h-[280px] w-full">

                <Image
                  src="/services2.png"
                  alt="Fintech Product Development"
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/20"></div>

                <div className="absolute inset-x-0 bottom-0 p-5">

                  <h2 className="pr-12 text-xl font-bold text-white">
                    Fintech Product Development
                  </h2>

                </div>

                <Link
                  href="/services/fintech-product-development"
                  className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-green-600 text-xl font-bold text-white hover:bg-green-700"
                >
                  →
                </Link>

              </div>

            </div>


            {/* SERVICE 3 */}

            <div className="group relative overflow-hidden rounded-2xl bg-white shadow-sm">

              <div className="relative h-[280px] w-full">

                <Image
                  src="/services3.jpg"
                  alt="Healthcare IT Solutions"
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/20"></div>

                <div className="absolute inset-x-0 bottom-0 p-5">

                  <h2 className="pr-12 text-xl font-bold text-white">
                    Healthcare IT Solutions
                  </h2>

                </div>

                <Link
                  href="/services/healthcare-it-solutions"
                  className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-green-600 text-xl font-bold text-white hover:bg-green-700"
                >
                  →
                </Link>

              </div>

            </div>


            {/* SERVICE 4 */}

            <div className="group relative overflow-hidden rounded-2xl bg-white shadow-sm">

              <div className="relative h-[280px] w-full">

                <Image
                  src="/services4.jpg"
                  alt="Retail and E-commerce"
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/20"></div>

                <div className="absolute inset-x-0 bottom-0 p-5">

                  <h2 className="pr-12 text-xl font-bold text-white">
                    Retail and E-commerce
                  </h2>

                </div>

                <Link
                  href="/services/retail-ecommerce"
                  className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-green-600 text-xl font-bold text-white hover:bg-green-700"
                >
                  →
                </Link>

              </div>

            </div>


            {/* SERVICE 5 */}

            <div className="group relative overflow-hidden rounded-2xl bg-white shadow-sm">

              <div className="relative h-[280px] w-full">

                <Image
                  src="/services5.jpg"
                  alt="Cloud and DevOps"
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/20"></div>

                <div className="absolute inset-x-0 bottom-0 p-5">

                  <h2 className="pr-12 text-xl font-bold text-white">
                    Cloud and DevOps
                  </h2>

                </div>

                <Link
                  href="/services/cloud-devops"
                  className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-green-600 text-xl font-bold text-white hover:bg-green-700"
                >
                  →
                </Link>

              </div>

            </div>


            {/* SERVICE 6 */}

            <div className="group relative overflow-hidden rounded-2xl bg-white shadow-sm">

              <div className="relative h-[280px] w-full">

                <Image
                  src="/services6.png"
                  alt="Mobile App Development"
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/20"></div>

                <div className="absolute inset-x-0 bottom-0 p-5">

                  <h2 className="pr-12 text-xl font-bold text-white">
                    Mobile App Development
                  </h2>

                </div>

                <Link
                  href="/services/mobile-app-development"
                  className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-green-600 text-xl font-bold text-white hover:bg-green-700"
                >
                  →
                </Link>

              </div>

            </div>


            {/* SERVICE 7 */}

            <div className="group relative overflow-hidden rounded-2xl bg-white shadow-sm">

              <div className="relative h-[280px] w-full">

                <Image
                  src="/services7.jpg"
                  alt="Intership Programs"
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/20"></div>

                <div className="absolute inset-x-0 bottom-0 p-5">

                  <h2 className="pr-12 text-xl font-bold text-white">
                    Intership Programs
                  </h2>

                </div>

                <Link
                  href="/services/intership-programs"
                  className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-green-600 text-xl font-bold text-white hover:bg-green-700"
                >
                  →
                </Link>

              </div>

            </div>


            {/* SERVICE 8 */}

            <div className="group relative overflow-hidden rounded-2xl bg-white shadow-sm">

              <div className="relative h-[280px] w-full">

                <Image
                  src="/services8.avif"
                  alt="IT Support and Maintenance"
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/20"></div>

                <div className="absolute inset-x-0 bottom-0 p-5">

                  <h2 className="pr-12 text-xl font-bold text-white">
                    IT Support and Maintenance
                  </h2>

                </div>

                <Link
                  href="/services/it-support-maintenance"
                  className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-green-600 text-xl font-bold text-white hover:bg-green-700"
                >
                  →
                </Link>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================================================= */}
      {/* CAREERS */}
      {/* ================================================= */}

      <section
        id="careers"
        className="w-full bg-white scroll-mt-16"
      >

        {/* FIRST CAREERS PART */}

        <div className="w-full min-h-screen flex items-center px-8 py-20">

          <div className="max-w-6xl mx-auto w-full grid grid-cols-2 gap-12 items-center">

            {/* CONTENT */}

            <div>

              <p className="text-gray-400 text-sm mb-3">
                Join us
              </p>

              <h2 className="text-4xl font-bold leading-tight mb-6">

                <span className="text-black block">
                  Become part
                </span>

                <span className="text-green-600 block">
                  of our team
                </span>

              </h2>

              <p className="text-gray-600 text-lg leading-8">

                We foster creativity, respect individuality, and believe
                in a healthy balance between work and life. Join a team
                where collaboration drives success and growth feels
                meaningful. Discover our career opportunities and build a
                future where your skills truly shine.

              </p>


              <div className="flex gap-4 mt-8">

                <div className="bg-[#fafafa] border border-gray-200 rounded-xl px-5 py-4">

                  <p className="text-gray-400 text-sm">
                    Email us your resume at
                  </p>

                  <p className="font-semibold text-black">
                    contact@simcasys.com
                  </p>

                </div>


                <div className="bg-[#fafafa] border border-gray-200 rounded-xl px-5 py-4">

                  <p className="font-semibold text-gray-600">
                    We're a great place
                  </p>

                  <p className="font-semibold text-gray-600">
                    to work certified
                  </p>

                </div>

              </div>

            </div>


            {/* IMAGE */}

            <div className="w-full h-[400px]">

              <Image
                src="/careers.png"
                alt="Careers"
                width={700}
                height={500}
                className="w-full h-full object-cover rounded-xl"
              />

            </div>

          </div>

        </div>


        {/* LIFE @ SIMCASYS */}

        <div className="w-full bg-[#fffdf8] min-h-screen px-8 py-20">

          <div className="max-w-6xl mx-auto">

            <p className="text-gray-400 text-sm mb-8">
              LIFE @ SIMCASYS
            </p>


            <div className="grid grid-cols-3 gap-7">

              {/* BOX 1 */}

              <div className="bg-white rounded-2xl overflow-hidden shadow-sm">

                <Image
                  src="/life1.jpeg"
                  alt="Restart with Simcasys"
                  width={600}
                  height={450}
                  className="w-full h-[240px] object-cover"
                />

                <div className="p-6">

                  <h3 className="text-2xl font-bold text-black mb-4">
                    Restart with Simcasys
                  </h3>

                  <p className="text-green-600 leading-7">

                    Restart with Simcasys is a launchpad for professionals.
                    This is an opportunity to learn new skills and build
                    digital capabilities in the latest and emerging
                    technologies.

                  </p>

                </div>

              </div>


              {/* BOX 2 */}

              <div className="bg-white rounded-2xl overflow-hidden shadow-sm">

                <Image
                  src="/life2.jpeg"
                  alt="Learning Experience"
                  width={600}
                  height={450}
                  className="w-full h-[240px] object-cover"
                />

                <div className="p-6">

                  <h3 className="text-2xl font-bold text-black mb-4">
                    LEARNING EXPERIENCE (LEX)
                  </h3>

                  <p className="text-green-600 leading-7">

                    We hire minds that think and hearts that care. Our
                    employees grow into leaders, not just roles. That’s how
                    Simcasys moves forward.

                  </p>

                </div>

              </div>


              {/* BOX 3 */}

              <div className="bg-white rounded-2xl overflow-hidden shadow-sm">

                <Image
                  src="/life3.jpg"
                  alt="Culture"
                  width={600}
                  height={450}
                  className="w-full h-[240px] object-cover"
                />

                <div className="p-6">

                  <h3 className="text-2xl font-bold text-black mb-4">
                    CULTURE
                  </h3>

                  <p className="text-green-600 leading-7">

                    A culture that encourages learning and innovation.
                    Employees grow through teamwork and shared goals.
                    Success is built together.

                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================================================= */}
      {/* BLOGS */}
      {/* ================================================= */}

      <section
        id="blogs"
        className="w-full min-h-screen bg-white flex items-center px-8 py-20 scroll-mt-16"
      >

        <div className="max-w-6xl mx-auto w-full grid grid-cols-2 gap-12 items-center">

          {/* CONTENT */}

          <div>

            <h2 className="text-4xl font-bold mb-6">

              <span className="text-black">
                Simcasys{" "}
              </span>

              <span className="text-green-600">
                Blogs
              </span>

            </h2>

            <p className="text-gray-600 text-lg leading-8">

              The IT industry continues to evolve rapidly, driving innovation
              and operational excellence across all sectors. In this blog,
              we provide professional insights on emerging technologies,
              software development practices, cloud solutions, cybersecurity,
              and digital transformation strategies to help businesses stay
              competitive and future-ready.

            </p>

          </div>


          {/* IMAGE */}

          <div className="w-full h-[400px]">

            <Image
              src="/blog.jpg"
              alt="Simcasys Blogs"
              width={700}
              height={500}
              className="w-full h-full object-cover rounded-xl"
            />

          </div>

        </div>

      </section>


      {/* ================================================= */}
      {/* CONTACT US */}
      {/* ================================================= */}

      <section
        id="contact"
        className="w-full min-h-screen bg-[#f4fbff] flex items-center px-8 py-20 scroll-mt-16"
      >

        <div className="max-w-6xl mx-auto w-full">

          {/* HEADING */}

          <div className="text-center mb-10">

            <h2 className="text-4xl font-bold">

              <span className="text-black">
                Contact{" "}
              </span>

              <span className="text-green-600">
                Us
              </span>

            </h2>

            <p className="text-gray-500 text-sm mt-3 max-w-md mx-auto">

              Have a project idea or need help? Send us a message
              and our team will get back to you shortly.

            </p>

          </div>


          {/* CONTACT */}

          <div className="grid grid-cols-2 gap-12 items-center">

            {/* FORM */}

            <div className="bg-white rounded-2xl p-8 shadow-sm">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-200 rounded-lg px-4 py-3 mb-4 outline-none focus:border-green-500"
              />


              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-gray-200 rounded-lg px-4 py-3 mb-4 outline-none focus:border-green-500"
              />


              <div className="flex gap-2 mb-4">

                <div className="w-20 border border-gray-200 rounded-lg flex items-center justify-center text-gray-600">
                  +91
                </div>

                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="flex-1 border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-green-500"
                />

              </div>


              <textarea
                placeholder="Your Message"
                rows={6}
                className="w-full border border-gray-200 rounded-lg px-4 py-3 mb-4 outline-none focus:border-green-500 resize-none"
              />


              <button
                type="button"
                className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
              >
                Send Message
              </button>

            </div>


            {/* IMAGE */}

            <div className="w-full h-[450px]">

              <Image
                src="/contact.jpg"
                alt="Contact Us"
                width={700}
                height={500}
                className="w-full h-full object-cover rounded-xl"
              />

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}

