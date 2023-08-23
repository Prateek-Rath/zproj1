import React, { useState } from "react";

const AreYouSure = ({ onConfirm, text, classtext }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleConfirm = () => {
    setIsVisible(false);
    onConfirm();
  };

  return (
    <div>
      {isVisible && (
        <div className={classtext}>
          {/* <div className="rounded absolute left-1/2 top-1/2 m-1 p-1 max-h-full max-w-full transform -translate-x-1/2 -translate-y-1/2 bg-blue-500"> */}
          <p>Are you sure you want to proceed? </p>
          <div className="flex flex-row justify-evenly">
            <button className="btn bg-green-500" onClick={handleConfirm}>
              Yes
            </button>
            <button
              className="btn bg-red-500"
              onClick={() => setIsVisible(false)}
            >
              No
            </button>
          </div>
        </div>
      )}
      <button className="btn bg-red-500 " onClick={() => setIsVisible(true)}>
        {text}
      </button>
    </div>
  );
};

export default AreYouSure;
