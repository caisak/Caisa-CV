import {
  Button,
  Center,
  Container,
  createStyles,
  Divider,
  Flex,
  rem,
  Title
} from "@mantine/core";
import { AnimatedTitle } from "./AnimatedTitle";

const useStyles = createStyles((theme) => ({
  root: {
    backgroundColor: "#11284b",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundImage: "url(/images/lakesup.jpg)",
    //filter: theme.colorScheme === "dark" ? "grayscale(100%)" : "none",
    paddingTop: `calc(${theme.spacing.xl} * 3)`,
    paddingBottom: `calc(${theme.spacing.xl} * 3)`,
    marginTop: "1rem",
    height: "100vh",
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

export function HeroImageRight() {
  const { classes } = useStyles();
  return (
    <div className={classes.root}>
      <Container size="lg">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Flex>
              <Title mr="lg" className={classes.title}>
                Caisa Köhlin
              </Title>
              <Divider size="xl" orientation="vertical" color="white" />
              <Title ml="lg" className={classes.title}>
                <AnimatedTitle />
              </Title>
            </Flex>
            <Center>
              <a href="mailto:caisa.kohlin@medieinstitutet.se" style={{ textDecoration: "none" }}>
                <Button
                  variant="outline"
                  color="gray.1"
                  radius="lg"
                  size="lg"
                  className={classes.control}
                  mt={40}
                >
                  Get in touch
                </Button>
              </a>
            </Center>
          </div>
        </div>
      </Container>
    </div>
  );
}
