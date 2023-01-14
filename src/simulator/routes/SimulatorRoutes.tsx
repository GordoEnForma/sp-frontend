import { Route, Routes } from "react-router-dom";
import { ExamPage, ReviewPage } from "../pages";


export const SimulatorRoutes = () => {
    return (
        <Routes>

            
            <Route path="/review" element={<ReviewPage />} />
            <Route path="/exam" element={<ExamPage />} />

        </Routes>
    )
}