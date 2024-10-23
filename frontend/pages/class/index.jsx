import React, { useContext, useEffect } from 'react'
import { Box, Button, Container, Divider, Grid, Typography } from '@mui/material'
import { UserContext } from '@/context/userContext'
import Ads from '@/components/ads/Ads'
import NavBar from '@/components/homePage/Navbar'

import Footer from '@/components/homePage/Footer'
import axios from 'axios'
import { baseUrl } from '@/utils/baseUrl'
import ClassCard from '@/components/class/ClassCard'



const Classes = ({ classes }) => {
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
                                دوره های آموزشی ما                            </Typography>
                            <Typography color="text.secondary" variant='body1' lineHeight="36px" fontWeight={700} fontSize="16px">
                                با ما فراتر از هر چیزی یاد بگیرید !
                            </Typography>
                        </div>
                        <Divider variant='middle' />
                    </Grid>
                    <Grid item xs={12} sm={12} md={9} >
                        <Grid container spacing={{ xs: 2, md: 3 }} sx={{ display: "flex", alignItems: 'stretch' }} >

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
                        </Grid>
                    </Grid>
                </Grid>
                <Footer />
            </Container>
        </div>
    )
}

export async function getServerSideProps() {
    const res = await axios.get(`${baseUrl}/class`);

    return {
        props: {
            classes: res.data.classes ? res.data.classes : [],
        },

    }
}

export default Classes