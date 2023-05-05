import { AspectRatio, Button, Card, Center, Container, createStyles, Divider, Image, SimpleGrid, Text } from '@mantine/core';

const portfolioData = [
  {
    title: 'Boba Bliss',
    image:
      '../images/bobablissp.png',
    description: 'Boba Bliss is a web shop built with React, Typescript and Chakra UI. Order your favorite boba and get to a fake confirmation page with a unique id or manage the products through the admin page with CRUD.',
    link: 'https://bobabliss.netlify.app/',
    github: 'https://github.com/caisak/Boba-Bliss',
    website: 'Go to Boba Bliss',
  },
  {
    title: 'Vegokassen',
    image:
      '../images/vegokassenp.png',
    description: 'Vegokassen - a vegetarian meal kit service. Add products to cart, read reviews or check out how ordering works. Note that the website is in swedish. Built with React and TypeScript.',
    link: 'https://vegokassen.netlify.app/',
    github: 'https://github.com/caisak/Vegokassen',
    website: 'Go to Vegokassen',
  },
  {
    title: 'Moon Mission',
    image:
      '../images/moonmissionp.png',
    description: 'Moon Mission: a fast-paced arcade-style game where players must navigate through a dangerous asteroid field while blasting alien invaders.',
    link: 'https://lysmac.github.io/moon-mission/',
    github: 'https://github.com/caisak/moon-mission',
    website: 'Go to Moon Mission',
  },
  {
    title: 'Scratchpad',
    image:
      '../images/scratchpadp.png',
    description: 'Scratchpad is a whimsical, colorful social media platform. Like Twitter - but for cats! Built with React, TypeScript, Mantine UI, Express and Mongoose.',
    link: '/',
    github: '/',
    website: 'Coming Soon',
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

  button: {
    margin: '1rem',
    radius: "sm",
    size: "sm"
  },


}));

export function ArticlesCardsGrid() {
  const { classes } = useStyles();

  const cards = portfolioData.map((article) => (
    <Card key={article.title} p="md" radius="md" className={classes.card}>
      <AspectRatio ratio={1920 / 1080}>
        <Image src={article.image} />
      </AspectRatio>
      <Text size="xl" className={classes.title} mt={5}>
        {article.title}
      </Text>
      <Text size="md" weight={400} mt="md">
        {article.description}
      </Text>
      <Divider my="sm" />
      <Center>
      <Button className={classes.button} color="gray"  
      component="a"
      href={article.github}
      target="_blank"
      rel="noopener noreferrer"
      >
      View on GitHub
    </Button>
    <Button className={classes.button} color="green" 
      component="a"
      href={article.link}
      target="_blank"
      rel="noopener noreferrer"
    >
      {article.website}
    </Button>
    </Center>
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

