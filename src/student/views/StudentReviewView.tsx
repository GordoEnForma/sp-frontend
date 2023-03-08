import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    Box,
    Button,
    ButtonGroup,
    Grid,
    List,
    Paper,
    Typography,
    useMediaQuery,
} from "@mui/material";
import { ButtonWithActive } from "../components";

export const StudentReviewView = () => {
    const [selectedButton, setSelectedButton] = useState<number>(0);
    const navigate = useNavigate();
    const matches = useMediaQuery("(min-width:600px)");
    console.log(matches);
    const spThemes = [
        {
            _id: "1",
            title: "o.DS 009-2018-JUS Protocolo de actuación para la aplicación del proceso inmediato reformado y el DS 10-2018-JUS Protocolo de actuación para la aplicación del código Procesal Penal 2022",
        },
        {
            _id: "2",
            title: "o.DS 009-2018-JUS Protocolo de actuación para la aplicación del proceso inmediato reformado y el DS 10-2018-JUS Protocolo de actuación para la aplicación del código Procesal Penal 2022",
        },
        {
            _id: "3",
            title: "o.DS 009-2018-JUS Protocolo de actuación para la aplicación del proceso inmediato reformado y el DS 10-2018-JUS Protocolo de actuación para la aplicación del código Procesal Penal 2022",
        },
        {
            _id: "4",
            title: "o.DS 009-2018-JUS Protocolo de actuación para la aplicación del proceso inmediato reformado y el DS 10-2018-JUS Protocolo de actuación para la aplicación del código Procesal Penal 2022",
        },
        {
            _id: "5",
            title: "o.DS 009-2018-JUS Protocolo de actuación para la aplicación del proceso inmediato reformado y el DS 10-2018-JUS Protocolo de actuación para la aplicación del código Procesal Penal 2022",
        },
        {
            _id: "6",
            title: "o.DS 009-2018-JUS Protocolo de actuación para la aplicación del proceso inmediato reformado y el DS 10-2018-JUS Protocolo de actuación para la aplicación del código Procesal Penal 2022",
        },
        {
            _id: "7",
            title: "o.DS 009-2018-JUS Protocolo de actuación para la aplicación del proceso inmediato reformado y el DS 10-2018-JUS Protocolo de actuación para la aplicación del código Procesal Penal 2022",
        },
        {
            _id: "8",
            title: "o.DS 009-2018-JUS Protocolo de actuación para la aplicación del proceso inmediato reformado y el DS 10-2018-JUS Protocolo de actuación para la aplicación del código Procesal Penal 2022",
        },
        {
            _id: "9",
            title: "o.DS 009-2018-JUS Protocolo de actuación para la aplicación del proceso inmediato reformado y el DS 10-2018-JUS Protocolo de actuación para la aplicación del código Procesal Penal 2022",
        },
        {
            _id: "10",
            title: "o.DS 009-2018-JUS Protocolo de actuación para la aplicación del proceso inmediato reformado y el DS 10-2018-JUS Protocolo de actuación para la aplicación del código Procesal Penal 2022",
        },
        {
            _id: "11",
            title: "o.DS 009-2018-JUS Protocolo de actuación para la aplicación del proceso inmediato reformado y el DS 10-2018-JUS Protocolo de actuación para la aplicación del código Procesal Penal 2022",
        },
    ];
    return (
        <>
            {/* PageTitle */}
            <Grid
                item
                xs={12}
                sx={{
                    // bgcolor: "secondary.main",
                    mt: 2.5,
                    // pl: 3
                }}
            >
                <Typography fontSize={28}>Repaso</Typography>
            </Grid>
            {/* Tipos de Repaso */}
            <Grid
                item
                xs={12}
                sx={{
                    mb: 2,
                    // background: "blue",
                }}
            >
                <Typography
                    sx={{
                        color: "primary.main",
                        fontSize: 20,
                        my: 1,
                    }}
                >
                    Seleccione el tipo de repaso
                </Typography>
                <ButtonGroup
                    size="small"
                    variant="contained"
                    aria-label="outlined primary button group"
                >
                    {["Ordenado", "Aleatorio", "Preguntas incorrectas"].map(
                        (opcion, index) => (
                            <ButtonWithActive
                                active={selectedButton === index ? true : false}
                                key={index}
                                index={index}
                                title={opcion}
                                setSelectedButton={setSelectedButton}
                            />
                        )
                    )}
                </ButtonGroup>
            </Grid>
            {}

            {/* CardsWithThemes */}
            <Grid item xs={12} mt={3}>
                <Grid
                    container
                    // xs={12}
                    // spacing={1}

                    component={List}
                    maxHeight="70vh"
                    overflow="auto"
                    // flexDirection={'column'}
                >
                    {spThemes.map(({ title, _id }, index) => (
                        <Grid item xs={12} lg={4} key={index} marginBottom={3}>
                            <Box
                                component={Paper}
                                minWidth="100px"
                                minHeight="200px"
                                maxWidth="85%"
                                textAlign="center"
                                sx={{
                                    borderRadius: 2,

                                    // borderColor:
                                }}
                            >
                                <Button
                                    variant="outlined"
                                    sx={{
                                        borderColor: "pink",
                                        minHeight: "200px",
                                    }}
                                    onClick={() => navigate(`${_id}`)}
                                >
                                    <Typography
                                        sx={{
                                            color: "black",
                                            fontSize: matches ? 16 : 12,
                                            // fontSize: 10
                                        }}
                                    >
                                        {title}
                                    </Typography>
                                </Button>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </>
    );
};
