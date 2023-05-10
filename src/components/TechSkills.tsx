import { Card, Progress, Text } from '@mantine/core';

export function ProgressCard() {
  return (
    <Card
      withBorder
      radius="md"
      padding="xl"
      sx={(theme) => ({
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
      })}
    >
      <Text fz="xs" fw={500}>
        HTML
      </Text>
      <Progress value={74.31} mb="md" size="lg" radius="sm" color="indigo" />
      <Text fz="xs" fw={500}>
        CSS
      </Text>
      <Progress value={74.51} mb="md" size="lg" radius="sm" color="indigo" />
      <Text fz="xs" fw={500}>
        JavaScript
      </Text>
      <Progress value={50.31} mb="md" size="lg" radius="sm" color="indigo" />
      <Text fz="xs" fw={500}>
        TypeScript
      </Text>
      <Progress value={55.31} mb="md" size="lg" radius="sm" color="indigo" />
      <Text fz="xs" fw={500}>
        React
      </Text>
      <Progress value={55.31} mb="md" size="lg" radius="sm" color="indigo" />
    </Card>
  );
}