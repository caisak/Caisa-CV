import {
  Col,
  Container,
  createStyles, Flex,
  Grid,
  useMantineTheme
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { ArticleCardImage } from "../components/ArticleCard";
import { Favorites } from "../components/Favorites";
import { HeroImageRight } from "../components/Hero";
import { Info, ProfileImage } from "../components/Info";
import { SectionDivider } from "../components/SectionDivider";
import { TimelineTab } from "../components/Tabs";
import { ProgressCard, TechKnowledge } from "../components/TechSkills";

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

export function HomePage() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const { classes, cx } = useStyles();
  const theme = useMantineTheme();
  const buttonColor = theme.colorScheme === "dark" ? "gray.1" : "dark";

  return (
    <div>
      <HeroImageRight />
      <Container size="xl">
        <SectionDivider
          buttonText="Go to GitHub"
          link="https://github.com/caisak"
          title="Technical Skills"
        />
        <Container size="lg" p="xl">
          <Grid gutter="lg">
            <Col span={12} md={6}>
              <ProgressCard />
            </Col>
            <Col span={12} md={6}>
              <TechKnowledge />
            </Col>
          </Grid>
        </Container>
        <SectionDivider
          buttonText="Go to Portfolio"
          link="/portfolio"
          title="Selected Projects"
        />
        <Flex
          direction={isMobile ? "column" : "row"}
          gap="xl"
          align="center"
          mb="xl"
        >
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
        <SectionDivider
          buttonText="Go to Medieinstitutet"
          link="https://medieinstitutet.se/utbildningar/front-end-developer/"
          title="Education and Experience"
        />
        <TimelineTab />
        <SectionDivider
          buttonText="Go to LinkedIn"
          link="https://www.linkedin.com/in/caisa-kohlin"
          title="About Me"
        />
        <Container size="lg" p="xl">
          <Grid gutter="lg">
            <Col span={12} md={6}>
              <ProfileImage />
            </Col>
            <Col span={12} md={6}>
              <Info />
            </Col>
          </Grid>
        </Container>
        <SectionDivider
          buttonText="Go outside"
          link="/"
          title="My Favorites"
        />
        <Container size="lg" p="xl">
          <Grid gutter="lg">
            <Col span={12} md={6}>
            </Col>
            <Col span={12} md={6}>
              <Favorites />
            </Col>
          </Grid>
        </Container>
      </Container>
    </div>
  );
}
