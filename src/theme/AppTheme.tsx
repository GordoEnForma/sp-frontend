import { ReactNode } from "react"
import { ThemeProvider } from "@emotion/react"
import { CssBaseline } from "@mui/material"
import { greenTheme } from "./"

type AppThemeProps = {
    children: ReactNode
}

export const AppTheme = ({ children }: AppThemeProps) => {
    return (
        <ThemeProvider theme={greenTheme}>
            <CssBaseline />
            {children}

        </ThemeProvider>
    )
}