import { Card, Progress, Text } from '@mantine/core';
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
  return(
    <Card
    padding="xl"
      sx={(theme) => ({
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
      })}
    >
      <SiChakraui />
      <TbBrandMantine />
      <AiFillGithub />
      <FaBootstrap />
      <CgFigma />
      <FaGit />
      <SiMongodb />
      <SiSocketdotio />
      <SiAdobepremierepro />
      <SiSvelte />
      <SiStyledcomponents />
      
      
     
      
   

    </Card>
  )
}