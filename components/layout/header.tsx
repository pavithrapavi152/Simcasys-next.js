import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const menu = [
    ["Home", "/#home"],
    ["About Us", "/#about"],
    ["Services", "/#services"],
    ["Careers", "/#careers"],
    ["Blogs", "/#blogs"],
    ["Contact Us", "/#contact"],
  ];

  return (
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
  );
}
