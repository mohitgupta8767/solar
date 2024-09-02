import React, { useState, useContext } from "react";
import { SidebarContext } from "./SidebarContext";

export default function Card({ title, description, items, icon: Icon }: any) {
  const { setIframeSrc } = useContext(SidebarContext);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    if (title !== "Overview") {
      setIframeSrc(items);
    }
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const truncatedDescription = description.slice(0, 100);
  const isTruncated = description.length > 100;

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform cursor-pointer">
      <div className="flex justify-between items-center mb-6 cursor-pointer" onClick={handleClick}>
        <h3 className="card_title text-xl font-semibold">{title}</h3>
        <span className="sidebar_icon"><Icon /></span>
      </div>
      
      {/* <hr className="my-4 border-gray-300" /> */}
      <p className="text-gray-700">
        {isExpanded ? description : truncatedDescription}
        {isTruncated && !isExpanded && "..."}
      </p>
      {isTruncated && (
        <button
          className="text-blue-500 mt-2"
          onClick={toggleExpand}
        >
          {isExpanded ? "Read Less" : "Read More"}
        </button>
      )}
    </div>
  );
}
