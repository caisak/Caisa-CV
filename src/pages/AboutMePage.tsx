import { Button, createStyles, Divider, Flex, useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { NavLink } from "react-router-dom";
import { ArticleCardImage } from "../components/ArticleCard";
import { EducationTimeline } from "../components/EducationTimeline";
import { ExperienceTimeline } from "../components/ExperienceTimeline";
import { HeroImageRight } from "../components/Hero";
import { ProgressCard } from "../components/TechSkills";

const useStyles = createStyles((theme) => ({
  link: {
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.md,
    fontWeight: 700,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },
}));

export function AboutMePage() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const { classes, cx } = useStyles();
  const theme = useMantineTheme();
  const buttonColor = theme.colorScheme === "dark" ? "gray.1" : "dark";
  
  return (
    <div>
      <HeroImageRight />
      <h2>Technical Skills</h2>
      <ProgressCard />
      <h3>Svelte, Styled components, chakra ui, mantine ui, bootstrap</h3>
      <Divider my="lg" color={buttonColor} />
      <Flex
        justify="space-between"
        align="center"
        style={{ marginBottom: "1rem", marginTop: "1rem" }}
      >
        <h2>Selected Projects</h2>
        <NavLink to="/portfolio" className={classes.link}>
          <Button variant="outline" color={buttonColor} radius="lg">
            Go to Portfolio
          </Button>
        </NavLink>
      </Flex>
      <Flex direction={isMobile ? "column" : "row"} gap="xl" align="center">
        <ArticleCardImage
          link="https://bobabliss.netlify.app/"
          image="/images/bobablissp.png"
          website="Go to Boba Bliss"
        />

        <ArticleCardImage
        link="https://vegokassen.netlify.app/"
          image="/images/vegokassenp.png"
          website="Go to Vegokassen"
        />

        <ArticleCardImage
        link="https://lysmac.github.io/moon-mission/"
          image="/images/moonmissionp.png"
          website="Go to Moon Mission"
        />
      </Flex>
      <h2 style={{ marginBottom: "1rem", marginTop: "1rem" }}>Education</h2>
      <EducationTimeline />
      <h2
        style={{ textAlign: "right", marginBottom: "1rem", marginTop: "1rem" }}
      >
        Experience
      </h2>
      <ExperienceTimeline />
    </div>
  );
}
