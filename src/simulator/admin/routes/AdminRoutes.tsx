import { Navigate, Route, Routes } from "react-router-dom";
import { AdminHomePage } from "../pages/AdminHomePage";


export const AdminRoutes = () => {
    console.log("Estoy en admin Routes");
    
    return (
        <Routes>
            {/* Admin*/}
            <Route path="/home" element={<AdminHomePage />} />
            {/* Estudiante */}
            <Route path="/*" element={<Navigate to="/admin/home" />} />
        </Routes>
    )
}