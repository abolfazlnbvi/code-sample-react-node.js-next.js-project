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
import { Avatar, Button, Divider } from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';
import moment from 'jalali-moment';
const columns = [
    { id: 'image', label: 'تصویر', },
    { id: 'name', label: 'تیتر', },
    { id: 'date', label: 'آخرین بروزرسانی', },
    {
        id: 'categories',
        label: 'دسته بندی',



    }, { id: 'active', label: 'وضعیت', },
    { id: 'exam', label: 'امتحانات', },
    {
        id: 'editor',
        label: 'ویرایشگر',



    },
    {
        id: 'delete',
        label: 'حذف',



    },


];


export default function AdminTestList() {

    const { getAllTest, test, deleteTest, setTestIsActive } = useContext(AuthContext)

    useEffect(() => {
        getAllTest()
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
                                    آزمون ها
                                </TableCell>

                            </TableRow>
                            <TableRow>

                                {columns.map((column) => (
                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{ top: 57, minWidth: column.minWidth, textAlign: "center" }}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {test
                                .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((data, index) => {
                                    return (
                                        <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                                            <TableCell key={columns.code}  >
                                                <Avatar src={`${data.imageId}`} variant='rounded' sx={{
                                                    width: "30px",
                                                    height: "30px"

                                                }} />
                                            </TableCell>
                                            <TableCell key={columns.code}  >
                                                <Link to={`../../blogs/${data._id}`}>
                                                    <Button variant='text' color='primary'>
                                                        {data.testName} <LaunchIcon fontSize='inherit' />
                                                    </Button>
                                                </Link>
                                            </TableCell>
                                            <TableCell key={columns.code}  >

                                                <Link to={`../../blogs/${data._id}`}>
                                                    <Button variant='text' color='primary'>
                                                        {moment(data.createdAt, "YYYY-MM-DD---").locale('fa').format("YYYY/MM/DD")} <LaunchIcon fontSize='inherit' />
                                                    </Button>
                                                </Link>
                                            </TableCell>
                                            <TableCell key={columns.code}  >
                                                {data.Categories}
                                            </TableCell>
                                            <TableCell key={columns.code}  >
                                                {data.isActive == true ?
                                                    <Button onClick={() => { setTestIsActive({ isActive: false, id: data._id }) }} color='success'>
                                                        فعال
                                                    </Button>
                                                    :
                                                    <Button onClick={() => setTestIsActive({ isActive: true, id: data._id })} color='error'>
                                                        غیر فعال
                                                    </Button>
                                                }
                                            </TableCell>

                                            <TableCell key={columns.code}  >
                                                <Link to={`../test/exam/list/${data._id}`}>
                                                    <Button color='secondary'>
                                                        امتحانات <LaunchIcon fontSize='inherit' />
                                                    </Button>
                                                </Link>
                                            </TableCell>
                                            <TableCell key={columns.code}  >
                                                <Link to={`../test/edit/${data._id}`}>
                                                    <Button color='info'>
                                                        ویرایش <LaunchIcon fontSize='inherit' />
                                                    </Button>
                                                </Link>
                                            </TableCell>
                                            <TableCell  >

                                                <Button onClick={() => { deleteTest({ id: data._id }) }} color='warning'>
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
                    count={test.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Grid>
        </Grid>
    );
}