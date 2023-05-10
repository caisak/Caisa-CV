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
        mr="1rem"
        sx={(theme) => ({
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
          color: theme.colorScheme === 'dark' ? theme.colors.yellow[4] : theme.colors.blue[6],
        })}
      >
        {colorScheme === 'dark' ? <BiSun /> : <BsMoonStars />}
      </ActionIcon>
    </Group>
  );
}
