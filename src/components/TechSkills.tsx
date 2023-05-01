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
      <Text fz="lg" fw={500}>
        HTML
      </Text>
      <Progress value={74.31} mt="md" size="lg" radius="xl" />
      <Text fz="lg" fw={500} mt="md">
        CSS
      </Text>
      <Progress value={74.51} mt="md" size="lg" radius="xl" />
      <Text fz="lg" fw={500} mt="md">
        JavaScript
      </Text>
      <Progress value={46.31} mt="md" size="lg" radius="xl" />
      <Text fz="lg" fw={500} mt="md">
        TypeScript
      </Text>
      <Progress value={64.31} mt="md" size="lg" radius="xl" />
    </Card>
  );
}