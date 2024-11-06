import ItemCard from "./itemCard";

const ItemsContainer = () => {
  const items1 = [
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
  ];

  const items2 = [
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
  return (
    <>
      <div className="flex flex-col justify-between w-full space-y-6 text-2xl text-white uppercase md:flex-row md:space-y-0 md:space-x-8">
        {items1.map((item, index) => (
          <ItemCard
            key={index}
            imageUrlDesktop={item.imageUrlDesktop}
            imageUrlMobile={item.imageUrlMobile}
            title={item.title}
          />
        ))}
      </div>

      <div className="flex flex-col justify-between w-full space-y-6 mt-10 text-2xl text-white uppercase md:flex-row md:space-y-0 md:space-x-8">
        {items2.map((item, index) => (
          <ItemCard
            key={index}
            imageUrlDesktop={item.imageUrlDesktop}
            imageUrlMobile={item.imageUrlMobile}
            title={item.title}
          />
        ))}
      </div>
    </>
  );
};

export default ItemsContainer;
