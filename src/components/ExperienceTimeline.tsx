import { Text, Timeline } from "@mantine/core";
import { FaCoffee, FaRunning, FaCashRegister } from 'react-icons/fa';
import { ImSpoonKnife } from 'react-icons/im';

const experienceData = [
  {
    employer: 'Coop Konsum',
    position: 'Cashier',
    years: '2011-2012',
    Icon: FaCashRegister,
  },
  {
    employer: 'Store Support',
    position: 'Consultant',
    years: '2016-2018',
    Icon: FaRunning,
  },
  {
    employer: 'Bonum Matmarknad',
    position: 'Deli Clerk',
    years: '2017-2018',
    Icon: ImSpoonKnife,
  },
  {
    employer: 'Espresso House',
    position: 'Barista',
    years: '2021-current',
    Icon: FaCoffee,
  },
]

export function ExperienceTimeline() {
    return(
      <Timeline active={4} bulletSize={24} lineWidth={4} color="indigo" align="right">
      {experienceData.map((experience) => (
        <Timeline.Item bullet={<experience.Icon size={12} />} title={experience.employer}>
          <Text size="sm">{experience.position}</Text>
          <Text size="xs" color="dimmed" mt={4}>
            {experience.years}
          </Text>
        </Timeline.Item>
      ))}
    </Timeline>
    )
}