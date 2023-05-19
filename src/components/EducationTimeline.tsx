import { Text, Timeline } from '@mantine/core';
import { CgCode } from 'react-icons/cg';
import { FaAnchor, FaPenFancy, FaVideo } from 'react-icons/fa';
import { MdSportsMartialArts } from 'react-icons/md';
import { GiGraduateCap } from 'react-icons/gi';


const educationData = [
  {
    school: 'Strömstad Gymnasium',
    programme: 'Social Science Programme',
    years: '2010-2013',
    Icon: FaAnchor,
  },
  {
    school: 'Göteborg Universitet',
    programme: 'Sports Coaching',
    years: '2014-2015',
    Icon: MdSportsMartialArts,
  },
  {
    school: 'Göteborgs Folkhögskola',
    programme: 'Film Production',
    years: '2017-2019',
    Icon: FaVideo,
  },
  {
    school: 'Malmö Folkhögskola',
    programme: 'Creative writing',
    years: '2019-2020',
    Icon: FaPenFancy,
  },
  {
    school: 'Medieinstitutet',
    programme: 'Front End Developer',
    years: '2022-current',
    Icon: CgCode,
  },
  {
    school: 'Medieinstitutet - Graduation',
    programme: 'Front End Developer',
    years: 'June 2024',
    Icon: GiGraduateCap,
  },
]

export function EducationTimeline() {
  return (
    <Timeline active={4} bulletSize={24} lineWidth={4} color="teal">
      {educationData.map((education) => (
        <Timeline.Item bullet={<education.Icon size={12} />} title={education.school}>
          <Text size="sm">{education.programme}</Text>
          <Text size="xs" color="dimmed" mt={4}>
            {education.years}
          </Text>
        </Timeline.Item>
      ))}
    </Timeline>
  );
}