const SwitchBtn = ({ handleBtnSwitch, activeBtn, selectedPlayers }) => {
    return (
      <div className="flex flex-col md:flex-row items-center gap-6 justify-between mb-8">
        {activeBtn === "Available" ? (
          <h1 className="font-bold text-3xl">Available Players</h1>
        ) : (
          <h1 className="font-bold text-3xl">
            Selected Players ({selectedPlayers.length}/6)
          </h1>
        )}
  
        <div>
          <button
            onClick={() => handleBtnSwitch("Available")}
            className={`px-7 py-3.5 rounded-md  rounded-r-none ${
              activeBtn === "Available" ? "bg-lime-400" : "bg-gray-300"
            }`}
          >
            Available
          </button>
          <button
            onClick={() => handleBtnSwitch("Selected")}
            className={`px-7 py-3.5 rounded-md  rounded-l-none ${
              activeBtn === "Selected" ? "bg-lime-400" : "bg-gray-300"
            }`}
          >
            Selected ({selectedPlayers.length})
          </button>
        </div>
      </div>
    );
  };
  
  export default SwitchBtn;
  