import { useEffect, useState } from "react";
import {
  animate,
  AnimatePresence,
  motion,
  Transition,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";

const navItems = [
  { id: 1, label: "About", link: "/about" },
  { id: 2, label: "Carrers", link: "/carrers" },
  { id: 3, label: "Events", link: "/events" },
  { id: 4, label: "Products", link: "/products" },
  { id: 5, label: "Support", link: "/support" },
];

interface Size {
  width: number;
  height: number;
}

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [size, setSize] = useState<Size | undefined>(undefined);
  const maskX = useMotionValue(0);
  const maskY = useMotionValue(0);
  const maskSize = useMotionValue(0);
  const maskImage = useMotionTemplate`radial-gradient(circle at ${maskX}px ${maskY}px, black 0px, black ${maskSize}px, transparent ${maskSize}px)`;

  useEffect(() => {
    if (!size) return;

    const transition: Transition = {
      type: "spring",
      stiffness: 200,
      damping: 10,
    };
    const { width, height } = size;
    animate(maskSize, Math.sqrt(width * width + height * height), {
      duration: 0.7,
    });
    animate(maskX, width / 2, transition);
    animate(maskY, height / 2, transition);
  }, [maskSize, maskX, maskY, size]);

  return (
    <section
      id="hero"
      className="overflow-hidden "
    >
      <div className="container max-w-6xl mx-auto px-6 py-4 md:px-4 ">
        <AnimatePresence>
          <DesktopMenu
            setIsOpen={setIsOpen}
            isOpen={isOpen}
            navItems={navItems}
          />
          <MobileMenu
            isOpen={isOpen}
            navItems={navItems}
          />
        </AnimatePresence>

        <div>
          <div className="relative cursor-none max-w-xl mt-32 mb-32 p-2 font-sans text-3xl text-white uppercase border-2 md:p-10 md:m-32 md:mx-0 md:text-6xl">
            Immersive Journeys Beyond the Realms of Reality
          </div>
          <motion.div
            onHoverStart={() => !size && animate(maskSize, 100)}
            onHoverEnd={() => !size && animate(maskSize, 0)}
            onPointerDown={() => !size && animate(maskSize, 40)}
            onPointerMove={(e) => {
              if (size) return;
              const { top, left } = (
                e.currentTarget as any
              ).getBoundingClientRect();
              maskX.set(e.clientX - left);
              maskY.set(e.clientY - top);
            }}
            style={{
              WebkitMaskImage: maskImage,
              maskImage,
              WebkitMaskComposite: "exclude",
              mixBlendMode: "difference",
            }}
            className="absolute z-50 cursor-none top-14 max-w-xl mt-32 mb-32 p-2 font-sans text-3xl text-white uppercase border-2 md:p-10 md:m-32 md:mx-0 md:text-6xl"
          >
            Immersive Journeys Beyond the Realms of Reality
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
