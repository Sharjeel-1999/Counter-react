import React from "react";
import Coin from "./features/coin";
import Counter from "./features/Counter";
import './App.css'





 const App=()=>{
  return(
    <div className="App">
    <Counter/>
    <Coin/>
    </div>
  );
}

export default App;