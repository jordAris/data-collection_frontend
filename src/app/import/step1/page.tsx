import Draggable from "@/components/imports/draggable";
import React from "react";

const page: React.FC = () => {
  return (
    <div className="h-full mx-[12rem] w-[80%] flex items-center">
      <Draggable />
    </div>
  );
};

export default page;