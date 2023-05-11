import { Container } from "@mantine/core";
import { ArticlesCardsGrid } from "../components/PortfolioCard";
import { PortfolioHero } from "../components/PortfolioHero";

export function PortfolioPage() {
    return(
    <div>
        <PortfolioHero />
        <Container size="xl">
        <ArticlesCardsGrid />
        </Container>
        </div>
    )
}