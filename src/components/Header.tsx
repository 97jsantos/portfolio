import dev from '../img/dev.jpg'
import perfil from '../img/perfil.png'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { IoMdMail } from 'react-icons/io'

export function Header() {
    return (
        <div style={{ backgroundImage: `url(${dev})`}} className="flex items-center justify-center bg-no-repeat bg-fixed bg-cover bg-center min-h-screen">
            <div className='p-20 flex items-center justify-center backdrop-blur-lg'>
                <img src={perfil} alt="Minha imagem de Perfil" className='rounded-full w-64 h-64 mr-8' />
                <div className='flex flex-col items-center ml-8'>
                    <p className='text-5xl'>Me chamo Joélisson Santos,</p>
                    <p className='text-2xl'>Seja bem-vindo ao meu portfólio!</p>
                    <div className='flex mt-4'>
                        <a className='flex gap-1 items-center mr-4 hover:scale-110 duration-500' href="mailto:97jsantos@gmail.com"><IoMdMail style={{fontSize:'20px'}}/>97jsantos@gmail.com</a>
                        <a className='flex gap-1 items-center mx-2 hover:scale-110 duration-500' href="https://github.com/97jsantos" target="_blank" rel="noreferrer"><FaGithub style={{fontSize:'20px'}}/>97jsantos</a>
                        <a className='flex gap-1 items-center ml-4 hover:scale-110 duration-500' href="https://www.linkedin.com/in/jo%C3%A9lisson-santos-387204232/" target="_blank" rel="noreferrer"><FaLinkedin style={{fontSize:'20px'}}/>Joélisson Santos</a>
                    </div>
                </div>
            </div>
        </div>
    )
}