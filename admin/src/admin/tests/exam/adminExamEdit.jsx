import * as React from 'react';
import {
    Autocomplete,
    Box,
    Button,
    Checkbox,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    Stack,
    TextField,

} from '@mui/material';

import Grid from '@mui/material/Unstable_Grid2/Grid2';

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





const AdminTestCreate = () => {

    const [value, setValue] = useState(undefined);
    const { editTest, oneTest, getOneTest, category,setTestIsActive, userId, getAllCategoryByfilter } = useContext(AuthContext)
    const [categorys, setCategorys] = React.useState("");
    let Id = useLocation()
    Id = Id.pathname
    let type
    type = Id.lastIndexOf('/')
    type = Id.substr(type + 1)
    useEffect(
        () => {
            setTestIsActive({ isActive: false, id: type, Message: "آزمون جهت ویرایش غیر فعال شد" })
            getOneTest(type)
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
            id: type,
            testName: oneTest.testName,
            imageId: oneTest.imageId,
            caption: oneTest.caption,
            url: oneTest.url,
            seoTitle: oneTest.seoTitle,
            seoCaption: oneTest.seoCaption,
            Categories: oneTest.Categories,
            isActive: oneTest.isActive

        },
        onSubmit: (values) => {
            const data = {
                id: oneTest._id,
                userId: userId,
                testName: values.testName,
                imageId: values.imageId,
                caption: value,
                url: values.url,
                seoTitle: values.seoTitle,
                seoCaption: values.seoCaption,
                Categories: categorys !== "" || null || undefined ? categorys : undefined,
                isActive: false,


            }
            editTest(data);

        }
    })


    const quill = useRef();




    const imageHandler = useCallback(() => {
        const input = document.createElement("input");
        input.setAttribute("type", "text");
        input.setAttribute("id", "imageinput");
        input.style.position = 'fixed'
        input.style.top = '50%'
        input.style.left = '50%'
        input.onchange = (e) => {
            console.log(e.target.value)
            const quillEditor = quill.current.getEditor();

            const range = quillEditor.getSelection(true);
            quillEditor.insertEmbed(range.index, "image", `${baseUrlImage}/${e.target.value}`);
        }
        input.onblur = () => {
            document.getElementById("imageinput").remove()
        }


        document.body.appendChild(input);

    }, []);

    const modules = useMemo(
        () => ({
            toolbar: {
                container: [
                    [{ header: [2, 3, 4, false] }],
                    ["bold", "italic", "underline", "blockquote"],
                    [{ color: [] }],
                    [
                        { list: "ordered" },
                        { list: "bullet" },
                        { indent: "-1" },
                        { indent: "+1" },
                    ],
                    ["link", "image", "video"],
                    ["clean"],
                ],
                handlers: {
                    image: imageHandler,
                },
            },
            clipboard: {
                matchVisual: true,
            },
        }),
        [imageHandler]
    );

    const formats = [
        "header",
        "bold",
        "italic",
        "underline",
        "strike",
        "blockquote",
        "list",
        "bullet",
        "indent",
        "link",
        "image",
        "video",
        "color",
        "clean",
    ];



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
                                label="نام آزمون"
                                hiddenLabel
                                type="text"
                                multiline
                                defaultValue={oneTest.testName}
                                value={formik.values.testName}
                                onChange={formik.handleChange("testName")}
                                onBlur={formik.handleBlur("testName")}
                            />
                        </Grid>
                        <Grid xs={2} sm={8} md={6}>
                            <TextField
                                sx={{ width: "100%" }}
                                id="outlined-name-input"
                                label="آدرس تصویر"
                                type="text"
                                multiline
                                defaultValue={oneTest.imageId}
                                value={formik.values.imageId}
                                onChange={formik.handleChange("imageId")}
                                onBlur={formik.handleBlur("imageId")}
                            />
                        </Grid>


                        <Grid xs={2} sm={8} md={6}>
                            <TextField
                                sx={{ width: "100%" }}
                                id="outlined-name-input"
                                label="آدرس"
                                type="text"
                                multiline
                                defaultValue={oneTest.url}
                                value={formik.values.url}
                                onChange={formik.handleChange("url")}
                                onBlur={formik.handleBlur("url")}
                            />
                        </Grid>
                        <Grid xs={2} sm={8} md={6}>
                            <TextField
                                sx={{ width: "100%" }}
                                id="outlined-name-input"
                                label="عنوان"
                                type="text"
                                multiline
                                defaultValue={oneTest.seoTitle}
                                value={formik.values.seoTitle}
                                onChange={formik.handleChange("seoTitle")}
                                onBlur={formik.handleBlur("seoTitle")}
                            />
                        </Grid>
                        <Grid xs={2} sm={8} md={6}>
                            <TextField
                                sx={{ width: "100%" }}
                                id="outlined-name-input"
                                label="کپشن سئو"
                                type="text"
                                multiline
                                defaultValue={oneTest.seoCaption}
                                value={formik.values.seoCaption}
                                onChange={formik.handleChange("seoCaption")}
                                onBlur={formik.handleBlur("seoCaption")}
                            />
                        </Grid>
                        {/* <Grid xs={2} sm={8} md={6}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">سطح آزمون</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    displayEmpty
                                    value={formik.values.level}
                                    label="سطح آزمون"
                                    onChange={formik.handleChange("level")}
                                    onBlur={formik.handleBlur("level")}
                                >
                                    <MenuItem value={10 == oneTest.level ? "" : 10}>آسان</MenuItem>
                                    <MenuItem value={20 == oneTest.level ? "" : 20}>متوسط</MenuItem>
                                    <MenuItem value={30 == oneTest.level ? "" : 30}>سخت</MenuItem>
                                </Select>
                            </FormControl>

                        </Grid> */}
                        <Grid xs={2} sm={8} md={6}>


                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label"></InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={categorys}

                                    displayEmpty
                                    onChange={handleChange}

                                >
                                    {category != [] ? category.map((data) => (
                                        <MenuItem value={value == undefined ? oneTest.Categories : value} >{data.headline}</MenuItem>
                                    )) : ""}

                                </Select>
                            </FormControl>

                        </Grid>
                        {/* <Grid xs={2} sm={8} md={6}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">نوع آزمون</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={formik.values.testType}
                                    label="نوع آزمون"
                                    onChange={formik.handleChange("testType")}
                                    onBlur={formik.handleBlur("testType")}
                                >
                                    <MenuItem value={10}>حضوری</MenuItem>
                                    <MenuItem value={20}>نیم حضوری</MenuItem>
                                    <MenuItem value={30}>مجازی</MenuItem>
                                </Select>
                            </FormControl>

                        </Grid> */}

                        <Grid xs={2} sm={8} md={12}>
                            <div id='QuillEditorImage'></div>
                            <QuillEditor
                                ref={(el) => (quill.current = el)}

                                theme="snow"
                                value={value == undefined ? oneTest.caption : value}
                                formats={formats}
                                modules={modules}
                                onChange={(value) => setValue(value)}
                            />

                        </Grid>

                        <Grid xs={2} sm={8} md={6}>
                            <Button type='submit'
                                variant='contained'
                                color='primary'

                                onClick={() => {

                                }}>
                                افزودن دوره
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