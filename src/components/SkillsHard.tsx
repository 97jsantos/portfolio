import { SkillsCard } from "./SkillsCard"
import { GiGears } from "react-icons/gi"

export function SkillsHard() {
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="mb-16 py-12 border-2 border-white p-2 relative">
                <GiGears className='sm:text-7xl text-5xl border-2 border-white rounded-full p-2 absolute sm:-left-8 sm:-top-8 -left-5 -top-5 bg-gray-900 hover:animate-ping'/>
                <p className="sm:text-2xl text-base absolute sm:-top-5 sm:left-20 -top-3.5 left-10 bg-gray-900 sm:px-3 px-2">Habilidades Técnicas</p>
                <div className="flex flex-wrap items-center justify-center">
                    <SkillsCard
                    title="HTML5, CSS3 e JavaScript"
                    text="Meus estudos com essas 3 tecnologias começaram em 2021 pelo CursoemVideo. São meus três pilares, e desde que conheci estou estudando e praticando dia após dia para desenvolver cada vez mais e melhor." />
                    <SkillsCard
                    title="React e Typescript"
                    text="Em 2022 iniciei meus estudos em React e conhecer o React foi e continua sendo uma experiência incrível, e sabendo o quão requisitado é o Typescript, incluí nos meus estudos e hoje desenvolvo em React.ts." />
                    <SkillsCard
                    title="Bootstrap"
                    text="Conheci o Boostrap em 2022, foi meu primeiro contato com um framework que permite aplicar estilos a partir de classes pré-construídas, o que além da praticidade que oferece, também auxilia bastante na aplicação de conteúdos responsivos." />
                    <SkillsCard
                    title="Tailwind CSS"
                    text="Conheci o Tailwind CSS em 2022 durante um evento de programação da Rocketseat, e apesar de ter a mesma funcionalidade do Bootstrap, estou optando por utilizar o Tailwind por possuir uma variedade maior de estilos em algumas classes." />
                    <SkillsCard
                    title="Vite"
                    text="Conheci o Vite em 2022 durante um evento de programação da Rocketseat por indicação do Professor Diego Fernandes, e desde então venho iniciando meus projetos em React.ts utilizando essa ferramenta de construção para front-end." />
                    <SkillsCard
                    title="Git e GitHub"
                    text="Em 2022 conheci a importância dessas ferramentas e desde então venho utilizando, se tornando indispensável para o versionamento e hospedagem dos meus projetos. " />
                </div>
            </div>
        </div>
    )
}