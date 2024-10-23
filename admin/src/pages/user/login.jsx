
import * as React from 'react';

import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';

import { useFormik } from "formik";
import * as Yup from "yup";
import { useContext } from "react";
import { AuthContext } from "../../admin/context/adminContext";
import { Alert, Box, Button, Card, Collapse, CssBaseline, IconButton, OutlinedInput, TextField } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const formSchema = Yup.object({
     phone: Yup.number("شماره تماس باید عدد باشد").required("شماره تلفن الزامی است"),
     password: Yup.string().required("رمز عبور الزامی است")
})


const Login = () => {
     const [showPassword, setShowPassword] = React.useState(false);
     const { login, checkLogin } = useContext(AuthContext)
     const [open, setOpen] = React.useState(false);
     const handleClickShowPassword = () => setShowPassword((show) => !show);
useEffect(() => {
     checkLogin()
},[])
     const handleMouseDownPassword = (event) => {

          event.preventDefault();
     };

     const formik = useFormik({
          initialValues: {
               phone: "",
               password: "",
          },
          onSubmit: (values) => {
               login(values);
          },
          validationSchema: formSchema
     })

     /* 1
     
     xs={0}
     sm={0}
     md={3}
     lg={2}
     xl={2}
     
     
     
     */

     return (<div>

          <CssBaseline />

          <Grid container spacing={3}>

               <Box>


                    <Grid rowSpacing={1}

                         sx={{
                              width: '100%',
                              margin: 'auto'
                         }}

                    >
                         <Card variant="elevation">

                              <form onSubmit={formik.handleSubmit} >

                                   <Grid xs={12} sm={12} md={12} >
                                        <TextField
                                             id="outlined-phone-input"
                                             label="شماره تلفن"
                                             type="text"
                                             autoComplete="current-password"
                                             value={formik.values.phone}
                                             onChange={formik.handleChange("phone")}
                                             onBlur={formik.handleBlur("phone")}
                                        />

                                   </Grid>
                                   <Grid xs={12} sm={12} md={12}>

                                        <FormControl variant="outlined">
                                             <InputLabel htmlFor="outlined-adornment-password">رمز عبور</InputLabel>
                                             <OutlinedInput
                                                  id="outlined-adornment-password"
                                                  type={showPassword ? 'text' : 'password'}
                                                  endAdornment={
                                                       <InputAdornment position="end">
                                                            <IconButton
                                                                 aria-label="toggle password visibility"
                                                                 onClick={handleClickShowPassword}
                                                                 onMouseDown={handleMouseDownPassword}
                                                                 edge="end"
                                                            >
                                                                 {showPassword ? <VisibilityOff /> : <Visibility />}
                                                            </IconButton>
                                                       </InputAdornment>
                                                  }
                                                  label="Password"
                                                  value={formik.values.password}
                                                  onChange={formik.handleChange("password")}
                                                  onBlur={formik.handleBlur("password")}
                                             />
                                        </FormControl>
                                   </Grid>
                                   <Grid xs={12} sm={12} md={12}>
                                        <Button type='submit'
                                             variant='outlined'
                                             color='inherit'


                                             onClick={() => {
                                                  setOpen(true);
                                             }}>
                                             ورود
                                        </Button>
                                        {" "}
                                        <Link to='../register'>
                                             <Button type='submit'
                                                  variant='text'
                                                  color='inherit'>
                                                  ثبت نام
                                             </Button>
                                        </Link>
                                   </Grid>
                              </form>
                              <Box sx={{ width: '100%' }}>
                                   <Collapse in={open}>
                                        <Alert severity="error"
                                             action={
                                                  <IconButton
                                                       aria-label="close"
                                                       color="inherit"
                                                       size="small"
                                                       onClick={() => {
                                                            setOpen(false);
                                                       }}
                                                  >
                                                       <CloseIcon fontSize="inherit" />
                                                  </IconButton>
                                             }
                                             sx={{ mb: 2 }}
                                        >
                                             {formik.errors.phone}

                                        </Alert>
                                   </Collapse>
                                   <Collapse in={open}>
                                        <Alert severity="error"
                                             action={
                                                  <IconButton
                                                       aria-label="close"
                                                       color="inherit"
                                                       size="small"
                                                       onClick={() => {
                                                            setOpen(false);
                                                       }}
                                                  >
                                                       <CloseIcon fontSize="inherit" />
                                                  </IconButton>
                                             }
                                             sx={{ mb: 2 }}
                                        >
                                             {formik.errors.password}

                                        </Alert>
                                   </Collapse>
                              </Box>
                         </Card>
                    </Grid >


               </Box>
          </Grid >

     </div>
     );
}
export default Login;
