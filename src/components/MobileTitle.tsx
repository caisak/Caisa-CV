import { createStyles, Flex, rem, Title } from "@mantine/core";
import { AnimatedTitle } from "./AnimatedTitle";

const useStyles = createStyles((theme) => ({
    title: {
        color: theme.white,
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        fontWeight: 900,
        lineHeight: 1.05,
        maxWidth: rem(500),
        fontSize: rem(48),
    
        [theme.fn.smallerThan("md")]: {
          maxWidth: "100%",
          fontSize: rem(34),
          lineHeight: 1.15,
        },
      },
}))

export function MobileTitle() {
    const { classes } = useStyles();
    return(
        <Flex direction="column">
              <Title mr="lg" className={classes.title}>
                Caisa Köhlin
              </Title>
              <div color="white">
                <AnimatedTitle />
              </div>
            </Flex>
    )
}