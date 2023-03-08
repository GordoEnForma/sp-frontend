import { Box } from "@mui/material";
import { useParams } from "react-router-dom";

export const RepasoPage = () => {
    const params = useParams();
    return (
        <Box>
            {/* Titulo de la evaluacion */}
            {params.temaId}
        </Box>
    );
};
