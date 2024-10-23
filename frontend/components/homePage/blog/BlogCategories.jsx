import React from 'react'

import { Box, Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Divider, Grid, Typography } from '@mui/material'


import { baseUrlImage } from '../../utils/baseUrl'
import GroupSharpIcon from '@mui/icons-material/GroupSharp';
import Link from 'next/link';

// image={data.image}
// id={data._id}
// userId={data.userId}
// name={data.name}
// categories={data.categories}
// blog={data.blog}
// path={data.path}
// seo={data.seo}
// read={data.read}
// isActive={data.isActive}
// createdAt={data.createdAt}

const BlogCategories = (probs) => {
    return (
        <Grid>
            <CssBaseline />

            <Card sx={{  borderRadius: "24px", boxShadow: "none" }}>
            
                    <CardMedia
                        component="img"
                        alt={probs.seoTitle}
                        height="1000px"
                        sx={{ padding: "8px", borderRadius: "24px" }}
                        image={probs.image}
                    />
                
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                        {probs.name}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                        {probs.categories}
                    </Typography>

                    <Typography variant="body1" color="text.secondary">
                    {probs.read} <GroupSharpIcon fontSize='inherit' />
                    </Typography>
                </CardContent>
                
               
            </Card>
        </Grid>
    )
}

export default BlogCategories



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
