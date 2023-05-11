import {
  Card,
  createStyles,
  Divider,
  Flex,
  List,
  Paper,
  Progress,
  Text,
  Title,
  useMantineTheme,
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
        <Text mt="xs">Front End developer student</Text>

        <Text mt="3rem" mb="4rem">
          Text about me bla bla bla what do i want to say no idea but i guess i
          have to say something so eh here goes the sun is sunny and the moon is
          moony
        </Text>
        <Card>
          <Flex direction="column">
            <Title order={6} mb="xs">
              Languages
            </Title>
            <Text fz="xs" fw={500}>
              English
            </Text>
            <Progress
              value={80.00}
              mb="md"
              size="lg"
              radius="xs"
              color="dark.3"
            />
            <Text fz="xs" fw={500}>
              Swedish
            </Text>
            <Progress
              value={100.00}
              mb="md"
              size="lg"
              radius="xs"
              color="dark.3"
            />
            <Text fz="xs" fw={500}>
              Spanish
            </Text>
            <Progress
              value={35.00}
              mb="md"
              size="lg"
              radius="xs"
              color="dark.3"
            />
          </Flex>
        </Card>

      </div>
    </Paper>
  );
}

export function ProfileImage() {
  return (
    <img
      style={{
        height: "30rem",
        objectFit: "cover",
      }}
      src="./images/caisa.jpg"
      alt="profile picture"
    />
  );
}
