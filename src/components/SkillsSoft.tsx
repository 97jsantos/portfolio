import { SkillsCard } from "./SkillsCard"
import { GiBrain } from "react-icons/gi"

export function SkillsSoft() {
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="mb-16 py-12 border-2 border-white p-2 max-w-7xl relative">
                <GiBrain className='text-7xl border-2 border-white rounded-full p-2 absolute -left-8 -top-8 bg-gray-900 hover:animate-ping'/>
                <p className="text-2xl absolute -top-5 left-20 bg-gray-900 px-3">Habilidades Comportamentais</p>
                <div className="flex flex-wrap items-center justify-center">
                    <SkillsCard
                    title="Iniciativa"
                    text="Possuo uma disposição natural, gosto de fazer as coisas acontecerem e me antecipar aos fatos. Me planejar e realizar ações que buscam melhorias positivas para mim e para o ambiente de trabalho." />
                    <SkillsCard
                    title="Trabalho em equipe"
                    text="Sempre me relacionei muito bem com pessoas e me considero uma pessoa motivadora e que se comunica bastante. É trabalhando em conjunto e em busca de um objetivo em comum que se consegue resultados ainda melhores." />
                    <SkillsCard
                    title="Determinação"
                    text="Sou uma pessoa decidida, quando entro em algo, eu me entrego por completo, sempre tentando ser a melhor versão de mim mesmo, permanecendo firme no meu objetivo." />
                    <SkillsCard
                    title="Criatividade"
                    text="Sou uma pessoa muito curiosa, sempre buscando inspirações e sensível a pensar fora da caixa. Não tenho medo de errar e sou convicto de que tudo é criado a partir da tentativa e do erro." />
                </div>
            </div>
        </div>
    )
}