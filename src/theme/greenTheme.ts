import { createTheme } from "@mui/material";
import { red, green } from "@mui/material/colors";

export const greenTheme = createTheme({
    palette: {
        primary: {
            main: '#1EAD5C'
        },
        secondary: {
            main: '#1E8048',

        },
        error: {
            main: red[400]
        },


    },
    typography: {
        fontWeightBold: 'bold'
    }
})