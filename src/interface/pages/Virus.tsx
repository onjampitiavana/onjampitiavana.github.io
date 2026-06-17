import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import sound from "../sound/virus.wav";
export default function Virus() {
  const [alert, setAlert] = useState<string>("");
  const navigate = useNavigate();
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const typeText = (message: string, speed: number, callback?: () => void) => {
    let i = 0;
    setAlert("");

    const interval = setInterval(() => {
      i++;
      setAlert(message.slice(0, i));

      if (i === message.length) {
        clearInterval(interval);
        callback?.();
      }
    }, speed);
  };

  useEffect(() => {
    audioRef.current = new Audio(`${sound}`);
    audioRef.current.volume = 0.4;
    const start = setTimeout(() => {
      audioRef.current?.play().catch(() => {
      });
      typeText("⚠️ System alert detected...☠️", 50, () => {
        setTimeout(() => {
          typeText("Just kidding > Initializing portfolio environment . . .", 50, () => {
            setTimeout(() => {
              navigate("/home");
            }, 1000);
          });
        }, 2500);
      });
    }, 2000);

    return () => clearTimeout(start);
  }, [navigate]);

  return (
    <div className="h-screen w-full flex items-center justify-center bg-black">
      <div className="font-mono text-green-400 text-lg">
        {alert}
        <span className="animate-pulse">▌</span>
      </div>
    </div>
  );
}