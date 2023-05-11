import {
  Button,
  Center,
  Container,
  createStyles,
  rem,
  Text,
  Title
} from "@mantine/core";
import { NavLink } from "react-router-dom";

const useStyles = createStyles((theme) => ({
  root: {
    backgroundColor: "#11284b",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundImage: "url(/images/lakesup.jpg)",
    filter: "grayscale(100%)",
    paddingTop: `calc(${theme.spacing.xl} * 3)`,
    paddingBottom: `calc(${theme.spacing.xl} * 3)`,
    marginTop: "1rem",
    height: "60vh",
    display: "flex",
    alignItems: "center",
  },

  inner: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    [theme.fn.smallerThan("md")]: {
      flexDirection: "column",
 
    },
  },

  image: {
    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },

  content: {
    paddingTop: `calc(${theme.spacing.xl} * 2)`,
    paddingBottom: `calc(${theme.spacing.xl} * 2)`,
    marginRight: `calc(${theme.spacing.xl} * 3)`,

    [theme.fn.smallerThan("md")]: {
      marginRight: 0,
      
    },
  },

  title: {
    color: theme.white,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    lineHeight: 1.05,
    maxWidth: rem(500),
    fontSize: rem(48),

    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
      fontSize: rem(34),
      lineHeight: 1.15,
    },
  },

  description: {
    color: theme.white,
    opacity: 0.75,
    maxWidth: rem(500),

    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
    },
  },

  control: {
    paddingLeft: rem(50),
    paddingRight: rem(50),
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: rem(22),

    [theme.fn.smallerThan("md")]: {
      width: "100%",
    },
  },
}));

export function PortfolioHero() {
  const { classes } = useStyles();
  return (
    <div className={classes.root}>
      <Container size="lg">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Center>
            <Title className={classes.title}>Portfolio</Title>
            </Center>
            <Center>
            <Text className={classes.description} fw={700} mt={30}>
              Check out some of my latest projects
            </Text>
            </Center>
            <Center>
              <NavLink to="https://github.com/caisak">
              <Button
                variant="outline"
                color="gray.1"
                radius="lg"
                size="lg"
                className={classes.control}
                mt={40}
              >
                GitHub
              </Button>
              </NavLink>
              <NavLink to="https://bobabliss.netlify.app/">
              <Button
                variant="outline"
                color="gray.1"
                radius="lg"
                size="lg"
                className={classes.control}
                mt={40}
              >
                Latest Project
              </Button>
              </NavLink>
            </Center>
          </div>
        </div>
      </Container>
    </div>
  );
}
