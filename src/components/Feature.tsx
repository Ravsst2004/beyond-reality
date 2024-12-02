import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState } from "react";

const Feature = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current || isDragging) return;

    const rect = ref.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -20;
    setTransform({ x, y });
  };

  const handleMouseLeave = () => {
    if (!isDragging) setTransform({ x: 0, y: 0 });
  };

  return (
    <motion.section
      id="features"
      className="pt-8 md:pt-16"
    >
      <div className="relative container flex flex-col max-w-6xl mx-auto my-32 px-6 text-gray-900 md:flex-row md:px-0">
        <img
          src="images/desktop/image-interactive.jpg"
          alt=""
        />

        <motion.div
          ref={ref}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={() => setIsDragging(false)}
          drag
          dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
          style={{
            transform: `perspective(1000px) rotateX(${transform.y}deg) rotateY(${transform.x}deg)`,
          }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 10,
          }}
          className={`top-48 bg-white cursor-${
            isDragging ? "grabbing" : "grab"
          } md:absolute md:right-0 md:py-14 md:pl-14 shadow-md`}
        >
          <h2 className="max-w-lg mt-10 mb-6 font-sans text-4xl text-center text-gray-900 uppercase md:text-4xl md:mt-0 md:text-left">
            Redefining Immersion Through Virtual Worlds
          </h2>
          <p className="max-w-md text-center md:text-left">
            Since 2008, BeyondReality has been pushing the boundaries of
            imagination, crafting cutting-edge virtual reality experiences that
            transport users beyond the confines of the physical world. Our
            groundbreaking innovations empower industries to connect, create,
            and thrive in realms that defy reality.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Feature;
