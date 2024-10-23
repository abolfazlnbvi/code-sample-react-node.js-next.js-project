import * as React from 'react';
import { useContext, useState, useCallback, useMemo, useRef, } from 'react';



import { AuthContext } from '../context/adminContext';
import { useFormik } from 'formik';

import { Box, Button, Checkbox, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';


import JoditEditor from 'jodit-react';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';




const AdminBlogEdit = () => {

    const [value, setValue] = useState(undefined);
    const {getAllCategoryByfilter,category, getOneBlog, editBlog, userId, oneBlog, } = useContext(AuthContext)
    let Id = useLocation()
    Id = Id.pathname
    let type
    type = Id.lastIndexOf('/')
    type = Id.substr(type + 1)

    useEffect( () => {

        getOneBlog(type)
        getAllCategoryByfilter({
            value: "blog",
            key: "part"
        })
    

    },[])

    const [categorys, setCategorys] = React.useState("");

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
            id: "",
            userId: oneBlog.userId,
            name: oneBlog.name,
            image: oneBlog.image,
            isActive: oneBlog.isActive,
            categories: oneBlog.categories,
            path: oneBlog.path,
            seo: oneBlog.seo,
            blog: value,
        },
        onSubmit: (values) => {
            const data = {
                id: oneBlog._id,
                userId: userId,
                name: values.name,
                image: values.image,
                isActive: values.isActive,
                categories: categorys,
                path: values.path,
                seo: values.seo,
                blog: value,
            }
            editBlog(data);

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

                    <Grid xs={2} sm={12} md={12}>
                            <Button type='submit'
                                variant='contained'
                                color='primary'
                            >
                                ویرایش بلاگ
                            </Button>
                        </Grid>

                        <Grid xs={2} sm={8} md={6}>
                            <TextField
                                sx={{ width: "100%", }}
                                id="outlined-name-input"
                                label="تیتر بلاگ"
                                type="text"
                                multiline
                                rows={2}
                                defaultValue={oneBlog.name}
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
                                defaultValue={oneBlog.image}
                                value={formik.values.image}
                                onChange={formik.handleChange("image")}
                                onBlur={formik.handleBlur("image")}
                            />
                        </Grid>
                        
                        <FormControl fullWidth>
                            <InputLabel ></InputLabel>
                            <Select
                                
                                value={categorys}
                                displayEmpty
                                onChange={handleChange}
                            >
                                {category != [] ? category.map((data) => (
                                    <MenuItem value={data.category == oneBlog.categories ? "" :data.category}>
                                        {data.headline}
                                    </MenuItem>
                                )) : ""}

                            </Select>
                        </FormControl>
                        <Grid xs={2} sm={8} md={6}>
                            <TextField
                                sx={{ width: "100%" }}
                                id="outlined-name-input"
                                label="سئو"
                                type="text"
                                multiline
                                rows={3}
                                defaultValue={oneBlog.seo}
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
                                defaultValue={oneBlog.path}
                                value={formik.values.path}
                                onChange={formik.handleChange("path")}
                                onBlur={formik.handleBlur("path")}
                            />
                        </Grid>

                        <Grid xs={2} sm={8} md={6}>
                            <Checkbox
                                defaultValue={oneBlog.isActive}
                                value={formik.values.isActive}
                                onChange={formik.handleChange("isActive")}
                                onBlur={formik.handleBlur("isActive")}
                            />
                        </Grid>


                        <Grid xs={2} sm={8} md={12}>
                            <div id='QuillEditorImage'></div>
                            <JoditEditor
                                ref={editor}
                                value={value == undefined ? oneBlog.blog : value}
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
                                ویرایش بلاگ
                            </Button>
                        </Grid>
                    </Grid>
                </form>

            </Grid>


        </Box>

    )
}
export default AdminBlogEdit

