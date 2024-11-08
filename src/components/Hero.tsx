import { useState } from "react";
import Menu from "./Menu";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="hero">
      <div className="container max-w-6xl mx-auto px-6 py-4 md:px-4">
        <Menu setIsOpen={setIsOpen} isOpen={isOpen} />

        <div
          className={`${
            isOpen ? "flex" : "hidden"
          } absolute top-0 bottom-0 left-0 flex-col self-end w-full min-h-screen py-1 pt-40 pl-12 space-y-3 text-lg text-white uppercase bg-black`}
        >
          <a href="" className="hover:text-pink-500">
            About
          </a>
          <a href="" className="hover:text-pink-500">
            Carrers
          </a>
          <a href="" className="hover:text-pink-500">
            Events
          </a>
          <a href="" className="hover:text-pink-500">
            Products
          </a>
          <a href="" className="hover:text-pink-500">
            Supports
          </a>
        </div>

        <div className="max-w-lg mt-32 mb-32 p-4 font-sans text-4xl text-white uppercase border-2 md:p-10 md:m-32 md:mx-0 md:text-6xl">
          Impressive Experience That Deliver
        </div>
      </div>
    </section>
  );
};

export default Hero;
