import { AbouteMe } from "./components/AbouteMe";
import { Formations } from "./components/Formations";
import { Header } from "./components/Header";
import { Navigation } from "./components/Navigation";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";

export function Portfolio() {
    return (
        <div>
            <Navigation />
            <Header />
            <AbouteMe />
            <Formations />
            <Projects />
            <Skills />
        </div>
    )
}