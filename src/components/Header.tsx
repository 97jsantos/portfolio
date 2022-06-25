import dev from '../img/dev.jpg'
import perfil from '../img/perfil.png'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { IoMdMail } from 'react-icons/io'

export function Header() {
    return (
        <div style={{ backgroundImage: `url(${dev})`}} className="mx-auto flex items-center justify-center bg-no-repeat bg-fixed bg-cover lg:bg-center bg-right min-h-screen">
            <div className='max-w-5xl lg:p-20 md:p-14 sm:p-10 p-4 flex sm:flex-row flex-col items-center justify-center backdrop-blur-lg'>
                <img src={perfil} alt="Minha imagem de Perfil" className='rounded-full lg:w-64 lg:h-64 md:w-52 md:h-52 sm:w-44 sm:h-44 w-44 h-44 md:mr-8 sm:mr-4 mr-2 mb-2' />
                <div className='flex flex-col items-center md:ml-8 sm:ml-4 ml-2'>
                    <p className='w-full lg:text-5xl md:text-3xl text-xl'>Me chamo Joélisson Santos,</p>
                    <p className='w-full lg:text-right text-center lg:text-3xl md:text-lg text-xs'>Seja bem-vindo ao meu portfólio!</p>
                    <div className='w-full flex lg:flex-row flex-col justify-around mt-4'>
                        <a className='flex gap-1 items-center lg:text-base md:text-sm text-xs mb-2 hover:scale-110 duration-500' href="mailto:97jsantos@gmail.com"><IoMdMail style={{fontSize:'20px'}}/>97jsantos@gmail.com</a>
                        <a className='flex gap-1 items-center lg:text-base md:text-sm text-xs mb-2 hover:scale-110 duration-500' href="https://github.com/97jsantos" target="_blank" rel="noreferrer"><FaGithub style={{fontSize:'20px'}}/>97jsantos</a>
                        <a className='flex gap-1 items-center lg:text-base md:text-sm text-xs mb-2 hover:scale-110 duration-500' href="https://www.linkedin.com/in/joelisson-santos/" target="_blank" rel="noreferrer"><FaLinkedin style={{fontSize:'20px'}}/>Joélisson Santos</a>
                    </div>
                </div>
            </div>
        </div>
    )
}