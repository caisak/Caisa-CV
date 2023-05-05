import { Text, Timeline } from '@mantine/core';

export function EducationTimeline() {
  return (
    <Timeline active={4} bulletSize={24} lineWidth={4} color="teal">
      <Timeline.Item title="Strömstad Gymnasium">
        <Text size="sm">Upper secondary school</Text>
        <Text size="xs" color="dimmed" mt={4}>2010-2013</Text>
      </Timeline.Item>

      <Timeline.Item title="Göteborgs Folkhögskola">
        <Text size="sm">Film Production</Text>
        <Text size="xs" color="dimmed" mt={4}>2017-2019</Text>
      </Timeline.Item>

      <Timeline.Item title="Malmö Folkhögskola">
        <Text size="sm">Creative writing</Text>
        <Text size="xs" color="dimmed" mt={4}>2019-2020</Text>
      </Timeline.Item>

      <Timeline.Item title="Ljungskile Folkhögskola">
        <Text size="sm">General course</Text>
        <Text size="xs" color="dimmed" mt={4}>2020-2021</Text>
      </Timeline.Item>

      <Timeline.Item title="Medieinstitutet"  lineVariant="dashed">
        <Text size="sm">Front End Developer</Text>
        <Text size="xs" color="dimmed"  mt={4}>2022-current</Text>
      </Timeline.Item>

      <Timeline.Item title="Medieinstitutet - Graduation">
        <Text size="sm">Front End Developer</Text>
        <Text size="xs" color="dimmed" mt={4}>2023</Text>
      </Timeline.Item>
      
    </Timeline>
  );
}