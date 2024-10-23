import React from 'react'

import Grid from '@mui/material/Unstable_Grid2/Grid2'
import { Button, CardMedia, Typography } from '@mui/material'
import Image from '../../../assets/9sZ46xZv44Bn4nZVUJWI4rOe78rwtMQv4sP4GkGe.jpg'
import { Link } from 'react-router-dom'



const CourseCard = () => {
    return (
        <Grid sm={12} md={4}>
            <Grid sx={{
             backgroundColor:'pink'
            }}>
                <Grid sx={{
                    margin:"0 10px",
                }}>
                    {/* video */}
                    <CardMedia
                        sx={
                            {
                                
                                
                                justifyContent: 'center',
                                position: 'relative',
                                top: '-30px'


                            }
                        }
                        component="img"
                        image={Image}

                    />
                </Grid>
                <Grid sx={{

                    padding: '0px 25px',
                    backgroundColor: 'blue'
                }}>
                    <Grid sx={{


                    }}>
                        <Typography>
                            درحال بارگزاری
                        </Typography> {/* وضعیت */}
                    </Grid>
                    <Grid sx={{

                        padding: '20px 0',
                    }}>
                        <Typography variant='h3' fontSize='28px'>
                            دوره ریاضی دهم
                        </Typography>
                    </Grid>
                    <Grid>
                        {/* caption */}
                        <Typography variant='caption' fontSize='16px'>
                            یزید میشناسی حالا راجبش توضیح بده  اپه بدونی سانسور و بازم سانسور بازم ترفدارشی آره یا نه
                        </Typography>
                    </Grid>
                    <Grid >

                        <Grid container sx={{
                            justifyContent: 'space-between',
                            padding: '20px 0'

                        }}>
                            <Grid sm={4}>
                                {/* time */}
                                <Typography variant='h6' fontSize='16px'>
                                    06:12:35
                                </Typography>
                            </Grid>
                            <Grid sm={4}>
                                {/* like */}
                            </Grid>
                            <Grid sm={4} >
                                {/* price */}
                                <Typography sx={{ display: 'inline' }} variant='h6' fontSize='16px'>
                                    2500000
                                </Typography>
                                <Typography sx={{ display: 'inline' }} variant='h6' fontSize='16px'>
                                    تومان
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid>
                </Grid>
                {/* buten */}
                <Grid sx={{
                    display: 'flex',
                    justifyContent: 'center',

                }}>
                    <Link to=''>
                        <Button
                            sx={{
                                justifyContent: 'center',
                                maxWidth: '330px',

                            }}
                        >
                            <Typography variant='h4'>
                                مشاهده اطلاعات دوره
                            </Typography>
                        </Button>
                    </Link>
                </Grid>
            </Grid>
        </Grid>
    )
}


export default CourseCard