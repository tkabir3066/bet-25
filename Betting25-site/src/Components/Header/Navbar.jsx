import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import logo from "../../assets/logo.png";

const Navbar = ({ money }) => {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <img src={logo} alt="" className="w-16 h-16" />

        <div className="flex gap-12">
          <p className="cursor-pointer hidden md:flex">Home</p>
          <p className="cursor-pointer hidden md:flex">Fixture</p>
          <p className="cursor-pointer hidden md:flex">Teams</p>
          <p className="cursor-pointer hidden md:flex">Schedules</p>
          <div className="flex items-center gap-2 cursor-pointer">
            {money}
            <h4 className="font-semibold">Coin</h4>
            <RiMoneyRupeeCircleFill className="text-yellow-600 text-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
