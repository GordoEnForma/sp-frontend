import { Navigate, Route, Routes } from "react-router-dom";
import {
    StudentExamPage, StudentHomePage, StudentReviewPage,
    StudentResourcesPage
} from "../pages";


export const StudentRoutes = () => {
    return (
        <Routes>
            {/* Admin*/}
            <Route path="/home" element={<StudentHomePage />} />
            <Route path="/examen" element={<StudentExamPage />} />
            <Route path="/repaso" element={<StudentReviewPage />} />
            <Route path="/recursos" element={<StudentResourcesPage />} />
            {/* Estudiante */}
            <Route path="/*" element={<Navigate to="/student/home" />} />
        </Routes>
    )
}