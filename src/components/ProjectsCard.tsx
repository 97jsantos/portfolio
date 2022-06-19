interface ProjectsCardProps {
    href: string
    bg: string
    title: string
    text: string
}

export function ProjectsCard({ href, bg, title, text }: ProjectsCardProps) {
    return (
        <div className="p-4 my-4 mx-8 shadow-xl shadow-black w-2/5 hover:scale-110 duration-1500 rounded-md">
            <a href={href} target='_blank'><div style={{backgroundImage: `url(${bg})` }} className='h-44 bg-cover bg-no-repeat hover:bg-bottom hover:duration-1500 duration-1500 rounded-t-lg'></div></a>
            <div className="text-center h-40">
                <p className="pt-6 text-2xl">{title}</p>
                <p className="pt-4 pb-6 px-4">{text}</p>
            </div>
        </div>
    )
}