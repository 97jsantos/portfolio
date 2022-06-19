import { ProjectsCard } from "./ProjectsCard";

import website from "../img/projeto-website.png"

export function Projects() {
    return (
        <>
            <p className="text-center text-5xl mb-20 block">Projetos</p>
            <div className="flex items-center flex-wrap justify-center">
                <ProjectsCard
                href="https://jsantos97-website.herokuapp.com/"
                bg={website}
                title='Projeto Website'
                text="sdfwqesd wqe fwf qwef f qwerf wqe fwf weq f weqf we f stg  rwef sda gsf g re gaw f asdg afd gg adg asdfg afdg sefd gare g asg a" />
                <ProjectsCard
                href="https://jsantos97-website.herokuapp.com/"
                bg={website}
                title='Projeto Website'
                text="sdfwqesd wqe fwf qwef f qwerf wqe fwf weq f weqf we f stg  rwef sda gsf g re gaw f asdg afd gg adg asdfg afdg sefd gare g asg a asd asd sdaf sda fasd f qwef sd f wqe fsd f wqef ds fwqe" />
                <ProjectsCard
                href="https://jsantos97-website.herokuapp.com/"
                bg={website}
                title='Projeto Website'
                text="sdfwqesd wqe fwf qwef f qwerf wqe fwf weq f weqf we f stg  rwef sda gsf g re gaw f asdg afd gg adg asdfg afdg sefd gare g asg a" />
            </div>
        </>
    )
}