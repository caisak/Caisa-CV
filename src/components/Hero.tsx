import {
  Container,
  createStyles,
  rem,
  Text,
  useMantineTheme,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";

const useStyles = createStyles((theme) => ({
  root: {
    backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark : "white",
    // backgroundSize: "cover",
    // backgroundPosition: "center",
    // backgroundImage: "url(/images/lakesup.jpg)",
    //filter: theme.colorScheme === "dark" ? "grayscale(100%)" : "none",
    paddingBottom: `calc(${theme.spacing.xl} * 3)`,
    paddingTop: "10rem",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    overflow: "hidden",
  },

  FEDtext: {
    color: "#79bfb9",
    fontSize: "5rem",
    fontWeight: 700,
    opacity: 0,
  },
  contentText: {
    // fontSize: "2rem",
    opacity: 0,
  },
}));

export function HeroImageRight() {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  const textRef = useRef(null);
  const contentTextRef = useRef(null);
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

  useLayoutEffect(() => {
    if (textRef.current) {
      gsap.from(textRef.current, {
        duration: 3,
        opacity: 1,
        y: -200,
        ease: "power3.out",
      });
    }

    if (contentTextRef.current) {
      gsap.from(contentTextRef.current, {
        duration: 3,
        opacity: 1,
        y: 100,
        ease: "power2.inOut",
      });
    }
  }, []);

  return (
    <div className={classes.root}>
      <Container size="lg">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Text ref={textRef} className={classes.FEDtext}>
            Front end developer
          </Text>
          <img
            style={{
              height: "12rem",
              width: "12rem",
              objectFit: "cover",
              filter: theme.colorScheme === "dark" ? "grayscale(30%)" : "none",
              borderRadius: "50%",
              marginTop: "-6em",
            }}
            src="./images/caisa.jpg"
            alt="profile picture"
          />
          <Text ref={contentTextRef} className={classes.contentText}>
            Selecting languages, frameworks and tools with precision - Weaving
            the digital fabric of tomorrow.
          </Text>
        </div>
      </Container>
    </div>
  );
}
