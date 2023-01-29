import {
    Box,
    Button,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    TextField,
} from "@mui/material";
import { grey } from "@mui/material/colors";

export const UserForm = () => {
    return (
        <Grid
            item
            xs={12}
            md={7}
            sx={{
                mt: 5,
                bgcolor: grey[300],
            }}
        >
            <Box component="form" autoComplete="off" noValidate>
                <Grid container direction={"row"}>
                    <Grid
                        item
                        xs={12}
                        lg={5.5}
                        sx={{
                            ml: 2,
                            mt: 2,
                        }}
                    >
                        <TextField
                            fullWidth
                            label="Nombres "
                            variant={"outlined"}
                            size="medium"
                            autoComplete="off"
                        />
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        lg={5.5}
                        sx={{
                            ml: 2,
                            mt: 2,
                        }}
                    >
                        <TextField
                            fullWidth
                            label="Apellidos"
                            variant={"outlined"}
                            size="medium"
                            autoComplete="off"
                        />
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        lg={5.5}
                        sx={{
                            ml: 2,
                            mt: 2,
                        }}
                    >
                        <TextField
                            sx={{}}
                            type={"email"}
                            fullWidth
                            label="Correo"
                            variant={"outlined"}
                            size="medium"
                            autoComplete="off"
                        />
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        lg={5.5}
                        sx={{
                            ml: 2,
                            mt: 2,
                        }}
                    >
                        <TextField
                            fullWidth
                            label="Contraseña"
                            variant={"outlined"}
                            size="medium"
                            autoComplete="off"
                        />
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        lg={5.5}
                        sx={{
                            ml: 2,
                            my: 2,
                        }}
                    >
                        <FormControl
                            sx={{
                                width: "100%",
                            }}
                        >
                            <InputLabel id="products">Producto</InputLabel>
                            <Select
                                labelId="products"
                                id="demo-simple-select"
                                // value={age}
                                label="products"
                                // onChange={handleChange}
                            >
                                <MenuItem value={"suboficial"}>
                                    SubOficial
                                </MenuItem>
                                <MenuItem value={"oficial"}>Oficial</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        lg={5.5}
                        sx={{
                            ml: 2,
                            my: 2,
                        }}
                    >
                        <FormControl
                            sx={{
                                width: "100%",
                            }}
                        >
                            <InputLabel id="user-state">Estado</InputLabel>
                            <Select
                                labelId="user-state"
                                id="demo-simple-select"
                                // value={age}
                                label="user-state"
                                // onChange={handleChange}
                            >
                                <MenuItem value={"suboficial"}>
                                    Inactivo
                                </MenuItem>
                                <MenuItem value={"pendiente"}>
                                    Pendiente
                                </MenuItem>
                                <MenuItem value={"pendiente"}>Activo</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        justifyContent="center"
                        display={"flex"}
                        sx={{ m: 2 }}
                    >
                        <Button
                            type="submit"
                            sx={{ width: "30%" }}
                            variant="contained"
                        >
                            Crear Usuario
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </Grid>
    );
};
