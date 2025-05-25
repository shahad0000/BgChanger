import { useState } from "react";

import "./App.css";

function App() {
const [bgColor, setBgColor] = useState("bg-white");

const changeColor = (color) => {
  setBgColor(color)
}




  return (
    <>
      <div className={`${bgColor} min-w-screen min-h-screen`}>

        <div className="flex flex-col gap-6 justify-around items-center h-[60vh]">
          <div className="text-5xl font-bold text-gray-700">Click a Button to change the Background</div>
        <div className="flex gap-5 justify-center">
          <button onClick={() => changeColor("bg-white")} className="bg-white p-2 px-5">Original</button>
          <button onClick={() => changeColor("bg-[#F0F8FF]")} className="bg-[#F0F8FF] p-2 px-5">Alice Blue</button>
          <button onClick={() => changeColor("bg-[#E6E6FA]")} className="bg-[#E6E6FA] p-2 px-5">Lavender</button>
          <button onClick={() => changeColor("bg-[#F5FFFA]")} className="bg-[#F5FFFA] p-2 px-5">MInt</button>
          <button onClick={() => changeColor("bg-[#E0FFFF]")} className="bg-[#E0FFFF] p-2 px-5">Light Cyan</button>
          <button onClick={() => changeColor("bg-[#FFDAB9]")} className="bg-[#FFDAB9] p-2 px-5">Peach</button>
          <button onClick={() => changeColor("bg-[#FFE4E1]")} className="bg-[#FFE4E1] p-2 px-5">Rose</button>
          <button onClick={() => changeColor("bg-[#FFFACD]")} className="bg-[#FFFACD] p-2 px-5">Lemon</button>

        </div>
        </div>
       
      </div>
    </>
  );
}

export default App;
