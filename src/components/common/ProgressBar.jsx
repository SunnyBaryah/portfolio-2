import React, { useEffect, useState } from "react";

const ProgressBar = ({ targetProgress, className }) => {
  const [currentProgress, setCurrentProgress] = useState(0);

  useEffect(() => {
    const animation = setInterval(() => {
      setCurrentProgress((prev) => {
        if (prev < targetProgress) {
          return Math.min(prev + 1, targetProgress);
        }
        clearInterval(animation);
        return prev;
      });
    }, 10);
  }, [targetProgress]);

  return (
    <div
      className={`${className} w-full border-2 border-white h-4 overflow-hidden`}
    >
      <div
        className="bg-white h-full animation-progress"
        style={{ width: `${currentProgress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
