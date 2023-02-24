export interface Temas {
    data: Data[];
}

export interface Tema {
    data: Data;
}

interface Data {
    _id: string;
    nombre: string;
    preguntas: Pregunta[];
    __v: number;
    createdAt?: string;
    updatedAt?: string;

}
interface Pregunta {
    _id: string;
    orden: number;
    descripcion: string;
    tema: string;
    alternativas: Alternativa[];
    opcionCorrecta: string;
    justificacion: string;
    __v: number;
}

interface Alternativa {
    opcion: string;
    descripcion: string;
}