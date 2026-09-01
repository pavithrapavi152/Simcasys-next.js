import Image from "next/image";
import Link from "next/link";

export default function Blogs() {
  return (
    <main className="w-full min-h-screen bg-white">

      {/* HEADER */}
      <header className="w-full h-16 bg-white flex items-center justify-between px-8 shadow-sm">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/simcasys.svg"
            alt="SIMCASYS Logo"
            width={40}
            height={26}
            className="object-contain"
          />

          <span className="text-lg font-bold text-black">
            SIMCASYS
          </span>
        </Link>

        {/* NAVIGATION */}
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

          <Link
            href="/careers"
            className="text-black font-semibold hover:text-green-600 transition"
          >
            Careers
          </Link>

          <Link
            href="/blogs"
            className="text-green-600 font-semibold"
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

      {/* BLOG CONTENT */}
      <section className="w-full min-h-[calc(100vh-64px)] bg-white flex items-center justify-center px-10 py-12">

        <div className="max-w-5xl w-full grid grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div>

            <h1 className="text-4xl font-bold mb-6">
              <span className="text-black">
                Simcasys{" "}
              </span>

              <span className="text-green-600">
                Blogs
              </span>
            </h1>

            <p className="text-gray-700 text-lg leading-8">
              The IT industry continues to evolve rapidly, driving
              innovation and operational excellence across all sectors.
              In this blog, we provide professional insights on emerging
              technologies, software development practices, cloud
              solutions, cybersecurity, and digital transformation
              strategies to help businesses stay competitive and
              future-ready.
            </p>

            {/* VIEW DETAILS BUTTON */}
            <div className="mt-6">
              <Link
                href="/blogs"
                className="inline-block rounded-lg bg-green-600 px-6 py-3 font-semibold text-white hover:bg-green-700 transition"
              >
                View Details
              </Link>
            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="w-full h-[430px]">

            <Image
              src="/blog.jpg"
              alt="Simcasys Blogs"
              width={700}
              height={600}
              className="w-full h-full object-cover rounded-2xl"
            />

          </div>

        </div>

      </section>

    </main>
  );
}