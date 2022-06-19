import { GoToAbout, GoToFormations, GoToHeader, GoToProjects, GoToSkills } from "./GoTo";

import { GoHome } from 'react-icons/go'

export function Navigation() {
    return (
      <nav className="flex items-center justify-around sticky top-0 bg-gray-900 z-10 border-b h-14 ">
        <button onClick={GoToHeader} className="opacity-60 hover:opacity-100 font-medium"><GoHome style={{fontSize:'30px'}} /></button>
        <div className="flex">
          <button onClick={GoToAbout} className="px-5 opacity-60 hover:opacity-100 font-medium">Sobre</button>
          <button onClick={GoToFormations} className="px-5 opacity-60 hover:opacity-100 font-medium">Formações</button>
          <button onClick={GoToProjects} className="px-5 opacity-60 hover:opacity-100 font-medium">Projetos</button>
          <button onClick={GoToSkills} className="px-5 opacity-60 hover:opacity-100 font-medium">Habilidades</button>
        </div>
      </nav>
    );
  }