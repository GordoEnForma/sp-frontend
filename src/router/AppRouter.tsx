import { Route, Routes } from "react-router-dom";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { SimulatorRoutes } from "../simulator/routes/SimulatorRoutes";
import { StudentRoutes } from "../student/routes/StudentRoutes";


export const AppRouter = () => {
    return (
        <Routes>
            {/* Login y Registro */}
            <Route path="/auth/*" element={<AuthRoutes />} />

            {/* Estudiante */}
            <Route path="/student/*" element={<StudentRoutes />} />
            
            {/* Simulador */}
            {/* <Route path="/*" element={<SimulatorRoutes />} /> */}

        </Routes>
    )
}