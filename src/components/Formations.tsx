import { FormationsCard } from "./FormationsCard";

export function Formations() {
    return (
        <div className="flex justify-center">
            <div className="max-w-7xl flex flex-col items-center sm:mx-10 mx-7">
                <p className="text-5xl my-24">Formações</p>
                <FormationsCard
                titulo="Análise e Desenvolvimento de Sistemas"
                tipo="Tecnólogo"
                instituicao="Faculdade Descomplica"
                situacao="Cursando"
                datainicio="Abril de 2022"
                dataconclusao="Setembro de 2024"
                duracao="5 semestres"
                 />
                <FormationsCard
                titulo="Administração"
                tipo="Técnico"
                instituicao="Instituto Federal de Pernambuco"
                situacao="Concluído"
                datainicio="Agosto de 2018"
                dataconclusao="Dezembro de 2019"
                duracao="3 semestres"
                 />
            </div>
        </div>
    )
}