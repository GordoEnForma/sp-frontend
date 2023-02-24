import { Typography } from "@mui/material";
import { userStore } from "../../store/userStore";
import { StudentLayout } from "../layout/StudentLayout";

export const StudentHomePage = () => {
    const student = userStore((state) => state.user);
    return (
        <StudentLayout>
            <Typography variant="h4">Hola {student?.data.nombre}</Typography>
        </StudentLayout>
    );
};
