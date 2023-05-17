import { Text, Timeline } from "@mantine/core";
import { CgFigma } from 'react-icons/cg';
import { FaReact } from 'react-icons/fa';
import { ImHtmlFive } from 'react-icons/im';
import { SiJavascript, SiTypescript } from 'react-icons/si';

export function CourseTimeline() {
    return(
        <Timeline active={4} bulletSize={24} lineWidth={4} color="teal">
        <Timeline.Item bullet={<ImHtmlFive size={12} />}title="HTML & CSS">
          <Text size="sm">Introduction to web development and how to create functional websites that are responsive and accessibility adapted.</Text>
          <Text fz="sm"></Text>
          <Text size="xs" color="dimmed" mt={4}>20 Yh-points</Text>
        </Timeline.Item>
  
        <Timeline.Item bullet={<CgFigma size={12} />}title="Ux and Usability">
          <Text size="sm">Analyze and justify design choices based on personas, usability tests and user experience through theories and iterative design processes.</Text>
          <Text size="xs" color="dimmed" mt={4}>15 Yh-points</Text>
        </Timeline.Item>
  
        <Timeline.Item bullet={<SiJavascript size={12} />}title="JavaScript Basics">
          <Text size="sm">Introduction to functional programming, event driven programming and object oriented programming through interactive websites and games.</Text>
          <Text size="xs" color="dimmed" mt={4}>65 Yh-points</Text>
        </Timeline.Item>
  
        <Timeline.Item bullet={<SiTypescript size={12} />}title="Javascript Advanced">
          <Text size="sm">Programming with TypeScript, developing web applications with react and design systems.</Text>
          <Text size="xs" color="dimmed" mt={4}>45 Yh-points</Text>
        </Timeline.Item>
  
        <Timeline.Item bullet={<FaReact size={12} />}title="Dynamic Web Development">
          <Text size="sm">Full stack web applications with react and design systems.</Text>
          <Text size="xs" color="dimmed" mt={4}>45 Yh-points</Text>
        </Timeline.Item>
      </Timeline>
    )
}