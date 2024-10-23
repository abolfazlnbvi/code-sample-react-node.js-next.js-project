import React from 'react'

import { Avatar, Box, Button, Grid, Typography } from '@mui/material'
import Link from 'next/link'
import TestCard from '../tests/TestCard'
import { useEffect } from 'react'
import { useContext } from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { UserContext } from '../../context/userContext'
import ClassCard from '../class/ClassCard'

const Classes = () => {
    const { getAllClassActive, classes } = useContext(UserContext)

    useEffect(() => {
        getAllClassActive()
    }, [])
    return (
        <Grid container spacing={{ md: 3, xs: 0 }} rowSpacing={{ md: 3, xs: 3 }} >
            <Grid item xs={12}
                textAlign='start'
                sx={{
                    display: "flex",
                    justifyContent: { xs: "center", md: "space-between" },
                    flexDirection: { xs: "column", md: "row" },
                    alignItems: "center",

                }}
            >
                <div>

                    <Typography variant='h2' lineHeight="48px" fontWeight={700} fontSize="24px">

                        <span
                            style={{
                                padding: "20px",
                                backgroundColor: "#dbb45a ",
                                position: "absolute", zIndex: -1,
                                borderRadius: "10px",
                                margin: "10px -10px 0px 0px"
                            }} >
                        </span>
                        جدید ترین دوره ما
                    </Typography>
                    <Typography color="text.secondary" variant='body1' lineHeight="36px" fontWeight={700} fontSize="16px">
                        با مقالات ما اطلاعاتتو بالا ببر !
                    </Typography>
                </div>
                <div>
                    <Button color='inherit'
                        sx={{
                            backgroundColor: "#d1ecff47",
                            padding: { xs: "12px 18px", md: "12px 24px" },
                            borderRadius: "12px",
                            fontSize: "16px",
                            fontWeight: 700,
                            color: "#2e75a1"
                        }}>
                        همه دوره ها
                    </Button>
                </div>

            </Grid>



            <Grid item xs={12} md={12} style={{ display: 'flex', alignItems: "stretch", width: "100%" }}>
                <Swiper
                    style={{ display: 'flex', alignItems: "stretch", width: "100%" }}
                    autoplay={{
                        delay: 1500,
                        disableOnInteraction: false,
                    }}
                    slidesPerView={1}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 20,
                        },
                    }}
                    rewind={true}
                    navigation={true}
                    modules={[Autoplay, Navigation]}
                    className="mySwiper"
                >
                    {classes != [] ? classes.map((data, index) => (
                        <Grid item xs={12} sm={12} md={4} key={index} sx={{ display: 'flex', alignItems: "stretch", width: "100%" }} >
                            <ClassCard
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


                            />
                        </Grid>



                    )) : ""}

                </Swiper>
            </Grid>





        </Grid>
    )
}


export default Classes