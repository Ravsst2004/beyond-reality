import { useState } from "react";
import Menu from "./Menu";
import { AnimatePresence, motion } from "framer-motion";

const navItems = [
  { id: 1, label: "About", link: "/about" },
  { id: 2, label: "Carrers", link: "/carrers" },
  { id: 3, label: "Events", link: "/events" },
  { id: 4, label: "Products", link: "/products" },
  { id: 5, label: "Support", link: "/support" },
];

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section
      id="hero"
      className="overflow-hidden "
    >
      <div className="container max-w-6xl mx-auto px-6 py-4 md:px-4 ">
        <Menu
          setIsOpen={setIsOpen}
          isOpen={isOpen}
        />

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ x: 40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 40, opacity: 0 }}
              className="absolute top-0 bottom-0 left-0 flex flex-col self-end w-full min-h-screen py-1 pt-40 pl-12 space-y-3 text-lg text-white uppercase bg-black"
            >
              {navItems.map((item) => (
                <motion.a
                  key={item.id}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: item.id * 0.1 }}
                  href={item.link}
                  className="hover:text-pink-500"
                >
                  {item.label}
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div className="max-w-xl mt-32 mb-32 p-4 font-sans text-3xl text-white uppercase border-2 md:p-10 md:m-32 md:mx-0 md:text-6xl">
          Immersive Journeys Beyond the Realms of Reality
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
