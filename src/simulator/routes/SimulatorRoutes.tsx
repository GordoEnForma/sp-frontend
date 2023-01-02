import { Route, Routes } from "react-router-dom";
import { AdminRoutes } from "../admin/routes/AdminRoutes";
import { StudentRoutes } from "../student/routes/StudentRoutes";


export const SimulatorRoutes = () => {
    return (
        <Routes>
            {/* Admin*/}
            <Route path="/admin/*" element={<AdminRoutes />} />
            {/* Estudiante */}
            <Route path="/student/*" element={<StudentRoutes />} />

        </Routes>
    )
}