import { Text, useMantineColorScheme } from '@mantine/core';
import { BiSun } from 'react-icons/bi';

export function SegmentedToggle() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const nextColorScheme = colorScheme === 'dark' ? 'light' : 'dark';

  const color = colorScheme === 'dark' ? 'yellow' : 'blue';

  return (
    <Text
      onClick={() => toggleColorScheme(nextColorScheme)}
      style={{ cursor: 'pointer', color: color }}
    >
      <BiSun style={{ verticalAlign: 'middle' }}/>
    </Text>
  );
}
