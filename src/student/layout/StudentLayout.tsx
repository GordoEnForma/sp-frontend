import { Box, Grid } from "@mui/material";
import { grey } from "@mui/material/colors";
import { StudentSideBar } from "../components/StudentSideBar";

type Props = {
    children: JSX.Element | JSX.Element[];
};

export const StudentLayout = ({ children }: Props) => {
    return (
        <Box sx={{ display: "flex" }}>
            <StudentSideBar />

            <Box
                component={"main"}
                sx={{
                    backgroundColor: grey[200],
                    flexGrow: 1,
                    // mt: 5,
                    // mr: 5,
                }}
            >
                <Grid
                    container
                    sx={{
                        px: 5,
                    }}
                >
                    {children}
                </Grid>
            </Box>
        </Box>
    );
};
