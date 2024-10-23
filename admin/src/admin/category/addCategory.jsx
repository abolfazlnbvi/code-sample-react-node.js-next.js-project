import * as React from 'react';
import { useContext } from 'react';



import { AuthContext } from '../context/adminContext';
import { useFormik } from 'formik';

import { Box, Button, TextField } from '@mui/material';

import Grid from '@mui/material/Unstable_Grid2/Grid2';

import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import { useEffect } from 'react';

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

const AdminCategoryCreate = () => {

    const { addCategory, userId } = useContext(AuthContext)

    


    //-------------------------------------------------------------------------
    const [personName, setPersonName] = React.useState([]);

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            // On autofill we get a stringified value.
            value

        );
    };

    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {
        PaperProps: {
            style: {
                maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                width: 250,
            },
        },
    };




    //-------------------------------------------------------------------------
    const formik = useFormik({
        initialValues: {
            userId: userId,
            category: "",
            headline: "",
            part: "",
            period: "",
            season: "",
        },
        onSubmit: (values) => {
            const data = {
                userId: userId,
                category: values.category,
                headline: values.headline,
                part: personName,
                period: values.period,
                season: values.season,

            }
            addCategory(data);

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
                                value={formik.values.category}
                                onChange={formik.handleChange("category")}
                                onBlur={formik.handleBlur("category")}
                            />
                        </Grid>
                        <Grid xs={2} sm={8} md={6}>
                            <TextField
                                sx={{ width: "100%" }}
                                id="outlined-name-input"
                                label="عنوان قابل نمایش"
                                type="text"
                                multiline
                                rows={2}
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
                                value={formik.values.period}
                                onChange={formik.handleChange("period")}
                                onBlur={formik.handleBlur("period")}
                            />
                        </Grid>
                       
                        <Grid xs={2} sm={8} md={6}>


                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">بخش</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={personName}
                                    label="بخش"
                                    onChange={handleChange}
                                >
                                    <MenuItem value="test">آزمون ها</MenuItem>
                                    <MenuItem value="blog">بلاگ</MenuItem>
                                    <MenuItem value="ads">تبلیق ها</MenuItem>
                                    <MenuItem value="category">دسته بندی</MenuItem>
                                    <MenuItem value={"class"}>کلاس ها</MenuItem>
                                    <MenuItem value="product">محصولات</MenuItem>
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
export default AdminCategoryCreate
