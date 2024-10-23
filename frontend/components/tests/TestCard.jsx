import React from 'react'

import { Box, Button, Card, CardContent, CardMedia, Typography } from '@mui/material'
import Link from 'next/link'
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


const TestCard = (probs) => {
    return (


        <Card
            variant='outlined'
            sx={{
                borderRadius: "24px",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                background: "#fff",
                p: "10px",
            }}>

            <div>
                <Link href={`tests/${probs.url}-id-${probs.id}`}>
                    <CardMedia
                        component="img"
                        alt={probs.seoTitle}

                        sx={{ borderRadius: "24px" }}
                        image={probs.imageId}
                    />
                </Link>
                <Link href={`tests/${probs.url}-id-${probs.id}`}>
                    <Typography fontWeight={600} fontSize={18} lineHeight={3}>
                        {probs.testName}
                    </Typography>
                </Link>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant='body1' sx={{ fontSize: 16, }} color={Math.round(probs.price / 1000) == 0 ? "green" : "GrayText"}>
                    {Math.round(probs.price / 1000) == 0 ? "رایگان" : `${numberWithCommas(Math.round(probs.price))} تومان`}
                </Typography>
                <Link href={`tests/${probs.url}-id-${probs.id}`}>

                    <Button size='small' color='warning' sx={{ borderRadius: "10px" }} variant='contained' >
                        ثبت نام دوره
                    </Button>
                </Link>
            </div>





        </Card>

    )
}

export default TestCard


/*


  price={data.price}
// age
 caption={data.caption}
category={data.category}
// createdAt
   imageId={data.imageId}
isActive={data.isActive}

level={data.level}
numofques={data.numofques}
performing={data.performing}
seoCaption={data.seoCaption}
 seoTitle={data.seoTitle}
  testName={data.testName}
   testType={data.testType}
timer={data.timer}
 url={data.url}
id={data._id}











*/
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
