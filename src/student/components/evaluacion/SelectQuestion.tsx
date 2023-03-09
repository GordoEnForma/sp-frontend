import {
    Box,
    Grid,
    MenuItem,
    Select,
    SelectChangeEvent,
    Typography,
} from "@mui/material";
import { useState } from "react";

const questions = Array.from({ length: 400 }, (_, index) => index + 1);

console.log(questions);
export const SelectQuestion = () => {
    const [selectedQuestion, setSelectedQuestion] = useState<string>("1");

    const handleChange = (e: SelectChangeEvent) => {
        setSelectedQuestion(e.target.value);
    };
    return (
        <Grid
            item
            xs={2}
            minHeight={70}
            sx={
                {
                    // background: "snow",
                }
            }
        >
            <Box
                component={"form"}
                sx={{
                    alignItems: "center",
                    display: "flex",
                    justifyContent: "space-around",
                    height: "100%",
                    width: "90%",
                    div: {
                        width: 75,
                        height: 30,
                        textAlign: "center",
                        fontWeight: "bold",
                    },
                }}
            >
                <Typography fontSize={18} fontWeight="bold">
                    Navegar:{" "}
                </Typography>
                <Select
                    id="id-select-question"
                    value={selectedQuestion}
                    onChange={handleChange}
                >
                    {questions.map((value, index) => (
                        <MenuItem key={index} value={value}>
                            {value}
                        </MenuItem>
                    ))}
                    {/* SelectQuestion */}
                </Select>
            </Box>
        </Grid>
    );
};
