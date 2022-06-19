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
        <div className='relative w-screen max-w-7xl mb-24'>
            <FaGraduationCap className='text-7xl border-2 border-white rounded-full p-2 absolute -left-8 -top-8 bg-gray-900 hover:animate-spin'/>
            <div className='border-2 border-white'>
                <p className='text-2xl absolute -top-5 left-20 bg-gray-900 px-3'>{titulo}</p>
                <ul className='grid grid-cols-3 gap-4 p-8'>
                    <li className='pt-5 text-center'><span className='font-bold'>Tipo de ensino: </span><span>{tipo}</span></li>
                    <li className='pt-5 text-center'><span className='font-bold'>Instituição: </span><span>{instituicao}</span></li>
                    <li className='pt-5 text-center'><span className='font-bold'>Situação: </span><span>{situacao}</span></li>
                    <li className='pt-5 text-center'><span className='font-bold'>Data do início: </span><span>{datainicio}</span></li>
                    <li className='pt-5 text-center'><span className='font-bold'>Data da conclusão: </span><span>{dataconclusao}</span></li>
                    <li className='py-5 text-center'><span className='font-bold'>Duração: </span><span>{duracao}</span></li>
                </ul>
            </div>
        </div>
    )
}