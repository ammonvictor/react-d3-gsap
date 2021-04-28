import React, { useState } from "react";
import BarChartPlain from "./BarChartPlain";
import BarChartWithGSAP from "./BarChartWithGSAP";
import "./styles.css";

const App = () => {
  const [days, setDays] = useState([
    { day: "Mon", value: 10 },
    { day: "Tue", value: 40 },
    { day: "Wed", value: 30 },
    { day: "Thu", value: 60 },
    { day: "Fri", value: 30 }
  ]);

  const width = 500;
  const height = 100;

  const handleUpdateData = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    e.preventDefault();
    const _data = days.map((d) => {
      return {
        ...d,
        value: Math.floor(Math.random() * 90) + 5
      };
    });
    setDays(_data);
  };

  return (
    <div className="container px-4 h-screen w-screen text-gray-700">
      <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
        <div className="text-left">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block xl:inline">React, D3</span>
            <span className="block text-indigo-600 xl:inline">and GSAP</span>
          </h1>
          <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl md:mt-5 md:text-xl lg:mx-0">
            The Ultimate DataViz Toolbox
          </p>
        </div>
        <div className="pb-6"></div>
        <div className="mb-2">
          <h2 className="text-xl">With GSAP</h2>
          <BarChartWithGSAP width={width} height={height} data={days} />
        </div>
        <div className="mb-2">
          <h2 className="text-xl">Without GSAP</h2>
          <BarChartPlain width={width} height={height} data={days} />
        </div>

        <button
          onClick={handleUpdateData}
          className="rounded p-3 bg-green-400 text-green-700 hover:bg-green-200"
        >
          Update Data
        </button>
      </main>
    </div>
  );
};
export default App;
