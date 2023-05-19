import { Text, Timeline } from "@mantine/core";
import { CgFigma } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { ImHtmlFive } from "react-icons/im";
import { SiJavascript, SiTypescript } from "react-icons/si";

const courseData = [
  {
    title: "HTML & CSS",
    description:
      "Introduction to web development and how to create functional websites that are responsive and accessibility adapted.",
    points: "20 Yh-points",
    Icon: ImHtmlFive,
  },
  {
    title: "Ux and Usability",
    description:
      "Analyze and justify design choices based on personas, usability tests and user experience through theories and iterative design processes.",
    points: "15 Yh-points",
    Icon: CgFigma,
  },
  {
    title: "JavaScript Basics",
    description:
      "Introduction to functional programming, event driven programming and object oriented programming through interactive websites and games.",
    points: "65 Yh-points",
    Icon: SiJavascript,
  },
  {
    title: "Javascript Advanced",
    description:
      "Programming with TypeScript, developing web applications with react and design systems.",
    points: "45 Yh-points",
    Icon: SiTypescript,
  },
  {
    title: "Dynamic Web Development",
    description: "Full stack web applications with react and design systems.",
    points: "45 Yh-points",
    Icon: FaReact,
  },
];

export function CourseTimeline() {
  return (
    <Timeline active={4} bulletSize={24} lineWidth={4} color="teal">
      {courseData.map((course) => (
        <Timeline.Item bullet={<course.Icon size={12} />} title={course.title}>
          <Text size="sm">{course.description}</Text>
          <Text size="xs" color="dimmed" mt={4}>
            {course.points}
          </Text>
        </Timeline.Item>
      ))}
    </Timeline>
  );
}
