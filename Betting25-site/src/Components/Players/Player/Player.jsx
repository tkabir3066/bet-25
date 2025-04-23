import { IoPersonSharp } from "react-icons/io5";
import { FaFlag } from "react-icons/fa6";

const Player = ({ player, handleAddPlayers }) => {
  const { id, name, country, role, battingStyle, price, img } = player;
  return (
    <div className="border-2 border-lime-300 rounded-md p-6 text-gray-600 flex flex-col gap-2.5">
      <img src={img} className="w-96 h-60 rounded-md mx-auto object-cover" />

      <div className="flex items-center gap-2">
        <IoPersonSharp className="text-xl " />
        <p className="text-xl font-semibold ">{name}</p>
      </div>

      <div className="flex justify-between text-gray-500">
        <div className="flex items-center gap-2">
          <FaFlag />
          <p>{country}</p>
        </div>
        <p>{role}</p>
      </div>

      <p>Rating</p>

      <div className="flex items-center justify-between ">
        <p>{battingStyle}</p>
        <p>{battingStyle}</p>
      </div>

      <div className="flex items-center justify-between ">
        <p>Price:${price}</p>
        <button
          onClick={() => handleAddPlayers(player, price, id)}
          className="bg-lime-300 px-5 py-3 rounded-md cursor-pointer"
        >
          Choose Player
        </button>
      </div>
    </div>
  );
};

export default Player;
