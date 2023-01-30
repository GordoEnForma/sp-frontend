import { Grid, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";
import { AdminLayout } from "../layout/AdminLayout";

export const AdminUsersPage = () => {
  return (
    <>
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
            <Typography fontSize={28}>Usuarios</Typography>
          </Grid>

          {/* TextContainerWithButton */}
          <Outlet />
        </Grid>
      </AdminLayout>
    </>
  );
};
