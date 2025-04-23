import { useState } from "react";
import { toast } from "react-toastify";
import "./App.css";
import Navbar from "./Components/Header/Navbar";
import Hero from "./Components/Hero/Hero";
import SwitchBtn from "./Components/PageSwitch/SwitchBtn";
import Players from "./Components/Players/Players";
import Splayers from "./Components/Selected Players/Splayers";
import Subscriber from "./Components/Subscriber/Subscriber";
import Footer from "./Components/Footer/Footer";

function App() {
  const [money, setMoney] = useState(0);
  const [activeBtn, setActiveBtn] = useState("Available");
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  const handleAddMoney = () => {
    const newMoney = money + 1000000;
    setMoney(newMoney);
    toast.success("Money Added ..");
  };
  const handleBtnSwitch = (tab) => {
    setActiveBtn(tab);
  };
  const handleAddPlayers = (player, price, id) => {
    if (selectedPlayers.length >= 6) {
      toast.warning("Player limit exceed");
      return;
    }
    const isAlreadySelected = selectedPlayers.some((p) => p.id === id);
    if (isAlreadySelected) {
      toast.warning("Player already selected .");
      return;
    }
    if (money < price) {
      toast.warning("Not Enough money !");
      return;
    }
    const balance = money - price;
    setMoney(balance);
    const newPlayer = [...selectedPlayers, player];
    setSelectedPlayers(newPlayer);
    toast.success(`${player.name} is now in your squad`);
  };
  const handleDelete = (id) => {
    const newSelectedPlayers = selectedPlayers.filter(
      (selectedPlayer) => selectedPlayer.id !== id
    );
    setSelectedPlayers(newSelectedPlayers);
    toast.info("Player removed");
  };
  const handleAddMoreBTN = () => {
    setActiveBtn("Available");
  };

  return (
    <div className="sora-font">
      <div className="mx-auto max-w-screen-xl">
        <Navbar money={money}></Navbar>
        <Hero handleAddMoney={handleAddMoney}></Hero>
        <SwitchBtn
          handleBtnSwitch={handleBtnSwitch}
          activeBtn={activeBtn}
          selectedPlayers={selectedPlayers}
        ></SwitchBtn>
        {activeBtn === "Available" ? (
          <Players handleAddPlayers={handleAddPlayers}></Players>
        ) : (
          <Splayers
            selectedPlayers={selectedPlayers}
            handleDelete={handleDelete}
            handleAddMoreBTN={handleAddMoreBTN}
          ></Splayers>
        )}
        <Subscriber></Subscriber>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
