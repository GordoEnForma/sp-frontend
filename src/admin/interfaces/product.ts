export interface Productos {
    data: Datum[];
}

export interface Producto {
    data: Datum;
}

interface Datum {
    _id: string;
    nombre: string;
    temas: Tema[];
    updatedAt?: string;
}

interface Tema {
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







