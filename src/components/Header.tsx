import {
  Burger,
  Button,
  Container,
  createStyles,
  Group,
  Header,
  Paper,
  rem,
  Title,
  Transition,
  useMantineTheme
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { NavLink, useLocation } from "react-router-dom";
import { ActionToggle } from "./ColorModeToggle";

const HEADER_HEIGHT = rem(60);

const useStyles = createStyles((theme) => ({
  root: {
    position: "fixed",
    zIndex: 1,    
  },

  dropdown: {
    position: "absolute",
    top: HEADER_HEIGHT,
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: "hidden",

    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
  },

  titleLink: {
    textDecoration: 'none',
    color: theme.colorScheme === "dark" ? theme.colors.gray[1] : theme.colors.dark[9],
  },
  

  links: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  burger: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.lg,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[1],

    [theme.fn.smallerThan("sm")]: {
      borderRadius: 0,
      padding: theme.spacing.md,
    },
  },
}));

interface HeaderResponsiveProps {
  links: { link: string; label: string }[];
}

export function HeaderResponsive({ links }: HeaderResponsiveProps) {
  const [opened, { toggle, close }] = useDisclosure(false);
  const { classes, cx } = useStyles();
  const location = useLocation();
  const theme = useMantineTheme();
  const buttonColor = theme.colorScheme === "dark" ? "gray.1" : "dark";

  const items = links.map((link) => (
    <NavLink
      key={link.label}
      to={link.link}
      className={cx(classes.link)}
      onClick={close}
    >
      <Button variant="outline" color={buttonColor} radius="lg">
        {link.label}
      </Button>
    </NavLink>
  ));

  return (
    <Header height={HEADER_HEIGHT} mb={120} className={classes.root}>
      <Container size="lg" className={classes.header}>
        <Title order={2}>
          <span style={{ display: "flex", alignItems: "center" }}>
            <span>
              <ActionToggle />
            </span>
            <NavLink to="/" className={classes.titleLink}>
            <span>Caisa Köhlin</span>
            </NavLink>
          </span>
        </Title>
        <Group spacing={5} className={classes.links}>
          {items}
        </Group>

        <Burger
          opened={opened}
          onClick={toggle}
          className={classes.burger}
          size="sm"
        />

        <Transition transition="pop-top-right" duration={200} mounted={opened}>
          {(styles) => (
            <Paper className={classes.dropdown} withBorder style={styles}>
              {items}
            </Paper>
          )}
        </Transition>
      </Container>
    </Header>
  );
}
