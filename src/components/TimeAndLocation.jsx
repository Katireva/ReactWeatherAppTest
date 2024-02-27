import React from "react";

function TimeAndLocation() {
  return (
    <div>
      <div className="flex items-center justify-center my-6">
        <p className="text-white text-xl font-extralight">
          Tuesday, 24 February 2024 | Local time: 22:04 PM
        </p>
      </div>

      <div className="flex items-center justify-center my-3">
        <p className="text-white text-3xl font-medium">Dnipro, UA</p>
      </div>
    </div>
  );
}

export default TimeAndLocation;
