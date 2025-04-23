import { MdDeleteForever } from "react-icons/md";

const Splayer = ({ selectedPlayer, handleDelete }) => {
  const { id, name, battingStyle, img } = selectedPlayer;
  return (
    <div className="border-2 border-lime-200 p-6 rounded-md mb-6">
      <div className="flex justify-between">
        <div className="flex items-center gap-6">
          <img src={img} className="w-20 h-20 object-cover rounded-xl" />
          <div>
            <p className="mb-3">{name}</p>
            <p>{battingStyle}</p>
          </div>
        </div>

        <button onClick={() => handleDelete(id)} className="cursor-pointer">
          <MdDeleteForever className="text-3xl text-red-500" />
        </button>
      </div>
    </div>
  );
};

export default Splayer;
