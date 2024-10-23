

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
import moment from 'jalali-moment';

const columns = [
  { id: 'name', label: 'نام', minWidth: 170 },
  {
    id: 'categories',
    label: 'شماره تماس',
    minWidth: 170,


  },


];

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}


export default function AdminUserList() {

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const { getAllUser, users, adminUser } = useContext(AuthContext)
  console.log(users);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };


  useEffect(() => {
    getAllUser()
  }, [])



  return (
    <Grid sx={{
      mt: "80px"
    }}>
      <Grid>

      </Grid>
      <Grid>

        <TableContainer sx={{  overflow: "scroll" }}>
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
                <TableCell
                  style={{ top: 57 }}
                >
                  تصویر
                </TableCell>
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
                  تاریخ ورود
                </TableCell>
                <TableCell

                >

                  حذف
                </TableCell>

              </TableRow>
            </TableHead>
            <TableBody>
              {users
                .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((data) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={data.code}>
                      <TableCell key={columns.code}  >
                        <Avatar src={`${data.image}`} variant='rounded' sx={{
                          width: "30px",
                          height: "30px"

                        }} />
                      </TableCell>
                      <TableCell key={columns.code}  >

                        <Button variant='text' color='inherit'>
                          {data.fullname}
                        </Button>

                      </TableCell>
                      <TableCell key={columns.code}  >
                        {data.phone}
                      </TableCell>
                      <TableCell key={columns.code}  >
                        {data.isAdmin == true ?
                          <Button onClick={() => { }} variant='contained' color='success'>
                            ادمین
                          </Button>
                          :
                          <Button onClick={() => { }} variant='contained' color='error'>
                            کاربر
                          </Button>
                        }
                      </TableCell>
                      <TableCell key={columns.code}  >

                        <Button color='inherit'>
                          {data.createdAt ? moment(data.createdAt).locale('fa').format("HH:mm:ss YYYY/MM/DD ") : ""}
                        </Button>

                      </TableCell>
                      <TableCell  >

                        <Button onClick={() => { }} color='warning'>
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
          count={users.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Grid>
    </Grid>
  );
}