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
import { AuthContext } from '../context/adminContext';
import * as Yup from "yup";
import { useFormik } from 'formik';


import { useCallback, useMemo, useRef, useState } from "react";
import QuillEditor from "react-quill";
import "react-quill/dist/quill.snow.css";
import { baseUrlImage } from '../../utils/baseUrl';
import { useEffect } from 'react';

import JoditEditor from 'jodit-react';




const AdminTestCreate = () => {

    const [value, setValue] = useState("");
    const { createTest, category, userId, uploadFile, getAllCategoryByfilter } = useContext(AuthContext)
    const [categorys, setCategorys] = React.useState("");



    
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
    useEffect(
        () => {
            getAllCategoryByfilter({
                value: "test",
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

            testName: "",
            imageId: "",
            caption: value,
            url: "",
            seoTitle: "",
            seoCaption: "",
            level: "",
            Categories: "",
            isActive: false

        },
        onSubmit: (values) => {
            const data = {

                userId: userId,
                name: values.testName,
                imageId: values.imageId,
                caption: value,
                url: values.url,
                seoTitle: values.seoTitle,
                seoCaption: values.seoCaption,
                Categories: categorys,
                isActive: false,


            }
            createTest(data);

        }
    })


    const quill = useRef();


    function handler() {
        console.log(value);
    }

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
                                label="آدرس تصویر"
                                type="text"
                                multiline
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
                                    value={formik.values.level}
                                    label="سطح آزمون"
                                    onChange={formik.handleChange("level")}
                                    onBlur={formik.handleBlur("level")}
                                >
                                    <MenuItem value={10}>آسان</MenuItem>
                                    <MenuItem value={20}>متوسط</MenuItem>
                                    <MenuItem value={30}>سخت</MenuItem>
                                </Select>
                            </FormControl>

                        </Grid> */}
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
                            <JoditEditor
                                ref={editor}
                                value={value}
                                config={config}
                                tabIndex={1} // tabIndex of textarea
                                onBlur={(newContent) => setValue(newContent)} // preferred to use only this option to update the content for performance reasons
                                
                            />


                        </Grid>
                        <Grid xs={2} sm={8} md={12}>
                            <div id='QuillEditorImage'></div>
                            {/* <QuillEditor
                                ref={(el) => (quill.current = el)}

                                theme="snow"
                                value={value}
                                formats={formats}
                                modules={modules}
                                onChange={(value) => setValue(value)}
                            /> */}

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