import * as React from 'react';
import { Box, Button, CardMedia, Checkbox, FormControlLabel, FormGroup, SpeedDial, SpeedDialIcon, TextField } from '@mui/material';
import { useEffect } from 'react';
import CardTest from '../cardTest';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { Link, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/adminContext';
import * as Yup from "yup";
import { useFormik } from 'formik';

const formSchema = Yup.object({
    idTest: Yup.string().required(),
    categories: Yup.string().required(),
    question: Yup.string().required(),
    answer: Yup.string().required(),
    isActive: Yup.boolean().required(),
})


const AdminAddQuestion = () => {
    const { createQuestion,  } = useContext(AuthContext)
    const location= useLocation()
    console.log(location.state.id);


const [isActive, setIsActive] = React.useState(false)
    const formik = useFormik({
        initialValues: {

            idTest: location.state.id,
            categories: "",
            question: "",
            answer: "",
            isActive: false
        },
        onSubmit: (values) => {
            const data = {
                idTest: location.state.id,
                categories: values.categories,
                question: values.question,
                answer: values.answer,
                isActive: values.isActive



            }
            createQuestion(data);

        },
        validationSchema: formSchema
    })



    return (

        <Box sx={{
            width: '100%',
            marginTop: '70px'
        }}>


            <form onSubmit={formik.handleSubmit} >

                <Grid container spacing={3} columns={{ xs: 2, sm: 8, md: 12 }}>


                    <Grid xs={2} sm={4} md={3}>
                        <TextField
                            id="outlined-name-input"
                            label="idTest"
                            type="text"
                            value={formik.values.idTest}
                            onChange={formik.handleChange("idTest")}
                            onBlur={formik.handleBlur("idTest")}
                        />
                    </Grid>
                    <Grid xs={2} sm={4} md={3}>
                        <TextField
                            id="outlined-name-input"
                            label="categories"
                            type="text"
                            value={formik.values.categories}
                            onChange={formik.handleChange("categories")}
                            onBlur={formik.handleBlur("categories")}
                        />
                    </Grid>
                    <Grid xs={2} sm={4} md={3}>
                        <TextField
                            id="outlined-name-input"
                            label="question"
                            type="text"
                            value={formik.values.question}
                            onChange={formik.handleChange("question")}
                            onBlur={formik.handleBlur("question")}
                        />
                    </Grid>
                    <Grid xs={2} sm={4} md={3}>
                        <TextField
                            id="outlined-name-input"
                            label="answer"
                            type="text"
                            value={formik.values.answer}
                            onChange={formik.handleChange("answer")}
                            onBlur={formik.handleBlur("answer")}
                        />
                    </Grid>
                    <Grid xs={2} sm={4} md={3}>
                 <Checkbox 
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
export default AdminAddQuestion

