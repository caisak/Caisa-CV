import { Card, Col, Grid, Progress, Text, useMantineTheme } from '@mantine/core';
import { AiFillGithub } from 'react-icons/ai';
import { CgFigma } from 'react-icons/cg';
import { FaBootstrap, FaGit, FaReact } from 'react-icons/fa';
import { ImHtmlFive } from 'react-icons/im';
import { IoLogoCss3 } from 'react-icons/io';
import { SiAdobepremierepro, SiAzuredevops, SiAdobeindesign, SiChakraui, SiJavascript, SiMongodb, SiSocketdotio, SiStyledcomponents, SiSvelte, SiTypescript, SiExpress } from 'react-icons/si';
import { TbBrandMantine, TbBrandCypress } from 'react-icons/tb';


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
      <Progress value={74.00} mb="md" size="lg" radius="xs" color="dark.3" />
      <Text fz="xs" fw={500}>
      <IoLogoCss3 />  CSS 
      </Text>
      <Progress value={74.00} mb="md" size="lg" radius="xs" color="dark.3" />
      <Text fz="xs" fw={500}>
      <SiJavascript /> JavaScript
      </Text>
      <Progress value={50.00} mb="md" size="lg" radius="xs" color="dark.3" />
      <Text fz="xs" fw={500}>
      <SiTypescript />   TypeScript
      </Text>
      <Progress value={55.00} mb="md" size="lg" radius="xs" color="dark.3" />
      <Text fz="xs" fw={500}>
      <FaReact />  React
      </Text>
       <Progress value={60.00} mb="md" size="lg" radius="xs" color="dark.3" />
    </Card>
  );
}

export function TechKnowledge() {
  const theme = useMantineTheme();

  const icons = [
    { Icon: SiAzuredevops, title: "Azure DevOps" },
    { Icon: FaReact, title: "React Native" },
    { Icon: AiFillGithub, title: "Github" },
    { Icon: FaGit, title: "Git" },
    { Icon: SiSvelte, title: "Svelte" },
    { Icon: SiMongodb, title: "MongoDB" },
    { Icon: SiExpress, title: "Express" },
    { Icon: CgFigma, title: "Figma" },
    { Icon: TbBrandMantine, title: "Mantine" },
    { Icon: SiChakraui, title: "Chakra UI" },
    { Icon: SiSocketdotio, title: "Socket.io" },
    { Icon: TbBrandCypress, title: "Cypress"},
    { Icon: SiStyledcomponents, title: "Styled Components" },
    { Icon: FaBootstrap, title: "Bootstrap" },
    { Icon: SiAdobepremierepro, title: "Adobe Premiere Pro" },
    { Icon: SiAdobeindesign, title: "Adobe In Design" }
    
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

export function TechQuote() {
  return(
    <Card
    padding="xl"
    sx={(theme) => ({
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    })}
    >
      <Text fz="xl">
      I'm constantly exploring new techniques, tools, and libraries to create websites that are easy and fun to use. Here are some of the tools that I have worked with!

      </Text>
    </Card>
  )
}