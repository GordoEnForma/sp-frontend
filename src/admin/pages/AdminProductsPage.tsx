import { FC } from "react";
import { Outlet } from "react-router-dom";
import { Grid, Typography } from "@mui/material";
import { AdminLayout } from "../layout/AdminLayout";

export const AdminProductsPage: FC = () => {
    return (
        <AdminLayout>
            <Grid
                container
                sx={{
                    px: 5,
                }}
                gap={2}
            >
                {/* PageTitle */}
                <Grid
                    item
                    xs={12}
                    sx={{
                        // bgcolor: 'secondary.main',
                        my: 2,
                        // pl: 3
                    }}
                >
                    <Typography fontSize={28}>Productos</Typography>
                </Grid>

                {/* TextContainerWithButton */}
                <Outlet />
            </Grid>
        </AdminLayout>
    );
};
