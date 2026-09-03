"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
const menu = [
  ["Home", "#home"],
  ["About Us", "#about"],
  ["Services", "#services"],
  ["Careers", "#careers"],
  ["Blogs", "#blogs"],
  ["Contact Us", "#contact"],
];

const services = [
  {
    image: "/services1.jpg",
    title: "Consulting Services",
    description:
      "We provide expert technology consulting to help organizations align digital strategies with business objectives. Our team evaluates existing systems, identifies improvement opportunities, and recommends scalable solutions. By combining technical expertise with industry insights, we help businesses drive innovation, efficiency, and sustainable growth.",
  },
  {
    image: "/services2.png",
    title: "Fintech Product Development",
    description:
      "We develop secure and scalable fintech solutions for modern financial services. Our expertise includes payment systems, digital wallets, banking platforms, and financial analytics tools. With strong security and compliance practices, we help organizations build reliable financial products that deliver seamless user experiences.",
  },
  {
    image: "/services3.jpg",
    title: "Healthcare IT Solutions",
    description:
      "Our healthcare IT solutions support hospitals and healthcare providers with secure, efficient digital systems. We build platforms for electronic health records, telemedicine, and healthcare management. These solutions enhance operational efficiency, improve patient care, and ensure compliance with healthcare standards.",
  },
  {
    image: "/services4.jpg",
    title: "Retail and E-commerce",
    description:
      "We create advanced retail and e-commerce platforms that enhance customer experiences and operational efficiency. Using data analytics, AI, and modern technologies, we enable businesses to better understand customer behavior and optimize their sales strategies in a competitive digital marketplace.",
  },
  {
    image: "/services5.jpg",
    title: "Cloud and DevOps",
    description:
      "Our cloud and DevOps services help organizations modernize infrastructure and accelerate software delivery. We design scalable cloud architectures, implement automated deployment pipelines, and optimize system performance. This enables businesses to deliver reliable applications with greater speed and efficiency.",
  },
  {
    image: "/services6.png",
    title: "Mobile App Development",
    description:
      "We design and develop high-performance mobile applications tailored to modern business needs. Our solutions focus on intuitive user experiences, secure integrations, and scalable architectures. These applications help organizations connect with customers and expand their digital presence.",
  },
  {
    image: "/services7.jpg",
    title: "Intership Programs",
    description:
      "Our internship programs provide students and graduates with valuable industry experience. Participants work on real-world projects while learning modern development tools and practices. Through mentorship and hands-on training, we help prepare the next generation of technology professionals.",
  },
  {
    image: "/services8.avif",
    title: "IT Support and Maintenance",
    description:
      "We provide comprehensive IT support and maintenance services to ensure systems remain secure, stable, and efficient. Our team monitors infrastructure, resolves technical issues, and performs regular updates. This proactive approach minimizes downtime and keeps business operations running smoothly.",
  },
];

const life = [
  [
    "/life1.jpeg",
    "Restart with Simcasys",
    "Restart with Simcasys is a launchpad for professionals. This is an opportunity to learn new skills and build digital capabilities in the latest and emerging technologies.",
  ],
  [
    "/life2.jpeg",
    "LEARNING EXPERIENCE (LEX)",
    "We hire minds that think and hearts that care. Our employees grow into leaders, not roles. That's how Simcasys moves forward.",
  ],
  [
    "/life3.jpg",
    "CULTURE",
    "A culture that encourages learning and innovation. Employees grow through teamwork and shared goals. Success is built together.",
  ],
];

