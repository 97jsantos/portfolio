import { GoToAbout, GoToFormations, GoToHeader, GoToProjects, GoToSkills } from "./GoTo";
import { MdMenu } from 'react-icons/md'

import { GoHome } from 'react-icons/go'
import { useState } from "react";

export function Navigation() {

  const [isNavExpanded, setIsNavExpanded] = useState(false)

  return (
    <nav className="flex items-center justify-around sticky top-0 bg-gray-900 z-10 border-b h-14">
      <button 
              className='sm:hidden block ml-2 absolute'
              onClick={() => {
                  setIsNavExpanded(!isNavExpanded);
                }}><MdMenu className='text-3xl text-white'/></button>
      <div className="max-w-7xl w-full mx-auto flex items-center justify-around">
        <ul className={
                    isNavExpanded ? "flex flex-col absolute bg-gray-900 z-10 w-full left-0 top-14 sm:flex-row justify-center sm:top-auto duration-500 sm:duration-0" : "flex flex-col absolute bg-gray-900 z-10 w-full -left-full top-14 sm:left-auto sm:flex-row justify-center sm:top-auto duration-500 sm:duration-0"
                    }>
          <button onClick={GoToHeader} className="opacity-60 hover:opacity-100 font-medium flex justify-center mb-3 mt-6 sm:mr-32 sm:my-0"><GoHome style={{fontSize:'30px'}} /></button>
          <button onClick={GoToAbout} className="px-5 opacity-60 hover:opacity-100 font-medium my-3 sm:my-0">Sobre</button>
          <button onClick={GoToFormations} className="px-5 opacity-60 hover:opacity-100 font-medium my-3 sm:my-0">Formações</button>
          <button onClick={GoToProjects} className="px-5 opacity-60 hover:opacity-100 font-medium my-3 sm:my-0">Projetos</button>
          <button onClick={GoToSkills} className="px-5 opacity-60 hover:opacity-100 font-medium mt-3 mb-6 sm:my-0">Habilidades</button>
        </ul>
      </div>
    </nav>
  );
}