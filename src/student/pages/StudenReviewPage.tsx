import { Button, ButtonGroup, Grid, List, Paper, Typography, useMediaQuery } from "@mui/material"
import { Box } from "@mui/system"
import { useState } from "react"
import { ButtonWithActive } from "../components/ButtonWithActive"
import { StudentLayout } from "../layout/StudentLayout"

export const StudentReviewPage = () => {

    const [selectedButton, setSelectedButton] = useState<number>(0)
    const matches = useMediaQuery('(min-width:600px)');
    console.log(matches)
    const spThemes = [
        { title: 'o.DS 009-2018-JUS Protocolo de actuación para la aplicación del proceso inmediato reformado y el DS 10-2018-JUS Protocolo de actuación para la aplicación del código Procesal Penal 2022' },
        { title: 'o.DS 009-2018-JUS Protocolo de actuación para la aplicación del proceso inmediato reformado y el DS 10-2018-JUS Protocolo de actuación para la aplicación del código Procesal Penal 2022' },
        { title: 'o.DS 009-2018-JUS Protocolo de actuación para la aplicación del proceso inmediato reformado y el DS 10-2018-JUS Protocolo de actuación para la aplicación del código Procesal Penal 2022' },
        { title: 'o.DS 009-2018-JUS Protocolo de actuación para la aplicación del proceso inmediato reformado y el DS 10-2018-JUS Protocolo de actuación para la aplicación del código Procesal Penal 2022' },
        { title: 'o.DS 009-2018-JUS Protocolo de actuación para la aplicación del proceso inmediato reformado y el DS 10-2018-JUS Protocolo de actuación para la aplicación del código Procesal Penal 2022' },
        { title: 'o.DS 009-2018-JUS Protocolo de actuación para la aplicación del proceso inmediato reformado y el DS 10-2018-JUS Protocolo de actuación para la aplicación del código Procesal Penal 2022' },
        { title: 'o.DS 009-2018-JUS Protocolo de actuación para la aplicación del proceso inmediato reformado y el DS 10-2018-JUS Protocolo de actuación para la aplicación del código Procesal Penal 2022' },
        { title: 'o.DS 009-2018-JUS Protocolo de actuación para la aplicación del proceso inmediato reformado y el DS 10-2018-JUS Protocolo de actuación para la aplicación del código Procesal Penal 2022' },
        { title: 'o.DS 009-2018-JUS Protocolo de actuación para la aplicación del proceso inmediato reformado y el DS 10-2018-JUS Protocolo de actuación para la aplicación del código Procesal Penal 2022' },
        { title: 'o.DS 009-2018-JUS Protocolo de actuación para la aplicación del proceso inmediato reformado y el DS 10-2018-JUS Protocolo de actuación para la aplicación del código Procesal Penal 2022' },
        { title: 'o.DS 009-2018-JUS Protocolo de actuación para la aplicación del proceso inmediato reformado y el DS 10-2018-JUS Protocolo de actuación para la aplicación del código Procesal Penal 2022' },

    ]

    return (
        <StudentLayout>
            <Grid container
                sx={{
                    px: 5
                }}>

                {/* PageTitle */}
                <Grid item xs={12} sx={{
                    // bgcolor: 'secondary.main',
                    mt: 2.5,
                    // pl: 3
                }}>
                    <Typography fontSize={28}>
                        Repaso
                    </Typography>

                </Grid>
                {/* Tipos de Repaso */}
                <Grid item xs={12} sx={{
                    mb: 2
                }} >
                    <Typography sx={{
                        color: 'primary.main',
                        fontSize: 20,
                        my: 1
                    }}>Seleccione el tipo de repaso
                    </Typography>
                    <ButtonGroup size='small' variant="contained" aria-label="outlined primary button group">

                        {['Ordenado', 'Aleatorio', 'Preguntas incorrectas'].map((opcion, index) =>
                        (

                            <ButtonWithActive

                                active={selectedButton === index ? true : false}
                                key={index}
                                index={index}
                                title={opcion}
                                setSelectedButton={setSelectedButton}
                            />
                        ))}

                    </ButtonGroup>
                </Grid>
                {

                }


                {/* CardsWithThemes */}
                <Grid item xs={12} mt={3} >
                    <Grid
                        container
                        // xs={12}
                        // spacing={1}

                        component={List}

                        maxHeight='70vh'
                        overflow='auto'
                    // flexDirection={'column'}
                    >
                        {
                            spThemes.map(({ title }, index) => (
                                <Grid
                                    item
                                    xs={4}
                                    key={index}
                                    marginBottom={3}
                                >
                                    <Box
                                        component={Paper}
                                        minWidth='100px'
                                        minHeight='200px'
                                        maxWidth='85%'
                                        textAlign='center'

                                        sx={{
                                            borderRadius: 2,

                                            // borderColor:
                                        }}
                                    >
                                        <Button variant="outlined" sx={{
                                            borderColor: 'pink',
                                            minHeight: '200px'


                                        }}>
                                            <Typography sx={{
                                                color: 'black',
                                                fontSize: matches ? 16 : 12
                                                // fontSize: 10
                                            }}>
                                                {title}
                                            </Typography>

                                        </Button>
                                    </Box>
                                </Grid>
                            ))
                        }


                    </Grid>

                </Grid>
            </Grid>
        </StudentLayout >
    )
}
