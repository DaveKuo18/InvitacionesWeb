import { useEffect, useMemo, useState } from "react";

export function useCountdown(dateISO) {
  const target = useMemo(() => new Date(dateISO).getTime(), [dateISO]);
  const [diff, setDiff] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setDiff(Math.max(target - Date.now(), 0));
    }, 1000);
    return () => window.clearInterval(timer);
  }, [target]);

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}
