import { Box, Divider, Flex, Text } from "@mantine/core";

const favoriteData = [
    {
        favorite: 'Book',
        answer: 'Night Sky with Exit Wounds',
    },
    {
        favorite: 'TV Show',
        answer: 'Bobs Burgers',
    },
    {
        favorite: 'Drink',
        answer: 'Brown Sugar Boba',
    },
    {
        favorite: 'Quote',
        answer: 'Today is tomorrows yesterday',
    },
    {
        favorite: 'Writing Utensil',
        answer: 'Fountain Pen or Gel Pen',
    },
    {
        favorite: 'Song',
        answer: 'Cha Cha Cha',
    },
    {
        favorite: 'Time of day',
        answer: 'Morning',
    },

]

export function Favorites() {
    const favoriteList = favoriteData.map((favorite) => (
        <div key={favorite.favorite}>
        <Flex direction="row">
        <Text mt="0.55rem" mr="xl" fw={700} style={{ width: "12rem" }}>{favorite.favorite}</Text>
        <Box style={{ width: "100%" }}>
        <Divider />
            <Text mt="0.5rem" mb="0.5rem">
            {favorite.answer}
            </Text>
        <Divider />
        </Box>
        </Flex>
        </div>
    ))
    return(
        <div>
            {favoriteList}
        </div>
    )
}