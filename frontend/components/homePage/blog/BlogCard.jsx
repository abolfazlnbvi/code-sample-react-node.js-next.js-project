import React from 'react'

import { Box, Button, Card, CardContent, CardMedia, CssBaseline, Grid, Typography } from '@mui/material'
import moment from 'jalali-moment';
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

const BlogCard = (probs) => {
    return (


        <Card
            variant='outlined'
            sx={{
                borderRadius: "24px",
                width: "100%",
                display: "flex", flexDirection: "column", justifyContent: "space-between",
                background: "#fff",
                p: "10px",
            }}>
            <div>
                <Link href={`blogs/${probs.path}-id-${probs.id}`}>
                    <CardMedia
                        component="img"
                        alt={probs.name}

                        sx={{ borderRadius: "24px" }}
                        image={probs.image}
                    />
                </Link>

                <Link href={`blogs/${probs.path}-id-${probs.id}`}>
                    <Typography fontWeight={600} fontSize={18} lineHeight={2}>
                        {probs.name}
                    </Typography>
                </Link>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant='body1' sx={{ fontSize: 12, }} color={Math.round(probs.price / 1000) == 0 ? "green" : "GrayText"}>
                    {moment(probs.createdAt).locale('fa').format("YYYY/MM/DD")}
                </Typography>
                <Link href={`blogs/${probs.path}-id-${probs.id}`}>
                    <Button size='small' color='primary' sx={{ borderRadius: "10px" }} variant='contained' >
                        مشاهده مقاله
                    </Button>
                </Link>
            </div>




        </Card>

    )
}

export default BlogCard



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
