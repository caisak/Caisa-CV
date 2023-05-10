import { createStyles, Flex } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { NavLink } from "react-router-dom";
import { ArticleCardImage } from "../components/ArticleCard";
import { EducationTimeline } from "../components/EducationTimeline";
import { ExperienceTimeline } from "../components/ExperienceTimeline";
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

    [theme.fn.smallerThan("sm")]: {
      borderRadius: 0,
      padding: theme.spacing.md,
    },
  },

}));

export function AboutMePage() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const { classes, cx } = useStyles();
  return (
    <div>
      <h1>About Me</h1>
      <ProgressCard />
      <h3>Svelte, Styled components, chakra ui, mantine ui, bootstrap</h3>
      <Flex
        justify="space-between"
        align="center"
        style={{ marginBottom: "1rem", marginTop: "1rem" }}
      >
        <h2>Selected Projects</h2>
        <NavLink to="/portfolio" className={classes.link}>
          <h2>Go to Portfolio </h2>
        </NavLink>
      </Flex>
      <Flex direction={isMobile ? "column" : "row"} gap="xl" align="center">
        <ArticleCardImage
          image="/images/bobablissp.png"
          link="https://bobabliss.netlify.app/"
          website="Go to Boba Bliss"
        />

        <ArticleCardImage
          image="/images/vegokassenp.png"
          link="https://vegokassen.netlify.app/"
          website="Go to Vegokassen"
        />

        <ArticleCardImage
          image="/images/moonmissionp.png"
          link="https://lysmac.github.io/moon-mission/"
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
