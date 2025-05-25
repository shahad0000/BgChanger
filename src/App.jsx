import { useState } from "react";

import "./App.css";

function App() {
  const [bgColor, setBgColor] = useState("white");

  const changeColor = (color) => {
    setBgColor(color);
  };

  const goRandom = () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    setBgColor(`#${randomColor.padStart(6, "0")}`);
  };

  return (
    <>
      <div style={{backgroundColor: bgColor}} className="min-w-screen min-h-screen">
        <div className="flex flex-col  justify-evenly items-center h-[90vh]">
          <div className="text-5xl font-bold text-gray-600">
            Click a Button to change the Background
          </div>
          <div className="flex gap-5 justify-center">
     
            <button
              onClick={() => changeColor("#F0F8FF")}
              className="bg-[#F0F8FF] p-2 px-5"
            >
              Alice Blue
            </button>
            <button
              onClick={() => changeColor("#E6E6FA")}
              className="bg-[#E6E6FA] p-2 px-5"
            >
              Lavender
            </button>
            <button
              onClick={() => changeColor("#F5FFFA")}
              className="bg-[#F5FFFA] p-2 px-5"
            >
              MInt
            </button>
            <button
              onClick={() => changeColor("#E0FFFF")}
              className="bg-[#E0FFFF] p-2 px-5"
            >
              Light Cyan
            </button>
            <button
              onClick={() => changeColor("#FFDAB9")}
              className="bg-[#FFDAB9] p-2 px-5"
            >
              Peach
            </button>
            <button
              onClick={() => changeColor("#FFE4E1")}
              className="bg-[#FFE4E1] p-2 px-5"
            >
              Rose
            </button>
            <button
              onClick={() => changeColor("#FFFACD")}
              className="bg-[#FFFACD] p-2 px-5"
            >
              Lemon
            </button>
          </div>
          <div className="flex gap-5">
            <button  onClick={() => changeColor(() => goRandom())}
              className="p-2 px-5 bg-gradient-to-br from-purple-300  to-blue-100 ">Go Random</button>
                     <button
              onClick={() => changeColor("white")}
              className="bg-white p-2 px-5"
            >
              Original
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