export default function Home() {
  const words = ["Succeed", "Create", "Collaborate"];

  const [wordIndex, setWordIndex] = useState(0);

  const [selectedService, setSelectedService] = useState<number | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setWordIndex((current) => (current + 1) % words.length);
    }, 1500);

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="w-full min-h-screen scroll-smooth">
      {/* ========================================================= */}
      {/* HEADER */}
      {/* ========================================================= */}

      <header className="fixed top-0 left-0 z-50 w-full bg-white shadow-md">
        <div className="w-full h-16 px-8 flex items-center justify-between">
          {/* LOGO */}

          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/simcasys.svg"
              alt="SIMCASYS Logo"
              width={50}
              height={30}
              className="w-[50px] h-auto object-contain"
            />

            <span className="text-xl font-bold text-black">SIMCASYS</span>
          </Link>

          {/* NAVIGATION */}

          <nav className="flex items-center gap-7">
            {menu.map(([name, href]) => (
              <Link
                key={name}
                href={href}
                className="font-semibold text-black hover:text-green-600"
              >
                {name}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {/* ========================================================= */}
      {/* HOME */}
      {/* ========================================================= */}

      <section
        id="home"
        className="relative w-full min-h-screen flex items-center justify-center scroll-mt-16"
      >
        <Image
          src="/background.png"
          alt="SIMCASYS"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/30" />

        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold">
            <span className="text-white">Turning Ideas into</span>

            <span className="text-green-400"> Real Solutions</span>
          </h1>

          <div className="mt-5 h-10 flex items-center justify-center">
            <span className="text-orange-400 font-semibold text-xl">
              {words[wordIndex]}
            </span>
          </div>

          <p className="text-xl text-white">SIMCASYS TECHNOLOGIES</p>

          <div className="mt-8 flex justify-center gap-5">
            <Link
              href="#services"
              className="rounded-lg border-2 border-white bg-white/10 px-7 py-3 font-semibold text-white backdrop-blur-sm hover:bg-white hover:text-black"
            >
              Our Services
            </Link>

            <Link
              href="#contact"
              className="rounded-lg border-2 border-white bg-white/10 px-7 py-3 font-semibold text-white backdrop-blur-sm hover:bg-white hover:text-black"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* ABOUT */}
      {/* ========================================================= */}

      <section id="about" className="w-full bg-white px-8 py-20 scroll-mt-16">
        {/* ================= MISSION ================= */}

        <div className="max-w-6xl mx-auto min-h-screen flex items-center">
          <div className="w-full grid grid-cols-2 gap-12 items-center">
            <Image
              src="/about1.png"
              alt="Our Mission"
              width={700}
              height={500}
              className="w-full h-[420px] object-cover rounded-xl"
            />

            <div className="bg-[#fffaf0] p-8 rounded-xl">
              <h2 className="text-4xl font-bold mb-6">
                <span className="text-black">Our </span>

                <span className="text-green-600">Mission</span>
              </h2>

              <p className="text-gray-700 leading-8">
                Simcasys Technologies Pvt. Ltd. is a modern IT solutions company
                focused on building high-quality digital products. We develop
                responsive websites, Android & iOS mobile apps, e-commerce
                platforms, and custom ERP software tailored to business needs.
                <br />
                <br />
                Our team combines smart design, strong engineering, and scalable
                cloud technologies to help companies launch faster and grow
                smoother. At Simcasys, we believe technology should be simple,
                reliable, and built around real users.
                <br />
                <br />
                We aim to be a trusted partner for businesses looking to
                transform their ideas into powerful digital solutions.
              </p>
            </div>
          </div>
        </div>

        {/* ================= CULTURE ================= */}

        <div className="max-w-6xl mx-auto min-h-screen flex items-center">
          <div className="w-full grid grid-cols-2 gap-12 items-center">
            <div className="bg-[#fffaf0] p-8 rounded-xl">
              <h2 className="text-4xl font-bold mb-6">
                <span className="text-black">Our </span>

                <span className="text-green-600">Culture</span>
              </h2>

              <p className="text-gray-700 leading-8">
                At Simcasys, we foster an environment where open communication,
                integrity, and empowered decision-making build trust among
                employees. We are proud to be an equal opportunity employer.
                <br />
                <br />
                We promote technological excellence by investing in modern
                resources and encouraging continuous learning. Transparency is
                promoted through open dialogue, visible decision-making
                processes, and shared responsibility.
                <br />
                <br />
                Simcasys is a fun and enjoyable work environment shaped by
                social events and wellness programs. Together, these values
                cultivate a vibrant and inclusive workplace, attracting top
                talent and driving innovation for sustainable success.
              </p>
            </div>

            <Image
              src="/about2.jpg"
              alt="Our Culture"
              width={700}
              height={500}
              className="w-full h-[420px] object-cover rounded-xl"
            />
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}

      <section
        id="services"
        className="w-full min-h-screen bg-[#fffdf7] px-8 py-20 scroll-mt-16"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold leading-tight">
            <span className="block text-black">SERVICES OFFERED</span>

            <span className="block text-green-600">INDUSTRY EXPERTISE</span>
          </h2>

          {/* ================= SERVICE CARDS ================= */}

          {selectedService === null && (
            <div className="mt-10 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className="group relative overflow-hidden rounded-2xl bg-white shadow-sm"
                >
                  <div className="relative h-[280px] w-full">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-black/20" />

                    <div className="absolute inset-x-0 bottom-0 p-5">
                      <h2 className="pr-12 text-xl font-bold text-white">
                        {service.title}
                      </h2>
                    </div>

                    {/* GREEN ARROW BUTTON */}

                    <button
                      type="button"
                      onClick={() => setSelectedService(index)}
                      className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-md bg-green-600 text-xl font-bold text-white hover:bg-green-700"
                    >
                      →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* ================= SERVICE DETAILS ================= */}

          {selectedService !== null && (
            <div className="mt-10">
              <div className="relative bg-white rounded-2xl shadow-sm p-8">
                <button
                  type="button"
                  onClick={() => setSelectedService(null)}
                  aria-label="Close service details"
                  className="absolute top-5 right-5 w-9 h-9 flex items-center justify-center rounded-full text-black text-2xl hover:bg-gray-100"
                >
                  ×
                </button>

                <div className="min-h-[550px] grid grid-cols-2 gap-12 items-center">
                  <div className="w-full h-[430px]">
                    <Image
                      src={services[selectedService].image}
                      alt={services[selectedService].title}
                      width={800}
                      height={600}
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>

                  <div className="pr-8">
                    <h2 className="text-4xl font-bold leading-tight mb-7">
                      <span className="text-black">
                        {services[selectedService].title.split(" ")[0]}{" "}
                      </span>

                      <span className="text-green-600">
                        {services[selectedService].title
                          .split(" ")
                          .slice(1)
                          .join(" ")}
                      </span>
                    </h2>

                    <p className="text-gray-700 text-lg leading-8">
                      {services[selectedService].description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ========================================================= */}
      {/* CAREERS */}
      {/* ========================================================= */}

      <section id="careers" className="w-full bg-white scroll-mt-16">
        {/* ================= CAREERS MAIN ================= */}

        <div className="w-full min-h-screen flex items-center px-8 py-20">
          <div className="max-w-6xl mx-auto w-full grid grid-cols-2 gap-12 items-center">
            {/* ================= LEFT SIDE ================= */}

            <div>
              <p className="text-gray-400 text-sm mb-3">Join us</p>

              <h2 className="text-4xl font-bold leading-tight mb-6">
                <span className="text-black block">Become part</span>

                <span className="text-green-600 block">of our team</span>
              </h2>

              <p className="text-gray-600 text-lg leading-8">
                We foster creativity, respect individuality, and believe in a
                healthy balance between work and life. Join a team where
                collaboration drives success and growth feels meaningful.
                Discover our career opportunities and build a future where your
                skills truly shine.
              </p>

              {/* ================================================= */}
              {/* CAREERS BUTTONS */}
              {/* ================================================= */}

              <div className="flex gap-4 mt-8">
                {/* ================================================= */}
                {/* EMAIL BUTTON */}
                {/* CLICKING THIS OPENS GMAIL IN A NEW TAB */}
                {/* ================================================= */}

                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=contact@simcasys.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block min-w-[280px] bg-white border-2 border-green-600 rounded-xl px-6 py-5 shadow-md hover:bg-green-600 hover:shadow-lg transition-all duration-300 group cursor-pointer"
                >
                  <p className="text-gray-500 text-sm group-hover:text-white transition">
                    Email us your resume at
                  </p>

                  <p className="font-bold text-black mt-1 group-hover:text-white transition">
                    contact@simcasys.com
                  </p>
                </a>

                {/* ================================================= */}
                {/* APPLY FOR A JOB BUTTON */}
                {/* CLICKING THIS OPENS /resume */}
                {/* ================================================= */}

                <Link
                  href="/resume"
                  className="min-w-[200px] bg-[#fafafa] border border-gray-200 rounded-xl px-5 py-4 shadow-sm hover:border-green-600 hover:bg-green-50 hover:shadow-md transition duration-200 flex flex-col items-center justify-center cursor-pointer"
                >
                  {/* MAIN HEADING */}

                  <p className="font-semibold text-green-600">
                    Apply for a Job
                  </p>

                  {/* SMALL TEXT */}

                  <p className="text-sm text-gray-500 mt-1">
                    Enter your resume
                  </p>
                </Link>
              </div>
            </div>

            {/* ================= CAREERS IMAGE ================= */}

            <Image
              src="/careers.png"
              alt="Careers"
              width={700}
              height={500}
              className="w-full h-[400px] object-cover rounded-xl"
            />
          </div>
        </div>

        {/* ========================================================= */}
        {/* LIFE @ SIMCASYS */}
        {/* ========================================================= */}

        <div className="w-full bg-[#fffdf8] min-h-screen px-8 py-20">
          <div className="max-w-6xl mx-auto">
            <p className="text-gray-400 text-sm mb-8">LIFE @ SIMCASYS</p>

            <div className="grid grid-cols-3 gap-7">
              {life.map(([image, title, text]) => (
                <div
                  key={title}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm"
                >
                  <Image
                    src={image}
                    alt={title}
                    width={600}
                    height={450}
                    className="w-full h-[240px] object-cover"
                  />

                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-black mb-4">
                      {title}
                    </h3>

                    <p className="text-green-600 leading-7">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* BLOGS */}
      {/* ========================================================= */}

      <section
        id="blogs"
        className="w-full min-h-screen bg-white flex items-center px-8 py-20 scroll-mt-16"
      >
        <div className="max-w-6xl mx-auto w-full grid grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-black">Simcasys </span>

              <span className="text-green-600">Blogs</span>
            </h2>

            <p className="text-gray-600 text-lg leading-8">
              The IT industry continues to evolve rapidly, driving innovation
              and operational excellence across all sectors. In this blog, we
              provide professional insights on emerging technologies, software
              development practices, cloud solutions, cybersecurity, and digital
              transformation strategies to help businesses stay competitive and
              future-ready.
            </p>

            <div className="mt-6">
              <Link
                href="/blogs"
                className="inline-block rounded-lg bg-green-600 px-6 py-3 font-semibold text-white hover:bg-green-700 transition"
              >
                View Details
              </Link>
            </div>
          </div>

          <Image
            src="/blog.jpg"
            alt="Simcasys Blogs"
            width={700}
            height={500}
            className="w-full h-[400px] object-cover rounded-xl"
          />
        </div>
      </section>

      {/* ========================================================= */}
      {/* CONTACT */}
      {/* ========================================================= */}

      <section
        id="contact"
        className="w-full min-h-screen bg-[#f4fbff] flex items-center px-8 py-20 scroll-mt-16"
      >
        <div className="max-w-6xl mx-auto w-full">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold">
              <span className="text-black">Contact </span>

              <span className="text-green-600">Us</span>
            </h2>

            <p className="text-gray-500 text-sm mt-3 max-w-md mx-auto">
              Have a project idea or need help? Send us a message and our team
              will get back to you shortly.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-12 items-center">
            {/* CONTACT FORM */}

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
                className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700"
              >
                Send Message
              </button>
            </div>

            {/* CONTACT IMAGE */}

            <Image
              src="/contact.jpg"
              alt="Contact Us"
              width={700}
              height={500}
              className="w-full h-[450px] object-cover rounded-xl"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
