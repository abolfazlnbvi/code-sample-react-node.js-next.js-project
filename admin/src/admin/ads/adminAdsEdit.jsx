import * as React from 'react';
import { Box, Button, CardMedia, Checkbox, FormControl, FormControlLabel, FormGroup, InputLabel, MenuItem, Select, SpeedDial, SpeedDialIcon, TextField } from '@mui/material';
import { useEffect } from 'react';

import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { Link, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/adminContext';
import * as Yup from "yup";
import { useFormik } from 'formik';
import { useState } from 'react';

const formSchema = Yup.object({
    idTest: Yup.string().required(),
    categories: Yup.string().required(),
    question: Yup.string().required(),
    answer: Yup.string().required(),
    isActive: Yup.boolean().required(),
})


const AdminAdsEdit = () => {

    const [value, setValue] = useState(undefined);
    const { getOneAds, editAds, userId, oneAds, getAllCategoryByfilter, category } = useContext(AuthContext)
    const [categorys, setCategorys] = React.useState("");
    const { } = useContext(AuthContext)
    let Id = useLocation()
    Id = Id.pathname
    let type
    type = Id.lastIndexOf('/')
    type = Id.substr(type + 1)




    useEffect(
        () => {
            getOneAds(type)
            getAllCategoryByfilter({
                value: "ads",
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
            id: oneAds._id,
            name: oneAds.name,
            caption: oneAds.caption,
            categories: oneAds.categories,
            image: oneAds.image,
            size: oneAds.size,
            path: oneAds.path,
            place: [],
            isActive: oneAds.isActive,
            userId: oneAds.userId
        },
        onSubmit: (values) => {
            const data = {
                id: oneAds._id,
                name: values.name,
                caption: values.caption,
                categories: values.categories,
                image: values.image,
                size: values.size,
                path: values.path,
                place: categorys,
                isActive: values.isActive,
                userId: userId



            }
            editAds(data);
            console.log(data);

        },

    })



    return (

        <Box sx={{
            width: '100%',
            marginTop: '70px'
        }}>


            <form onSubmit={formik.handleSubmit} >

                <Grid container spacing={3} >


                    <Grid xs={12} md={6}>
                        <TextField
                            sx={{ width: "100%" }}
                            id="outlined-name-input"
                            label="نام تبلیق"
                            type="text"
                            multiline
                            rows={2}
                            defaultValue={oneAds.name}
                            value={formik.values.name}
                            onChange={formik.handleChange("name")}
                            onBlur={formik.handleBlur("name")}
                        />
                    </Grid>
                    <Grid xs={12} md={6}>
                        <TextField
                            sx={{ width: "100%" }}
                            id="outlined-name-input"
                            label="توضیحات"
                            type="text"
                            multiline
                            rows={2}
                            defaultValue={oneAds.caption}
                            value={formik.values.caption}
                            onChange={formik.handleChange("caption")}
                            onBlur={formik.handleBlur("caption")}
                        />
                    </Grid>
                    <Grid xs={12} md={6}>
                        <TextField
                            sx={{ width: "100%" }}
                            id="outlined-name-input"
                            label="دسته بندی"
                            type="text"
                            multiline
                            defaultValue={oneAds.categories}
                            rows={2}
                            value={formik.values.categories}
                            onChange={formik.handleChange("categories")}
                            onBlur={formik.handleBlur("categories")}
                        />
                    </Grid>
                    <Grid xs={12} md={6}>
                        <TextField
                            sx={{ width: "100%" }}
                            id="outlined-name-input"
                            label="آدرس تصویر"
                            type="text"
                            multiline
                            rows={2}
                            defaultValue={oneAds.image}
                            value={formik.values.image}
                            onChange={formik.handleChange("image")}
                            onBlur={formik.handleBlur("image")}
                        />
                    </Grid>
                    <Grid xs={12} md={6}>
                        <TextField
                            sx={{ width: "100%" }}
                            id="outlined-name-input"
                            label="سایز عکس"
                            type="text"
                            defaultValue={oneAds.size}
                            value={formik.values.size}
                            onChange={formik.handleChange("size")}
                            onBlur={formik.handleBlur("size")}
                        />
                    </Grid>
                    <Grid xs={2} sm={8} md={6}>


                        <FormControl fullWidth>
                            <InputLabel ></InputLabel>
                            <Select
                                
                                value={categorys}
                                displayEmpty
                                onChange={handleChange}
                            >
                                {category != [] ? category.map((data) => (
                                    <MenuItem value={data.category == oneAds.place ? "" :data.category}>
                                        {data.headline}
                                    </MenuItem>
                                )) : ""}

                            </Select>
                        </FormControl>

                    </Grid>
                    <Grid xs={12} md={6}>
                        <TextField
                            sx={{ width: "100%" }}
                            id="outlined-name-input"
                            label="آدرس لینک"
                            type="text"
                            multiline
                            rows={2}
                            defaultValue={oneAds.path}
                            value={formik.values.path}
                            onChange={formik.handleChange("path")}
                            onBlur={formik.handleBlur("path")}
                        />
                    </Grid>
                    <Grid xs={12} md={6}>
                        <Checkbox
                            defaultValue={oneAds.isActive}
                            value={formik.values.isActive}
                            onChange={formik.handleChange("isActive")}
                            onBlur={formik.handleBlur("isActive")}
                        />
                    </Grid>



                    <Grid xs={2} sm={4} md={3}>
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


        </Box>

    )
}
export default AdminAdsEdit

