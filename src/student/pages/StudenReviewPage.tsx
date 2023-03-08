import { Outlet, useParams } from "react-router-dom";
import { Grid } from "@mui/material";
import { StudentLayout } from "../layout/StudentLayout";

export const StudentReviewPage = () => {
    const params = useParams();
    return (
        <>
            {params.temaId ? (
                <Outlet />
            ) : (
                <StudentLayout>
                    <Outlet />
                </StudentLayout>
            )}
        </>
    );
};
