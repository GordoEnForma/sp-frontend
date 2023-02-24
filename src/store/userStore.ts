import { create } from 'zustand';


interface User {
    data: Data;
}

interface Data {
    id: string;
    nombre: string;
    apellido: string;
    role: string;
}

interface userState {
    user: User | null;
    login: (data: Data) => void;
}

export const userStore = create<userState>((set, get) => ({
    user: null,
    login: (data: Data) => set(() => ({ user: { data: { ...data } } }))
}))