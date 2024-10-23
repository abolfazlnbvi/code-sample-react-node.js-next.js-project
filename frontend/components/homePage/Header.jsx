import React from 'react'

import { Button, CssBaseline, Grid, IconButton, InputBase, Paper, Typography } from '@mui/material'
import HeaderImage from '../../assets/header.png';
import Image from 'next/image';



const Header = () => {
    return (
        <>
            <CssBaseline />
            <Paper
                variant='elevation'
                
                sx={{ justifyContent: "center", borderRadius: "36px",backgroundColor: "#d1ecff47", boxShadow: "none", p: { md: "0 3%", xs: "5%" } }}
            >

                <Grid container sx={{ display: "flex", flexDirection: { xs: "column-reverse", md: "row" }, alignItems: 'center', }} >
                    <Grid item xs={12} md={6} >
                        <Typography textAlign={{ xs: "center", md: "right" }} variant='h1' fontSize='40px' lineHeight="60px" fontWeight={600}>
                            مؤسسه   <span style={{ color: "#fda002" }} >  آموز کار </span>
                        </Typography>
                        <Typography textAlign={{ xs: "center", md: "right" }} variant='h2' fontSize='28px' lineHeight="60px" fontWeight={600} >
                            فرصتی یرای بهتر درس خوندن، با آموز کار
                        </Typography>
                        <Typography textAlign={{ xs: "justify", md: "right" }} color="text.secondary" variant='body1' fontSize='20px' lineHeight="30px" fontWeight={600} >
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
                                آزمون های ما
                            </Button>
                            <Button sx={{

                                m: "0 10px",
                                padding: { xs: "8px 18px", md: "10px 24px" },
                                borderRadius: "8px",
                                fontSize: "16px",
                                fontWeight: 500
                            }} variant='contained' color='warning'>
                                به مشاوره نیاز دارم
                            </Button>
                        </div>
                    </Grid>

                    <Grid item xs={12} md={6}  >
                        <Image src={HeaderImage} style={{ width: "100%" }} alt="موسسه آموزشی آموزکار" />

                    </Grid>



                </Grid>
            </Paper>
        </>

    )
}


export default Header