import { SkillsHard } from "./SkillsHard";
import { SkillsSoft } from "./SkillsSoft";

export function Skills() {
    return (
        <>
            <p className="text-center text-5xl mt-20 mb-24 block">Habilidades</p>
            <SkillsHard />
            <SkillsSoft />
        </>
    )
}