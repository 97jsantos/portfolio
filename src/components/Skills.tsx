import { SkillsHard } from "./SkillsHard";
import { SkillsSoft } from "./SkillsSoft";

export function Skills() {
    return (
        <div id="skills" className="flex justify-center">
            <div className="max-w-7xl sm:mx-10 mx-7">
                <p className="text-center text-5xl sm:my-24 my-14 block">Habilidades</p>
                <SkillsHard />
                <SkillsSoft />
            </div>
        </div>
    )
}