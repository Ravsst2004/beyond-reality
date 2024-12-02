import ItemCard from "./ItemCard";

const ItemsContainer = () => {
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

  //   {
  //     imageUrlDesktop: "images/desktop/image-from-above.jpg",
  //     imageUrlMobile: "images/mobile/image-from-above.jpg",
  //     title: "From Above VR",
  //   },
  //   {
  //     imageUrlDesktop: "images/desktop/image-pocket-borealis.jpg",
  //     imageUrlMobile: "images/mobile/image-pocket-borealis.jpg",
  //     title: "Pocket Borealis",
  //   },
  //   {
  //     imageUrlDesktop: "images/desktop/image-curiosity.jpg",
  //     imageUrlMobile: "images/mobile/image-curiosity.jpg",
  //     title: "The Curiosity",
  //   },
  //   {
  //     imageUrlDesktop: "images/desktop/image-fisheye.jpg",
  //     imageUrlMobile: "images/mobile/image-fisheye.jpg",
  //     title: "Make it fisheye",
  //   },
  // ];
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 justify-between w-full space-y-6 text-2xl text-white uppercase md:flex-row md:space-y-0 ">
        {items.map((item, index) => (
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
