import React from 'react'


import { Box, Button, Container, Divider, Grid, Typography } from '@mui/material'
import { axiosJWT, baseUrl } from '@/utils/baseUrl'

import NavBar from '@/components/homePage/Navbar'
import Footer from '@/components/homePage/Footer'
import BlogCard from '@/components/homePage/blog/BlogCard'

const blog = ({ blog }) => {




    return (
        <div>



            <Container maxWidth="lg">
                <NavBar />
                <Box style={{
                    margin: "2vh 0"
                }}>


                </Box>
                <Grid container rowSpacing={{ md: 3, xs: 3 }} >
                    <Grid item xs={12}
                        textAlign='start'
                    >
                        <div style={{
                            margin: "3% 0"
                        }}>

                            <Typography variant='h1' lineHeight="56px" fontWeight={700} fontSize="36px">

                                <span
                                    style={{
                                        padding: "20px",
                                        backgroundColor: "#dbb45a ",
                                        position: "absolute", zIndex: -1,
                                        borderRadius: "10px",
                                        margin: "10px -10px 0px 0px"
                                    }} >
                                </span>
                                مقالات ما
                            </Typography>
                            <Typography color="text.secondary" variant='body1' lineHeight="36px" fontWeight={700} fontSize="16px">
                                با ما فراتر از هر چیزی یاد بگیرید !
                            </Typography>
                        </div>
                        <Divider variant='middle' />
                    </Grid>
                    <Grid item xs={12} sm={12} md={9} >
                        <Grid container spacing={{ xs: 2, md: 3 }} sx={{ display: "flex", alignItems: 'stretch' }} >
                            {blog ? blog.map((data, index) => (
                                <Grid item xs={12} sm={12} md={4} key={index} sx={{ display: 'flex', alignItems: "stretch", width: "100%" }} >
                                    <BlogCard
                                        image={data.image}
                                        id={data._id}
                                        name={data.name}
                                        categories={data.categories}
                                        path={data.path}
                                        read={data.read}
                                        createdAt={data.createdAt}



                                    />
                                </Grid>
                            )) : ""}
                        </Grid>



                    </Grid>
                    <Grid item xs={12} sm={12} md={4}  >

                    </Grid>





                </Grid>
            </Container>
            <Footer />

        </div>

    )
}


export async function getServerSideProps() {
    const res = await axiosJWT.get(`${baseUrl}/blog`)

    return {
        props: {
            blog: res.data.blog ? res.data.blog : null,
        },

    }
}
export default blog