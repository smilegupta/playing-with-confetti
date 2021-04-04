import React, { Fragment, useState } from "react";
import ConfettiCanvas from "react-confetti-canvas";

const App = () => {
  const [Confetti, setConfetti] = useState(false);

  return (
    <Fragment>
      {!Confetti && (
        <div className="container  d-flex justify-content-center mt-5">
          {" "}
          <button className="btn btn-dark" onClick={() => setConfetti(true)}>
            {" "}
            Click ME
          </button>{" "}
        </div>
      )}
      {Confetti === true && (
        <div style={{ width: "100%", height: "100vh" }}>
          <ConfettiCanvas paperCount={300} ribbonCount={0} />
        </div>
      )}
    </Fragment>
  );
};

export default App;


// For More Refernce: https://github.com/fufu70/react-confetti-canvas