import React, { useState } from "react";
import ClickedUI from "./Components/ClickedUI";
import LocomotiveScroll from "locomotive-scroll";


const locomotiveScroll = new LocomotiveScroll();

const App = () => {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setVisible(true);
    }, 5000); // 5 seconds
  };

  return (
    <div className="min-h-screen bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-[#1d4ed8] via-[#1e40af] to-[#111827] text-white font-mono">
      <div className="flex items-center justify-center min-h-screen px-4">
        {!visible && !loading && (
          <div className="flex flex-col items-center justify-center gap-6 bg-white/10 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/20">
            <p className="text-3xl sm:text-4xl font-semibold text-center">
              Click here meri gb 💖
            </p>
            <button
              onClick={handleClick}
              className="bg-white text-black text-lg sm:text-xl font-bold px-6 py-2 rounded-md hover:bg-slate-200 transition-all duration-300 shadow-md hover:animate-rotate-x"
            >
              Click
            </button>
          </div>
        )}

        {loading && (
          <div className="flex flex-col items-center gap-6 text-center text-xl sm:text-2xl">
            <p>Kuchh achha hone wala hai gb... Loading ⏳</p>
            <svg
              className="animate-spin h-10 w-10 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
              ></path>
            </svg>
          </div>
        )}

        {visible && <ClickedUI />}
      </div>
    </div>
  );
};

export default App;
