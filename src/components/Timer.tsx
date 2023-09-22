import { useState, useEffect } from "react";

export const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    if (seconds < 9) {
      const timer = setInterval(() => {
        setSeconds(seconds + 1);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [seconds]);

  return (
    <div className="w-full h-[94vh] flex items-center justify-center">
      <div
        className={`flex flex-col items-center justify-center gap-2 h-48 w-48 border border-white rounded-full text-center`}>
        <span className="text-2xl">
          {seconds <= 3 && (
            <span className={`text-2xl timer-text-inhale`}>INHALE</span>
          )}

          {seconds <= 5 && (
            <span className={`text-2xl timer-text-hold`}>HOLD</span>
          )}

          {seconds <= 8 && (
            <span className={`text-2xl timer-text-exhale`}>EXHALE</span>
          )}
        </span>
        <span className={`text-sm`}>
          {seconds <= 3 ? "3" : seconds <= 5 ? "2" : "3"} SECONDS
        </span>
      </div>
    </div>
  );
};
