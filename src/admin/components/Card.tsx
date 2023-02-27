import { FC } from "react";
import { useNavigate } from "react-router-dom";
import {
    Card as MuiCard,
    CardActionArea,
    CardContent,
    Grid,
    Typography,
} from "@mui/material";

type Props = {
    title: string;
    id: string;
};
export const Card: FC<Props> = ({ title, id }) => {
    const navigate = useNavigate();
    const handleRedirection = (cardId: string) => {
        navigate(`${cardId}`);
    };

    return (
        <Grid item xs={12} sm={4} md={4} lg={3} textAlign="center">
            <MuiCard
                id={`product-card-${id}`}
                onClick={() => handleRedirection(id)}
            >
                <CardActionArea>
                    <CardContent
                        sx={{
                            minHeight: 180,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Typography gutterBottom variant="h4" component="div">
                            {title}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </MuiCard>
        </Grid>
    );
};
