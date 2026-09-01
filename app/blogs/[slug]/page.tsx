import Link from "next/link";

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

export default async function BlogDetailsPage({
  params,
}: {
  params: Promise<{ slugs: string }>;
}) {
  const { slugs } = await params;

  const blog = blogs.find((item) => item.slug === slugs);

  if (!blog) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">
            Blog Not Found
          </h1>

          <Link
            href="/blogs"
            className="mt-6 inline-block rounded-lg bg-green-600 px-5 py-3 font-semibold text-white"
          >
            Back to Blogs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-100">

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

          <Link
            href="/"
            className="text-2xl font-bold text-green-600"
          >
            SIMCASYS
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            <Link href="/" className="text-gray-700 hover:text-green-600">
              Home
            </Link>

            <Link
              href="/about-us"
              className="text-gray-700 hover:text-green-600"
            >
              About Us
            </Link>

            <Link
              href="/services"
              className="text-gray-700 hover:text-green-600"
            >
              Services
            </Link>

            <Link
              href="/careers"
              className="text-gray-700 hover:text-green-600"
            >
              Careers
            </Link>

            <Link
              href="/blogs"
              className="font-semibold text-green-600"
            >
              Blogs
            </Link>

            <Link
              href="/#contact"
              className="text-gray-700 hover:text-green-600"
            >
              Contact Us
            </Link>
          </nav>

        </div>
      </header>

      {/* Blog Details */}
      <section className="px-6 py-12">
        <article className="mx-auto max-w-4xl rounded-2xl bg-white p-8 shadow-lg">

          <img
            src={blog.image}
            alt={blog.title}
            className="mb-8 h-[400px] w-full rounded-xl object-cover"
          />

          <h1 className="mb-6 text-4xl font-bold text-gray-900">
            {blog.title}
          </h1>

          <p className="text-lg leading-8 text-gray-600">
            {blog.content}
          </p>

          <Link
            href="/blogs"
            className="mt-8 inline-block rounded-lg bg-green-600 px-5 py-3 font-semibold text-white hover:bg-green-700"
          >
            ← Back to Blogs
          </Link>

        </article>
      </section>

    </main>
  );
}