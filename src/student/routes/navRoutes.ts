
import HomeIcon from '@mui/icons-material/Home';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import FolderCopyIcon from '@mui/icons-material/FolderCopy';
import LocalLibrarySharpIcon from '@mui/icons-material/LocalLibrarySharp';

type Ruta = {
    name: string;
    ruta: string;
    icon: React.FC
}


export const rutas: Ruta[] = [
    {
        name: 'Principal',
        ruta: '/student/home',
        icon: HomeIcon
    },
    {
        name: 'Examen',
        ruta: '/student/examen',
        icon: AutoStoriesIcon
    },
    {
        name: 'Repaso',
        ruta: '/student/repaso',
        icon: LocalLibrarySharpIcon
    },
    {
        name: 'Recursos',
        ruta: '/student/recursos',
        icon: FolderCopyIcon
    },
   
]