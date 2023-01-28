import { Navigate, Route, Routes } from "react-router-dom"
import { AdminHomePage, AdminResourcesPage, AdminThemesPage, AdminUsersPage } from "../pages"
import { UserView } from "../views"

export const AdminRoutes = () => {
    return (
        <Routes>
            <Route path="/home" element={<AdminHomePage />} />
            <Route path="/usuarios" element={<AdminUsersPage />} >
                <Route path="" element={<UserView />} />
            </Route>
            <Route path="/temas" element={<AdminThemesPage />} />
            <Route path="/recursos" element={<AdminResourcesPage />} />
            <Route path="/*" element={<Navigate to="/admin/home" />} />
        </Routes>
    )
}
