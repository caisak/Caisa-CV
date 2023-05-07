import { Button, createStyles, Paper, rem, Title } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  card: {
    height: rem(200),
    width: '30rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
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
    textTransform: 'uppercase',
  },
}));

interface ArticleCardImageProps {
  image: string;
  title: string;
  link: string;
  website: string;
}

export function ArticleCardImage({ image, title, link, website }: ArticleCardImageProps) {
  const { classes } = useStyles();

  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      sx={{ backgroundImage: `url(${image})` }}
      className={classes.card}
    >
      <div>
        <Title order={3} className={classes.title}>
          {title}
        </Title>
      </div>
      <Button variant="filled" 
      color="green"
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