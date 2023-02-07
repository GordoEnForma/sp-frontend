import { Button, Grid } from "@mui/material";
import { ProductList } from "../components/ProductList";

export const ListProductView = () => {
    return (
        <Grid item xs={12}>
            <Button
                variant="contained"
                size="large"
                sx={{
                    fontWeight: "799",
                    mb: 3,
                }}
            >
                Agregar un producto
            </Button>
            <Grid container id="products-container" spacing={3}>
                <>
                    <ProductList />
                </>
            </Grid>
        </Grid>
    );
};
