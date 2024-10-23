import * as React from 'react';
import { useContext, useState, useCallback, useMemo, useRef, } from 'react';

import moment from 'jalali-moment';


import { AuthContext } from '../context/adminContext';
import { useFormik } from 'formik';

import { Box, Button, Card, CardActions, CardContent, Checkbox, Divider, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';


import QuillEditor from "react-quill";
import "react-quill/dist/quill.snow.css";

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';



const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);
const AdminrequestRes = () => {

    const [status, setStatus] = useState();
    const { reqestRes, userId, getOneRequest, oneRequest } = useContext(AuthContext)
    let Id = useLocation()
    Id = Id.pathname
    let type
    type = Id.lastIndexOf('/')
    type = Id.substr(type + 1)

    useEffect(
        () => {
            getOneRequest(type)
        }, []
    )



    const formik = useFormik({
        initialValues: {
            userId: userId,
            status: "",
            id: type,
            adminText: ""

        },
        onSubmit: (values) => {
            const data = {
                userId: userId,
                adminText: values.adminText,
                status: status,
                id: type,
            }
            reqestRes(data);

        }
    })


    // Editor ref





    return (

        <Box sx={{
            width: '100%',
            marginTop: '70px'
        }}>
            <Grid container spacing={3}
                sx={{ width: "100%" }}
            >
                <Grid item xs={12} md={6} >

                    <form onSubmit={formik.handleSubmit} >
                        <Grid container spacing={3} >



                            <Grid item xs={12}>
                                <TextField
                                    sx={{ width: "100%", }}
                                    id="outlined-name-input"
                                    label="پاسخ"
                                    type="text"
                                    multiline
                                    rows={8}
                                    value={formik.values.adminText}
                                    onChange={formik.handleChange("adminText")}
                                    onBlur={formik.handleBlur("adminText")}
                                />
                            </Grid>


                            <Grid item xs={12} >
                                <Grid container xs={12} spacing={3} >
                                    <Grid xs={6} sx={{ margin: "auto" }} item>

                                        <Button onClick={() => { setStatus(2) }} sx={{ width: "100%" }} type='submit'
                                            variant='contained'
                                            color='success'
                                        >
                                            تایید درخواست
                                        </Button>
                                    </Grid>
                                    <Grid xs={6} sx={{ margin: "auto" }} item>
                                        <Button onClick={() => { setStatus(3) }} sx={{ width: "100%" }} type='submit'
                                            variant='contained'
                                            color='error'
                                        >
                                            رد درخواست
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </form>

                </Grid>

                {
                    oneRequest.request ?
                        <Grid item sx={{ width: "100%" }} xs={12} md={6} >
                            <Grid container spacing={3}
                                sx={{ width: "100%" }}
                            >
                                <Grid item sx={{ width: "100%" }} xs={12} >
                                    <Card sx={{ width: "100%" }}>
                                        <CardContent>
                                            <Typography variant='h4' gutterBottom>
                                                درخواست
                                            </Typography>
                                            <Divider />

                                            <Typography variant='h6' gutterBottom>
                                                {oneRequest.request.request}
                                            </Typography>
                                            <Divider />

                                            <Typography color="text.secondary" sx={{ mb: 1.5 }}>
                                                دسته بندی : {oneRequest.request.categories}
                                            </Typography>
                                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                                تاریخ درخواست : {moment(oneRequest.request.createdAt).locale('fa').format("HH:mm:ss YYYY/MM/DD ")}
                                            </Typography>
                                            <Typography variant="body2">
                                                بخش :  {oneRequest.request.place[1]}

                                            </Typography>
                                            <Typography variant="body2">
                                                وضعیت:  {oneRequest.request.status == 0 ?
                                                    <Button onClick={() => { }} color='primary'>
                                                        بررسی نشده
                                                    </Button>
                                                    :
                                                    oneRequest.request.status == 1 ?
                                                        <Button onClick={() => { }} color='warning'>
                                                            در انتظار پاسخگویی
                                                        </Button>
                                                        :
                                                        oneRequest.request.status == 2 ?
                                                            <Button onClick={() => { }} color='success'>
                                                                موافقت
                                                            </Button>
                                                            :
                                                            oneRequest.request.status == 3 ?
                                                                <Button onClick={() => { }} color='error'>
                                                                    مخالفت
                                                                </Button>
                                                                :
                                                                oneRequest.request.status == 4 ?
                                                                    <Button onClick={() => { }} color='secondary'>
                                                                        درخواست بررسی مجدد
                                                                    </Button>
                                                                    :
                                                                    ""
                                                }
                                            </Typography>
                                            <Typography variant="body2">
                                                {oneRequest.request.isActive}

                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button size="small">Learn More</Button>
                                        </CardActions>
                                    </Card>
                                </Grid>
                                <Grid item sx={{ width: "100%" }} xs={12} >
                                    <Card sx={{ width: "100%" }}>
                                        <Typography variant='h4' >
                                            {oneRequest.request.place[1]}
                                        </Typography>
                                        <Divider />
                                        <CardContent>
                                            <Typography variant='h5' color="text.secondary" gutterBottom>
                                                نام آزمون : {oneRequest.requestId.testName}
                                            </Typography>
                                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                                قیمت :   {oneRequest.requestId.price}
                                            </Typography>
                                            <Typography color="text.secondary" variant="body2">
                                                وضعیت :   {oneRequest.requestId.isActive == true ? "فعال" : "غیر فعال"}
                                            </Typography>
                                            <Typography color="text.secondary" variant="body2">
                                                آخرین بروزرسانی :  {moment(oneRequest.requestId.createdAt).locale('fa').format("HH:mm:ss YYYY/MM/DD ")}
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button size="small">Learn More</Button>
                                        </CardActions>
                                    </Card>
                                </Grid>
                                <Grid item sx={{ width: "100%" }} xs={12} >
                                    <Card sx={{ width: "100%" }}>

                                        <CardContent>
                                            <Typography variant='h4' >
                                                کاربر
                                            </Typography>
                                            <Divider />
                                            <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
                                                نام :  {oneRequest.user.fullname}
                                            </Typography>
                                            <Typography sx={{ fontSize: 16 }} >
                                                شماره تماس : {oneRequest.user.phone}
                                            </Typography>
                                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                                تاریخ ورود :  {moment(oneRequest.user.createdAt).locale('fa').format("HH:mm:ss YYYY/MM/DD ")}
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button size="small">Learn More</Button>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            </Grid>

                        </Grid>

                        :
                        ""
                }





            </Grid>

        </Box>

    )
}
export default AdminrequestRes

