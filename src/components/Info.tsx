import { Divider, List, Text, Title } from "@mantine/core";

export function Info() {
  return (
    <div>
        <div>
      <Title>Hi! I'm Caisa</Title>
      <Divider />

      <Text>
        Text about me bla bla bla what do i want to say no idea but i guess i
        have to say something so eh here goes the sun is sunny and the moon is
        moony
      </Text>
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
      </div>
      <div>
      <img style={{height: '200px', width: '200px', }} src="./images/caisa.jpg" alt="profile picture" />
      </div>
    </div>
  );
}
