import * as React from 'react';
import { useContext, useState, useCallback, useMemo, useRef, } from 'react';



import { AuthContext } from '../context/adminContext';
import { useFormik } from 'formik';

import { Box, Button, Checkbox, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';



import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { useEffect } from 'react';


import JoditEditor from 'jodit-react';


const AdminBlogCreate = () => {

    const [value, setValue] = useState("");
    const { addBlog, userId, getAllCategoryByfilter, category } = useContext(AuthContext)
    const [categorys, setCategorys] = React.useState("");

    useEffect(
        () => {
            getAllCategoryByfilter({
                value: "blog",
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
            userId: userId,
            name: "",
            image: "",
            isActive: false,
            categories: "",
            path: "",
            seo: "",
            blog: value,
        },
        onSubmit: (values) => {
            const data = {
                userId: userId,
                name: values.name,
                image: values.image,
                isActive: values.isActive,
                categories: categorys,
                path: values.path,
                seo: values.seo,
                blog: value,
            }
            addBlog(data);

        }
    })


        const editor = useRef(null);

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
                                label="تیتر بلاگ"
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
                                label="سئو"
                                type="text"
                                multiline
                                rows={3}
                                value={formik.values.seo}
                                onChange={formik.handleChange("seo")}
                                onBlur={formik.handleBlur("seo")}
                            />
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
                            <Checkbox
                                value={formik.values.isActive}
                                onChange={formik.handleChange("isActive")}
                                onBlur={formik.handleBlur("isActive")}
                            />
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
export default AdminBlogCreate

