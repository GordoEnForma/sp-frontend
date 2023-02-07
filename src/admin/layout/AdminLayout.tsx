import { FC } from "react";
import { Box } from "@mui/material";
import { grey } from "@mui/material/colors";
import { AdminSideBar } from "../components";

type LayoutProps = {
    children: JSX.Element | JSX.Element[];
};

export const AdminLayout: FC<LayoutProps> = ({ children }) => {
    return (
        <Box sx={{ display: "flex" }}>
            <AdminSideBar />

            <Box
                component={"main"}
                sx={{
                    backgroundColor: grey[200],
                    flexGrow: 1,
                    // mt: 5,
                    // mr: 5,
                }}
            >
                {children}
            </Box>
        </Box>
    );
};
