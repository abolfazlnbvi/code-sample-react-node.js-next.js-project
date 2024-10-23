import React from 'react'

import { Box, Button, Card, CardContent, CardMedia, Typography } from '@mui/material'
import Link from 'next/link'
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


const ClassCard = (probs) => {
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
                        alt={probs.name}

                        sx={{ borderRadius: "24px" }}
                        image={probs.image}
                    />
                </Link>
                <Link href={`tests/${probs.url}-id-${probs.id}`}>
                    <Typography fontWeight={600} fontSize={18} lineHeight={3}>
                        {probs.name}
                    </Typography>
                </Link>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant='body1' sx={{ fontSize: 16, }} color={Math.round(probs.price / 1000) == 0 ? "green" : "GrayText"}>
                    {Math.round(probs.price / 1000) == 0 ? "رایگان" : `${numberWithCommas(Math.round(probs.price))} تومان`}
                </Typography>
                <Link href={`class/${probs.path}-id-${probs.id}`}>

                    <Button size='small' color='secondary' sx={{ borderRadius: "10px" }} variant='contained' >
                        ثبت نام دوره
                    </Button>
                </Link>
            </div>





        </Card>

    )
}

export default ClassCard


/*


  userId={data.userId}
  name={data.name}
  image={data.image}
  prerequisites={data.prerequisites}
  sessions={data.sessions}
  type={data.type}
  capacity={data.capacity}
  caption={data.caption}
  price={data.price}
  disCount={data.disCount}
  place={data.place}
  startTime={data.startTime}
  endTime={data.endTime}
  path={data.path}
  isActive={data.isActive}
  createdAt={data.createdAt}
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
