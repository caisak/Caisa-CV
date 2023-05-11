import { Card, Col, Grid, Progress, Text, useMantineTheme } from '@mantine/core';
import { AiFillGithub } from 'react-icons/ai';
import { CgFigma } from 'react-icons/cg';
import { FaBootstrap, FaGit, FaReact } from 'react-icons/fa';
import { ImHtmlFive } from 'react-icons/im';
import { IoLogoCss3 } from 'react-icons/io';
import { SiAdobepremierepro, SiChakraui, SiJavascript, SiMongodb, SiSocketdotio, SiStyledcomponents, SiSvelte, SiTypescript } from 'react-icons/si';
import { TbBrandMantine } from 'react-icons/tb';

export function ProgressCard() {
  return (
    <Card
      padding="xl"
      sx={(theme) => ({
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
      })}
    >
      <Text fz="xs" fw={500}>
      <ImHtmlFive />  HTML 
      </Text>
      <Progress value={74.31} mb="md" size="lg" radius="xs" color="dark.3" />
      <Text fz="xs" fw={500}>
      <IoLogoCss3 />  CSS 
      </Text>
      <Progress value={74.51} mb="md" size="lg" radius="xs" color="dark.3" />
      <Text fz="xs" fw={500}>
      <SiJavascript /> JavaScript
      </Text>
      <Progress value={50.31} mb="md" size="lg" radius="xs" color="dark.3" />
      <Text fz="xs" fw={500}>
      <SiTypescript />   TypeScript
      </Text>
      <Progress value={55.31} mb="md" size="lg" radius="xs" color="dark.3" />
      <Text fz="xs" fw={500}>
      <FaReact />  React
      </Text>
       <Progress value={55.31} mb="md" size="lg" radius="xs" color="dark.3" />
    </Card>
  );
}

export function TechKnowledge() {
  const theme = useMantineTheme();

  const icons = [
    { Icon: AiFillGithub, title: "Github" },
    { Icon: FaGit, title: "Git" },
    { Icon: SiSvelte, title: "Svelte" },
    { Icon: SiMongodb, title: "MongoDB" },
    { Icon: SiChakraui, title: "Chakra UI" },
    { Icon: TbBrandMantine, title: "Mantine" },
    { Icon: FaBootstrap, title: "Bootstrap" },
    { Icon: CgFigma, title: "Figma" },
    { Icon: SiSocketdotio, title: "Socket.io" },
    { Icon: SiStyledcomponents, title: "Styled Components" },
    { Icon: SiAdobepremierepro, title: "Adobe Premiere Pro" },
  ];
  return(
<Card
      padding="xl"
      sx={(theme) => ({
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
      })}
    >
      <Grid gutter="xl">
        {icons.map(({ Icon, title }) => (
          <Col span={6} sm={6} xs={6} key={title}>
            <div style={{ textAlign: 'center' }}>
              <Icon size={40} />
              <Text align="center">{title}</Text>
            </div>
          </Col>
        ))}
      </Grid>
    </Card>
  )
}