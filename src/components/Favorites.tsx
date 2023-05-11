import { Box, Divider, Flex, Text } from "@mantine/core";

const favoriteData = [
    {
        favorite: 'Book',
        answer: 'Smip',
    },
    {
        favorite: 'Book',
        answer: 'Smip',
    },
    {
        favorite: 'Book',
        answer: 'Smip',
    },
    {
        favorite: 'Book',
        answer: 'Smip',
    },
    {
        favorite: 'Book',
        answer: 'Smip',
    },
    {
        favorite: 'Book',
        answer: 'Smip',
    },
    {
        favorite: 'Book',
        answer: 'Smip',
    },
    {
        favorite: 'Book',
        answer: 'Smip',
    },

]

export function Favorites() {
    const favoriteList = favoriteData.map((favorite) => (
        <div key={favorite.favorite}>
        <Flex direction="row">
        <Text mt="0.55rem" mr="xl">{favorite.favorite}</Text>
        <Box>
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