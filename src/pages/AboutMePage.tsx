import { EducationTimeline } from "../components/EducationTimeline";
import { ExperienceTimeline } from "../components/ExperienceTimeline";
import { ProgressCard } from "../components/TechSkills";

export function AboutMePage() {
    return(
    <div>
        <h1>About Me</h1>
        <ProgressCard />
            <h2>Libraries</h2>
            <h3>React, Svelte</h3>
            <h2>Other</h2>
            <h3>Styled components, chakra ui, mantine ui, bootstrap</h3>
        <h2>Education</h2>
            <EducationTimeline />
            <h2 align="right">Experience</h2>
            <ExperienceTimeline />
    </div>
    )
}