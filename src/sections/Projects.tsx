import { FC } from "react";
// import planetImage from "@/assets/tube.png";
import planetImage from "@/assets/tube.png";

import image1 from "@/assets/testimonial-1.png";
import image2 from "@/assets/testimonial-2.png";
import image3 from "@/assets/testimonial-3.png";
import image4 from "@/assets/testimonial-4.png";
import image5 from "@/assets/testimonial-5.png";
import Image from "next/image";

const projects = [
  {
    name: "Artisan Brew Co.",
    image: planetImage,
  },
  {
    name: "Wavelength Studios",
    image: image2,
  },
  {
    name: "Nova Fitness",
    image: image3,
  },
  {
    name: "Urban Plates",
    image: image4,
  },
  {
    name: "Bloom Botanicals",
    image: image5,
  },
];

const Projects: FC = () => {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="text-4xl md:text-7xl lg:text-8xl">Selected Works</h2>
        <div className="mt-10 md:mt-16 lg:mt-20">
          {projects.map(({ name, image }) => (
            <a
              href="#"
              key={name}
              className="border-t  last:border-b py-6 md:py-8  border-stone-400 border-dotted py-6 lg:py-10 flex flex-col"
            >
              <div className="">
                <div className="aspect-video md:hidden">
                  <Image
                    src={image}
                    alt={`${name} image`}
                    className="size-full object-cover"
                  />
                </div>
              </div>
              <div className="mt-8 flex md:mt-0 justify-between items-center">
                <h3 className="text-2xl md:text-3xl lg:text-4xl">{name} </h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
