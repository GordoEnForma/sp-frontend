import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import {
    Box,
    Button,
    Card,
    Grid,
    IconButton,
    List,
    ListItem,
    ListItemText,
    Typography,
} from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import Add from "@mui/icons-material/Add";
import { Tema, SpecificProduct, Temas } from "../interfaces";
import { useProduct } from "../hooks";

const filterFast = (data: Tema[], temas: Tema[]): Tema[] => {
    const indexes = temas.map((object) => object._id);
    const filteredIds = indexes.reduce(
        (a: { [key: string]: number }, b: string) => {
            a[b] = 1;
            return a;
        },
        {}
    );
    return data.filter(function (item) {
        return filteredIds[item._id] !== 1;
    });
};

export const EditProductView = () => {
    const queryClient = useQueryClient();
    const { productId } = useParams();
    const [productIds, setProductIds] = useState<string[] | undefined>([]);

    const { productQuery, categoriesForProductQuery } = useProduct(productId!);

    useEffect(() => {
        if (productQuery.data) {
            let temasIdOfTheProduct = productQuery?.data?.data.temas.map(
                (tema) => tema._id
            );
            setProductIds(temasIdOfTheProduct);
        }
    }, [productQuery.data, productQuery.status]);

    useEffect(() => {
        if (
            categoriesForProductQuery.data &&
            productQuery.status === "success"
        ) {
            console.log("Llamando al useEffect que asigna temas filtrados");
            const temasDelProducto = productQuery.data.data.temas;
            let filteredCategories = filterFast(
                categoriesForProductQuery.data.data,
                temasDelProducto
            );
            queryClient.setQueryData(["categories-for-product", productId], {
                data: filteredCategories,
            });
        }
    }, [
        categoriesForProductQuery.data,
        categoriesForProductQuery.status,
        productQuery.status,
    ]);

    if (categoriesForProductQuery.isLoading) {
        return (
            <Grid item xs={12}>
                <Typography variant="h5">Cargando información...</Typography>
            </Grid>
        );
    }
    if (productQuery?.isLoading) {
        return (
            <Grid item xs={12}>
                <Typography variant="h5">Cargando información...</Typography>
            </Grid>
        );
    }

    let temasProducto = productQuery.data!.data.temas;
    let categoriasParaAñadir = categoriesForProductQuery.data!.data;
    const removeCategoryOfProduct = (
        e: React.MouseEvent<HTMLButtonElement>
    ) => {
        const newIdsOfProducts = productIds?.filter(
            (id) => id !== e.currentTarget.value
        );
        /// Extraer
        const productQueryData = queryClient.getQueryData<SpecificProduct>([
            "products",
            productId,
        ]);

        const categoriesQueryData = queryClient.getQueryData<Temas>([
            "categories-for-product",
            productId,
        ]);

        const newTemasInProduct = productQueryData!.data.temas.filter(
            (tema) => tema._id !== e.currentTarget.value
        );

        queryClient.setQueryData(["products", productId], {
            data: {
                ...productQueryData!.data,
                temas: newTemasInProduct,
            },
        });

        const temaExtraido = productQueryData!.data.temas.find(
            (tema) => tema._id === e.currentTarget.value
        );

        categoriesQueryData!.data.unshift(temaExtraido!);
        setProductIds(newIdsOfProducts);
    };
    const addCategoryToProduct = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (productIds?.includes(e.currentTarget.value)) {
            return;
        }
        const productQueryData = queryClient.getQueryData<SpecificProduct>([
            "products",
            productId,
        ]);

        const categoriesQueryData = queryClient.getQueryData<Temas>([
            "categories-for-product",
            productId,
        ]);
        const temaExtraido = categoriesQueryData!.data.find(
            (tema) => tema._id === e.currentTarget.value
        );

        const listaDeTemasSinElElementoSeleccionado =
            categoriesQueryData?.data.filter(
                (tema) => tema._id !== e.currentTarget.value
            );

        queryClient.setQueryData(["categories-for-product", productId], {
            data: listaDeTemasSinElElementoSeleccionado,
        });

        productQueryData!.data.temas.push(temaExtraido!);
        setProductIds([...productIds!, e.currentTarget.value]);
    };
    const updateCategoriesOfProduct = () => {};

    return (
        <>
            <Grid item xs={12}>
                <Box>
                    <Typography component={"span"} variant="h5">
                        Nombre del Producto:
                    </Typography>
                    <Typography
                        variant="h4"
                        display="inline"
                        fontWeight={"bold"}
                        sx={{
                            ml: 1,
                        }}
                    >
                        {productQuery?.data?.data.nombre}
                    </Typography>
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "flex-end",
                        button: {
                            mx: 1,
                        },
                    }}
                >
                    <Button variant="contained">Actualizar</Button>
                    <Button variant="contained" color="error">
                        Cancelar
                    </Button>
                </Box>
                <Box
                    sx={{
                        my: 2,
                    }}
                >
                    <Grid container spacing={3}>
                        <Grid item xs={6}>
                            <List>
                                <Typography variant="h6">
                                    Temas que puedes añadir:
                                </Typography>
                                {categoriasParaAñadir.map(
                                    (tema, index: number) => (
                                        <Card
                                            key={index}
                                            sx={{
                                                my: 2,
                                            }}
                                        >
                                            <ListItem>
                                                <IconButton
                                                    aria-label="delete"
                                                    color="success"
                                                    value={tema._id}
                                                    onClick={
                                                        addCategoryToProduct
                                                    }
                                                >
                                                    <Add />
                                                </IconButton>
                                                <ListItemText>
                                                    {tema.nombre}
                                                </ListItemText>
                                            </ListItem>
                                        </Card>
                                    )
                                )}
                            </List>
                        </Grid>
                        <Grid item xs={6}>
                            <List>
                                <Typography variant="h6">
                                    Temas que tiene el Producto:
                                </Typography>
                                {temasProducto.map((tema, index) => (
                                    <Card
                                        key={index}
                                        sx={{
                                            my: 2,
                                        }}
                                    >
                                        <ListItem>
                                            <IconButton
                                                aria-label="delete"
                                                color="error"
                                                value={tema._id}
                                                onClick={
                                                    removeCategoryOfProduct
                                                }
                                            >
                                                <CancelIcon />
                                            </IconButton>
                                            <ListItemText>
                                                {tema.nombre}
                                            </ListItemText>
                                        </ListItem>
                                    </Card>
                                ))}
                            </List>
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
        </>
    );
};
