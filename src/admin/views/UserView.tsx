import { UserForm, UserTable } from "../components";
import { useProducts, useUsers } from "../hooks";

export const UserView = () => {
    const { usersQuery } = useUsers();
    const { productsQuery } = useProducts();
    if (usersQuery.isLoading) {
        return <h1>Cargando</h1>;
    }
    if (productsQuery.isLoading) {
        return <h1>Cargando</h1>;
    }

    return (
        <>
            {/*  UserForm -> Add Users */}
            <UserForm />

            {/* UserTable -> Check users and open UserDetailsModal */}
            <UserTable users={usersQuery.data} products={productsQuery.data} />

            {/* <UserFormModal  /> */}
        </>
    );
};
