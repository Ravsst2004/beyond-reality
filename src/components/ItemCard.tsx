import { motion } from "framer-motion";

interface ItemCardProps {
  imageUrlDesktop: string;
  imageUrlMobile: string;
  title: string;
}

const ItemCard = ({
  imageUrlDesktop,
  imageUrlMobile,
  title,
}: ItemCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1, y: 20, zIndex: 10 }}
      className="group relative overflow-hidden md:w-full"
    >
      <img
        className="hidden w-full duration-200 md:block group-hover:scale-110"
        src={imageUrlDesktop}
        alt=""
      />
      <img
        className="w-full md:hidden"
        src={imageUrlMobile}
        alt=""
      />
      <div className="absolute top-0 bottom-0 right-0 left-0 bg-gradient-to-b from-transparent to-gray-900 group-hover:from-gray-50 group-hover:to-white group-hover:opacity-70"></div>
      <h5 className="absolute px-6 duration-200 w-52 bottom-4 md:bottom-8 md:px-10 group-hover:scale-110 group-hover:text-black">
        {title}
      </h5>
    </motion.div>
  );
};

export default ItemCard;
