import { useRef } from "react";
import ItemCard from "./ItemCard";
import { motion, useInView } from "framer-motion";

const items = [
  {
    imageUrlDesktop: "images/desktop/image-deep-earth.jpg",
    imageUrlMobile: "images/mobile/image-deep-earth.jpg",
    title: "Deep Earth",
  },
  {
    imageUrlDesktop: "images/desktop/image-night-arcade.jpg",
    imageUrlMobile: "images/mobile/image-night-arcade.jpg",
    title: "Night Arcade",
  },
  {
    imageUrlDesktop: "images/desktop/image-soccer-team.jpg",
    imageUrlMobile: "images/mobile/image-soccer-team.jpg",
    title: "Soccer Team VR",
  },
  {
    imageUrlDesktop: "images/desktop/image-grid.jpg",
    imageUrlMobile: "images/mobile/image-grid.jpg",
    title: "The Grid",
  },
  {
    imageUrlDesktop: "images/desktop/image-from-above.jpg",
    imageUrlMobile: "images/mobile/image-from-above.jpg",
    title: "From Above VR",
  },
  {
    imageUrlDesktop: "images/desktop/image-pocket-borealis.jpg",
    imageUrlMobile: "images/mobile/image-pocket-borealis.jpg",
    title: "Pocket Borealis",
  },
  {
    imageUrlDesktop: "images/desktop/image-curiosity.jpg",
    imageUrlMobile: "images/mobile/image-curiosity.jpg",
    title: "The Curiosity",
  },
  {
    imageUrlDesktop: "images/desktop/image-fisheye.jpg",
    imageUrlMobile: "images/mobile/image-fisheye.jpg",
    title: "Make it fisheye",
  },
];

const ItemsContainer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.4, once: true });
  console.log(isInView);

  return (
    <>
      <div
        ref={ref}
        className="grid grid-cols-1 md:grid-cols-4 gap-4 justify-between w-full space-y-6 text-2xl text-white uppercase md:space-y-0"
      >
        {items
          .map((item, index) => ({ ...item, randomIndex: Math.random() }))
          .sort((a, b) => a.randomIndex - b.randomIndex)
          .map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.2 }}
              animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <ItemCard
                imageUrlDesktop={item.imageUrlDesktop}
                imageUrlMobile={item.imageUrlMobile}
                title={item.title}
              />
            </motion.div>
          ))}
      </div>
    </>
  );
};

export default ItemsContainer;
