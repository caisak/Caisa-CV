import { ActionIcon, Group, useMantineColorScheme } from '@mantine/core';
import { BiSun } from 'react-icons/bi';
import { BsMoonStars } from 'react-icons/bs';

export function ActionToggle() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <Group position="center" my="xl">
      <ActionIcon
        onClick={() => toggleColorScheme()}
        size="lg"
        mr="0.5rem"
        sx={(theme) => ({

          color: theme.colorScheme === 'dark' ? theme.colors.white : theme.colors.dark[9],
        })}
      >
        {colorScheme === 'dark' ? <BiSun /> : <BsMoonStars />}
      </ActionIcon>
    </Group>
  );
}
