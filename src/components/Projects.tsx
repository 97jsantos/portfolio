import { ProjectsCard } from "./ProjectsCard";
import salestore from "../img/salestore.png"
import costs from "../img/costs.png"

export function Projects() {
    return (
        <div id="projects" className="flex justify-center">
            <div className="max-w-7xl w-full">
                <p className="text-center text-5xl sm:mt-24 mt-14 sm:mb-20 mb-10">Projetos</p>
                <div className="flex items-center flex-wrap sm:justify-between justify-center">
                <ProjectsCard
                    githubLink="https://github.com/97jsantos/costs-project"
                    projectLink="https://costs-97jsantos.netlify.app/"
                    bg={costs}
                    title='Costs'
                    text="O Costs foi produzido durante o curso de React do Hora de Codar, o intuito foi pôr em prática os ensinamentos de React básico e consumo de API." />
                    <ProjectsCard
                    githubLink="https://github.com/97jsantos/salestore-project"
                    projectLink="https://salestore-97jsantos.netlify.app/"
                    bg={salestore}
                    title='SaleStore'
                    text="O SaleStore é um site de e-commerce desenvolvido em React TypeScript com uma Fake API em JSON, e estilos usando o TailwindCSS." />
                </div>
            </div>
        </div>
    )
}