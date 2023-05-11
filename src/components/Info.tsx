import { Divider, Flex, List, Paper, Text, Title } from "@mantine/core";

export function Info() {
  return (
    <Paper>
      <div style={{ flex: 3 }}>
        <Title>Hi! I'm Caisa</Title>
        <Divider />
        <Text>Front End developer student</Text>

        <Text>
          Text about me bla bla bla what do i want to say no idea but i guess i
          have to say something so eh here goes the sun is sunny and the moon is
          moony
        </Text>
        <Flex gap="lg">
        <List size="sm">
          <List.Item>English - fluent</List.Item>
          <List.Item>Swedish - native</List.Item>
          <List.Item>Spanish - light conversational</List.Item>
        </List>

        <List size="sm">
          <List.Item>Knitting</List.Item>
          <List.Item>Reading</List.Item>
          <List.Item>Stand up paddling</List.Item>
        </List>
        </Flex>
      </div>
    </Paper>
  );
}

export function ProfileImage() {
    return(
        <img style={{ 
            height: '30rem', 
            objectFit: 'cover' }} 
            src="./images/caisa.jpg" 
            alt="profile picture" />
    )
}
