import React from "react";
import "./style.css";
import "@fontsource/outfit"; // Defaults to weight 400

export default function Title({ text }) {
  return (
    <div>
      <p className="title">{text}</p>
      <div className="line"></div>
    </div>
  );
}
