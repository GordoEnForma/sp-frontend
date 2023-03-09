import { FC } from "react";
import { Box, Grid, IconButton } from "@mui/material";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

type Props = {
    totalQuestions: number;
    currentQuestion: number;
};

export const NavQuestions: FC<Props> = ({
    totalQuestions,
    currentQuestion,
}) => {
    return (
        <Grid
            display="flex"
            item
            justifyContent="space-around"
            alignItems="center"
            xs={2}
            height={70}
            sx={
                {
                    // background: "grey",
                }
            }
        >
            <IconButton size="small">
                <ArrowLeftIcon fontSize="large" />
            </IconButton>
            <Box
                sx={{
                    background: "grey",
                    border: "0.1rem solid black",
                    borderRadius: "1rem",
                    px: 3,
                    py: 1,
                }}
            >
                {currentQuestion} / {totalQuestions}
            </Box>
            <IconButton>
                <ArrowRightIcon fontSize="large" />
            </IconButton>
        </Grid>
    );
};
