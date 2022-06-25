import { SkillsHard } from "./SkillsHard";
import { SkillsSoft } from "./SkillsSoft";

export function Skills() {
    return (
        <div id="skills" className="flex justify-center">
            <div className="max-w-7xl mx-10">
                <p className="text-center text-5xl pt-24 mb-24 block">Habilidades</p>
                <SkillsHard />
                <SkillsSoft />
            </div>
        </div>
    )
}