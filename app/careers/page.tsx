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

      <section className="w-full min-h-[calc(100vh-64px)] bg-white flex items-center justify-center px-8 py-10">
        <div className="max-w-5xl w-full grid grid-cols-2 gap-10 items-center">
          {/* LEFT SIDE - CONTENT */}

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

            {/* BOTTOM BOXES */}

            <div className="flex gap-4 mt-7">
              {/* EMAIL BOX */}

              <Link
                href="/careers"
                className="bg-[#fafafa] border border-gray-200 rounded-xl px-5 py-4 shadow-sm block cursor-pointer hover:shadow-md transition"
              >
                <p className="text-gray-400 text-sm">Email us your resume at</p>

                <p className="text-black text-base font-semibold mt-1">
                  contact@simcasys.com
                </p>
              </Link>

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
            </div>
          </div>

          {/* RIGHT SIDE - IMAGE */}

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

      {/* ================================================= */}
      {/* SECOND SECTION - LIFE @ SIMCASYS */}
      {/* ================================================= */}

      <section className="w-full min-h-screen bg-[#fffdf8] px-10 py-12">
        <div className="max-w-6xl mx-auto">
          {/* SMALL TOP HEADING */}

          <p className="text-gray-400 text-sm font-medium tracking-wide mb-8">
            LIFE @ SIMCASYS
          </p>

          {/* THREE BOXES */}

          <div className="grid grid-cols-3 gap-7">
            {/* ================= BOX 1 ================= */}

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
              {/* IMAGE */}

              <div className="w-full h-[240px]">
                <Image
                  src="/life1.jpeg"
                  alt="Restart with Simcasys"
                  width={600}
                  height={450}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* CONTENT */}

              <div className="p-6">
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
              {/* IMAGE */}

              <div className="w-full h-[240px]">
                <Image
                  src="/life2.jpeg"
                  alt="Learning Experience"
                  width={600}
                  height={450}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* CONTENT */}

              <div className="p-6">
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
              {/* IMAGE */}

              <div className="w-full h-[240px]">
                <Image
                  src="/life3.jpg"
                  alt="Culture at Simcasys"
                  width={600}
                  height={450}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* CONTENT */}

              <div className="p-6">
                <h2 className="text-2xl font-bold text-black mb-4">CULTURE</h2>

                <p className="text-green-600 text-base leading-7">
                  A culture that encourages learning and innovation. Employees
                  grow through teamwork and shared goals. Success is built
                  together.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
