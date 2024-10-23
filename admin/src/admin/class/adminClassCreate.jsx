import * as React from 'react';
import { useContext, useState, useCallback, useMemo, useRef, } from 'react';



import { AuthContext } from '../context/adminContext';
import { useFormik } from 'formik';

import { Box, Button, Checkbox, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';


import QuillEditor from "react-quill";
import "react-quill/dist/quill.snow.css";
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { useEffect } from 'react';
import JoditEditor from 'jodit-react';
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';



const AdminClassCreate = () => {

    const [value, setValue] = useState("");
    const { addClass, userId, getAllCategoryByfilter, category } = useContext(AuthContext)
    const [categorys, setCategorys] = React.useState("");
    const [startTime, setStartTime] = useState('10:00');
    const [endTime, setEndTime] = useState('10:00');

    useEffect(
        () => {
            getAllCategoryByfilter({
                value: "class",
                key: "part"
            })
        }, []
    )
    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        console.log(value);
        setCategorys(
            // On autofill we get a stringified value.
            value

        );
    };


    const formik = useFormik({
        initialValues: {
            userId: "",
            name: "",
            image: "",
            category: "",
            master: "",
            capacity: '',
            caption: value,
            price: '',
            place: '',
            startTime: startTime,
            endTime: endTime,
            week: '',
            path: '',

        },
        onSubmit: (values) => {
            const data = {
                userId: userId,
                name: values.name,
                image: values.image,
                category: categorys,
                master: values.master,
                capacity: values.capacity,
                caption: value,
                price: values.price,
                place: values.place,
                time: [startTime, endTime],
                week: [0, 1, 2, 3, 4, 5, 6,],
                path: values.path,

            }
            addClass(data);

        }
    })


    const editor = useRef(null);
    const [content, setContent] = useState('');
    const placeholder = ""
    const config = useMemo(
        () => ({
            readonly: false, // all options from https://xdsoft.net/jodit/docs/,
            placeholder: placeholder || 'Start typings...'
        }),
        [placeholder]
    );

    return (

        <Box sx={{
            width: '95%',
            marginTop: '70px'
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
                                label="تیتر کلاس"
                                type="text"
                                multiline
                                rows={2}
                                value={formik.values.name}
                                onChange={formik.handleChange("name")}
                                onBlur={formik.handleBlur("name")}
                            />
                        </Grid>
                        <Grid xs={2} sm={8} md={6}>
                            <TextField
                                sx={{ width: "100%" }}
                                id="outlined-name-input"
                                label="آدرس تصویر"
                                type="text"
                                multiline
                                rows={2}
                                value={formik.values.image}
                                onChange={formik.handleChange("image")}
                                onBlur={formik.handleBlur("image")}
                            />
                        </Grid>
                        <Grid xs={2} sm={8} md={6}>


                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">بخش</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={categorys}
                                    label="بخش"
                                    onChange={handleChange}
                                >
                                    {category != [] ? category.map((data) => (
                                        <MenuItem value={data.category}>{data.headline}</MenuItem>
                                    )) : ""}

                                </Select>
                            </FormControl>

                        </Grid>
                        <Grid xs={2} sm={8} md={6}>
                            <TextField
                                sx={{ width: "100%" }}
                                id="outlined-name-input"
                                label="لینک"
                                type="text"
                                multiline
                                value={formik.values.path}
                                onChange={formik.handleChange("path")}
                                onBlur={formik.handleBlur("path")}
                            />
                        </Grid>
                        <Grid xs={2} sm={8} md={6}>
                            <TextField
                                sx={{ width: "100%" }}
                                id="outlined-name-input"
                                label="ظرفیت کلاس"
                                type="text"
                                multiline
                                value={formik.values.capacity}
                                onChange={formik.handleChange("capacity")}
                                onBlur={formik.handleBlur("capacity")}
                            />
                        </Grid>
                        <Grid xs={2} sm={8} md={6}>
                            <TextField
                                sx={{ width: "100%" }}
                                id="outlined-name-input"
                                label="قیمت"
                                type="text"
                                multiline
                                value={formik.values.price}
                                onChange={formik.handleChange("price")}
                                onBlur={formik.handleBlur("price")}
                            />
                        </Grid>
                        <Grid xs={2} sm={8} md={6}>
                            <TextField
                                sx={{ width: "100%" }}
                                id="outlined-name-input"
                                label="مکان برگذاری کلاس"
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
                                label="زمان شروع کلاس"
                                type="text"
                                multiline
                                value={startTime}
                                onChange={formik.handleChange("startTime")}
                                onBlur={formik.handleBlur("startTime")}
                            />
                            <TimePicker format="HH:mm" onChange={setStartTime} value={startTime} />
                        </Grid>
                        <Grid xs={2} sm={8} md={6}>
                            <TextField
                                sx={{ width: "100%" }}
                                id="outlined-name-input"
                                label="زمان پایان کلاس"
                                type="text"
                                multiline
                                value={endTime}
                                onChange={formik.handleChange("endTime")}
                                onBlur={formik.handleBlur("endTime")}
                            />
                            <TimePicker format="HH:mm" onChange={setEndTime} value={endTime} />

                        </Grid>
                        <Grid xs={2} sm={8} md={6}>
                            <TextField
                                sx={{ width: "100%" }}
                                id="outlined-name-input"
                                label="نام مدرس"
                                type="text"
                                multiline
                                value={formik.values.master}
                                onChange={formik.handleChange("master")}
                                onBlur={formik.handleBlur("master")}
                            />
                        </Grid>
                        <Grid xs={2} sm={8} md={6}>
                            <Checkbox
                                value={formik.values.isActive}
                                onChange={formik.handleChange("isActive")}
                                onBlur={formik.handleBlur("isActive")}
                            />
                            start
                            ...
                            end

                            ..........
                            week: '',

                        </Grid>


                        <Grid xs={2} sm={8} md={12}>
                            <JoditEditor
                                ref={editor}
                                value={value}
                                config={config}
                                tabIndex={1} // tabIndex of textarea
                                onBlur={(newContent) => setValue(newContent)} // preferred to use only this option to update the content for performance reasons

                            />


                        </Grid>


                        <Grid xs={2} sm={8} md={6}>
                            <Button type='submit'
                                variant='contained'
                                color='primary'
                            >
                                افزودن بلاگ
                            </Button>
                        </Grid>
                    </Grid>
                </form>

            </Grid>


        </Box>

    )
}
export default AdminClassCreate

