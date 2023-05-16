import { Text, Timeline } from "@mantine/core";
import { CgFigma } from 'react-icons/cg';
import { FaReact } from 'react-icons/fa';
import { ImHtmlFive } from 'react-icons/im';
import { SiJavascript, SiTypescript } from 'react-icons/si';

export function CourseTimeline() {
    return(
        <Timeline active={4} bulletSize={24} lineWidth={4} color="teal">
        <Timeline.Item bullet={<ImHtmlFive size={12} />}title="HTML & CSS">
          <Text size="sm">Short description</Text>
        </Timeline.Item>
  
        <Timeline.Item bullet={<CgFigma size={12} />}title="UX AND USABILITY">
          <Text size="sm">Short description</Text>
        </Timeline.Item>
  
        <Timeline.Item bullet={<SiJavascript size={12} />}title="JavaScript Basics">
          <Text size="sm">Short description</Text>
        </Timeline.Item>
  
        <Timeline.Item bullet={<SiTypescript size={12} />}title="Javascript advanced">
          <Text size="sm">Short description</Text>
        </Timeline.Item>
  
        <Timeline.Item bullet={<FaReact size={12} />}title="Dynamic Web Development">
          <Text size="sm">react, twitter, chat app, full stack web shop</Text>
        </Timeline.Item>
      </Timeline>
    )
}