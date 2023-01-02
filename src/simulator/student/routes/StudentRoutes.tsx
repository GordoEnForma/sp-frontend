import { Navigate, Route, Routes } from "react-router-dom";
import { StudentHomePage } from "../pages/StudentHomePage";


export const StudentRoutes = () => {
    return (
        <Routes>
            {/* Admin*/}
            <Route path="/home" element={<StudentHomePage />} />
            {/* Estudiante */}
            <Route path="/*" element={<Navigate to="/student/home" />} />
        </Routes>
    )
}