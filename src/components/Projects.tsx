import { ProjectsCard } from "./ProjectsCard";

import salestore from "../img/salestore.png"

export function Projects() {
    return (
        <div id="projects" className="max-w-7xl mx-auto">
            <p className="text-center text-5xl pt-24 mb-20 block">Projetos</p>
            <div className="flex items-center flex-wrap sm:justify-between justify-center">
                <ProjectsCard
                href="https://salestore-97jsantos.netlify.app/"
                bg={salestore}
                title='SaleStore'
                text="O SaleStore é um site de e-commerce produzido em React TypeScript com uma Fake API em JSON." />
                <ProjectsCard
                href="https://salestore-97jsantos.netlify.app/"
                bg={salestore}
                title='SaleStore'
                text="O SaleStore é um site de e-commerce produzido em React TypeScript com uma Fake API em JSON." />
                <ProjectsCard
                href="https://salestore-97jsantos.netlify.app/"
                bg={salestore}
                title='SaleStore'
                text="O SaleStore é um site de e-commerce produzido em React TypeScript com uma Fake API em JSON." />
            </div>
        </div>
    )
}