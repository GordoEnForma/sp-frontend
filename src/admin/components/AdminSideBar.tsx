import { Link as RouterLink, useLocation } from "react-router-dom"
import { Box, List, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material"
import { grey } from "@mui/material/colors"
import { ProfilePicture } from "./ProfilePicture"
import { rutas } from "../routes/navRoutes"

export const AdminSideBar = () => {

    const { pathname } = useLocation();
    return (
        <Box
            sx={{
                // height: '90vh',
                // ml: '2rem',
                // mt: '2.5rem',
                backgroundColor: grey[300],
                minWidth: '13rem',
                minHeight: '100vh',
            }}
        >
            {/* ProfilePicture */}
            <ProfilePicture />

            {/* Lista de Rutas */}
            <List component={'nav'} sx={{
                px: '0.8rem',
                pb: '11rem',
            }}>
                {
                    rutas.map(({ icon, title, name, ruta }) => (
                        <ListItemButton
                            component={RouterLink}
                            key={name}
                            selected={pathname.includes(ruta)}
                            sx={{
                                mb: 3.5,
                                borderRadius: 3
                            }}
                            to={`${ruta}`}

                        >
                            <ListItemIcon >
                                <Box sx={{ color: pathname.includes(ruta) ? '#1EAD5C' : 'black' }} component={icon} />
                            </ListItemIcon>
                            <ListItemText
                            >
                                <Typography
                                    sx={
                                        {
                                            fontSize: '1rem',
                                            fontWeight: pathname.includes(ruta) ? 'bold' : '400',
                                            color: pathname.includes(ruta) ? 'primary.main' : 'black'
                                        }
                                    }
                                >
                                    {title}
                                </Typography>
                            </ListItemText>

                        </ListItemButton>

                    ))
                }
            </List>

        </Box>
    )
}
