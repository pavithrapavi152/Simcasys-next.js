import Image from "next/image";
import Link from "next/link";

<<<<<<< HEAD
const blogs = [
  {
    id: "1",
    title: "How Technology Is Changing Modern Business",
    slug: "how-technology-is-changing-modern-business",
    content:
      "Technology is changing the way businesses work. Modern companies are using cloud computing, artificial intelligence, automation and data analytics to improve productivity and customer experience.",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2",
  },
  {
    id: "2",
    title: "The Future of Artificial Intelligence",
    slug: "the-future-of-artificial-intelligence",
    content:
      "Artificial intelligence is becoming an important part of modern applications. From customer support to data analysis, AI is helping organizations automate repetitive tasks and make better decisions.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995",
  },
  {
    id: "3",
    title: "Why Cloud Computing Is Important",
    slug: "why-cloud-computing-is-important",
    content:
      "Cloud computing allows businesses to store data and run applications without managing physical infrastructure. It provides scalability, flexibility and easier deployment.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
  },
];

export default function BlogsPage() {
  return (
    <main className="w-full bg-white">

      {/* ================= HEADER ================= */}

=======
export default function Blogs() {
  return (
    <main className="w-full min-h-screen bg-white">
      {/* HEADER */}
>>>>>>> origin/feature/login-page
      <header className="w-full h-16 bg-white flex items-center justify-between px-8 shadow-sm">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/simcasys.svg"
            alt="SIMCASYS Logo"
            width={42}
            height={28}
            className="object-contain h-auto"
          />

          <span className="text-lg font-bold text-black">SIMCASYS</span>
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

<<<<<<< HEAD
          {/* ACTIVE BLOGS */}

          <Link
            href="/blogs"
            className="text-green-600 font-semibold"
          >
=======
          <Link href="/blogs" className="text-green-600 font-semibold">
>>>>>>> origin/feature/login-page
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

      {/* ================= BLOG SECTION ================= */}

      <section className="w-full bg-gray-100 px-8 py-12">

        <div className="max-w-6xl mx-auto">

          {/* TITLE */}

          <div className="text-center mb-12">

            <h1 className="text-4xl font-bold text-gray-900">
              Our Blogs
            </h1>

            <p className="mt-3 text-gray-600">
              Read our latest articles and updates
=======
      {/* BLOG CONTENT */}
      <section className="w-full min-h-[calc(100vh-64px)] bg-white flex items-center justify-center px-10 py-12">
        <div className="max-w-5xl w-full grid grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <div>
            <h1 className="text-4xl font-bold mb-6">
              <span className="text-black">Simcasys </span>

              <span className="text-green-600">Blogs</span>
            </h1>

            <p className="text-gray-700 text-lg leading-8">
              The IT industry continues to evolve rapidly, driving innovation
              and operational excellence across all sectors. In this blog, we
              provide professional insights on emerging technologies, software
              development practices, cloud solutions, cybersecurity, and digital
              transformation strategies to help businesses stay competitive and
              future-ready.
>>>>>>> origin/feature/login-page
            </p>
          </div>

<<<<<<< HEAD

          {/* BLOG CARDS */}

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {blogs.map((blog) => (

              <article
                key={blog.id}
                className="overflow-hidden rounded-2xl bg-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >

                {/* IMAGE */}

                <img
                  src={blog.image}
                  alt={blog.title}
                  className="h-56 w-full object-cover"
                />


                {/* CONTENT */}

                <div className="p-6">

                  <h2 className="mb-3 text-2xl font-bold text-gray-900">
                    {blog.title}
                  </h2>

                  <p className="mb-6 text-gray-600">
                    {blog.content.substring(0, 120)}...
                  </p>

                  <Link
                    href={`/blogs/${blog.slug}`}
                    className="inline-block rounded-lg bg-green-600 px-5 py-3 font-semibold text-white hover:bg-green-700 transition"
                  >
                    Read More
                  </Link>

                </div>

              </article>

            ))}

=======
          {/* RIGHT IMAGE */}
          <div className="w-full h-430px">
            <Image
              src="/blog.jpg"
              alt="Simcasys Blogs"
              width={700}
              height={600}
              className="w-full h-full object-cover rounded-2xl"
            />
>>>>>>> origin/feature/login-page
          </div>
        </div>
      </section>
    </main>
  );
}
