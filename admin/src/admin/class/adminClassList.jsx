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
const columns = [
    { id: 'name', label: 'Name', minWidth: 170 },
    {
        id: 'categories',
        label: 'دسته بندی',
        minWidth: 170,


    },


];


export default function AdminClassList() {

    const { getAllClass, classes, deleteClass, setClassIsActive } = useContext(AuthContext)

    useEffect(() => {
        getAllClass()
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
                                <TableCell align="center" colSpan={2}>
                                    Country
                                </TableCell>
                                <TableCell align="center" colSpan={3}>
                                    Details
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{ top: 57, minWidth: column.minWidth }}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                                <TableCell
                                    style={{ top: 57 }}
                                >
                                    وضعیت
                                </TableCell>
                                <TableCell
                                    style={{ top: 57 }}
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
                            {classes
                                .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((data) => {
                                    return (
                                        <TableRow hover role="checkbox" tabIndex={-1} key={data.code}>
                                            <TableCell key={columns.code}  >
                                                <Link to={`../../blogs/${data._id}`}>
                                                    <Button variant='text' color='primary'>
                                                        {data.name} <LaunchIcon fontSize='inherit' />
                                                    </Button>
                                                </Link>
                                            </TableCell>
                                            <TableCell key={columns.code}  >
                                                {data.categories}
                                            </TableCell>
                                            <TableCell key={columns.code}  >
                                                {data.isActive == true ?
                                                    <Button onClick={() => { setClassIsActive({ isActive: false, id: data._id }) }} color='success'>
                                                        فعال
                                                    </Button>
                                                    :
                                                    <Button onClick={() => setClassIsActive({ isActive: true, id: data._id })} color='error'>
                                                        غیر فعال
                                                    </Button>
                                                }
                                            </TableCell>
                                            <TableCell key={columns.code}  >
                                                <Link to={`../class/edit/${data._id}`}>
                                                    <Button color='info'>
                                                        ویرایش <LaunchIcon fontSize='inherit' />
                                                    </Button>
                                                </Link>
                                            </TableCell>
                                            <TableCell  >

                                                <Button onClick={() => { deleteClass({ id: data._id }) }} color='warning'>
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
                    count={classes.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Grid>
        </Grid>
    );
}