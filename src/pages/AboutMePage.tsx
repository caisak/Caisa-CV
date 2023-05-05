import { EducationTimeline } from "../components/EducationTimeline";
import { ExperienceTimeline } from "../components/ExperienceTimeline";

export function AboutMePage() {
    return(
    <div>
        <h1>About Me</h1>
        <h2>Education</h2>
            <EducationTimeline />
            <h2 align="right">Experience</h2>
            <ExperienceTimeline />
    </div>
    )
}