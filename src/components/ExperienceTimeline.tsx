import { Text, Timeline } from "@mantine/core";
import { FaCoffee, FaRunning, FaCashRegister } from 'react-icons/fa';
import { ImSpoonKnife } from 'react-icons/im';

export function ExperienceTimeline() {
    return(
        <Timeline active={4} bulletSize={24} lineWidth={4} color="indigo" align="right" >

      <Timeline.Item bullet={<FaCashRegister size={12} />}title="Coop Konsum">
        <Text size="sm">Cashier</Text>
        <Text size="xs" color="dimmed" mt={4}>2011-2012</Text>
      </Timeline.Item>

      <Timeline.Item bullet={<FaRunning size={12} />}title="Store Support">
        <Text size="sm">Consultant</Text>
        <Text size="xs" color="dimmed" mt={4}>2016-2019</Text>
      </Timeline.Item>

      <Timeline.Item bullet={<ImSpoonKnife size={12} />}title="Bonum Matmarknad">
        <Text size="sm">Deli Clerk</Text>
        <Text size="xs" color="dimmed" mt={4}>2017-2018</Text>
      </Timeline.Item>

      <Timeline.Item bullet={<FaCoffee size={12} />}title="Espresso House">
        <Text size="sm">Barista</Text>
        <Text size="xs" color="dimmed" mt={4}>2021-current</Text>
      </Timeline.Item>      
    </Timeline>
    )
}