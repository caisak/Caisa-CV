import { Button, createStyles, Paper, rem } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  card: {
    height: rem(200),
    width: "30rem",
    display: "flex",
    filter: theme.colorScheme === 'dark' ? 'grayscale(30%)' : 'none',
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    backgroundSize: "cover",
    backgroundPosition: "center",
    transition: "transform 150ms ease, box-shadow 150ms ease",

    "&:hover": {
      transform: "scale(1.01)",
      boxShadow: theme.shadows.md,
    },
  },

  title: {
    fontFamily: `Greycliff CF ${theme.fontFamily}`,
    fontWeight: 900,
    color: theme.white,
    lineHeight: 1.2,
    fontSize: rem(32),
    marginTop: theme.spacing.xs,
  },

  category: {
    color: theme.white,
    opacity: 0.7,
    fontWeight: 700,
    textTransform: "uppercase",
  },
}));

interface ArticleCardImageProps {
  image: string;
  link: string;
  website: string;
}

export function ArticleCardImage({
  image,
  link,
  website,
}: ArticleCardImageProps) {
  const { classes } = useStyles();

  return (
    <Paper
      shadow="md"
      p="xl"
      radius="none"
      sx={{ backgroundImage: `url(${image})` }}
      className={classes.card}
    >
      <div></div>
      <Button
        variant="filled"
        color="dark"
        radius="lg"
        component="a"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {website}
      </Button>
    </Paper>
  );
}
