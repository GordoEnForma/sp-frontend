export type Product = {
    _id: string;
    nombre: string;
    temas?: [];
};

export type ProductsResponse = {
    data: Product[];
};
