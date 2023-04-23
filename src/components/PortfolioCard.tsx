import { AspectRatio, Card, Container, createStyles, Image, SimpleGrid, Text } from '@mantine/core';

const portfolioData = [
  {
    title: 'Boba Bliss',
    image:
      '../public/images/bobablissp.png',
    description: 'Boba Bliss is a web shop built with React, Typescript and Chakra UI. Order your favorite boba and get to a fake confirmation page with a unique id or manage the products through the admin page with CRUD.',
  },
  {
    title: 'Vegokassen',
    image:
      '../public/images/vegokassenp.png',
    description: 'Vegokassen - a vegetarian meal kit service. Add products to cart, read reviews or check out how ordering works. Note that the website is in swedish. Built with React and TypeScript.',
  },
  {
    title: 'Moon Mission',
    image:
      '../public/images/moonmissionp.png',
    description: 'Moon Mission: a fast-paced arcade-style game where players must navigate through a dangerous asteroid field while blasting alien invaders',
  },
  {
    title: 'Byt till annat projekt',
    image:
      '../public/images/bobablissp.png',
    description: '',
  },
];

const useStyles = createStyles((theme) => ({
  card: {
    transition: 'transform 150ms ease, box-shadow 150ms ease',

    '&:hover': {
      transform: 'scale(1.01)',
      boxShadow: theme.shadows.md,
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 600,
  },
}));

export function ArticlesCardsGrid() {
  const { classes } = useStyles();

  const cards = portfolioData.map((article) => (
    <Card key={article.title} p="md" radius="md" component="a" href="#" className={classes.card}>
      <AspectRatio ratio={1920 / 1080}>
        <Image src={article.image} />
      </AspectRatio>
      <Text className={classes.title} mt={5}>
        {article.title}
      </Text>
      <Text color="dimmed" size="xs" weight={400} mt="md">
        {article.description}
      </Text>
    </Card>
  ));

  return (
    <Container py="xl">
      <SimpleGrid cols={2} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
        {cards}
      </SimpleGrid>
    </Container>
  );
}

