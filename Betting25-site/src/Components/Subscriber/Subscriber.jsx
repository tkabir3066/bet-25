import bgEffect from "../../assets/bg-shadow.png";
const Subscriber = () => {
  return (
    <div
      className=" bg-white shadow-2xl rounded-xl rounded-b-none p-6 mx-auto"
      style={{
        backgroundImage: `url(${bgEffect})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-fit mx-auto text-center py-16 px-1">
        <h1 className="font-bold text-3xl mb-4">Subscribe to our Newsletter</h1>
        <p className="font-medium text-xl text-gray-500 mb-6">
          Get the latest updates and news right in your inbox!
        </p>
        <div className="flex flex-col md:flex-row gap-2">
          <input
            className="bg-lime-100 px-7 py-3.5 outline-none rounded-lg border-2 transition-colors duration-100 border-solid focus:border-lime-500 border-lime-300 w-full md:w-3/4"
            placeholder="Enter your Email"
            type="email"
          />
          <button className="px-7 py-3.5 rounded-lg bg-lime-400 border-double border-4 border-white w-full md:w-fit">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscriber;
