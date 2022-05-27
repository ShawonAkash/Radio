import React from "react";
import backArrow from "../../asset/back-arrow.png";
import switchButton from "../../asset/switch.png";

function RadioHeader() {
  return (
    <div className='bg-[#edad61] h-[160px] flex justify-between items-center shrink-0'>
      <div className='m-6 cursor-pointer'>
        <img src={backArrow} />
      </div>
      <div>
        <h1 className='text-[50px] text-white uppercase font-bold'>Stations</h1>
      </div>
      <div className='m-6 cursor-pointer'>
        <img src={switchButton} alt='' />
      </div>
    </div>
  );
}

export default RadioHeader;
