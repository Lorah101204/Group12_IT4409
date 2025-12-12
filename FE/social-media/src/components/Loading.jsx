import React from "react";

const Loading = (height = "100%", width = "100%") => {
  return (
    <div
      style={{ height: height, width: width }}
      className="flex items-center justify-center h-screen"
    >
      <div className="w-10 h-10 rounded-full border-3 border-blue-500 border-t-transparent animate-spin "></div>
    </div>
  );
};

export default Loading;
