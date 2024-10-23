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
import { Avatar, Button } from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';
const columns = [
    { id: 'name', label: 'کاربر', minWidth: 170 },
    { id: '145858', label: 'بخش درخواست', minWidth: 170 },
    { id: '14588', label: ' درخواست', minWidth: 170 },
    {
        id: 'categories',
        label: 'دسته بندی',
        minWidth: 170,


    },


];

function createData(name, code, population, size) {
    const density = population / size;
    return { name, code, population, size, density };
}


export default function AdminRequestList() {

    const { getAllRequest, request, } = useContext(AuthContext)

    useEffect(() => {
        getAllRequest()
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
                            {request ? request
                                .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((data) => {
                                    return (
                                        <TableRow hover role="checkbox" tabIndex={-1} key={data.code}>
                                            <TableCell key={columns.code}  >
                                                <Link to={`../../user/${data.userId}`}>
                                                    <Button variant='text' sx={{
                                                       
                                                    }}>
                                                        مشاهده مخاطب <LaunchIcon fontSize='inherit' />
                                                    </Button>
                                                </Link>
                                            </TableCell>
                                            <TableCell key={columns.code}  >
                                                <Link to={`../../${data.place? data.place[1] : ""}/${data.userId}`}>
                                                    <Button variant='text' sx={{
                                                       
                                                    }}>
                                                        مشاهده {data.place? data.place[1] : "" } <LaunchIcon fontSize='inherit' />
                                                    </Button>
                                                </Link>
                                            </TableCell>
                                            <TableCell key={columns.code}  >
                                                <Link to={`../request/res/${data._id}`}>
                                                    <Button variant='text' sx={{
                                                      
                                                    }}>
                                                        بررسی درخواست <LaunchIcon fontSize='inherit' />
                                                    </Button>
                                                </Link>
                                            </TableCell>
                                            <TableCell key={columns.code}  >
                                                {data.categories}
                                            </TableCell>
                                            <TableCell key={columns.code}  >
                                                {data.status == 0 ?
                                                    <Button onClick={() => { }} variant='contained' color='primary'>
                                                        بررسی نشده
                                                    </Button>
                                                    :
                                                    data.status == 1 ?
                                                    <Button onClick={() => { }} variant='contained' color='warning'>
                                                       در انتظار پاسخگویی
                                                    </Button> 
                                                    :
                                                    data.status == 2 ?
                                                    <Button onClick={() => { }} variant='contained' color='success'>
                                                        موافقت
                                                    </Button> 
                                                    :
                                                    data.status == 3 ?
                                                    <Button onClick={() => { }} variant='contained' color='error'>
                                                        مخالفت
                                                    </Button> 
                                                    :
                                                    data.status == 4 ?
                                                    <Button onClick={() => { }} variant='contained' color='secondary'>
                                                        درخواست بررسی مجدد
                                                    </Button> 
                                                    :
                                                    ""
                                                }
                                            </TableCell>
                                            <TableCell key={columns.code}  >
                                                <Link to={`../request/edit/${data._id}`}>
                                                    <Button color='info'>
                                                        ویرایش <LaunchIcon fontSize='inherit' />
                                                    </Button>
                                                </Link>
                                            </TableCell>
                                            <TableCell  >

                                                <Button onClick={() => { }} color='warning'>
                                                    حذف
                                                </Button>
                                            </TableCell>
                                        </TableRow>
                                    );
                                }) : ""}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={request ? request.length : 0}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Grid>
        </Grid>
    );
}