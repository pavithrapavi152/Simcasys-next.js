import Image from "next/image";
import Link from "next/link";

export default function Services() {
  const services = [
    {
      title: "Consulting Services",
      image: "/services1.jpg",
      link: "/services/consulting-services",
    },
    {
      title: "Fintech Product Development",
      image: "/services2.png",
      link: "/services/fintech-product-development",
    },
    {
      title: "Healthcare IT Solutions",
      image: "/services3.jpg",
      link: "/services/healthcare-it-solutions",
    },
    {
      title: "Retail and E-commerce",
      image: "/services4.jpg",
      link: "/services/retail-ecommerce",
    },
    {
      title: "Cloud and DevOps",
      image: "/services5.jpg",
      link: "/services/cloud-devops",
    },
    {
      title: "Mobile App Development",
      image: "/services6.png",
      link: "/services/mobile-app-development",
    },
    {
      title: "Intership Programs",
      image: "/services7.jpg",
      link: "/services/intership-programs",
    },
    {
      title: "IT Support and Maintenance",
      image: "/services8.avif",
      link: "/services/it-support-maintenance",
    },
  ];

  return (
    <main className="min-h-screen w-full bg-[#fffdf7] px-8 py-12">

      <div className="mx-auto w-full max-w-7xl">

        {/* PAGE HEADING */}

        <div className="mb-10">

          <h1 className="text-4xl font-bold leading-tight">

            <span className="block text-black">
              SERVICES OFFERED
            </span>

            <span className="block text-green-600">
              INDUSTRY EXPERTISE
            </span>

          </h1>

        </div>


        {/* SERVICES GRID */}

        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">

          {services.map((service, index) => (

            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-sm"
            >

              <div className="relative h-[280px] w-full">

                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />

                {/* DARK OVERLAY */}

                <div className="absolute inset-0 bg-black/20"></div>


                {/* TITLE */}

                <div className="absolute inset-x-0 bottom-0 p-5">

                  <h2 className="pr-12 text-xl font-bold leading-snug text-white">
                    {service.title}
                  </h2>

                </div>


                {/* GREEN ARROW */}

                <Link
                  href={service.link}
                  aria-label={`View ${service.title}`}
                  className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-green-600 text-xl font-bold text-white transition hover:bg-green-700"
                >
                  →
                </Link>

              </div>

            </div>

          ))}

        </div>

      </div>

    </main>
  );
}

