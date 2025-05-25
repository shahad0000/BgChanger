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
          <button onClick={() => changeColor("bg-[#c4ebfc]")} className="bg-[#c4ebfc] p-2 px-5">Blue</button>
          <button onClick={() => changeColor("bg-[#dcf7c8]")} className="bg-[#dcf7c8] p-2 px-5">Green</button>
          <button onClick={() => changeColor("bg-[#fff17a]")} className="bg-[#fff17a] p-2 px-5">Yelllow</button>
          <button onClick={() => changeColor("bg-[#e8b0b3]")} className="bg-[#e8b0b3] p-2 px-5">Pink</button>

        </div>
        </div>
       
      </div>
    </>
  );
}

export default App;
