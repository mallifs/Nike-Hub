import React from "react";

function Clips({ clipimg }) {
  return (
    <>
      <div className="clip">
        <img src={clipimg} alt="img-clip" />
        <i className="fa-solid fa-play"></i>
      </div>
    </>
  );
}

export default Clips;
