import React from 'react'

import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, InputBase, Paper, TextField, Typography } from '@mui/material'
import CounselingImage from '../../assets/counseling.png';

import Image from 'next/image';



const Counseling = () => {
    return (
        <Grid container>

            <Paper

                variant='elevation'
                sx={{
                    justifyContent: "center",
                    borderRadius: "36px",
                    boxShadow: "none",
                    p: { md: "0 7%", xs: "5%" },
                    background: "linear-gradient(65deg, rgba(252,176,69,1) 60%, rgba(236,165,66,0.8800770308123249) 61%)"
                }}
            >

                <Grid container spacing={3} sx={{ display: "flex", flexDirection: { xs: "column-reverse", md: "row" }, alignItems: 'center', }} >

                    <Grid item xs={12} md={5.5}>
                        <Image src={CounselingImage} style={{ width: "100%" }} alt="موسسه آموزشی آموزکار" />
                    </Grid>
                    <Grid item xs={12} md={6.5}>
                        <Typography color="white" textAlign={{ xs: "center", md: "right" }} variant='h2' fontSize='24px' lineHeight="60px" fontWeight={600}>
                            درخواست مشاوره رایگان
                        </Typography>
                        <form  >
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={6}>
                                    <InputBase

                                        sx={{ width: "100%", backgroundColor: "#fff", borderRadius: "16px", p: "10px 5px" }}
                                        id="outlined-name-input"
                                        type="text"
                                        placeholder="نام و نام خانوادگی"
                                    />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <InputBase

                                        sx={{ width: "100%", backgroundColor: "#fff", borderRadius: "16px", p: "10px 5px" }}
                                        id="outlined-phone-input"
                                        label="تیتر بلاگ"
                                        type="text"
                                        placeholder="شماره تماس"
                                    />
                                </Grid>
                                <Grid item xs={12} md={12}>

                                    <InputBase

                                        sx={{ width: "100%", backgroundColor: "#fff", borderRadius: "16px", p: "10px 5px" }}
                                        id="outlined-text-input"
                                        label="تیتر بلاگ"
                                        type="text"

                                        placeholder="موضوع"
                                    />
                                </Grid>

                                <Grid item xs={12} md={12}

                                    sx={{ display: "flex", justifyContent: { md: "end", xs: "center" }, width: "100%" }}>

                                    <Button variant='contained' sx={{

                                        padding: { xs: "12px 18px", md: "10px 24px" },
                                        borderRadius: "16px",
                                        fontSize: "16px",
                                        fontWeight: 500

                                    }}>
                                        ثبت درخواست مشاوره
                                    </Button>

                                </Grid>
                            </Grid>
                        </form>
                    </Grid>
                </Grid>

            </Paper>

        </Grid >

    )
}


export default Counseling