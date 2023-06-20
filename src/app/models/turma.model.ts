export interface Turma{
    id: string,
    apelido: string,
    descricao: string,
    dataInicio: Date | undefined,
    dataConclusao: Date | undefined,
    dataPrevEncerramento: Date | undefined,
    dataCadastro: Date,
    responsavel: string,
    status: statusTurma
}

export enum statusTurma {
    pendente = "Pendente",
    emAndamento = "Em Andamento",
    finalizada = "Finalizada",
    cancelada = "Cancelada"
}

export function novaTurma(): Turma  {
    return {
        id: '',
        apelido: '',
        descricao: '',
        dataInicio: undefined,
        dataConclusao: undefined,
        dataPrevEncerramento: undefined,
        dataCadastro: new Date(Date.now()),
        responsavel: '',
        status: statusTurma.pendente
    }
}