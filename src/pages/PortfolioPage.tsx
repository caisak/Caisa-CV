import { Container } from "@mantine/core";
import { ArticlesCardsGrid } from "../components/PortfolioCard";

export function PortfolioPage() {
    return(
    <Container size="lg">
        <h1>Portfolio</h1>
        <ArticlesCardsGrid />
        </Container>
    )
}