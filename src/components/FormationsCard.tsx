import { FaGraduationCap } from 'react-icons/fa'

interface FormationsCardProps {
    titulo: string
    tipo: string
    instituicao: string
    situacao: string
    datainicio: string
    dataconclusao: string
    duracao: string
}

export function FormationsCard({ titulo, tipo, instituicao, situacao, datainicio, dataconclusao, duracao }: FormationsCardProps) {
    return (
        <div className='relative w-full mt-24 mx-auto'>
            <FaGraduationCap className='sm:text-7xl text-5xl border-2 border-white rounded-full p-2 absolute sm:-left-8 sm:-top-8 -left-5 -top-5 bg-gray-900 hover:animate-spin'/>
            <div className='border-2 border-white'>
                <p className='sm:text-2xl text-base absolute sm:-top-5 sm:left-20 -top-3 left-10 bg-gray-900 sm:px-3 px-2'>{titulo}</p>
                <ul className='flex flex-wrap justify-around gap-4 sm:p-8 p-4'>
                    <li className='pt-5 text-center xl:w-80 lg:w-72 sm:w-96 w-full'><span className='font-bold sm:text-base text-sm'>Tipo de ensino: </span><span className='font-bold sm:text-base text-sm'>{tipo}</span></li>
                    <li className='pt-5 text-center xl:w-80 lg:w-72 sm:w-96 w-full'><span className='font-bold sm:text-base text-sm'>Instituição: </span><span className='font-bold sm:text-base text-sm'>{instituicao}</span></li>
                    <li className='pt-5 text-center xl:w-80 lg:w-72 sm:w-96 w-full'><span className='font-bold sm:text-base text-sm'>Situação: </span><span className='font-bold sm:text-base text-sm'>{situacao}</span></li>
                    <li className='pt-5 text-center xl:w-80 lg:w-72 sm:w-96 w-full'><span className='font-bold sm:text-base text-sm'>Duração: </span><span className='font-bold sm:text-base text-sm'>{duracao}</span></li>
                    <li className='pt-5 text-center xl:w-80 lg:w-72 sm:w-96 w-full'><span className='font-bold sm:text-base text-sm'>Data do início: </span><span className='font-bold sm:text-base text-sm'>{datainicio}</span></li>
                    <li className='pt-5 text-center xl:w-80 lg:w-72 sm:w-96 w-full'><span className='font-bold sm:text-base text-sm'>Data da conclusão: </span><span className='font-bold sm:text-base text-sm'>{dataconclusao}</span></li>
                </ul>
            </div>
        </div>
    )
}