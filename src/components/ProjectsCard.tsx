import { BsGithub } from "react-icons/bs"

interface ProjectsCardProps {
    githubLink: string
    projectLink: string
    bg: string
    title: string
    text: string
}

export function ProjectsCard({ githubLink, projectLink, bg, title, text }: ProjectsCardProps) {
    return (
        <div className="p-4 my-4 sm:mx-auto mx-7 shadow-xl shadow-black lg:w-5/12 max-w-xl hover:scale-110 duration-1500 rounded-md relative">
            <a href={githubLink} target='_blank' className="absolute right-10 bg-zinc-800 w-14 h-10 rounded-br-lg rounded-bl-lg flex justify-center items-center"><BsGithub className="w-3/5 h-3/5"/></a>
            <a href={projectLink} target='_blank'><div style={{backgroundImage: `url(${bg})` }} className='sm:h-36 h-28 bg-cover bg-no-repeat hover:bg-bottom hover:duration-1500 duration-1500 rounded-t-lg'></div></a>
            <div className="text-center sm:h-32 h-28">
                <p className="sm:mt-6 sm:text-2xl mt-2 text-xl">{title}</p>
                <p className="sm:mt-4 sm:mb-6 sm:px-4 sm:text-base my-2 px-1 text-sm">{text}</p>
            </div>
        </div>
    )
}