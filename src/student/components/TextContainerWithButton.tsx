import { Button, Grid, Paper, Typography } from "@mui/material"
import { FC } from "react";

type Props = {
    title: string;
    description: string;
    butonText: string;
}

export const TextContainerWithButton: FC<Props> = ({ title, description, butonText }) => {
    return (
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
                    {title}
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
                    {description}
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
                            {butonText}
                        </Typography>
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    )
}