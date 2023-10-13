import React, { useState } from "react"
import "./Chips.css";

const Chips = () => {
    const [count, setCount] = useState(0);
    
    return (
      <div>
      <img src="https://media1.giphy.com/media/ZsI3SMiLozNjn5rDGv/giphy.gif?cid=ecf05e47rieeb9u1ynzww600ob875nglxhjn3lx1ov5auxhd&ep=v1_gifs_search&rid=giphy.gif&ct=g"/>
      <img src="https://media1.giphy.com/media/ZsI3SMiLozNjn5rDGv/giphy.gif?cid=ecf05e47rieeb9u1ynzww600ob875nglxhjn3lx1ov5auxhd&ep=v1_gifs_search&rid=giphy.gif&ct=g"/>
      <img src="https://media1.giphy.com/media/ZsI3SMiLozNjn5rDGv/giphy.gif?cid=ecf05e47rieeb9u1ynzww600ob875nglxhjn3lx1ov5auxhd&ep=v1_gifs_search&rid=giphy.gif&ct=g"/>
        <h1>Bags devoured: {count}</h1>
        <button onClick={() => setCount(count + 1)}>NOM NOM NOM🥱</button>
        <button onClick={() => setCount(count - 1)}>I ATE TO MUCH🤢</button>
      </div>
    );
};

export default Chips;