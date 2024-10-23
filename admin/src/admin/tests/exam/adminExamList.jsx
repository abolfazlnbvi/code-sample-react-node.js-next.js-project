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
import { AuthContext } from '../../context/adminContext';
import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Avatar, Box, Button, CardMedia, Typography } from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';
import { baseUrlImage } from '../../../utils/baseUrl';
import moment from 'jalali-moment';


const columns = [

    { id: 'name', label: 'تیتر' },
    { id: 'date', label: 'زمان' },
    { id: 'endDate', label: 'مهلت ثبت نام' },
    { id: 'price', label: 'قیمت' },
    { id: 'active', label: 'وضعیت' },
    { id: 'editor', label: 'ویرایشگر' },
    { id: 'delete', label: 'حذف' },


];
/*

imageId
*/

export default function AdminTestList() {

    const { getOneTest, getAllExam, oneTest, exam, deleteExam, setExamIsActive } = useContext(AuthContext)
    let Id = useLocation()
    Id = Id.pathname
    let type
    type = Id.lastIndexOf('/')
    type = Id.substr(type + 1)


    useEffect(() => {
        getOneTest(type)
        getAllExam(type)
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
        <Box sx={{
            mt: "100px"
        }}>
            <Grid container spacing={3}>
                <Grid sx={{ width: "100%" }} md={4} sm={12}>
                    <CardMedia

                        component="img"
                        sx={{ width: "90%", borderRadius: "10px" }}
                        alt={`${baseUrlImage}/${oneTest.imageId}`}

                        image={oneTest.imageId}
                    />
                </Grid>
                <Grid md={8} sm={12} sx={{ with: "100%", textAlign: "start" }} container spacing={3}>
                    <Grid md={6} sm={12}>
                        <Typography variant='h6'>
                            تیتر آزمون : {oneTest.testName}
                        </Typography>
                    </Grid>
                    <Grid md={6} sm={12}>
                        <Typography variant='h6'>وضعیت : {oneTest.isActive == true ? "فعال" : "غیرفعال"}</Typography>
                    </Grid>
                    <Grid md={6} sm={12}>
                        <Typography variant='h6'>
                            زمان ساخت   : {oneTest.createdAt ? moment(oneTest.createdAt, "YYYY-MM-DD---").locale('fa').format("YYYY/MM/DD") : ""}
                        </Typography>

                    </Grid>
                    <Grid md={6} sm={12}>
                        <Typography>
                            دسته بندی  : {oneTest.Categories}
                        </Typography>
                    </Grid>
                    <Grid md={6} sm={12}>
                        <Typography>
                            قیمت کل : {oneTest.price ? oneTest.price : "0"} تومان
                        </Typography>

                    </Grid>
                    <Grid md={6} sm={12}>
                        <Typography>
                            آدرس : {oneTest.url}

                        </Typography>

                    </Grid>
                </Grid>

            </Grid>
            <Grid container sx={{
                justifyContent: "space-between",
                width: "95%"
            }} spacing={3}>
                <Grid>
                    <Link to={`../test/exam/add/${type}`}>
                        <Button variant='contained'>
                            افزودن امتحان
                        </Button>
                    </Link>
                </Grid>
                <Grid>
                    <Link to={`../test/list`}>
                        <Button variant='contained'>
                            لبست آزمون ها
                        </Button>
                    </Link>
                </Grid>
            </Grid>
            <Grid item>

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
                                        align={column.align}                                    >
                                        {column.label}
                                    </TableCell>
                                ))}


                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {exam.sort((a, b) => new Date(a.date) - new Date(b.date))

                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((data, index) => {
                                    return (
                                        <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                                            
                                            <TableCell key={columns.code}  >

                                                <Button variant='text' color='primary'>
                                                    {data.testName} <LaunchIcon fontSize='inherit' />
                                                </Button>

                                            </TableCell>
                                            <TableCell key={columns.code}  >

                                                <Button variant='text' color='primary'>
                                                    {data.date}
                                                </Button>

                                            </TableCell>
                                            <TableCell key={columns.code}  >

                                                <Button variant='text' color='primary'>
                                                    {data.endDate}
                                                </Button>

                                            </TableCell>
                                            <TableCell key={columns.code}  >

                                                <Button variant='text' color='primary'>
                                                    {data.price}
                                                </Button>

                                            </TableCell>
                                            <TableCell key={columns.code}  >
                                                {data.isActive == true ?
                                                    <Button onClick={() => { setExamIsActive({ isActive: false, id: data._id, testID: type }) }} color='success'>
                                                        فعال
                                                    </Button>
                                                    :
                                                    <Button onClick={() => setExamIsActive({ isActive: true, id: data._id, testID: type })} color='error'>
                                                        غیر فعال
                                                    </Button>
                                                }
                                            </TableCell>
                                            <TableCell key={columns.code}  >

                                                <Button onClick={() => {
                                                    alert("ویرایش نمیشه حذفش کن  دوباره بساز")
                                                }} color='info'>
                                                    ویرایش <LaunchIcon fontSize='inherit' />
                                                </Button>

                                            </TableCell>
                                            <TableCell  >

                                                <Button onClick={() => { deleteExam({ id: data._id, test: type }) }} color='warning'>
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
                    count={exam.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Grid>
        </Box>
    );
}