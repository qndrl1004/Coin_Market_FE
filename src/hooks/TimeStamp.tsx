import { useState, useEffect } from "react";

const useTime = (): { hours: number; minutes: number } => {
  const [time, setTime] = useState<{ hours: number; minutes: number }>({
    hours: 0,
    minutes: 0,
  });

  useEffect(() => {
    const updateCurrentTime = () => {
      const currentDate = new Date();
      const hours = currentDate.getHours();
      const minutes = currentDate.getMinutes();

      setTime({ hours, minutes });
    };

    updateCurrentTime();

    const interval = setInterval(updateCurrentTime, 60000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return time;
};

export default useTime;
