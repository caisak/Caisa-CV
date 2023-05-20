import { createStyles, rem, Title } from "@mantine/core";
import { useEffect, useState } from "react";

const useStyles = createStyles((theme) => ({
  title: {
    color: theme.white,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    lineHeight: 1.05,
    maxWidth: rem(500),
    fontSize: rem(48),

    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
      fontSize: rem(30),
      lineHeight: 1.15,
    },
  },

  smallTitle: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    lineHeight: 1.05,
    maxWidth: rem(500),
    fontSize: rem(48), // Adjust as needed

    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
      fontSize: rem(22), // Adjust as needed
      lineHeight: 1.15,
      color: 'white',
    },
  },
}));

export function AnimatedTitle() {
  const { classes } = useStyles();
  const [title, setTitle] = useState('Front End Developer');
  const titles = ['Front End Developer', 'Storyteller', 'Barista'];

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

  return (
    <Title
      className={title === 'Front End Developer' ? classes.smallTitle : classes.title}
    >
      {title}
    </Title>
  )
}
