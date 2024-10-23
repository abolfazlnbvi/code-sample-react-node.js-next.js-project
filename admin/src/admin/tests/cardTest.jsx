import * as React from 'react';
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Link } from "react-router-dom";
import AddBoxIcon from '@mui/icons-material/AddBox';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useFormik } from "formik";
import { useContext } from "react";
import { AuthContext } from "../context/adminContext";
import './style.css'
import parse from 'html-react-parser';
import { baseUrlImage } from '../../utils/baseUrl';

// Price
// age
// caption
// category
// createdAt
// imageId
// isActive
// level
// numofques
// performing
// seoCaption
// seoTitle
// testName
// testType
// timer
// url
// vipPrice
// _id

const CardTest = (probs) => {
    const { editTest, deleteTest, userId, getOneTest } = useContext(AuthContext)

    const deletetest = useFormik({
        initialValues: {
            userId: '',
            id: ""


        },
        onSubmit: (values) => {
            const data = {

                id: probs.id,
                userId: userId

            }
            deleteTest(data);

        }
    })


    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                alt={`${baseUrlImage}/${probs.imageId}`}
                height="140"
                image={probs.imageId}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {probs.testName}
                </Typography>
                {parse(probs.caption)}
                   
               
            </CardContent>
            <CardActions>

                <Grid container spacing={{ xs: 2, md: 3 }} >
                    <Grid item xs={5}>
                        <Link to={probs.url}>
                            <Button size="small" variant="contained">Learn More</Button>
                        </Link>
                    </Grid>
                    <Grid item xs={2}>
                        <Link to={`edittest/${probs.id}`} >
                            <Button
                                size="small"
                                color="primary"
                                onClick={() => {
                                    getOneTest({
                                        userId: userId,
                                        id: probs.id,
                                        edit: true
                                    })
                                }}>
                                <EditIcon />

                            </Button>
                        </Link>

                    </Grid>
                    <Grid item xs={2}>
                        <form onSubmit={deletetest.handleSubmit} >
                            <Button type="submit">

                                <DeleteIcon />
                            </Button>
                        </form>
                    </Grid>
                    <Grid item xs={2}>
                        <Link to={`../test/addquestion/${probs.id}`} state={{id: probs.id}} >

                            <Button color="primary">

                                <AddBoxIcon />
                            </Button>

                        </Link>
                    </Grid>
                </Grid>
            </CardActions>
        </Card>
    );
}

export default CardTest