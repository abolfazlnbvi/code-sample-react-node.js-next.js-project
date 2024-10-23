import React from 'react'

import { Button, CssBaseline, Grid, IconButton, InputBase, Paper, Typography } from '@mui/material'
import AboutImage from '../../assets/About.jpg';
import Image from 'next/image';



const About = () => {
    return (
        <>
            <CssBaseline />

            <Grid container spacing={3} sx={{ display: "flex", flexDirection: { xs: "column-reverse", md: "row" }, alignItems: 'center', }} >
                <Grid item xs={12} md={6} sx={{
                    display: "flex",
                    flexDirection: "column"
                }}  >
                    <Image src={AboutImage} style={{
                        width: "100%",
                        filter: "brightness(60%) saturate(125%) contrast(111%)",
                        borderRadius: "60px"

                    }} alt="موسسه آموزشی آموزکار" />
                    <span style={{
                        
                        padding: "100px 40%",
                        backgroundColor: "#dbb45a ",
                        borderRadius: "0px 0px 109px 110px",
                       margin: "-178px auto auto",

                       
                    }}></span>
                </Grid>
                <Grid item xs={12} md={6} >
                    <Typography variant='h2' lineHeight="64px" fontWeight={600} fontSize="30px">

                        <span
                            style={{
                                padding: "20px",
                                backgroundColor: "#dbb45a ",
                                position: "absolute", zIndex: -1,
                                borderRadius: "10px",
                                margin: "10px -10px 0px 0px"
                            }} >
                        </span>
                        درباره مؤسسه آموزکار                    </Typography>

                    <Typography textAlign={"justify"} color="text.secondary" variant='body1' fontSize='18px' lineHeight="24px" fontWeight={600} >
                        
                    به مدرسه مجازی ایران خوش آمدی اینچا                            به مدرسه مجازی ایران خوش آمدی اینچا همپی عین آب خوردنه بیا توی مدرسه خیلی خوش میگزره اینجانیای از دستش دادی
                    به مدرسه مجازی ایران خوش آمدی اینچا                            به مدرسه مجازی ایران خوش آمدی اینچا همپی عین آب خوردنه بیا توی مدرسه خیلی خوش میگزره اینجانیای از دستش دادی
                    به مدرسه مجازی ایران خوش آمدی اینچا                            به مدرسه مجازی ایران خوش آمدی اینچا همپی عین آب خوردنه بیا توی مدرسه خیلی خوش میگزره اینجانیای از دستش دادی
                    </Typography>
                    <div style={{
                        marginTop: "5%"
                    }}>

                        <Button sx={{


                            padding: { xs: "8px 18px", md: "10px 24px" },
                            borderRadius: "8px",
                            fontSize: "16px",
                            fontWeight: 500
                        }} variant='contained'>
                            درباره ما
                        </Button>
                    </div>
                </Grid>




            </Grid >

        </>

    )
}


export default About