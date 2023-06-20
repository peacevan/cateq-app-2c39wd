export interface Professor{
    id: string,
    nome: string,
    sobrenome: string,
    email: string,
    telefone: string,
    sexo: string,
}


export function novoProfessor():Professor  {
    return {
        id: '',
        nome: '',
        sobrenome: '',
        email: '',
        telefone: '',
        sexo: '',
     }
}