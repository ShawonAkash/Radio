import React from "react";

function RadioFooter(props) {
  return (
    <div className='h-[160px] bg-[#22222b] border-t-[2px] border-t-[#45494d] shrink-0'>
      {showFooter()}
    </div>
  );

  function showFooter() {
    if (props.selectedChannel) {
      return (
        <React.Fragment>
          <p className='uppercase text-[25px] text-center text-[#edae61] leading-[40px] font-bold mt-[40px]'>
            Currently Playing
          </p>
          <p className='text-[60px] text-center leading-[40px]'>
            {props.selectedChannel.name}
          </p>
        </React.Fragment>
      );
    }
  }
}

export default RadioFooter;
