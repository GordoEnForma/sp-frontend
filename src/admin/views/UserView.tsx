import { UserViewProvider } from "../context/UserProvider";
import { UserForm, UserTable } from "../components";
import { useProducts, useUsers } from "../hooks";

export const UserView = () => {
    const { usersQuery } = useUsers();
    const { productsQuery } = useProducts();

    return (
        <UserViewProvider>
            {usersQuery.isLoading || productsQuery.isLoading ? (
                <h1>Cargando información...</h1>
            ) : (
                <>
                    <UserForm />
                    {/* UserTable -> Check users and open UserDetailsModal */}
                    <UserTable
                        users={usersQuery.data}
                        products={productsQuery.data || { data: [] }}
                    />
                </>
            )}
        </UserViewProvider>
    );
};
