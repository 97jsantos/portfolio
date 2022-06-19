interface SkillsCardProps {
    title: string
    text: string
}

export function SkillsCard({ title, text}: SkillsCardProps) {
    return (
        <div className="p-4 m-7 h-56 shadow-xl shadow-black w-2/5 hover:scale-110 duration-1500 rounded-md">
            <p className="text-center pt-6 text-2xl">{title}</p>
            <p className="text-center pt-4 pb-6 px-4">{text}</p>
        </div>
    )
}