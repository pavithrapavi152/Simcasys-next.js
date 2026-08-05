import Link from "next/link";
import Image from "next/image";

export default function Contact() {
  return (
    <main className="w-full min-h-screen bg-[#f5fbff]">

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
            className="text-black font-semibold hover:text-green-600 transition"
          >
            Blogs
          </Link>

          <Link
            href="/contact"
            className="text-green-600 font-semibold"
          >
            Contact Us
          </Link>

        </nav>

      </header>


      {/* CONTACT PAGE */}

      <section className="min-h-[calc(100vh-64px)] bg-[#f5fbff] px-10 py-8">

        {/* TOP HEADING */}

        <div className="text-center mb-7">

          <h1 className="text-4xl font-bold leading-tight">

            <span className="text-black">
              Contact{" "}
            </span>

            <span className="text-green-600">
              Us
            </span>

          </h1>


          {/* EXACTLY TWO LINES */}

          <p className="text-gray-500 text-sm leading-6 mt-3">

            Have a project idea or need help? Send us a message
            <br />

            and our team will get back to you shortly.

          </p>

        </div>


        {/* FORM + IMAGE */}

        <div className="max-w-5xl mx-auto grid grid-cols-2 gap-10 items-center">

          {/* FORM - LEFT */}

          <div className="bg-white rounded-2xl shadow-md p-8">

            {/* YOUR NAME */}

            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-4 outline-none focus:border-green-500"
            />


            {/* YOUR EMAIL */}

            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-4 outline-none focus:border-green-500"
            />


            {/* PHONE NUMBER */}

            <div className="flex gap-2 mb-4">

              {/* COUNTRY CODE */}

              <div className="w-20 border border-gray-300 rounded-lg flex items-center justify-center bg-gray-50">

                <span className="text-gray-700">
                  +91
                </span>

              </div>


              {/* PHONE NUMBER */}

              <input
                type="tel"
                placeholder="Phone Number"
                className="flex-1 border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-green-500"
              />

            </div>


            {/* YOUR MESSAGE */}

            <textarea
              placeholder="Your Message"
              rows={5}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-5 outline-none resize-none focus:border-green-500"
            ></textarea>


            {/* SEND MESSAGE BUTTON */}

            <button
              type="button"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg transition"
            >
              Send Message
            </button>

          </div>


          {/* IMAGE - RIGHT */}

          <div className="w-full h-[450px]">

            <Image
              src="/contact.jpg"
              alt="Contact Us"
              width={700}
              height={700}
              className="w-full h-full object-cover rounded-2xl"
            />

          </div>

        </div>

      </section>

    </main>
  );
}