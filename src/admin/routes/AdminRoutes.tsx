import { Navigate, Route, Routes } from "react-router-dom";
import {
    AdminHomePage,
    AdminProductsPage,
    AdminResourcesPage,
    AdminThemesPage,
    AdminUsersPage,
} from "../pages";
import {
    CreateProductView,
    EditProductView,
    ListProductView,
    UserView,
} from "../views";

export const AdminRoutes = () => {
    return (
        <Routes>
            <Route path="/home" element={<AdminHomePage />} />
            <Route path="/usuarios" element={<AdminUsersPage />}>
                <Route path="" element={<UserView />} />
            </Route>
            <Route path="/temas" element={<AdminThemesPage />} />
            <Route path="/productos" element={<AdminProductsPage />}>
                <Route path="" element={<ListProductView />} />
                <Route path="crear" element={<CreateProductView />} />
                <Route path=":productId" element={<EditProductView />} />
            </Route>
            <Route path="/recursos" element={<AdminResourcesPage />} />
            <Route path="/*" element={<Navigate to="/admin/home" />} />
        </Routes>
    );
};
