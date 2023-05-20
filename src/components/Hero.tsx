import {
  Button,
  Center,
  Container,
  createStyles, rem, useMantineTheme
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { DesktopTitle } from "./DesktopTitle";
import { MobileTitle } from "./MobileTitle";

const useStyles = createStyles((theme) => ({
  root: {
    backgroundColor: theme.colorScheme === 'dark'
    ? 'white'
    : theme.colors.dark,
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

  flexContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    [theme.fn.smallerThan("sm")]: {
      flexDirection: 'column',
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
  const theme = useMantineTheme();
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  return (
    <div className={classes.root}>
      <Container size="lg">
        <div className={classes.inner}>
          <div className={classes.content}>
          {isMobile ? <MobileTitle /> : <DesktopTitle />}
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
