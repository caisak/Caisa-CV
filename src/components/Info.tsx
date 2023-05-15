import {
  Card,
  createStyles,
  Divider,
  Flex,
  Paper,
  Progress,
  Text,
  Title,
  useMantineTheme
} from "@mantine/core";

const useStyles = createStyles((theme) => ({
  noDecoration: {
    textDecoration: "none",
  },
}));

export function Info() {
  const { classes, cx } = useStyles();
  const theme = useMantineTheme();
  return (
    <Paper>
      <div style={{ flex: 3 }}>
        <Title mt="xs" mb="xs">
          Hi! I'm Caisa
        </Title>
        <Divider />
        <Text mt="xs">Front End Developer</Text>

        <Text mt="3rem" mb="4rem">
          On my days off you're likely to find me paddle boarding, reading a
          good book or trying new foods. I am forever expanding my knowledge and
          understanding of the world and the people in it. I am also most
          passionate about knitting - a craft that requires patience
          and precision - much like programming.
          <br></br>
          <br></br>
          I’m currently working as a barista and this has not only allowed me to
          make a mean cappuccino but has also taught me invaluable lessons about
          teamwork, customer service, and the art of managing high-pressure
          situations with grace and integrity.
          <br></br>
          <br></br>
          In the long term, I envision myself transitioning into a Project
          Management role. I am excited by the prospect of leading diverse
          teams, managing resources, and delivering projects that exceed client
          expectations.
          <br></br>
          <br></br>
          As you can see, I am a blend of creativity, technical prowess, and
          social skills. I am a firm believer in balancing work and play, and I
          strive to bring a sense of joy and enthusiasm to everything I do. I
          look forward to bringing my unique blend of skills and passions to a
          team where I can learn, grow, and contribute positively.
        </Text>
      </div>
    </Paper>
  );
}

export function ProfileImage() {
  const theme = useMantineTheme();
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
    <img
      style={{
        height: '27rem',
        objectFit: "cover",
        filter: theme.colorScheme === 'dark' ? 'grayscale(30%)' : 'none',
      }}
      src="./images/caisa.jpg"
      alt="profile picture"
    />
    </div>
    <Card style={{ marginTop: "1rem", }}>
          <Flex direction="column">
            <Title order={6} mb="xs">
              Languages
            </Title>
            <Text fz="xs" fw={500}>
              English
            </Text>
            <Progress
              value={80.0}
              mb="md"
              size="lg"
              radius="xs"
              color="dark.3"
            />
            <Text fz="xs" fw={500}>
              Swedish
            </Text>
            <Progress
              value={100.0}
              mb="md"
              size="lg"
              radius="xs"
              color="dark.3"
            />
            <Text fz="xs" fw={500}>
              Spanish
            </Text>
            <Progress
              value={35.0}
              mb="md"
              size="lg"
              radius="xs"
              color="dark.3"
            />
          </Flex>
        </Card>
        </div>
  );
}
