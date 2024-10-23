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
import BlogCard from './blog/BlogCard'

const Blog = () => {
    const { getAllBlogActive, blog } = useContext(UserContext)

    useEffect(() => {
        getAllBlogActive()
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
                        جدید ترین مقالات ما
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
                        همه مقاله ها
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
                    {blog ? blog.map((data, index) => (

                        <SwiperSlide style={{ display: 'flex', alignItems: "stretch", width: "100%" }}>

                            <BlogCard

                                image={data.image}
                                id={data._id}
                                userId={data.userId}
                                name={data.name}
                                categories={data.categories}
                                blog={data.blog}
                                path={data.path}
                                seo={data.seo}
                                read={data.read}
                                isActive={data.isActive}
                                createdAt={data.createdAt}



                            />
                        </SwiperSlide>
                    )) : ""}

                </Swiper>
            </Grid>





        </Grid>
    )
}


export default Blog