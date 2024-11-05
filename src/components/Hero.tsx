import Menu from "./Menu";

const Hero = () => {
  return (
    <section id="hero">
      <div className="container max-w-6xl mx-auto px-6 py-4 md:px-4">
        <Menu />
        <div className="max-w-lg mt-32 mb-32 p-4 font-sans text-4xl text-white uppercase border-2 md:p-10 md:m-32 md:mx-0 md:text-6xl">
          Impressive Experience That Deliver
        </div>
      </div>
    </section>
  );
};

export default Hero;
