import { Link as RouterLink, useLocation } from "react-router-dom"
import { Box, List, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material"
import { grey } from "@mui/material/colors"
import { StudentProfilePicture } from "./StudentProfilePicture"
import { rutas } from "../routes/navRoutes"

export const StudentSideBar = () => {

    const { pathname } = useLocation();
    return (
        <Box
            sx={{
                // height: '90vh',
                ml: '2rem',
                mt: '4rem',
                backgroundColor: grey[300],
                width: '12rem',
            }}
        >
            {/* ProfilePicture */}
            <StudentProfilePicture name={'Gordazo'} />

            {/* Lista de Rutas */}
            <List component={'nav'} sx={{
                px: '0.5rem',
                pb: '10rem',
            }}>
                {
                    rutas.map(({ icon, name, ruta }) => (
                        <ListItemButton
                            component={RouterLink}
                            key={name}
                            selected={pathname === ruta}
                            sx={{
                                mb: 3.5,
                                borderRadius: 3
                            }}
                            to={`${ruta}`}

                        >
                            <ListItemIcon >
                                <Box sx={{ color: pathname === ruta ? '#1EAD5C' : 'black' }} component={icon} />
                            </ListItemIcon>
                            <ListItemText
                            >
                                <Typography
                                    sx={
                                        {
                                            fontSize: '1rem',
                                            fontWeight: pathname === ruta ? 'bold' : 'normal',
                                            color: pathname === ruta ? 'primary.main' : 'black'
                                        }
                                    }
                                >
                                    {name}
                                </Typography>
                            </ListItemText>

                        </ListItemButton>

                    ))
                }
            </List>

        </Box>
    )
}
