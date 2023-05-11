import {
  Button,
  Container,
  createStyles,
  Overlay,
  rem,
  Text,
  Title,
} from "@mantine/core";
import { NavLink } from "react-router-dom";

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: "relative",
    paddingTop: rem(180),
    paddingBottom: rem(130),
    backgroundImage: "url(/images/lakesup.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    marginTop: "3.7rem",

    [theme.fn.smallerThan("xs")]: {
      paddingTop: rem(80),
      paddingBottom: rem(50),
    },
  },

  inner: {
    position: "relative",
    zIndex: 1,
  },

  title: {
    fontWeight: 800,
    fontSize: rem(40),
    letterSpacing: rem(-1),
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    color: theme.white,
    marginBottom: theme.spacing.xs,
    textAlign: "center",
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,

    [theme.fn.smallerThan("xs")]: {
      fontSize: rem(28),
      textAlign: "left",
    },
  },

  highlight: {
    color: theme.colors[theme.primaryColor][4],
  },

  description: {
    color: theme.colors.gray[0],
    textAlign: "center",

    [theme.fn.smallerThan("xs")]: {
      fontSize: theme.fontSizes.md,
      textAlign: "left",
    },
  },

  controls: {
    marginTop: `calc(${theme.spacing.xl} * 1.5)`,
    display: "flex",
    justifyContent: "center",
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,

    [theme.fn.smallerThan("xs")]: {
      flexDirection: "column",
    },
  },

  control: {
    height: rem(42),
    fontSize: theme.fontSizes.md,

    "&:not(:first-of-type)": {
      marginLeft: theme.spacing.md,
    },

    [theme.fn.smallerThan("xs")]: {
      "&:not(:first-of-type)": {
        marginTop: theme.spacing.md,
        marginLeft: 0,
      },
    },
  },

}));

export function HeroImageBackground() {
  const { classes, cx } = useStyles();

  return (
    <div className={classes.wrapper}>
      <Overlay color="#000" opacity={0.65} zIndex={1} />

      <div className={classes.inner}>
        <Title className={classes.title}>Portfolio</Title>

        <Container size={640}>
          <Text size="lg" className={classes.description}>
            Check out some of my projects
          </Text>
        </Container>

        <div className={classes.controls}>
          <NavLink to="https://github.com/caisak">
            <Button
              className={classes.control}
              variant="outline"
              color="gray.1"
              size="lg"
              radius="lg"
            >
              GitHub
            </Button>
          </NavLink>
          <NavLink to="https://bobabliss.netlify.app/">
            <Button
              className={cx(classes.control)}
              variant="outline"
              color="gray.1"
              radius="lg"
              size="lg"
            >
              Latest Project
            </Button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
