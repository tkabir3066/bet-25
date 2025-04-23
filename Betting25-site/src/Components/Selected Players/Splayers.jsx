import Splayer from "./Selected Player/Splayer";

const Splayers = ({ selectedPlayers, handleDelete, handleAddMoreBTN }) => {
  return (
    <div className="flex flex-col justify-center">
      {selectedPlayers.map((selectedPlayer) => (
        <Splayer
          key={selectedPlayer.id}
          selectedPlayer={selectedPlayer}
          handleDelete={handleDelete}
        ></Splayer>
      ))}
      <button
        onClick={() => handleAddMoreBTN()}
        className="bg-lime-400 w-48 mx-auto md:mx-0 px-5 py-3.5 rounded-xl border-double border-6 border-white text-black font-bold cursor-pointer"
      >
        Add More Player
      </button>
    </div>
  );
};

export default Splayers;
