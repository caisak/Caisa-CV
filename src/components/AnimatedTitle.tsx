import { useEffect, useState } from "react";

export function AnimatedTitle() {
  const [title, setTitle] = useState('Front End Developer');
  const titles = ['Front End Developer', 'Storyteller', 'Barista', 'Friend'];

  useEffect(() => {
    const interval = setInterval(() => {
      setTitle(currentTitle => {
        const index = titles.indexOf(currentTitle);
        if (index === titles.length - 1) {
          return titles[0];
        } else {
          return titles[index + 1];
        }
      });
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <>{title}</>;
}
