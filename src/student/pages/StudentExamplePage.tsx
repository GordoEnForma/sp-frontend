import { Typography } from "@mui/material"
import { useParams } from "react-router-dom"

export const StudentExamplePage = () => {
    const params = useParams();
    console.log(params.id)
    return (
        <Typography>{params.id}</Typography>
    )
}
