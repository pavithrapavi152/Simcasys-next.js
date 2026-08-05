import Image from "next/image";
import Link from "next/link";

type Service = {
  title: string;
  image: string;
  description: string;
};

const services: Record<string, Service> = {
  "consulting-services": {
    title: "Consulting Services",
    image: "/services1.jpg",
    description:
      "We provide expert technology consulting to help organizations align digital strategies with business objectives. Our team evaluates existing systems, identifies improvement opportunities, and recommends scalable solutions. By combining technical expertise with industry insights, we help businesses drive innovation, efficiency, and sustainable growth.",
  },

  "fintech-product-development": {
    title: "Fintech Product Development",
    image: "/services2.png",
    description:
      "We develop secure and scalable fintech solutions for modern financial services. Our expertise includes payment systems, digital wallets, banking platforms, and financial analytics tools. With strong security and compliance practices, we help organizations build reliable financial products that deliver seamless user experiences.",
  },

  "healthcare-it-solutions": {
    title: "Healthcare IT Solutions",
    image: "/services3.jpg",
    description:
      "Our healthcare IT solutions support hospitals and healthcare providers with secure, efficient digital systems. We build platforms for electronic health records, telemedicine, and healthcare management. These solutions enhance operational efficiency, improve patient care, and ensure compliance with healthcare standards.",
  },

  "retail-ecommerce": {
    title: "Retail and E-commerce",
    image: "/services4.jpg",
    description:
      "We create advanced retail and e-commerce platforms that enhance customer experiences and operational efficiency. Using data analytics, AI, and modern technologies, we enable businesses to better understand customer behavior and optimize their sales strategies in a competitive digital marketplace.",
  },

  "cloud-devops": {
    title: "Cloud and DevOps",
    image: "/services5.jpg",
    description:
      "Our cloud and DevOps services help organizations modernize infrastructure and accelerate software delivery. We design scalable cloud architectures, implement automated deployment pipelines, and optimize system performance. This enables businesses to deliver reliable applications with greater speed and efficiency.",
  },

  "mobile-app-development": {
    title: "Mobile App Development",
    image: "/services6.png",
    description:
      "We design and develop high-performance mobile applications tailored to modern business needs. Our solutions focus on intuitive user experiences, secure integrations, and scalable architectures. These applications help organizations connect with customers and expand their digital presence.",
  },

  "intership-programs": {
    title: "Intership Programs",
    image: "/services7.jpg",
    description:
      "Our internship programs provide students and graduates with valuable industry experience. Participants work on real-world projects while learning modern development tools and practices. Through mentorship and hands-on training, we help prepare the next generation of technology professionals.",
  },

  "it-support-maintenance": {
    title: "IT Support and Maintenance",
    image: "/services8.avif",
    description:
      "We provide comprehensive IT support and maintenance services to ensure systems remain secure, stable, and efficient. Our team monitors infrastructure, resolves technical issues, and performs regular updates. This proactive approach minimizes downtime and keeps business operations running smoothly.",
  },
};

export default async function ServiceDetail({
  params,
}: {
  params: Promise<{ service: string }>;
}) {
  const { service } = await params;

  const currentService = services[service];

  /* SERVICE NOT FOUND */

  if (!currentService) {
    return (
      <main className="min-h-screen w-full bg-[#fffdf7] flex items-center justify-center">

        <div className="text-center">

          <h1 className="text-3xl font-bold text-black">
            Service Not Found
          </h1>

          <Link
            href="/services"
            className="inline-block mt-6 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
          >
            Back to Services
          </Link>

        </div>

      </main>
    );
  }

  return (
    <main className="min-h-screen w-full bg-[#fffdf7] px-8 py-12">

      {/* ==========================================
          COMMON SERVICES HEADING
      ========================================== */}

      <div className="max-w-7xl mx-auto mb-8">

        <h1 className="text-4xl font-bold leading-tight">

          <span className="block text-black">
            SERVICES OFFERED
          </span>

          <span className="block text-green-600">
            INDUSTRY EXPERTISE
          </span>

        </h1>

      </div>


      {/* ==========================================
          WHITE SERVICE CONTENT BOX
      ========================================== */}

      <div className="max-w-7xl mx-auto">

        <div className="relative bg-white rounded-2xl shadow-sm p-10">


          {/* ==========================================
              BLACK MULTIPLICATION / CLOSE BUTTON
          ========================================== */}

          <Link
            href="/#services"
            aria-label="Close service details"
            className="absolute top-5 right-5 w-9 h-9 flex items-center justify-center rounded-full text-black text-2xl font-light hover:bg-gray-100 transition"
          >
            ×
          </Link>


          {/* ==========================================
              IMAGE + CONTENT
          ========================================== */}

          <div className="min-h-[550px] grid grid-cols-2 gap-12 items-center">


            {/* ==========================================
                IMAGE
            ========================================== */}

            <div className="w-full h-[430px]">

              <Image
                src={currentService.image}
                alt={currentService.title}
                width={800}
                height={600}
                className="w-full h-full object-cover rounded-xl"
              />

            </div>


            {/* ==========================================
                CONTENT
            ========================================== */}

            <div className="pr-8">

              {/* SERVICE HEADING */}

              <h2 className="text-4xl font-bold leading-tight mb-7">

                <span className="text-black">
                  {currentService.title.split(" ")[0]}{" "}
                </span>

                <span className="text-green-600">
                  {currentService.title
                    .split(" ")
                    .slice(1)
                    .join(" ")}
                </span>

              </h2>


              {/* SERVICE DESCRIPTION */}

              <p className="text-gray-700 text-lg leading-8">

                {currentService.description}

              </p>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}

