import { FC } from "react";
import { redirect, useNavigate } from "react-router-dom";
import {
    Card,
    CardActionArea,
    CardContent,
    Grid,
    Typography,
} from "@mui/material";

type Props = {
    title: string;
    id: string;
};
export const ProductCard: FC<Props> = ({ title, id }) => {
    const navigate = useNavigate();
    const handleRedirection = (productId: string) => {
        // console.log(productId);
        navigate(`${productId}`);
    };

    return (
        <Grid item xs={12} sm={4} md={4} lg={3} textAlign="center">
            <Card
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
            </Card>
        </Grid>
    );
};
