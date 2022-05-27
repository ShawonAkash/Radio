import React, { Component } from "react";
import "./App.css";
import Radio from "./components/radio/Radio";

class App extends Component {
  render() {
    return (
      <div className='w-full h-[1200px] text-[#a2abbd] leading-[80px] bg-gradient-to-b from-[#21212b] to-[#21212b] pt-[100px]'>
        <Radio />
      </div>
    );
  }
}

export default App;
