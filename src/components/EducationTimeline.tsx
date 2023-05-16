import { Text, Timeline } from '@mantine/core';
import { CgCode } from 'react-icons/cg';
import { FaAnchor, FaPenFancy, FaVideo } from 'react-icons/fa';
import { MdSportsMartialArts } from 'react-icons/md';

export function EducationTimeline() {
  return (
    <Timeline active={4} bulletSize={24} lineWidth={4} color="teal">
      <Timeline.Item bullet={<FaAnchor size={12} />}title="Strömstad Gymnasium">
        <Text size="sm">Upper secondary school</Text>
        <Text size="xs" color="dimmed" mt={4}>2010-2013</Text>
      </Timeline.Item>

      <Timeline.Item bullet={<MdSportsMartialArts size={12} />}title="Göteborg Universitet">
        <Text size="sm">Sports Coaching</Text>
        <Text size="xs" color="dimmed" mt={4}>2014-2015</Text>
      </Timeline.Item>

      <Timeline.Item bullet={<FaVideo size={12} />}title="Göteborgs Folkhögskola">
        <Text size="sm">Film Production</Text>
        <Text size="xs" color="dimmed" mt={4}>2017-2019</Text>
      </Timeline.Item>

      <Timeline.Item bullet={<FaPenFancy size={12} />}title="Malmö Folkhögskola">
        <Text size="sm">Creative writing</Text>
        <Text size="xs" color="dimmed" mt={4}>2019-2020</Text>
      </Timeline.Item>

      <Timeline.Item bullet={<CgCode size={12} />}title="Medieinstitutet"  lineVariant="dashed">
        <Text size="sm">Front End Developer</Text>
        <Text size="xs" color="dimmed"  mt={4}>2022-current</Text>
      </Timeline.Item>

      <Timeline.Item title="Medieinstitutet - Graduation">
        <Text size="sm">Front End Developer</Text>
        <Text size="xs" color="dimmed" mt={4}>June 2024</Text>
      </Timeline.Item>
      
    </Timeline>
  );
}