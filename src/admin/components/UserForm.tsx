import { Box, Grid, TextField } from "@mui/material";
import { grey } from "@mui/material/colors";

export const UserForm = () => {
    return (
        <Grid
            item
            xs={6}
            sx={{
                mt: 5,
                bgcolor: grey[300],
            }}
        >
            <Box component="form" autoComplete="off" noValidate>
                <TextField
                    label="Nombre"
                    variant={"outlined"}
                    sx={{ m: 2 }}
                    size="small"
                    autoComplete="off"
                />
                <TextField
                    label="Apellido"
                    variant={"outlined"}
                    sx={{ m: 2 }}
                    size="small"
                    autoComplete="off"
                />
                <TextField
                    label="Correo"
                    variant={"outlined"}
                    sx={{ m: 2 }}
                    size="small"
                    autoComplete="off"
                />
                <TextField
                    label="Contraseña"
                    variant={"outlined"}
                    sx={{ m: 2 }}
                    size="small"
                    autoComplete="off"
                />
            </Box>
        </Grid>
    );
};
