import React, { useEffect, useState } from "react";
import Image from "next/image";
import OlenaRound from "@/public/OlenaRound.png";

const AvatarDisplay = () => {
  const [isOnline, setIsOnline] = useState(false);

  useEffect(() => {
    const checkAvailability = () => {
      const now = new Date();
      const dayOfWeek = now.getUTCDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
      const hours = now.getUTCHours();

      const isWeekday = dayOfWeek >= 1 && dayOfWeek <= 5; // Monday to Friday
      const isWithinHours = hours >= 9 && hours < 17; // 9:00 to 17:00

      setIsOnline(isWeekday && isWithinHours);
    };

    checkAvailability();
    const interval = setInterval(checkAvailability, 60000); // Check every minute

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-lg:hidden fixed right-0 bottom-0 p-4 sm:none">
      <div className={`avatar ${isOnline ? "online" : "offline"}`}>
        <div className="w-24 rounded-full">
          <Image src={OlenaRound} alt="Avatar" />
        </div>
      </div>
    </div>
  );
};

export default AvatarDisplay;
