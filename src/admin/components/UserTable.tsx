import { useEffect, useState } from "react";
import {
    Box,
    Button,
    IconButton,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow,
    Typography
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import LastPage from '@mui/icons-material/LastPage';
import { FirstPage, KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { Link } from "react-router-dom";



interface TablePaginationActionsProps {
    count: number;
    page: number;
    rowsPerPage: number;
    onPageChange: (
        event: React.MouseEvent<HTMLButtonElement>,
        newPage: number,
    ) => void;
}

function TablePaginationActions(props: TablePaginationActionsProps) {
    const theme = useTheme();
    const { count, page, rowsPerPage, onPageChange } = props;

    const handleFirstPageButtonClick = (
        event: React.MouseEvent<HTMLButtonElement>,
    ) => {
        onPageChange(event, 0);
    };

    const handleBackButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        onPageChange(event, page - 1);
    };

    const handleNextButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        onPageChange(event, page + 1);
    };

    const handleLastPageButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };

    return (
        <Box sx={{ flexShrink: 0, ml: 2.5 }}>
            <IconButton
                onClick={handleFirstPageButtonClick}
                disabled={page === 0}
                aria-label="first page"
            >
                {theme.direction === 'rtl' ? <LastPage /> : <FirstPage />}
            </IconButton>
            <IconButton
                onClick={handleBackButtonClick}
                disabled={page === 0}
                aria-label="previous page"
            >
                {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            </IconButton>
            <IconButton
                onClick={handleNextButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="next page"
            >
                {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </IconButton>
            <IconButton
                onClick={handleLastPageButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="last page"
            >
                {theme.direction === 'rtl' ? <FirstPage /> : <LastPage />}
            </IconButton>
        </Box>
    );
}


type ExamLog = {
    id: number;
    duration: number;
    amountOfRightAnswers: number;
    amountOfWrongAnswers: number;
    amountOfUnanswered: number;
    solvedDate: Date;
}

const rowS: ExamLog[] = [
    { id: 0, duration: 120, amountOfRightAnswers: 20, amountOfUnanswered: 10, amountOfWrongAnswers: 70, solvedDate: new Date(new Date("February 28, 2022 10:20:40"),) },
    { id: 1, duration: 120, amountOfRightAnswers: 50, amountOfUnanswered: 20, amountOfWrongAnswers: 30, solvedDate: new Date(new Date("August 30, 2021 03:15:30"),) },
    { id: 2, duration: 120, amountOfRightAnswers: 10, amountOfUnanswered: 40, amountOfWrongAnswers: 50, solvedDate: new Date(new Date("December 1, 2022 13:05"),) },
    { id: 3, duration: 120, amountOfRightAnswers: 10, amountOfUnanswered: 40, amountOfWrongAnswers: 50, solvedDate: new Date(new Date("January 1, 2020 13:05"),) },
    { id: 4, duration: 120, amountOfRightAnswers: 10, amountOfUnanswered: 40, amountOfWrongAnswers: 50, solvedDate: new Date(new Date("July 3, 2021 13:05"),) },
    { id: 5, duration: 120, amountOfRightAnswers: 10, amountOfUnanswered: 40, amountOfWrongAnswers: 50, solvedDate: new Date(new Date("February 10, 2022 13:05"),) },
    { id: 6, duration: 120, amountOfRightAnswers: 10, amountOfUnanswered: 40, amountOfWrongAnswers: 50, solvedDate: new Date(new Date("July 4, 2020 13:05"),) },
    { id: 7, duration: 120, amountOfRightAnswers: 10, amountOfUnanswered: 40, amountOfWrongAnswers: 50, solvedDate: new Date(new Date("August 1, 2020 13:05"),) },
    { id: 8, duration: 120, amountOfRightAnswers: 10, amountOfUnanswered: 40, amountOfWrongAnswers: 50, solvedDate: new Date(new Date("October 21, 2021 13:05"),) },
    { id: 9, duration: 120, amountOfRightAnswers: 10, amountOfUnanswered: 40, amountOfWrongAnswers: 50, solvedDate: new Date(new Date("September 14, 2022 13:05"),) },
    { id: 10, duration: 120, amountOfRightAnswers: 10, amountOfUnanswered: 40, amountOfWrongAnswers: 50, solvedDate: new Date(new Date("June 30, 2022 13:05"),) },
    { id: 11, duration: 120, amountOfRightAnswers: 10, amountOfUnanswered: 40, amountOfWrongAnswers: 50, solvedDate: new Date(new Date("March 9, 2021 13:05"),) },
    { id: 12, duration: 120, amountOfRightAnswers: 10, amountOfUnanswered: 40, amountOfWrongAnswers: 50, solvedDate: new Date(new Date("April 14, 2022 13:05"),) },
].sort((a, b) => (a.solvedDate < b.solvedDate ? 1 : -1));


export const UserTable = () => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(4);

    const ofName = document.querySelector(".MuiTablePagination-displayedRows");


    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rowS.length) : 0;

    const handleChangePage = (
        event: React.MouseEvent<HTMLButtonElement> | null,
        newPage: number,
    ) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    useEffect(() => {
        const amountName = document.querySelector(".MuiTablePagination-selectLabel") || undefined;

        const ofName = document.querySelector(".MuiTablePagination-displayedRows");
        amountName!.innerHTML = "Filas en la tabla ";
        ofName!.innerHTML = ofName!.innerHTML.replace('of', 'de');;
    }, [ofName?.innerHTML])

    return (
        <TableContainer component={Paper} sx={{

        }}>
            <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
                <TableHead>
                    <TableRow>
                        <TablePagination
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
                        />
                    </TableRow>
                    <TableRow sx={{
                        'th': {
                            fontSize: 16,
                        }
                    }}>
                        <TableCell component="th" scope="row">
                            {'Duración'}
                        </TableCell>
                        <TableCell style={{ width: 160 }} align="center">
                            N° Correctas
                        </TableCell>

                        <TableCell style={{ width: 160 }} align="center">
                            N° Incorrectas
                        </TableCell>

                        <TableCell style={{ width: 160 }} align="center">
                            No realizadas
                        </TableCell>

                        <TableCell style={{ width: 160 }} align="center">
                            Fecha Realizado
                        </TableCell>
                        <TableCell style={{ width: 160 }} align="center">

                        </TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {(rowsPerPage > 0
                        ? rowS.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        : rowS
                    ).map((row, index) => (
                        <TableRow key={index}>
                            <TableCell component="th" scope="row" >
                                {row.duration}
                            </TableCell>
                            <TableCell style={{ width: 160 }} align="center">
                                {row.amountOfUnanswered}
                            </TableCell>
                            <TableCell style={{ width: 160 }} align="center">
                                {row.amountOfWrongAnswers}
                            </TableCell>
                            <TableCell style={{ width: 160 }} align="center">
                                {row.amountOfRightAnswers}
                            </TableCell>
                            <TableCell style={{ width: 160 }} align="center">
                                {row.solvedDate.toLocaleDateString()}
                            </TableCell>
                            {/* Button to path "/examen/:id" */}
                            <TableCell style={{ width: 160 }} align="right">
                                <Button variant="text" sx={{
                                    'a': { textDecoration: 'none' }
                                }}
                                >
                                    <Link to={`/student/examen/${row.id}`}>
                                        <Typography textTransform={'capitalize'} color='primary.main'>
                                            Ver Detalles
                                        </Typography>
                                    </Link>
                                </Button>

                                {/* <Button variant="text">
                                    Ver Detalles
                                </Button> */}

                            </TableCell>
                        </TableRow>
                    ))}
                    {emptyRows > 0 && (
                        <TableRow style={{ height: 53 * emptyRows }}>
                            <TableCell colSpan={6} />
                        </TableRow>
                    )}
                </TableBody>

            </Table>
        </TableContainer>
    );
}