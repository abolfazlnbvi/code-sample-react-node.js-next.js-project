import * as React from 'react';
import { useContext } from 'react';
import { Box, Button, Card, CssBaseline, FormControl, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material';
import * as Yup from "yup";

import { useFormik } from 'formik';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Visibility from '@mui/icons-material/Visibility';
import coverLogin from '../assets/cover.jpeg'

import Link from 'next/link';
import { UserContext } from '@/context/userContext';
const formSchema = Yup.object({
    phone: Yup.number().required("ایمیل شما الزامی است"),
    password: Yup.string().required("پسوورد شما الزامی است")
})


const Register = () => {

    const [showPassword, setShowPassword] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    const { register } = useContext(UserContext)
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {

        event.preventDefault();
    };
    const formik = useFormik({
        initialValues: {
            fullname: "",
            phone: "",
            password: "",
        },
        onSubmit: (values) => {
            register(values);
        },
        validationSchema: formSchema
    })
    return (<div >
        <CssBaseline />

        <Grid container sx={{
            width: "100vw",
            height: "100vh",

            backgroundImage: `url(${coverLogin.src})`,
            backgroundSize: "cover",


        }}>


            <Grid item xs={12} sm={12} md={2.7} sx={{margin: "auto",}} >


                <Card variant="outlined" sx={{
                    
                    padding: "20px",
                    background: "rgba(255, 255, 255, 0.30)",
                    borderRadius: "16px",
                    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                    backdropFilter: "blur(3px)",


                }}>

                    <form onSubmit={formik.handleSubmit} >
                        <Grid container xs={12} sm={12} md={12} columnSpacing={1}>

                            <Grid item xs={12} sm={12} md={12} >
                                <TextField
                                    sx={{
                                        width: "100%",
                                        margin: "5px 0",
                                        background: "rgba(255, 255, 255, 0.30)",
                                        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                                        backdropFilter: "blur(3px)",

                                    }}
                                    id="outlined-phone-input"
                                    label="نام و نام خانوادگی"
                                    type="text"
                                    autoComplete="current-password"
                                    value={formik.values.fullname}
                                    onChange={formik.handleChange("fullname")}
                                    onBlur={formik.handleBlur("fullname")}
                                />

                            </Grid>

                            <Grid item xs={12} sm={12} md={12} >
                                <TextField
                                    sx={{
                                        width: "100%",
                                        margin: "5px 0",
                                        background: "rgba(255, 255, 255, 0.30)",

                                        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                                        backdropFilter: "blur(3px)",
                                    }}
                                    id="outlined-phone-input"
                                    label="شماره تلفن"
                                    type="text"
                                    autoComplete="current-password"
                                    value={formik.values.phone}
                                    onChange={formik.handleChange("phone")}
                                    onBlur={formik.handleBlur("phone")}
                                />

                            </Grid>
                            <Grid item xs={12} sm={12} md={12}>

                                <FormControl sx={{
                                    margin: "5px 0",
                                    background: "rgba(255, 255, 255, 0.30)",
                                    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                                    backdropFilter: "blur(3px)",
                                    width: "100%",
                                    textAlign: "center",
                                    borderStyle: "none"
                                }} variant="outlined">
                                    <InputLabel sx={{textAlign: "center"}} htmlFor="outlined-adornment-password">رمز عبور</InputLabel>
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
                            <Grid item xs={8} sm={8} md={8}>
                                <Button sx={{
                                    margin: "5px 0",
                                   
                                    width: "100%"
                                }}  type='submit' size='large'
                                    variant='contained'
                                    color='success'


                                    onClick={() => {
                                        setOpen(true);
                                    }}>
                                    ثبت نام
                                </Button>
                                {" "}
                            </Grid>
                            <Grid item xs={4} sm={4} md={4}>

                                <Link href='../login'>
                                    <Button sx={{
                                    margin: "5px 0",
                                    background: "rgba(255, 255, 255, 0.30)",
                                    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                                    backdropFilter: "blur(3px)",
                                    width: "100%"
                                }}  size='large'
                                        variant='outlined'

                                        
                                    >
                                        ورود
                                    </Button>
                                </Link>
                            </Grid>
                        </Grid>
                    </form>

                </Card>
            </Grid>

        </Grid>
    </div >
    );
}
export default Register