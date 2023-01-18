import { Button, Grid, Paper, Typography } from "@mui/material"
import { Box } from "@mui/system"
import CustomPaginationActionsTable from "../components/TableComponent"
import { StudentLayout } from "../layout/StudentLayout"

export const StudentExamPage = () => {
    return (
        <StudentLayout>
            <Grid container
                sx={{
                    px: 5
                }}>

                <Grid item xs={12} sx={{
                    // bgcolor: 'secondary.main',
                    my: 2.5,
                    // pl: 3
                }}>
                    <Typography fontSize={28}>
                        Examen
                    </Typography>

                </Grid>

                {/* TextContainerWithButton */}
                <Grid item xs={8}>
                    <Grid
                        container
                        component={Paper}
                        elevation={3}
                        bgcolor={'#FFFFFF'}
                        borderRadius={3}
                        sx={{
                            py: 2,
                            px: 3,
                        }}
                    >

                        <Typography
                            fontSize={20}
                            fontWeight={'bold'}
                            textAlign='justify'
                        >
                            Simulacro
                        </Typography>
                        <Typography
                            // fontSize={24}
                            sx={{
                                sm: {
                                    fontSize: '30px'
                                }

                            }}
                            textAlign='justify'
                        >
                            Cupcake ipsum dolor sit amet muffin
                            gummi bears I love jujubes.
                            I love cotton candy donut chocolate bar jujubes bonbon croissant marzipan sweet.
                            Jelly beans marzipan gingerbread sugar plum halvah candy I love marshmallow marzipan.
                        </Typography>

                        <Grid item
                            display={'flex'}
                            xs={12}
                            sx={{
                                justifyContent: 'flex-end',
                                mt: 3,
                            }}
                        >
                            <Button
                                sx={{
                                    backgroundColor: 'primary.main',
                                    color: 'white',
                                }}
                            >
                                <Typography textTransform={'capitalize'}>
                                    Iniciar Examen
                                </Typography>
                            </Button>
                        </Grid>
                    </Grid>

                </Grid>

                {/* TableWithExams */}
                <Grid item xs={12} sx={{
                    mb: 5
                }} >
                    <Typography sx={{
                        color:'primary.main',
                        fontSize: 20,
                        my:2
                    }}>Historial de Examenes</Typography>
                    <CustomPaginationActionsTable />

                </Grid>
            </Grid>
        </StudentLayout>
    )
}
