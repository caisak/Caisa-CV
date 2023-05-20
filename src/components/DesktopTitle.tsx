import { createStyles, Divider, Flex, rem, Title } from "@mantine/core";
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
      flexContainer: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        [theme.fn.smallerThan("sm")]: {
          flexDirection: 'column',
        },
      },
}))

export function DesktopTitle() {
    const { classes } = useStyles();
    return(
        <Flex align="center" className={classes.flexContainer}>
              <Title mr="lg" className={classes.title}>
                Caisa Köhlin
              </Title>
              <Divider size="xl" orientation="vertical" color="white" />
              <Title ml="lg" className={classes.title}>
                <AnimatedTitle />
              </Title>
            </Flex>
    )
}