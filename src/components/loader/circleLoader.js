import React from "react";
import { ClipLoader } from "react-spinners";

const CircleLoader = ({ loading = true, color = "#fff", size = "30" }) => {
  return (
    <div>
      <ClipLoader size={size} color={color} loading={loading} />
    </div>
  );
};

export default CircleLoader;
