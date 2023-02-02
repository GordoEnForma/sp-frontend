
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
        ruta: '/admin/home',
        icon: HomeIcon
    },
    {
        title: 'Usuarios',
        name: 'usuarios',
        ruta: '/admin/usuarios',
        icon: AutoStoriesIcon
    },
    {
        title: 'Temas',
        ruta: '/admin/temas',
        name: 'temas',
        icon: LocalLibrarySharpIcon
    },
    {
        title: 'Productos',
        ruta: '/admin/productos',
        name: 'productos',
        icon: LocalLibrarySharpIcon
    },
    {
        title: 'Recursos',
        name: 'recursos',
        ruta: '/admin/recursos',
        icon: FolderCopyIcon
    },
   
]