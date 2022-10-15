import Head from "next/head";
import Image from "next/image";
import React from "react";
import ToolTip from "../components/Tooltip";

function HomePage() {
  return (
    <div className="mx-auto max-w-5xl p-10">
      <ToolTip tooltipString="tooltip it is">
        <button className="bg-cyan-700/50 text-gray-700 p-3 rounded">
          MouseOver Me
        </button>
      </ToolTip>
    </div>
  );
}

export default HomePage;
