import { Route, Routes } from "react-router-dom"
import { AdminHomePage, AdminResourcesPage, AdminThemesPage, AdminUsersPage } from "../pages"

export const AdminRoutes = () => {
    return (
        <Routes>
            <Route path="/home" element={<AdminHomePage />} />
            <Route path="/usuarios" element={<AdminUsersPage />} />
            <Route path="/temas" element={<AdminThemesPage />} />
            <Route path="/recursos" element={<AdminResourcesPage />} />
        </Routes>
    )
}
