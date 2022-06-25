interface SkillsCardProps {
    title: string
    text: string
}

export function SkillsCard({ title, text}: SkillsCardProps) {
    return (
        <div className="p-4 m-7 shadow-xl shadow-black xl:max-w-lg xl:h-60 lg:max-w-sm lg:h-72 md:max-w-lg md:h-60 sm:w-full sm:h-60 hover:scale-110 duration-1500 rounded-md">
            <p className="text-center pt-6 sm:text-2xl text-lg">{title}</p>
            <p className="text-center pt-4 pb-6 px-4 sm:text-base text-sm">{text}</p>
        </div>
    )
}