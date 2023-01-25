import { Typography } from "@mui/material"
import { useParams } from "react-router-dom"

export const StudentExamDetailsView = () => {
    const params = useParams();
    console.log(params);
    return (
        <Typography>{params.id}</Typography>
    )
}
