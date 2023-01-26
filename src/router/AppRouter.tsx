import { Route, Routes } from "react-router-dom";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { AdminRoutes } from "../admin/routes/AdminRoutes";
import { StudentRoutes } from "../student/routes/StudentRoutes";


export const AppRouter = () => {
    return (
        <Routes>
            {/* Login y Registro */}
            <Route path="/auth/*" element={<AuthRoutes />} />

            {/* Admin */}
            <Route path="/admin/*" element={<AdminRoutes />} />


            {/* Estudiante */}
            <Route path="/student/*" element={<StudentRoutes />} />


        </Routes>
    )
}