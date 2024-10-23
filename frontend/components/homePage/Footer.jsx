import { Box, Button, Divider, Grid, InputBase, Paper, Typography } from '@mui/material'


import { useState } from 'react'
import React from 'react'




const Footer = () => {
    const [ads, setAds] = useState(null)

    return (
        <>
            <Box sx={{
                display: "flex",
                flexDirection: "column"
            }}>

                <span style={{

                    padding: "20px 50%",
                    backgroundColor: "#dbb45a ",
                    borderRadius: "109px 110px 0 0",
                    margin: "auto",
                    marginBottom: "-25px"

                }}></span>
                <span style={{

                    padding: "12.5px 50%",
                    backgroundColor: "#ffffff",
                    margin: "auto"

                }}></span>
                <Grid container sx={{

                }}>
                    <Grid xs={12} md={12}>
                        <Typography textAlign={"justify"} color="text.secondary" variant='body1' fontSize='18px' lineHeight="30px" fontWeight={600} >

                            به مدرسه مجازی ایران خوش آمدی اینچا                            به مدرسه مجازی ایران خوش آمدی اینچا همپی عین آب خوردنه بیا توی مدرسه خیلی خوش میگزره اینجانیای از دستش دادی
                            به مدرسه مجازی ایران خوش آمدی اینچا                            به مدرسه مجازی ایران خوش آمدی اینچا همپی عین آب خوردنه بیا توی مدرسه خیلی خوش میگزره اینجانیای از دستش دادی
                            به مدرسه مجازی ایران خوش آمدی اینچا                            به مدرسه مجازی ایران خوش آمدی اینچا همپی عین آب خوردنه بیا توی مدرسه خیلی خوش میگزره اینجانیای از دستش دادی
                        </Typography>

                    </Grid>
                    <Grid xs={12} md={2}>
                        <Typography variant='h2' lineHeight="48px" fontWeight={700} fontSize="20px">

                            <span
                                style={{
                                    padding: "15px",
                                    backgroundColor: "#dbb45a ",
                                    position: "absolute", zIndex: -1,
                                    borderRadius: "10px",
                                    margin: "10px -10px 0px 0px"
                                }} >
                            </span>
                            لینک های مفید
                        </Typography>
                    </Grid>
                    <Grid xs={12} md={2}>
                        <Typography variant='h2' lineHeight="48px" fontWeight={700} fontSize="20px">

                            <span
                                style={{
                                    padding: "15px",
                                    backgroundColor: "#dbb45a ",
                                    position: "absolute", zIndex: -1,
                                    borderRadius: "10px",
                                    margin: "10px -10px 0px 0px"
                                }} >
                            </span>
                            لینک های مفید
                        </Typography>
                    </Grid>
                    <Grid xs={12} md={3}>
                        <Typography variant='h2' lineHeight="48px" fontWeight={700} fontSize="20px">

                            <span
                                style={{
                                    padding: "15px",
                                    backgroundColor: "#dbb45a ",
                                    position: "absolute", zIndex: -1,
                                    borderRadius: "10px",
                                    margin: "10px -10px 0px 0px"
                                }} >
                            </span>
                            ارتباط با ما
                        </Typography>
                    </Grid>
                    <Grid xs={12} md={5}>

                    </Grid>
                    <Grid xs={12} md={12}>
                        <Divider variant='middle' />
                        <Typography variant='body2' textAlign="center" color="#2e75a1" lineHeight="60px" fontWeight={700} fontSize="14px">

                            کلیه حقوق مادی و معنوی این سایت متعلق به مؤسسه آموزشی آموزکار میباشد

                        </Typography>
                    </Grid>
                </Grid>

            </Box>
        </>

    )
}


export default Footer