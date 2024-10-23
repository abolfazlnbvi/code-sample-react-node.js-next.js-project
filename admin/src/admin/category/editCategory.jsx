import * as React from 'react';
import { useContext } from 'react';



import { AuthContext } from '../context/adminContext';
import { useFormik } from 'formik';

import { Box, Button, TextField } from '@mui/material';

import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
/*
category: {
    type: String,
    required: true
},
headline: {
    type: String,
    required: true
},
part: {
    type: String,
    required: true
},
period: {
    type: String,
    required: true
},
season: {
    type: String,
    required: true
},  
createdAt: {
    type: Date,
    default: Date.now
}
*/

const AdminCategoryEdit = () => {
    const { getOneCategory, editCategory, userId, oneCategory, } = useContext(AuthContext)
    let Id = useLocation()
    Id = Id.pathname
    let type
    type = Id.lastIndexOf('/')
    type = Id.substr(type + 1)

    useEffect(() => {

        getOneCategory(type)


    }, [])
    const [personName, setPersonName] = React.useState("");

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        console.log(value);
        setPersonName(
            // On autofill we get a stringified value.
            value

        );
    };





    const formik = useFormik({
        initialValues: {
            id: oneCategory._id,
            userId: userId,
            category: oneCategory.category,
            headline: oneCategory.headline,
            part: oneCategory.part,
            period: oneCategory.period,
            season: oneCategory.season,
        },
        onSubmit: (values) => {
            const data = {
                userId: userId,
                id: oneCategory._id,
                category: values.category,
                headline: values.headline,
                part: personName == "" ? oneCategory.part : personName,
                period: values.period,
                season: values.season,

            }
            editCategory(data);

        }
    })


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
                                label="دسته بندی"
                                type="text"
                                multiline
                                rows={2}
                                defaultValue={oneCategory.category}
                                value={formik.values.category}
                                onChange={formik.handleChange("category")}
                                onBlur={formik.handleBlur("category")}
                            />
                        </Grid>
                        <Grid xs={2} sm={8} md={6}>
                            <TextField
                                sx={{ width: "100%" }}
                                id="outlined-name-input"
                                label="عنوان"
                                type="text"
                                multiline
                                rows={2}
                                defaultValue={oneCategory.headline}
                                value={formik.values.headline}
                                onChange={formik.handleChange("headline")}
                                onBlur={formik.handleBlur("headline")}
                            />
                        </Grid>
                        <Grid xs={2} sm={8} md={6}>
                            <TextField
                                sx={{ width: "100%" }}
                                id="outlined-name-input"
                                label="فصل"
                                type="text"
                                multiline
                                rows={3}
                                defaultValue={oneCategory.season}
                                value={formik.values.season}
                                onChange={formik.handleChange("season")}
                                onBlur={formik.handleBlur("season")}
                            />
                        </Grid>
                        <Grid xs={2} sm={8} md={6}>
                            <TextField
                                sx={{ width: "100%" }}
                                id="outlined-name-input"
                                label="دوره"
                                type="text"
                                multiline
                                defaultValue={oneCategory.period}
                                value={formik.values.period}
                                onChange={formik.handleChange("period")}
                                onBlur={formik.handleBlur("period")}
                            />
                        </Grid>
                        <Grid xs={2} sm={8} md={6}>

                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">بخش</InputLabel>
                                <Select
                                    value={personName}
                                    onChange={handleChange}
                                    displayEmpty
                                   
                                >
                                  
                                    <MenuItem value={oneCategory.part == "test"? "" : "test"}>آزمون ها</MenuItem>
                                    <MenuItem value={oneCategory.part == "blog"? "" : "blog" }>بلاگ</MenuItem>
                                    <MenuItem value={oneCategory.part == "ads"? "" : "ads"}>تبلیق ها</MenuItem>
                                    <MenuItem value={oneCategory.part == "category"? "" : "category"}>دسته بندی</MenuItem>
                                    <MenuItem value={oneCategory.part == "class"? "" : "class"}>کلاس ها</MenuItem>
                                    <MenuItem value={oneCategory.part == "product"? "" : "product"}>محصولات</MenuItem>
                                </Select>
                            </FormControl>

                        </Grid>
                        <Grid xs={2} sm={8} md={6}>
                            <Button type='submit'
                                variant='contained'
                                color='primary'
                            >
                                افزودن دسته بندی
                            </Button>
                        </Grid>
                    </Grid>
                </form>

            </Grid>


        </Box>

    )
}
export default AdminCategoryEdit

