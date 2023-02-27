import { Navigate, Route, Routes } from "react-router-dom";
import { userStore } from "../../store/userStore";
import {
    AdminHomePage,
    AdminProductsPage,
    AdminResourcesPage,
    AdminThemesPage,
    AdminUsersPage,
} from "../pages";
import {
    CreateProductView,
    EditCategoryView,
    EditProductView,
    ListCategoryView,
    ListProductView,
    UserView,
} from "../views";

export const AdminRoutes = () => {
    // const user = userStore((state) => state.user);
    // if (!user) {
    //     return <Navigate to={"/auth/login"} />;
    // }
    // if (user.data.role !== "admin") {
    //     return <Navigate to={"/auth/login"} />;
    // }
    return (
        <Routes>
            <Route path="/home" element={<AdminHomePage />} />
            <Route path="/usuarios" element={<AdminUsersPage />}>
                <Route path="" element={<UserView />} />
            </Route>
            <Route path="/temas" element={<AdminThemesPage />}>
                <Route path="" element={<ListCategoryView />} />
                <Route path="crear" element={<CreateProductView />} />
                <Route path=":temaId" element={<EditCategoryView />} />
            </Route>

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
