import { Button, Grid, Typography } from "@mui/material";
import { ResourcesList } from "../components";
import { useCategories } from "../hooks";

export const ListCategoryView = () => {
    const { categoriesQuery } = useCategories();

    return (
        <Grid item xs={12}>
            {categoriesQuery.isLoading ? (
                <Grid item key={"product-loading-"} xs={12}>
                    <Typography fontSize={30}>
                        Cargando categorias...
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
                        Agregar una Categoria
                    </Button>
                    <Grid container id="products-container" spacing={3}>
                        <ResourcesList items={categoriesQuery.data!.data} />
                    </Grid>
                </>
            )}
        </Grid>
    );
};
