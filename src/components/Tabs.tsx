import {
  Center, Flex,
  Tabs,
  useMantineTheme
} from "@mantine/core";
import { CourseTimeline } from "./CourseTimeline";
import { EducationTimeline } from "./EducationTimeline";
import { ExperienceTimeline } from "./ExperienceTimeline";

export function TimelineTab() {
  const theme = useMantineTheme();
  const buttonColor = theme.colorScheme === "dark" ? "gray.1" : "dark";
  return (
    <Tabs color={buttonColor} defaultValue="first">
      <Tabs.List position="center">
        <Center>
          <Tabs.Tab value="first">
              Education
          </Tabs.Tab>
          <Tabs.Tab value="second">
              Medieinstitutet
          </Tabs.Tab>
          <Tabs.Tab value="third">
          Experience
          </Tabs.Tab>
        </Center>
      </Tabs.List>

      <Tabs.Panel value="first" pt="xs">
        <Flex direction="column" justify="center" align="center" m="1rem">
          <EducationTimeline />
        </Flex>
      </Tabs.Panel>

      <Tabs.Panel value="second" pt="xs">
        <Flex direction="column" justify="center" align="center" m="1rem">
        <CourseTimeline />
          
        </Flex>
      </Tabs.Panel>
      <Tabs.Panel value="third" pt="xs">
        <Flex direction="column" justify="center" align="center" m="1rem">
        <ExperienceTimeline />
        </Flex>
      </Tabs.Panel>
    </Tabs>
  );
}
