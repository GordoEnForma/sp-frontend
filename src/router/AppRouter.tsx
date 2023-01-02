import { Route, Routes } from "react-router-dom";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { SimulatorRoutes } from "../simulator/routes/SimulatorRoutes";


export const AppRouter = () => {
    return (
        <Routes>
            {/* Login y Registro */}
            <Route path="/auth/*" element={<AuthRoutes />} />

            {/* Admin */}
            <Route path="/*" element={<SimulatorRoutes />} />
        </Routes>
    )
}