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

const Tests = () => {
    const { getAllTestActive, test } = useContext(UserContext)

    useEffect(() => {
        getAllTestActive()
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
                <Box>

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
                        آزمون های آزمایشی ما
                    </Typography>
                    <Typography color="text.secondary" variant='body1' lineHeight="36px" fontWeight={700} fontSize="16px">
                        با ما فراتر از هر چیزی یاد بگیرید !
                    </Typography>
                </Box>
                <Box>
                    <Button color='inherit'
                        sx={{
                            backgroundColor: "#d1ecff47",
                            padding: { xs: "12px 18px", md: "12px 24px" },
                            borderRadius: "12px",
                            fontSize: "16px",
                            fontWeight: 700,
                            color: "#2e75a1"
                        }}>
                        مشاهده همه آزمون ها
                    </Button>
                </Box>

            </Grid>


            <Grid item xs={12} md={12} style={{ display: 'flex', alignItems: "stretch", width: "100%" }}>
                <Swiper
                    style={{ display: 'flex', alignItems: "stretch", width: "100%" }}
                    autoplay={{
                        delay: 2000,
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

                    {test ? test.map((data, index) => (
                        <SwiperSlide style={{ display: 'flex', alignItems: "stretch", width: "100%" }}>



                            <TestCard
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
                                vipPrice={data.vipPrice}
                                id={data._id}


                            />


                        </SwiperSlide>



                    )) : ""}
                </Swiper>


            </Grid>





        </Grid>
    )
}


export default Tests