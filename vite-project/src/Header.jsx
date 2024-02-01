import React from "react";
import trollface from "./assets/trollface.png";
export default function Header() {
  return (
    <div>
      <header>
        <img src={trollface} alt="trollface" width={80} />
        <h1>Meme generator</h1>
      </header>
    </div>
  );
}
