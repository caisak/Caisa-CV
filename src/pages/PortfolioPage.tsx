import { Container } from "@mantine/core";
import { ArticlesCardsGrid } from "../components/PortfolioCard";
import { HeroImageBackground } from "../components/PortfolioHero";

export function PortfolioPage() {
    return(
    <div>
        <HeroImageBackground />
        <Container size="xl">
        <h1>Portfolio</h1>
        <ArticlesCardsGrid />
        </Container>
        </div>
    )
}