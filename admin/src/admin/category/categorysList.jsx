import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { useContext } from 'react';
import { AuthContext } from '../context/adminContext';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';


/*
category: {
    type: String,
    required: true
},
headline: {
    type: String,
    required: true
},
part: {
    type: String,
    required: true
},
period: {
    type: String,
    required: true
},
season: {
    type: String,
    required: true
},  
createdAt: {
    type: Date,
    default: Date.now
}
*/


export default function AdminCategoryList() {

    const { getAllCategory, deleteCategory, category } = useContext(AuthContext)

    useEffect(() => {
        getAllCategory()
    }, [])

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Grid sx={{
            mt: "80px"
        }}>
            <Grid>

            </Grid>
            <Grid>

                <TableContainer sx={{ maxHeight: 440, overflow: "scroll" }}>
                    <Table sx={{ overflow: "scroll" }} stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                <TableCell


                                >
                                    دسته بندی
                                </TableCell>
                                <TableCell

                                >
                                    عنوان
                                </TableCell>
                                <TableCell

                                >
                                    فصل
                                </TableCell>
                                <TableCell

                                >
                                    بخش
                                </TableCell>
                                <TableCell

                                >
                                    دوره
                                </TableCell>
                                <TableCell

                                >
                                    ویرایشگر
                                </TableCell>
                                <TableCell

                                >

                                    حذف
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {category
                                .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((data) => {
                                    return (
                                        <TableRow hover role="checkbox" tabIndex={-1} key={data.code}>
                                            <TableCell  >
                                                {data.category}
                                            </TableCell>
                                            <TableCell   >
                                                {data.headline}
                                            </TableCell>
                                            <TableCell  >
                                                {data.season}
                                            </TableCell>
                                            <TableCell   >
                                                {data.part}
                                            </TableCell>
                                            <TableCell   >
                                                {data.period}
                                            </TableCell>
                                            <TableCell >
                                                <Link to={`../category/edit/${data._id}`}>
                                                    <Button color='info'>
                                                        ویرایش <LaunchIcon fontSize='inherit' />
                                                    </Button>
                                                </Link>
                                            </TableCell>
                                            <TableCell  >

                                                <Button onClick={() => { deleteCategory(data._id) }} color='warning'>
                                                    حذف
                                                </Button>
                                            </TableCell>
                                        </TableRow>
                                    );
                                })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={category.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Grid>
        </Grid>
    );
}