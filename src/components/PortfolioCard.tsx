import { AspectRatio, Button, Card, Container, createStyles, Image, SimpleGrid, Text } from '@mantine/core';

const portfolioData = [
  {
    title: 'Boba Bliss',
    image:
      '../images/bobablissp.png',
    description: 'Boba Bliss is a web shop built with React, Typescript and Chakra UI. Order your favorite boba and get to a fake confirmation page with a unique id or manage the products through the admin page with CRUD.',
    link: 'https://bobabliss.netlify.app/',
    made: 'React, TypeScript, ChakraUI',
  },
  {
    title: 'Vegokassen',
    image:
      '../images/vegokassenp.png',
    description: 'Vegokassen - a vegetarian meal kit service. Add products to cart, read reviews or check out how ordering works. Note that the website is in swedish. Built with React and TypeScript.',
    link: 'https://vegokassen.netlify.app/',
    made: 'React, TypeScript, ChakraUI',
  },
  {
    title: 'Moon Mission',
    image:
      '../images/moonmissionp.png',
    description: 'Moon Mission: a fast-paced arcade-style game where players must navigate through a dangerous asteroid field while blasting alien invaders.',
    link: 'https://lysmac.github.io/moon-mission/',
    made: 'p5, TypeScript',
  },
  {
    title: 'Byt till annat projekt',
    image:
      '../images/bobablissp.png',
    description: 'Another description',
    link: 'https://bobabliss.netlify.app/',
    made: 'vanilla HTML and CSS',
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
    <Card key={article.title} p="md" radius="md" className={classes.card}>
        <a href={article.link} target="_blank" rel="noopender noreferrer">
      <AspectRatio ratio={1920 / 1080}>
        <Image src={article.image} />
      </AspectRatio>
      <Text className={classes.title} mt={5}>
        {article.title}
      </Text>
      </a>
      <Text color="dimmed" size="xs" weight={400} mt="md">
        {article.description}
      </Text>
      <Text size="xs" weight={700} mt="md">
        {article.made}
      </Text>
      <Button color="gray" size="xs">
      View on GitHub
    </Button>
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

