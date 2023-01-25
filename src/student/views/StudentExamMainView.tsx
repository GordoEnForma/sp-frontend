import { Button, Grid, Paper, Typography } from "@mui/material"
import { TextContainerWithButton, CustomPaginationActionsTable } from "../components"

const containerText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "

export const StudentExamMainView = () => {
    return (
        <>
            <TextContainerWithButton
                title="Simulacro"
                description={containerText}
                butonText="Iniciar Examen"
            />

            <Grid item xs={12} sx={{
                mb: 5
            }} >
                <Typography sx={{
                    color: 'primary.main',
                    fontSize: 20,
                    my: 2
                }}>
                    Historial de Examenes
                </Typography>

                <CustomPaginationActionsTable />

            </Grid>
        </>
    )
}
