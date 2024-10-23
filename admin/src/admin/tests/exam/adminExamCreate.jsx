import * as React from 'react';
import {
    Box,
    Button,
    TextField,
    Typography,
} from '@mui/material';

import Grid from '@mui/material/Unstable_Grid2/Grid2';
import moment from 'jalali-moment'
import { useContext } from 'react';
import { AuthContext } from '../../context/adminContext';
import * as Yup from "yup";
import { useFormik } from 'formik';


import { useCallback, useMemo, useRef, useState } from "react";
import QuillEditor from "react-quill";
import "react-quill/dist/quill.snow.css";
import { baseUrlImage } from '../../../utils/baseUrl';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { DatePicker, InputDatePicker } from 'jalaali-react-date-picker';

import "jalaali-react-date-picker/lib/styles/index.css";




const AdminTestCreate = () => {
    const [endDate, setEndDate] = useState()
    const [date, setDate] = useState()
    const { createExam, setTestIsActive, getOneTest, userId, uploadFile } = useContext(AuthContext)

    let Id = useLocation()
    Id = Id.pathname
    let type
    type = Id.lastIndexOf('/')
    type = Id.substr(type + 1)

    useEffect(
        () => {
            setTestIsActive({ isActive: false, id: type, Message: "آزمون جهت ویرایش امتحانات غیر فعال شد" })
        }, []
    )



    const formik = useFormik({
        initialValues: {
            testID: type,
            testName: "",
            date: "",
            price: "",
            caption: "",
            isActive: false,
            place: "",

        },
        onSubmit: (values) => {
            const data = {

                testID: type,
                testName: values.testName,
                date: date,
                endDate: endDate,
                price: values.price,
                caption: values.caption,
                isActive: false,
                place: values.place,


            }
            createExam(data);

        }
    })






    return (

        <Box sx={{
            width: '95%',
            marginTop: '100px'
        }}>
            <Grid
                sx={
                    {
                        marginBottom: "50px"
                    }
                }
            >

                <form onSubmit={formik.handleSubmit} >
                    <Grid container spacing={3} columns={{ xs: 2, sm: 8, md: 12 }}>
                        <Grid xs={2} sm={8} md={6}>
                            <TextField
                                sx={{ width: "100%", }}
                                id="outlined-name-input"
                                label="عنوان امتحان"
                                type="text"
                                multiline
                                value={formik.values.testName}
                                onChange={formik.handleChange("testName")}
                                onBlur={formik.handleBlur("testName")}
                            />
                        </Grid>
                        <Grid xs={2} sm={8} md={6}>
                            <TextField
                                sx={{ width: "100%" }}
                                id="outlined-name-input"
                                label="مکان برگذاری امتحان"
                                type="text"
                                multiline
                                value={formik.values.place}
                                onChange={formik.handleChange("place")}
                                onBlur={formik.handleBlur("place")}
                            />
                        </Grid>
                        <Grid xs={2} sm={8} md={6}>
                            <TextField
                                sx={{ width: "100%" }}
                                id="outlined-name-input"
                                label="کپشن"
                                type="text"
                                multiline
                                rows={13}
                                value={formik.values.caption}
                                onChange={formik.handleChange("caption")}
                                onBlur={formik.handleBlur("caption")}
                            />
                        </Grid>
                        <Grid container spacing={3} xs={2} sm={8} md={6}>

                            <Grid xs={2} sm={8} md={6}>
                                <Typography>
                                    تاریخ برگذاری امتحان : {date}
                                </Typography>
                                <DatePicker

                                    onChange={(d) => setDate(moment(d != null ? d._d : "1403/01/01", "YYYY-MM-DD---").locale('fa').format("YYYY/MM/DD"))
                                    }
                                />
                            </Grid><Grid xs={2} sm={8} md={6}>
                                <Typography>
                                     آخرین مهلت ثبت نام : {endDate}
                                </Typography>
                                <DatePicker

                                    onChange={(d) => setEndDate(moment(d != null ? d._d : "1403/01/01", "YYYY-MM-DD---").locale('fa').format("YYYY/MM/DD"))
                                    }
                                />
                            </Grid>
                        </Grid>

                        <Grid xs={2} sm={8} md={6}>
                            <TextField
                                sx={{ width: "100%" }}
                                id="outlined-name-input"
                                label="قیمت"
                                type="number"
                                multiline
                                value={formik.values.price}
                                onChange={formik.handleChange("price")}
                                onBlur={formik.handleBlur("price")}
                            />
                        </Grid>
                        <Grid xs={2} sm={8} md={6}>
                            <Button type='submit'
                                variant='contained'
                                color='primary'
                                size='large'

                                onClick={() => {

                                }}>
                                افزودن
                            </Button>
                        </Grid>
                    </Grid>
                </form>

            </Grid>
           

        </Box>

    )
}
export default AdminTestCreate

const top100Films = [{
    testName: {
        type: String,
        required: true
    },
    imageId: {
        type: String,
        required: true
    },
    caption: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    seoTitle: {
        type: String,
        required: true
    },
    seoCaption: {
        type: String,
        required: true
    },
    level: {
        type: String,
        required: true
    },
    Categories: {
        type: String,
        required: true
    },
    timer: {
        type: String,
        required: true
    },
    testType: {
        type: String,
        required: true,
        default: false
    },
    PriceOfPeriod: {
        type: Number,
        required: true
    },
    PriceOfMonths: {
        type: Number,
        required: true
    },
    PriceOfSeason: {
        type: Number,
        required: true
    },
    PriceOfSemester: {
        type: Number,
        required: true
    },
    PriceOfYears: {
        type: Number,
        required: true
    },
    performing: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    isActive: {
        type: Boolean,
        default: true
    }
}
];