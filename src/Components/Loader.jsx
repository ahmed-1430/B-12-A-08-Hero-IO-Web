import React from 'react';
import { CircleLoader } from "react-spinners";

const Loader = ({ size = 80, color = "#9560ee", loading = true }) => {
  return (
    <div className="min-h-screen bg-[#f5f5f5] flex justify-center items-center">
      <CircleLoader 
        color={color} 
        size={size} 
        loading={loading} 
      />
    </div>
  );
};

export default Loader;