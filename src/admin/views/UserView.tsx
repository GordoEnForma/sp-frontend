import { useState } from "react";
import { UserForm, UserTable } from "../components";
import { UserViewProvider } from "../context/UserProvider";
import { useProducts, useUsers } from "../hooks";

export const UserView = () => {

    const { usersQuery } = useUsers();
    const { productsQuery } = useProducts();
    if (usersQuery.isLoading) {
        return <h1>Cargando usuarios...</h1>;
    }
    if (productsQuery.isLoading) {
        return <h1>Cargando productos... </h1>;
    }

    return (
        <UserViewProvider>
            {/*  UserForm -> Add Users */}
            <UserForm />

            {/* UserTable -> Check users and open UserDetailsModal */}
            <UserTable
                users={usersQuery.data}
                products={productsQuery.data}
                // setInitialValues={setInitialValues}
                // isUpdating={isUpdating}
            />

            {/* <UserFormModal  /> */}
        </UserViewProvider>
    );
};
