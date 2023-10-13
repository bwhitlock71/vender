import React, { useState } from "react";
import "./Donut.css";

const Donut = () => {
    const [count, setCount] = useState(0);

return (
    <div>
      <img src="https://media3.giphy.com/media/Mnx6latbutITC/giphy.webp?cid=ecf05e47dlgju8nmvlgx48jey6gum7hl6mizi65tcgv6nq55&ep=v1_gifs_related&rid=giphy.webp&ct=g"/>
      <img src="https://media3.giphy.com/media/Mnx6latbutITC/giphy.webp?cid=ecf05e47dlgju8nmvlgx48jey6gum7hl6mizi65tcgv6nq55&ep=v1_gifs_related&rid=giphy.webp&ct=g"/>
      <img src="https://media3.giphy.com/media/Mnx6latbutITC/giphy.webp?cid=ecf05e47dlgju8nmvlgx48jey6gum7hl6mizi65tcgv6nq55&ep=v1_gifs_related&rid=giphy.webp&ct=g"/>
        <h1>Donuts savored: {count}</h1>
        <button onClick={() => setCount(count + 1)}>MMMM Donuts🤩</button>
        <button onClick={() => setCount(count - 1)}>TO MANY DONUTS🤢</button>
    </div>
)
};

export default Donut;