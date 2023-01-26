import { Navigate, Route, Routes } from "react-router-dom";
import {
    StudentExamPage, StudentHomePage, StudentReviewPage,
    StudentResourcesPage,
    // StudentExamplePage
} from "../pages";

import { StudentExamDetailsView, StudentExamMainView } from "../views";

export const StudentRoutes = () => {
    return (
        <Routes>
            {/* Admin*/}
            <Route path="/home" element={<StudentHomePage />} />
            <Route path="/examen" element={<StudentExamPage />} >
                <Route path="" element={<StudentExamMainView />} />
                <Route path=":id" element={<StudentExamDetailsView />} />

            </Route >

            <Route
                path="/repaso"
                element={<StudentReviewPage />}
            />






            <Route path="/recursos" element={<StudentResourcesPage />} />
            {/* Estudiante */}
            <Route path="/*" element={<Navigate to="/student/home" />} />
        </Routes>
    )
}