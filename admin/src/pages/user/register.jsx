import * as React from 'react';
import { useContext } from 'react';
import { AuthContext } from './../../admin/context/adminContext';
import { Box, Button, Card, CssBaseline, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material';
import * as Yup from "yup";

import { useFormik } from 'formik';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Visibility from '@mui/icons-material/Visibility';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { Link } from 'react-router-dom';
const formSchema = Yup.object({
    phone: Yup.number().required("ایمیل شما الزامی است"),
    password: Yup.string().required("پسوورد شما الزامی است")
})


const Register = () => {
    const { register } = useContext(AuthContext)
    const [showPassword, setShowPassword] = React.useState(false);


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
    return (
        <>

            <CssBaseline />

            <Grid container spacing={3}>


                <Box>



                    <Grid rowSpacing={1}

                        sx={{
                            width: '100%',
                            margin: 'auto'
                        }}>

                        <Card variant="elevation">



                            <form onSubmit={formik.handleSubmit} >
                                <Grid container spacing={2} sx={{
                                    justifyContent: 'center'
                                }}>

                                    <Grid xs={12} sm={12} md={12}>
                                        <TextField
                                            id="outlined-name-input"
                                            label="نام و نام خانوادگی"
                                            type="text"
                                            autoComplete="current-password"
                                            value={formik.values.fullname}
                                            onChange={formik.handleChange("fullname")}
                                            onBlur={formik.handleBlur("fullname")}
                                        />
                                    </Grid>
                                    <Grid xs={12} sm={12} md={12}>
                                        <TextField
                                            id="outlined-phone-input"
                                            label="تلفن همراه"
                                            type="text"
                                            autoComplete="current-password"
                                            value={formik.values.phone}
                                            onChange={formik.handleChange("phone")}
                                            onBlur={formik.handleBlur("phone")}
                                        />

                                    </Grid>
                                    <Grid xs={12} sm={12} md={12}>

                                        <FormControl variant="outlined">
                                            <InputLabel htmlFor="outlined-adornment-password">کلمه عبور</InputLabel>
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
                                                label="کلمه عبور"
                                                value={formik.values.password}
                                                onChange={formik.handleChange("password")}
                                                onBlur={formik.handleBlur("password")}
                                            />
                                        </FormControl>

                                    </Grid>
                                    <Grid xs={12} sm={12} md={12}>

                                        <Button type='submit' variant='contained'> ثبت نام</Button>
                                        <Link to='../login'>
                                            <Button type='submit'
                                                variant='text'
                                                color='inherit'>
                                                ورود
                                            </Button>
                                        </Link>
                                    </Grid>
                                </Grid>
                            </form>


                        </Card>
                    </Grid>
                </Box>
            </Grid>

        </>
    )
}
export default Register