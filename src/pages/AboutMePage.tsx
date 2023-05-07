import { Flex } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { ArticleCardImage } from "../components/ArticleCard";
import { EducationTimeline } from "../components/EducationTimeline";
import { ExperienceTimeline } from "../components/ExperienceTimeline";
import { ProgressCard } from "../components/TechSkills";

export function AboutMePage() {
    const isMobile = useMediaQuery('(max-width: 768px)');
  return (
    <div>
      <h1>About Me</h1>
      <ProgressCard />
      <h2>Libraries</h2>
      <h3>React, Svelte</h3>
      <h2>Other</h2>
      <h3>Styled components, chakra ui, mantine ui, bootstrap</h3>
      <div style={{ marginBottom: "1rem", marginTop: "1rem",  }}>
        <h2>Selected Projects</h2>
        <h2 style={{ textAlign: "right" }}>Go to Portfolio</h2>
      </div>
      <Flex direction={isMobile ? 'column' : 'row'} gap="xl" align="center">
        <ArticleCardImage
          image="/images/bobablissp.png"
          title="Boba Bliss"
          link="https://bobabliss.netlify.app/"
          website="Go to Boba Bliss"
        />

        <ArticleCardImage
          image="/images/vegokassenp.png"
          title="Vegokassen"
          link="https://vegokassen.netlify.app/"
          website="Go to Vegokassen"
        />

        <ArticleCardImage
          image="/images/moonmissionp.png"
          title="Moon Mission"
          link="https://lysmac.github.io/moon-mission/"
          website="Go to Moon Mission"
        />
      </Flex>
      <h2 style={{ marginBottom: "1rem", marginTop: "1rem",  }}>Education</h2>
      <EducationTimeline />
      <h2 style={{ textAlign: "right", marginBottom: "1rem", marginTop: "1rem",  }}>Experience</h2>
      <ExperienceTimeline />
    </div>
  );
}
