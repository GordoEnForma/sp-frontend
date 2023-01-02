import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage, RegisterPage } from "../pages";


export const AuthRoutes = () => {
    return (
        <Routes>
            {/* Login */}
            <Route path="login" element={<LoginPage />} />
            {/* Registro*/}
            <Route path="register" element={<RegisterPage />} />
            {/* Estudiante */}
            <Route path="/*" element={<Navigate to="/auth/login" />} />
        </Routes>
    )
}