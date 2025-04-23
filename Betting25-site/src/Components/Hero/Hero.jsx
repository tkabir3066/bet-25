import heroLogo from "../../assets/banner-main.png";
import bgEffect from "../../assets/bg-shadow.png";
const Hero = ({ handleAddMoney }) => {
  return (
    <div
      className="bg-black text-white rounded-xl mb-20"
      style={{
        backgroundImage: `url(${bgEffect})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-fit mx-auto text-center py-16 px-1">
        <img src={heroLogo} alt="" className="w-60 h-48 mx-auto mb-6" />
        <h1 className="font-bold text-4xl mb-4">
          Assemble Your Ultimate Bet25 Cricket Team
        </h1>
        <p className="font-medium text-2xl text-gray-500 mb-6">
          Beyond Boundaries Beyond Limits
        </p>

        <button
          onClick={() => handleAddMoney()}
          className="bg-lime-400 px-5 py-3.5 rounded-xl border-double border-6 border-black text-black font-bold cursor-pointer"
        >
          Claim Free Credit
        </button>
      </div>
    </div>
  );
};

export default Hero;
