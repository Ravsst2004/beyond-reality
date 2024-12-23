import ItemsContainer from "./ItemsContainer";

const Creations = () => {
  return (
    <section className="md:pt-10">
      <div
        id="products"
        className="container max-w-6xl mx-auto my-32 px-6 text-gray-600 md:px-0"
      >
        <div className="flex justify-center items-center mb-10 md:justify-between">
          <h2 className="text-4xl text-center uppercase md:text-left md:text-5xl md:mx-0">
            Our Creations
          </h2>
        </div>

        <ItemsContainer />
      </div>
    </section>
  );
};

export default Creations;
