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
// answer
// : 
// ['gggggg']
// categories
// : 
// "ggggggg"
// createdAt
// : 
// "2024-04-26T16:42:41.364Z"
// idTest
// : 
// "66015041ea18b678bc7d4e95"
// isActive
// : 
// true
// question
// : 
// "gggggggg"
// __v
// : 
// 0
// _id
// : 
// "662bd981554763df956f5c1a"

const Question = (probs) => {

    const { deleteQuestion, getOneQuestion } = useContext(AuthContext)



    
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {probs.Ansewr}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {probs.question}
                </Typography>
            </CardContent>
            <CardActions>

                <Grid container spacing={{ xs: 2, md: 3 }} >
                    <Grid item xs={4}>
                        <Link to={`edittest/${probs.id}`} >
                            <Button
                                size="small"
                                color="primary"
                                onClick={() => {
                                    getOneQuestion({
                                        id: probs.id,
                                    })
                                }}>
                                <EditIcon />

                            </Button>
                        </Link>

                    </Grid>
                    <Grid item xs={4}>

                        <Button sx={{
                          
                        }} size="small"
                            color="primary"
                            onClick={() => {
                                deleteQuestion({
                                    id: probs.id,
                                    testid: probs.testid
                                })
                            }}
                        >

                            <DeleteIcon />
                        </Button>

                    </Grid>
                </Grid>
            </CardActions>
        </Card>
    );
}

export default Question