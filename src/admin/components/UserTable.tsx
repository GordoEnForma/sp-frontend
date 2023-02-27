import { FC, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
    Box,
    Button,
    Grid,
    IconButton,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow,
    Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import LastPage from "@mui/icons-material/LastPage";
import {
    FirstPage,
    KeyboardArrowLeft,
    KeyboardArrowRight,
} from "@mui/icons-material";
import { UserViewContext } from "../context/UserViewContext";
import { FormDataSchema } from "../types/user.types";
import { Productos } from "../interfaces/product";

interface TablePaginationActionsProps {
    count: number;
    page: number;
    rowsPerPage: number;
    onPageChange: (
        event: React.MouseEvent<HTMLButtonElement>,
        newPage: number
    ) => void;
}

function TablePaginationActions(props: TablePaginationActionsProps) {
    const theme = useTheme();
    const { count, page, rowsPerPage, onPageChange } = props;

    const handleFirstPageButtonClick = (
        event: React.MouseEvent<HTMLButtonElement>
    ) => {
        onPageChange(event, 0);
    };

    const handleBackButtonClick = (
        event: React.MouseEvent<HTMLButtonElement>
    ) => {
        onPageChange(event, page - 1);
    };

    const handleNextButtonClick = (
        event: React.MouseEvent<HTMLButtonElement>
    ) => {
        onPageChange(event, page + 1);
    };

    const handleLastPageButtonClick = (
        event: React.MouseEvent<HTMLButtonElement>
    ) => {
        onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };

    return (
        <Box sx={{ flexShrink: 0, ml: 2.5 }}>
            <IconButton
                onClick={handleFirstPageButtonClick}
                disabled={page === 0}
                aria-label="first page"
            >
                {theme.direction === "rtl" ? <LastPage /> : <FirstPage />}
            </IconButton>
            <IconButton
                onClick={handleBackButtonClick}
                disabled={page === 0}
                aria-label="previous page"
            >
                {theme.direction === "rtl" ? (
                    <KeyboardArrowRight />
                ) : (
                    <KeyboardArrowLeft />
                )}
            </IconButton>
            <IconButton
                onClick={handleNextButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="next page"
            >
                {theme.direction === "rtl" ? (
                    <KeyboardArrowLeft />
                ) : (
                    <KeyboardArrowRight />
                )}
            </IconButton>
            <IconButton
                onClick={handleLastPageButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="last page"
            >
                {theme.direction === "rtl" ? <FirstPage /> : <LastPage />}
            </IconButton>
        </Box>
    );
}

type ProductSchema = {
    _id: string;
    nombre: string;
    temas?: [];
};
type DataSchema = {
    _id: number;
    nombre: string;
    apellido: string;
    telefono: number;
    email: string;
    contrasena: string;
    producto: ProductSchema;
    estado: string;
    createdAt: string;
    updatedAt: string;
};

type Users = {
    data: DataSchema[];
};

type Props = {
    users: Users;
    products: Productos;
    // setInitialValues: (value: {}) => void;
};

export const UserTable: FC<Props> = ({ users, products }) => {
    const { setIsUpdating, useFormAction } = useContext(UserViewContext);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(50);

    // console.log(users.data);
    // const sortedUsers = users.sort((a, b) =>
    //     a.fechaAñadido < b.fechaAñadido ? 1 : -1
    // );
    const ofName = document.querySelector(".MuiTablePagination-displayedRows");

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0
            ? Math.max(0, (1 + page) * rowsPerPage - users.data.length)
            : 0;

    const handleChangePage = (
        event: React.MouseEvent<HTMLButtonElement> | null,
        newPage: number
    ) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleSetUserData = ({ producto, ...args }: FormDataSchema) => {
        console.log(producto);
        if (!producto?._id) {
            useFormAction({
                type: "updateUser",
                payload: { ...args, productId: producto! },
            });
        }
        useFormAction({
            type: "updateUser",
            payload: { ...args, productId: producto?._id },
        });
        setIsUpdating(true);
    };

    // useEffect(() => {
    //     const amountName = document.querySelector(".MuiTablePagination-selectLabel") || undefined;

    //     const ofName = document.querySelector(".MuiTablePagination-displayedRows");
    //     amountName!.innerHTML = "Filas en la tabla ";
    //     ofName!.innerHTML = ofName!.innerHTML.replace('of', 'de');;
    // }, [ofName?.innerHTML])

    return (
        <Grid item xs={12}>
            <TableContainer
                component={Paper}
                sx={{
                    height: 400,
                }}
            >
                <Table
                    stickyHeader={true}
                    sx={{
                        maxWidth: 1200,
                        th: {
                            padding: 0.5,
                            background: "gray",
                        },
                        td: {
                            padding: 1,
                        },
                    }}
                    aria-label="custom pagination table"
                >
                    <TableHead>
                        <TableRow>
                            {/* <TablePagination
                            rowsPerPageOptions={[4, 10, 25, { label: 'Todo', value: -1 }]}
                            colSpan={6}
                            count={rowS.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            SelectProps={{
                                inputProps: {
                                    'aria-label': 'rows per page',
                                },
                                native: true,
                            }}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                            ActionsComponent={TablePaginationActions}
                        /> */}
                        </TableRow>
                        <TableRow
                            sx={{
                                th: {
                                    fontSize: 18,
                                    backgroundColor: "#a0a0a0",
                                },

                                // position:'fixed'
                            }}
                        >
                            <TableCell
                                component="th"
                                scope="row"
                                align="center"
                            >
                                Nombre Completo
                            </TableCell>
                            <TableCell style={{ width: 160 }} align="center">
                                Estado
                            </TableCell>

                            <TableCell style={{ width: 160 }} align="center">
                                Producto
                            </TableCell>

                            <TableCell style={{ width: 160 }} align="center">
                                Fecha Añadido
                            </TableCell>

                            <TableCell style={{ width: 160 }} align="center">
                                Última Actualización
                            </TableCell>
                            <TableCell
                                style={{ width: 160 }}
                                align="center"
                            ></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {(rowsPerPage > 0
                            ? users.data.slice(
                                  page * rowsPerPage,
                                  page * rowsPerPage + rowsPerPage
                              )
                            : users.data
                        )
                            .map(
                                (
                                    {
                                        nombre,
                                        apellido,
                                        estado,
                                        producto,
                                        createdAt,
                                        updatedAt,
                                    },
                                    index
                                ) => (
                                    <TableRow
                                        key={index}
                                        sx={{
                                            td: { fontSize: 18 },
                                        }}
                                    >
                                        <TableCell
                                            component="td"
                                            scope="row"
                                            align="center"
                                        >
                                            {nombre + " " + apellido}
                                        </TableCell>
                                        <TableCell
                                            style={{ width: 160 }}
                                            align="center"
                                        >
                                            {estado === "activo"
                                                ? "Activo"
                                                : "Pendiente"}
                                        </TableCell>
                                        <TableCell
                                            style={{ width: 160 }}
                                            align="center"
                                        >
                                            {/* {(() => {
                                                const newValue =
                                                    products.data?.find(
                                                        ({ _id }) => {
                                                            if (
                                                                producto === _id
                                                            ) {
                                                                return true;
                                                            }
                                                        }
                                                    )?.nombre;
                                                return newValue;
                                            })()} */}
                                            {producto &&
                                            producto.nombre !== undefined
                                                ? producto.nombre
                                                : (() => {
                                                      console.log(producto);
                                                      const newValue =
                                                          products.data.find(
                                                              ({ _id }) => {
                                                                  if (
                                                                      (producto as unknown) ===
                                                                      _id
                                                                  ) {
                                                                      return true;
                                                                  }
                                                              }
                                                          )?.nombre;
                                                      return newValue;
                                                  })()}
                                        </TableCell>
                                        <TableCell
                                            style={{ width: 160 }}
                                            align="center"
                                        >
                                            {(() => {
                                                return new Date(
                                                    createdAt
                                                ).toLocaleDateString();
                                            })()}
                                        </TableCell>
                                        <TableCell
                                            style={{ width: 160 }}
                                            align="center"
                                        >
                                            {(() => {
                                                return new Date(
                                                    updatedAt
                                                ).toLocaleDateString();
                                            })()}
                                        </TableCell>

                                        {/* Button to path "/examen/:id" */}
                                        <TableCell
                                            style={{ width: 160 }}
                                            align="center"
                                        >
                                            <Button
                                                variant="contained"
                                                sx={{
                                                    ":hover": {
                                                        backgroundColor:
                                                            "#2CF264",
                                                        // color gozu #0DD345
                                                    },
                                                }}
                                                onClick={() =>
                                                    handleSetUserData(
                                                        users.data[index]
                                                    )
                                                }
                                            >
                                                <Typography
                                                    textTransform={"capitalize"}
                                                    color="black"
                                                >
                                                    Editar
                                                </Typography>
                                            </Button>

                                            {/* <Button variant="text">
                                    Ver Detalles
                                </Button> */}
                                        </TableCell>
                                    </TableRow>
                                )
                            )
                            .reverse()}
                        {emptyRows > 0 && (
                            <TableRow style={{ height: 53 * emptyRows }}>
                                <TableCell colSpan={6} />
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </Grid>
    );
};
