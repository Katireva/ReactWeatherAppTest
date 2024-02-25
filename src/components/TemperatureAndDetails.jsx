import React from "react";

function TemperatureAndDetails() {
  return (
    <div>
      <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
        <p>Clouds</p>
      </div>
      <div className="flex flex-row items-center justify-between text-white py-3">
        <img src="" alt="Weather img" className="w-20" />
        <p className="text-5xl"> 34° </p>
      </div>
    </div>
  );
}

export default TemperatureAndDetails;
