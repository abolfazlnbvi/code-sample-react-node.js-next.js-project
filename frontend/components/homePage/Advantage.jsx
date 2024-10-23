import React from 'react'

import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import Advantagepinsel from '../../assets/advantage/advantagepinsel.png';
import AdvantageDna from '../../assets/advantage/dna.svg';
import AdvantageChat from '../../assets/advantage/chat.svg';
import AdvantageAtomic from '../../assets/advantage/atomic.svg';
import Image from 'next/image';

const AdvantageCard = (props) => {
    return (
        <Card sx={{
            display: "flex",
            flexDirection: "column",
            borderRadius: "30px",
            background: "#fff",
            boxShadow: "10px 10px 20px #e4e4e4,-10px -10px 20px #ffffff",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <Image
                style={{ width: "100px", justifyContent: "center" }}

                src={props.src}
                alt="Paella dish"
            />
            <CardContent>
                <Typography lineHeight="56px" textAlign="center" fontWeight={700} fontSize="18px" variant="h3">
                    {props.title}
                </Typography>
                <Typography lineHeight="24px" textAlign="center" fontWeight={500} fontSize="14px" variant="body1" color="text.secondary">
                    {props.caption}
                </Typography>
            </CardContent>
            
        </Card >

    )
}

const Advantage = () => {
    return (
        <div>
            <Grid container spacing={{ md: 3, xs: 0 }} rowSpacing={{ md: 3, xs: 3 }} >
                <Grid item xs={12} textAlign='center' >
                    <Typography variant='h2' lineHeight="48px" fontWeight={700} fontSize="28px">
                        <span style={{ padding: "20px", backgroundColor: "#dbb45a ", position: "absolute", zIndex: -1, borderRadius: "10px", margin: "10px -10px 0px 0px" }} ></span>     مزیت های موسسه آموز کار
                    </Typography>
                    <Typography color="text.secondary" variant='body1' lineHeight="36px" fontWeight={700} fontSize="18px">
                        چند قدم در مسیر از دیگران جلو تر باش !
                    </Typography>

                </Grid>
                <Grid item xs={12} >
                    <Grid container spacing={{ md: 3, xs: 0 }} rowSpacing={{ md: 0, xs: 3 }} >


                        <Grid item xs={12} md={3} >
                            <AdvantageCard
                                src={AdvantageDna}
                                title="مشاوره تخصصی و رایگان"
                                caption='آموزش حضوری و حرفه ای با کادری مجرب در موسسه آموزکار با اساتید کاملت حرفه ای و با تجزبه'
                            />
                        </Grid>
                        <Grid item xs={12} md={3} >
                            <AdvantageCard
                                src={AdvantageChat}
                                title="تضمین استخدام شما"
                                caption='آموزش حضوری و حرفه ای با کادری مجرب در موسسه آموزکار با اساتید کاملت حرفه ای و با تجزبه'
                            />
                        </Grid>
                        <Grid item xs={12} md={3} >
                            <AdvantageCard
                                src={AdvantageAtomic}
                                title="آموزش توسط اساتید مجرب"
                                caption='آموزش حضوری و حرفه ای با کادری مجرب در موسسه آموزکار با اساتید کاملت حرفه ای و با تجزبه'
                            />
                        </Grid>
                        <Grid item xs={12} md={3} >
                            
                            <AdvantageCard
                                src={Advantagepinsel}
                                title="کارآموزی و دورکاری"
                                caption='آموزش حضوری و حرفه ای با کادری مجرب در موسسه آموزکار با اساتید کاملت حرفه ای و با تجزبه'
                            />
                        </Grid>

                    </Grid>
                </Grid>
            </Grid>
        </div >

    )
}


export default Advantage