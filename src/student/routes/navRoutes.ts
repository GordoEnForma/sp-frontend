
import HomeIcon from '@mui/icons-material/Home';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import FolderCopyIcon from '@mui/icons-material/FolderCopy';
import LocalLibrarySharpIcon from '@mui/icons-material/LocalLibrarySharp';

export type Ruta = {
    title: string;
    name: string;
    ruta: string;
    icon: React.FC
}


export const rutas: Ruta[] = [
    {
        title: 'Principal',
        name: 'home',
        ruta: '/student/home',
        icon: HomeIcon
    },
    {
        title: 'Examen',
        name: 'exam',
        ruta: '/student/examen',
        icon: AutoStoriesIcon
    },
    {
        title: 'Repaso',
        ruta: '/student/repaso',
        name: 'practice',
        icon: LocalLibrarySharpIcon
    },
    {
        title: 'Recursos',
        name: 'resources',
        ruta: '/student/recursos',
        icon: FolderCopyIcon
    },
   
]