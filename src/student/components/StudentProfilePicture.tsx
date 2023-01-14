import { Avatar, Box } from "@mui/material"

type Prop = {
    name: string;
}

export const StudentProfilePicture = ({ name = 'Usuario Simulador' }: Prop) => {

    return (
        <Box justifyContent={"center"} display={"flex"}  p="2rem" >
            <Avatar sx={{ width: 64, height: 64 }}>
                {name}
            </Avatar>
        </Box>
    )
}
