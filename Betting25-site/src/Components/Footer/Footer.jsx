import heroLogo from "../../assets/banner-main.png";
const Footer = () => {
  return (
    <div className="bg-black text-white pt-8 ">
      <img src={heroLogo} className="mx-auto mb-16 pt-8" />
      <div className="flex flex-col lg:flex-row px-2 justify-between mx-auto max-w-screen-xl pb-16 border-b-2 border-gray-500">
        <div className="w-2xs">
          <p className="text-lg font-semibold mb-5">About Us</p>
          <p className="font-normal text-gray-500">
            We are a passionate team dedicated to providing the best services to
            our customers.
          </p>
        </div>

        <div>
          <p className="text-lg font-semibold mb-5">Quick Links</p>
          <ul className="font-normal text-gray-500 list-disc">
            <li>Home</li>
            <li>Services</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="">
          <p className="text-lg font-semibold mb-5">Subscribe</p>
          <p className="font-normal text-gray-500 w-2xs mb-5">
            Subscribe to our newsletter for the latest updates.
          </p>
          <div className="flex flex-col md:flex-row gap-2 text-black">
            <input
              class="bg-lime-100 px-7 py-3.5 outline-none rounded-lg border-2 transition-colors duration-100 border-solid focus:border-lime-500 border-lime-300 w-full md:w-3/4 placeholder-black"
              placeholder="Enter your Email"
              type="email"
            />
            <button className="px-7 py-3.5 rounded-lg bg-lime-400 border-double border-4 border-black w-full md:w-fit">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <p className="text-center py-8 font-normal text-gray-500">
        @2024 Your Company All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
