import { Button, createStyles, Divider, Flex, Title, useMantineTheme } from "@mantine/core";
import { NavLink } from "react-router-dom";

const useStyles = createStyles((theme) => ({
    link: {
        textDecoration: "none",
        color:
          theme.colorScheme === "dark"
            ? theme.colors.dark[0]
            : theme.colors.gray[7],
        fontSize: theme.fontSizes.md,
        fontWeight: 700,
    
        "&:hover": {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[6]
              : theme.colors.gray[0],
        },
      },
}));

interface SectionDividerProps {
  buttonText: string;
  link: string;
  title: string;
}

export const SectionDivider = ({ buttonText, link, title }: SectionDividerProps) => {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  const buttonColor = theme.colorScheme === "dark" ? "gray.1" : "dark";
  return (
    <div>
    <Divider color={buttonColor} />
    <Flex
      justify="space-between"
      align="center"
      style={{ marginBottom: "1rem", marginTop: "1rem" }}
    >
      <Title order={2}>{title}</Title>
      <NavLink to={link} className={classes.link}>
        <Button variant="outline" color={buttonColor} radius="lg">
          {buttonText}
        </Button>
      </NavLink>
    </Flex>
    </div>
  );
}
