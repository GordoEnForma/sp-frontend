import { Button, Grid, Typography } from "@mui/material";
import { ResourcesList } from "../components";
import { useProducts } from "../hooks";

export const ListProductView = () => {
    const { productsQuery } = useProducts();

    return (
        <Grid item xs={12}>
            {productsQuery.isLoading ? (
                <Grid item key={"product-loading-"} xs={12}>
                    <Typography fontSize={30}>
                        Cargando Productos...
                    </Typography>
                </Grid>
            ) : (
                <>
                    <Button
                        variant="contained"
                        size="large"
                        sx={{
                            fontWeight: "799",
                            mb: 3,
                        }}
                    >
                        Agregar un Producto
                    </Button>
                    <Grid container id="products-container" spacing={3}>
                        <>
                            <ResourcesList items={productsQuery.data!.data} />
                        </>
                    </Grid>
                </>
            )}
        </Grid>
    );
};
