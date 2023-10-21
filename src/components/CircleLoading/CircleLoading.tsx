import React from "react";

const CircleLoading = () => {
  return (
    <>
      <div className="w-full h-[100vh] flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
      </div>
    </>
  );
};

export default CircleLoading;
