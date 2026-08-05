import Link from "next/link";
import Image from "next/image";

export default function AboutUs() {
  return (
    <main className="w-full">

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
            className="text-green-600 font-semibold"
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


      {/* ================================================== */}
      {/* FIRST SECTION - OUR MISSION */}
      {/* ================================================== */}

      <section className="w-full min-h-[calc(100vh-64px)] bg-[#fbf7ef] flex items-center justify-center px-10 py-10">

        <div className="max-w-5xl w-full grid grid-cols-2 gap-10 items-center">

          {/* IMAGE - LEFT */}

          <div className="w-full h-[390px]">

            <Image
              src="/about1.png"
              alt="Our Mission"
              width={700}
              height={500}
              className="w-full h-full object-cover rounded-xl"
            />

          </div>


          {/* CONTENT - RIGHT */}

          <div>

            <h1 className="text-3xl font-bold mb-5">

              <span className="text-black">
                Our{" "}
              </span>

              <span className="text-green-600">
                Mission
              </span>

            </h1>


            <p className="text-gray-800 text-base leading-7">

              Simcasys Technologies Pvt. Ltd. is a modern IT solutions
              company focused on building high-quality digital products.
              We develop responsive websites, Android & iOS mobile apps,
              e-commerce platforms, and custom ERP software tailored to
              business needs.

            </p>


            <p className="text-gray-800 text-base leading-7 mt-4">

              Our team combines smart design, strong engineering, and
              scalable cloud technologies to help companies launch faster
              and grow smoother. At Symca, we believe technology should be
              simple, reliable, and built around real users.

            </p>


            <p className="text-gray-800 text-base leading-7 mt-4">

              We aim to be a trusted partner for businesses looking to
              transform their ideas into powerful digital solutions.

            </p>

          </div>

        </div>

      </section>


      {/* ================================================== */}
      {/* SECOND SECTION - OUR CULTURE */}
      {/* ================================================== */}

      <section className="w-full min-h-screen bg-white flex items-center justify-center px-10 py-10">

        <div className="max-w-5xl w-full grid grid-cols-2 gap-10 items-center">

          {/* CONTENT - LEFT */}

          <div>

            <h1 className="text-3xl font-bold mb-5">

              <span className="text-black">
                Our{" "}
              </span>

              <span className="text-green-600">
                Culture
              </span>

            </h1>


            <p className="text-gray-800 text-base leading-7">

              At Simcasys, we foster an environment where open
              communication, integrity, and empowered decision-making
              build trust among employees. We are proud to be an equal
              opportunity employer.

            </p>


            <p className="text-gray-800 text-base leading-7 mt-4">

              We promote technological excellence by investing in modern
              resources and encouraging continuous learning. Transparency
              is promoted through open dialogue, visible decision-making
              processes, and shared responsibility.

            </p>


            <p className="text-gray-800 text-base leading-7 mt-4">

              Simcasys is a fun and enjoyable work environment shaped by
              social events and wellness programs. Together, these values
              cultivate a vibrant and inclusive workplace, attracting top
              talent and driving innovation for sustainable success.

            </p>

          </div>


          {/* IMAGE - RIGHT */}

          <div className="w-full h-[390px]">

            <Image
              src="/about2.jpg"
              alt="Our Culture"
              width={700}
              height={500}
              className="w-full h-full object-cover rounded-xl"
            />

          </div>

        </div>

      </section>

    </main>
  );
}