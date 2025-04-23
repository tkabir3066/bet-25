
import { useState } from 'react'
import { toast } from "react-toastify";
import './App.css'
import Navbar from './Components/Header/Navbar';
import Hero from './Components/Hero/Hero';

function App() {
  const [money, setMoney] = useState(0);

  const handleAddMoney = () => {
    const newMoney = money + 1000000;
    setMoney(newMoney);
    toast.success("Money Added ..");
  };

  return (
    <div className="sora-font">
      <div className="mx-auto max-w-screen-xl">
      <Navbar money={money}></Navbar>
      <Hero handleAddMoney={handleAddMoney}></Hero>
      </div>
    </div>
  )
}

export default App
