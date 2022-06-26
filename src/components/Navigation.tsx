import { GoToAbout, GoToFormations, GoToHeader, GoToProjects, GoToSkills } from "./GoTo";
import { MdMenu } from 'react-icons/md'
import { Link } from "react-scroll";
import { GoHome } from 'react-icons/go'
import { useState } from "react";

export function Navigation() {

  const [isNavExpanded, setIsNavExpanded] = useState(false)

  return (
    <nav className="flex items-center justify-around sticky top-0 bg-gray-900 z-10 border-b h-14">
      <button 
              className='sm:hidden block absolute'
              onClick={() => {
                  setIsNavExpanded(!isNavExpanded);
                }}><MdMenu className='text-3xl text-white'/></button>
      <div className="max-w-7xl w-full relative mx-auto flex items-center justify-around">
        <ul className={`flex flex-col absolute bg-gray-900 z-10 w-full top-8 sm:left-auto sm:flex-row justify-center sm:justify-around sm:top-auto duration-500 sm:duration-0 ${isNavExpanded ? "left-0" : "-left-full"}
                    `}>
          <Link to="header" spy={true} smooth={true} offset={-56} duration={500} className="opacity-60 hover:opacity-100 font-medium flex justify-center mb-3 mt-6 sm:my-0 cursor-pointer"><GoHome style={{fontSize:'30px'}} /></Link>
          <div className="flex flex-col sm:flex-row">
            <Link to="aboutMe" spy={true} smooth={true} offset={-56} duration={500} className="px-5 opacity-60 hover:opacity-100 font-medium flex justify-center items-center my-3 sm:my-0 cursor-pointer">Sobre</Link>
            <Link to="formations" spy={true} smooth={true} offset={-56} duration={500} className="px-5 opacity-60 hover:opacity-100 font-medium flex justify-center items-center my-3 sm:my-0 cursor-pointer">Formações</Link>
            <Link to="projects" spy={true} smooth={true} offset={-56} duration={500} className="px-5 opacity-60 hover:opacity-100 font-medium flex justify-center items-center my-3 sm:my-0 cursor-pointer">Projetos</Link>
            <Link to="skills" spy={true} smooth={true} offset={-56} duration={500} className="px-5 opacity-60 hover:opacity-100 font-medium flex justify-center items-center my-3 sm:my-0 cursor-pointer">Habilidades</Link>
          </div>
        </ul>
      </div>
    </nav>
  );
}