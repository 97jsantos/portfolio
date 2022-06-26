import dev from '../img/dev97jsantos.jpeg'
import perfil from '../img/perfil97jsantos.png'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { IoMdMail } from 'react-icons/io'

export function Header() {
    return (
        <div id='header' style={{ backgroundImage: `url(${dev})`}} className="mx-auto flex items-center justify-center bg-no-repeat bg-fixed bg-cover bg-center min-h-screen">
            <div className='max-w-5xl lg:p-14 p-10 flex sm:flex-row flex-col items-center justify-center backdrop-blur-lg'>
                <img src={perfil} alt="Minha imagem de Perfil" className='rounded-full lg:w-52 lg:h-52 md:w-44 md:h-44 sm:w-44 sm:h-44 w-44 h-44 sm:mr-4 sm:mb-0 mr-2 mb-10' />
                <div className='flex flex-col items-center sm:ml-4 ml-2'>
                    <p className='w-full lg:text-3xl text-xl'>Me chamo Joélisson Santos,</p>
                    <p className='w-full lg:text-right text-center lg:text-lg text-xs'>Seja bem-vindo ao meu portfólio!</p>
                    <div className='w-full flex lg:flex-row flex-col justify-around sm:mt-4 mt-10'>
                        <a className='flex w-fit gap-1 items-center text-xs mb-2 hover:scale-110 duration-500' href="mailto:97jsantos@gmail.com"><IoMdMail style={{fontSize:'20px'}}/>97jsantos@gmail.com</a>
                        <a className='flex w-fit gap-1 items-center text-xs mb-2 hover:scale-110 duration-500' href="https://github.com/97jsantos" target="_blank" rel="noreferrer"><FaGithub style={{fontSize:'20px'}}/>97jsantos</a>
                        <a className='flex w-fit gap-1 items-center text-xs mb-2 hover:scale-110 duration-500' href="https://www.linkedin.com/in/joelisson-santos/" target="_blank" rel="noreferrer"><FaLinkedin style={{fontSize:'20px'}}/>Joélisson Santos</a>
                    </div>
                </div>
            </div>
        </div>
    )
}