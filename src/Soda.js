import React, { useState } from "react";
import "./Soda.css";

const Soda = () => {
    const [count, setCount] = useState(0);

return (
    <div>
      <img src="https://media0.giphy.com/media/N7UGeeTJzggsE/giphy.gif?cid=ecf05e47k4rr9xjpdso6jru8q3otrn2r7i6fbazg8u938ptv&ep=v1_gifs_search&rid=giphy.gif&ct=g"/>
      <img src="https://media0.giphy.com/media/N7UGeeTJzggsE/giphy.gif?cid=ecf05e47k4rr9xjpdso6jru8q3otrn2r7i6fbazg8u938ptv&ep=v1_gifs_search&rid=giphy.gif&ct=g"/>
      <img src="https://media0.giphy.com/media/N7UGeeTJzggsE/giphy.gif?cid=ecf05e47k4rr9xjpdso6jru8q3otrn2r7i6fbazg8u938ptv&ep=v1_gifs_search&rid=giphy.gif&ct=g"/>
        <h1>Soda count: {count}</h1>
        <button onClick={() => setCount(count + 1)}>MMMM SUGAR🤩</button>
        <button onClick={() => setCount(count - 1)}>TO MUCH SUGAR🤢</button>
    </div>
)
};

export default Soda;