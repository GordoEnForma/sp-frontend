import { Outlet } from "react-router-dom";
import { Grid, Typography } from "@mui/material";

import { StudentLayout } from "../layout/StudentLayout";

export const StudentExamPage = () => {
    return (
        <StudentLayout>
            {/* PageTitle */}
            <Grid
                item
                xs={12}
                sx={{
                    // bgcolor: 'secondary.main',
                    my: 2.5,
                    // pl: 3
                }}
            >
                <Typography fontSize={28}>Examen</Typography>
            </Grid>

            {/* TextContainerWithButton */}
            <Outlet />
        </StudentLayout>
    );
};
