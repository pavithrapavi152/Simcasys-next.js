import { MapPin } from "lucide-react";
import { Globe } from "lucide-react";
import Linkedin from "@/public/linkedin.png";
import Image from "next/image";
import Instagram from "@/public/instaa.svg";

export default function Footer() {
  return (
    <footer className="bg-gray-200 item-center justify-center rounded-xl flex-col text-gray-700 mt-20">
      <div className="max-w-7*1 mx-auto px-12 py-20 grid grid-cols-1  md:grid-cols-2 lg:grid-cols-6 gap-12">
        {/* Services */}
        <div>
          <h4 className=" text-[18px] font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-[17px]">
            <li>
              <a href="#services" className="hover:text-black">
                Services Offered
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-black">
                Industry Expertise
              </a>
            </li>
          </ul>
        </div>
        {/* About Us */}
        <div>
          <h4 className="text-[18px] font-semibold mb-4">About Us</h4>
          <ul className="space-y-2 text-[17px]">
            <li>
              <a href="#about-us" className="hover:text-black cursor-pointer">
                Our Mission
              </a>
            </li>
            <li>
              <a href="#Culture" className="hover:text-black curson-pointer">
                Our Culture
              </a>
            </li>
          </ul>
        </div>
        {/* Careers */}
        <div>
          <h4 className="text-[18px] font-semibold mb-4">Careers</h4>
          <ul className="space-y-2 text-[17px]">
            <li>
              <a href="#careers" className="hover:text-black curson-pointer">
                Join Us
              </a>
            </li>
            <li>
              <a
                href="#Life @ Symca"
                className="hover:text-black curson-pointer"
              >
                Life @ Simcasys
              </a>
            </li>
          </ul>
        </div>
        {/* Location */}
        <div>
          <h4 className="text-[18px] font-semibold mb-4">Location</h4>
          <h3 className="space-y-4 text-[17px]">Bengaluru Office</h3>
          <p className="space-y-4 text-[17px] leading-9">
            #241/7, 1st floor,
            <br />
            19th cross, 20th main Marenahalli Main Rd,
            <br />
            Vijayanagar, Bengaluru-560040 Karnataka.
          </p>
          <a
            href="https://maps.google.com/?q=Bengaluru,Karnataka"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Location"
          >
            <MapPin className="h-5 w-5" />
          </a>
        </div>
        {/* Contact */}
        <div>
          <h4 className="text-[18px] font-semibold mb-4">Contact</h4>
          <ul className="space-y-2 text-[15px]"></ul>
          <li>
            <a href="#contactUs" className="hover:text-black curson-pointer">
              Get In Touch
            </a>
          </li>
        </div>
        {/* Stay Connected */}

        <div>
          <h4 className="text-[18px] font-semibold mb-4">Stay Connected</h4>
          <div className="space-y-2 text[15px] flex item-start justify-start gap-6">
            <a
              href="https://www.instagram.com/simcasys"
              className="flex items-center gap-6"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"  
            >
              <Image
                src={Instagram}
                height={150}
                width={150}
                alt="Instagram"
                className="h-8 w-8 text-black"
              />
            </a>
            <a
              href="https://simcasys.com"
              className="flex items-center gap-6"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Website"
            >
              <Globe className="h-8 w-8" />
            </a>
            <a
              href="https://www.linkedin.com/simcasys-private-limited"
              className="flex items-center gap-6"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Image
                height={40}
                width={40}
                src={Linkedin}
                alt="Linkedin"
                className="h-7 w-7"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="mt-10 text-center">
        <h2 className="Text-2*1 font-semibold tracking-wide text-gray-700"></h2>
        © 2026 Simcasys Technologies Pvt Ltd. All Rights Reserved.
      </div>
    </footer>
  );
}
