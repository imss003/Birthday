import React, { useState } from "react";
import BirthdayUI from "./BirthdayUI";

const ClickedUI = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="min-h-screen w-full flex items-center justify-center px-4 py-8 bg-transparent">
      {!clicked ? (
        <div className="flex flex-col items-center gap-6 bg-white/10 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/20 text-white text-center">
          <p className="text-2xl sm:text-3xl">Just kidding gb... Click again 😁</p>
          <button
            onClick={() => setClicked(true)}
            className="bg-white text-black text-lg sm:text-xl font-bold px-6 py-2 rounded-md hover:bg-slate-200 transition-all duration-300 shadow-md hover:animate-rotate-x"
          >
            Click
          </button>
        </div>
      ) : (
        <BirthdayUI />
      )}
    </div>
  );
};

export default ClickedUI;
