import { ProjectsCard } from "./ProjectsCard";

import website from "../img/projeto-website.png"

export function Projects() {
    return (
        <div id="projects" className="max-w-7xl mx-auto">
            <p className="text-center text-5xl pt-24 mb-20 block">Projetos</p>
            <div className="flex items-center flex-wrap sm:justify-between justify-center">
                <ProjectsCard
                href="https://jsantos97-website.herokuapp.com/"
                bg={website}
                title='Projeto Website'
                text="O SaleStore é um site de e-commerce produzido em React TypeScript com uma Fake API em JSON, 100% autoral." />
                <ProjectsCard
                href="https://jsantos97-website.herokuapp.com/"
                bg={website}
                title='Projeto Website'
                text="O SaleStore é um site de e-commerce produzido em React TypeScript com uma Fake API em JSON, 100% autoral." />
                <ProjectsCard
                href="https://jsantos97-website.herokuapp.com/"
                bg={website}
                title='Projeto Website'
                text="O SaleStore é um site de e-commerce produzido em React TypeScript com uma Fake API em JSON, 100% autoral." />
            </div>
        </div>
    )
}