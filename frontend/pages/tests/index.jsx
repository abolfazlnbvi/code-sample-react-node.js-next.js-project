import React, { useContext, useEffect } from 'react'
import { Box, Button, Container, Divider, Grid, Typography } from '@mui/material'
import { UserContext } from '@/context/userContext'
import Ads from '@/components/ads/Ads'
import NavBar from '@/components/homePage/Navbar'

import Footer from '@/components/homePage/Footer'
import axios from 'axios'
import { baseUrl } from '@/utils/baseUrl'
import TestCard from '@/components/tests/TestCard'



const Tests = ({ test }) => {
    const { getAllAdsByPlaceActive, ads } = useContext(UserContext)
    useEffect(() => {
        getAllAdsByPlaceActive("header")

    }, [])
    return (
        <div>


            <Container maxWidth="lg">
                <Ads place="home-nav-top" />
                <NavBar />
                <Box style={{ margin: "2vh 0" }}>
                    <Ads place="header" />
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
                                آزمون های آزمایشی ما
                            </Typography>
                            <Typography color="text.secondary" variant='body1' lineHeight="36px" fontWeight={700} fontSize="16px">
                                با ما فراتر از هر چیزی یاد بگیرید !
                            </Typography>
                        </div>
                        <Divider variant='middle' />
                    </Grid>
                    <Grid item xs={12} sm={12} md={9} >
                        <Grid container spacing={{ xs: 2, md: 3 }} sx={{ display: "flex", alignItems: 'stretch' }} >

                            {test != [] ? test.map((data, index) => (
                                <Grid item xs={12} sm={12} md={4} key={index} sx={{ display: 'flex', alignItems: "stretch", width: "100%" }} >
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
                                        url={data.url}
                                        id={data._id}


                                    />
                                </Grid>



                            )) : ""}
                        </Grid>
                    </Grid>
                </Grid>
                <Footer />
            </Container>
        </div>
    )
}

export async function getServerSideProps() {
    const res = await axios.get(`${baseUrl}/test/active/true`);

    return {
        props: {
            test: res.data.test,
        },

    }
}

export default Tests