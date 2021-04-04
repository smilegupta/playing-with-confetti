import React, { Fragment, useState } from "react";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";

const App = () => {
  const [confetti, setConfetti] = useState(false);
  const { width, height } = useWindowSize();

  return (
    <Fragment>
      {!confetti && (
        <div className="container  d-flex justify-content-center mt-5">
          {" "}
          <button className="btn btn-dark" onClick={() => setConfetti(true)}>
            {" "}
            Click ME
          </button>{" "}
        </div>
      )}
      { confetti === true &&  <Confetti width={width} height={height}  recycle={false} numberOfPieces={200} /> }
    </Fragment>
  );
};

export default App;

