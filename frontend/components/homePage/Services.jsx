import React from 'react'

import { Box, Button, Grid, Paper, Typography } from '@mui/material'
import HeaderImage from '../../assets/header.png';
import Image from 'next/image';



const Services = () => {
    return (
        <Grid container>

            <Paper
                variant='elevation'
                sx={{ justifyContent: "center", backgroundColor: "#d1ecff47", borderRadius: "36px", boxShadow: "none", p: { md: "0 3%", xs: "5%" } }}
            >

                <Grid container spacing={3} sx={{ display: "flex", flexDirection: { xs: "column-reverse", md: "row" }, alignItems: 'center', }} >

                    <Grid item xs={12} md={4}>
                        <Image src={HeaderImage} style={{ width: "100%" }} alt="موسسه آموزشی آموزکار" />
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <Typography textAlign={{ xs: "center", md: "right" }} variant='h2' fontSize='32px' lineHeight="60px" fontWeight={600}>
                            کلاس ریاضی   <span style={{ color: "#fda002" }} >  ویژه درصد کامل در کنکور </span>
                        </Typography>
                        <Typography textAlign={{ xs: "center", md: "right" }} variant='h3' fontSize='24px' lineHeight="60px" fontWeight={500} >
                            ریاضی را به صورت حرفه ای یاد بگیرید و با اتمیان به تست ها پاسخ دهید                        </Typography>
                        <Typography textAlign={{ xs: "justify", md: "right" }} color="text.secondary" variant='body1' fontSize='16px' lineHeight="30px" fontWeight={600} >
                            به مدرسه مجازی ایران خوش آمدی اینچا                            به مدرسه مجازی ایران خوش آمدی اینچا همپی عین آب خوردنه بیا توی مدرسه خیلی خوش میگزره اینجانیای از دستش دادی
                        </Typography>
                        <Box sx={{ display: "flex", justifyContent: { md: "end", xs: "center" }, width: "100%" }}>

                            <Button variant='contained' sx={{

                                padding: { xs: "12px 18px", md: "10px 24px" },
                                borderRadius: "16px",
                                fontSize: "16px",
                                fontWeight: 500
                            }}>
                                ثبت نام در کلاس
                            </Button>
                        </Box>
                    </Grid>
                </Grid>

            </Paper>

        </Grid >
    )
}


export default Services