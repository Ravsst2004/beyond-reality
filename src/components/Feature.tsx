const Feature = () => {
  return (
    <section id="feature">
      <div className="relative container flex flex-col max-w-6xl mx-auto my-32 px-6 text-gray-900 md:flex-row md:px-0">
        <img
          src="images/desktop/image-interactive.jpg"
          alt=""
        />
        <div className="top-48 bg-white md:absolute md:right-0 md:py-14 md:pl-14">
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
        </div>
      </div>
    </section>
  );
};

export default Feature;
