import { AspectRatio, Button, Card, Center, Container, createStyles, Divider, Image, SimpleGrid, Text, useMantineTheme } from '@mantine/core';

const portfolioData = [
  {
    title: 'Cat Chat',
    image:
      '../images/ccchat.png',
    description: 'Cat Chat is sister app to Scratchpad - but for chatting. Choose a username and get started! Join an existing room or create a new room. Chat with your friends or make new ones.',
    link: '/',
    github: '/',
    website: 'Coming Soon',
    build: 'react, typescript, socket io, mantine ui',
  },
  {
    title: 'Scratchpad',
    image:
      '../images/scratchpadp.png',
    description: 'Scratchpad is a full stack social media application that is whimsical and colorful. Register an account, log in and start posting. Like Twitter - but for cats!',
    link: '/',
    github: '/',
    website: 'Coming Soon',
    build: 'react, typescript, mantine ui, express, mongoose',
  },
  {
    title: 'Boba Bliss',
    image:
      '../images/bobablissp.png',
    description: 'Boba Bliss is a front end web shop. Order your favorite boba and get to a fake confirmation page with a unique id or manage the products through the admin page with CRUD.',
    link: 'https://bobabliss.netlify.app/',
    github: 'https://github.com/caisak/Boba-Bliss',
    website: 'Go to Boba Bliss',
    build: 'React, typescript, chakra ui',
  },
  {
    title: 'Vegokassen',
    image:
      '../images/vegokassenp.png',
    description: 'Vegokassen - a vegetarian meal kit service. Add products to cart, read reviews or check out how ordering works. Note that the website is in swedish.',
    link: 'https://vegokassen.netlify.app/',
    github: 'https://github.com/caisak/Vegokassen',
    website: 'Go to Vegokassen',
    build: 'react, typescript, styled components',
  },
  {
    title: 'Moon Mission',
    image:
      '../images/moonmissionp.png',
    description: 'Moon Mission: a fast-paced arcade-style game where players must navigate through a dangerous asteroid field while blasting alien invaders.',
    link: 'https://lysmac.github.io/moon-mission/',
    github: 'https://github.com/caisak/moon-mission',
    website: 'Go to Moon Mission',
    build: 'typescript, p5',
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
    margin: '0.5rem',
    marginTop: '1rem',
  },
  customButton: {
    backgroundColor: '#79bfb9',
    borderColor: '#79bfb9',
    margin: '0.5rem',
    marginTop: '1rem',
    '&:hover': {
      backgroundColor: '#68afa0',  // Adjust for desired hover effect
      borderColor: '#68afa0',
    }
  }

}));

export function ArticlesCardsGrid() {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  const buttonColor = theme.colorScheme === "dark" ? "gray.1" : "dark";

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
      <Text tt="uppercase" fw={700} fz="xs">{article.build}</Text>
      <Center>
      <Button className={classes.button} color={"gray"}
      variant="filled" 
      radius="md"  
      size="sm"
      component="a"
      href={article.github}
      target="_blank"
      rel="noopener noreferrer"
      >
      View on GitHub 
    </Button>
    <Button className={classes.customButton}
    variant="filled"
    radius="md"
    size="sm"
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

