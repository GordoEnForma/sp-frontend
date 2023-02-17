import { createTheme } from "@mui/material";
import { red, green } from "@mui/material/colors";

export const greenTheme = createTheme({
    palette: {
        primary: {
            main: '#0DD345'
        },
        secondary: {
            main: '#2CF264',

        },
        error: {
            main: red[400]
        },
        background:{
            default:'#F6F6F8'
        }


    },
    typography: {
        fontWeightBold: 'bold'
    }
})