import React from 'react'
import GroupSharpIcon from '@mui/icons-material/GroupSharp';


import { Alert, Box, Button, Card, CardActions, CardContent, Container, CssBaseline, Divider, Grid, Stack, Typography } from '@mui/material'
import parse from 'html-react-parser';
import NavBar from '@/components/homePage/Navbar'
import Footer from '@/components/homePage/Footer'
import { useRouter } from 'next/router'

import { axiosJWT, baseUrl } from '@/utils/baseUrl'
import moment from 'jalali-moment';
import ScrollDialog from '@/components/dialog';
import { useContext } from 'react';
import { UserContext } from '@/context/userContext';
import { useEffect } from 'react';
import CheckIcon from '@mui/icons-material/Check';

const OneClass = ({ classes, master }) => {
    const [value, setValue] = React.useState("1");
    const [check, setcheck] = React.useState(false);
    const [open, setOpen] = React.useState();
    const { addRequest, getBuyed, userId, error, setError, buying } = useContext(UserContext)
    const [openDialog, setOpenDialog] = React.useState(false);
    useEffect(() => {
        setError("")
        getBuyed({ requestId: classes._id, userId }).then(result => {
            setcheck(result)
        });




    }, [])
    const handleClickOpenDialog = (scrollType) => () => {
        setOpenDialog(true);

    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <>
            <ScrollDialog
                open={openDialog}
                handleClose={handleCloseDialog}
                handleClickOpen={handleClickOpenDialog}
                handler={() => addRequest({
                    requestId: classes._id,
                    userId,
                    request: "درخواست استفاده از سرویس اعتباری جهت خرید اشتراک کلاس",
                    status: 0,
                    categories: "خرید اقساطی",
                    place: ["class", "کلاس"],

                })}
                title="قوانین استفاده از سرویس اقساطی"
            />
            <div>
                <CssBaseline />
                <Container maxWidth="lg" >
                    <NavBar />
                    <Stack sx={{ width: '100%', display: error ? "block" : "none" }} spacing={2}>
                        <Alert icon={<CheckIcon fontSize="inherit" />} severity={error.code == 1 ? "error" : error.code == 2 ? "warning" : "success"}>
                            {error.Message}
                        </Alert>

                    </Stack>
                    <Grid container spacing={{ xs: 2, md: 3 }} >
                        <Grid item xs={12} sm={12} md={8} >


                            <div>
                                <div>

                                    <img style={{
                                        width: "95%",

                                    }} src={classes.image} alt={classes.name} />

                                    <div >
                                        <Typography
                                            margin='5px 0'
                                            color="blue"
                                            variant='h6'
                                            fontWeight={500}>
                                            {classes.categories}
                                        </Typography>
                                        <Typography margin='5px 0' variant='h1' fontSize="32px" fontWeight={700}>
                                            {classes.name}
                                        </Typography>

                                        <Typography display='inline' margin='10px 20px' variant='subtitle1' color='gray' fontWeight={200}>
                                            <GroupSharpIcon fontSize='inherit' />  {classes.read}
                                        </Typography>
                                    </div>
                                </div>

                            </div>



                        </Grid>
                        <Grid item xs={12} sm={12} md={4}  >
                            <Box>
                                <Card
                                    variant='outlined'
                                    sx={{
                                        height: "100%",
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "space-between",
                                        borderRadius: "16px"
                                    }}>
                                    <CardContent sx={{
                                        textAlign: "center",
                                    }}>
                                        <Typography variant='h2' sx={{ fontSize: 24, }} color="green" gutterBottom>

                                            {Math.round(classes.price / 1000) == 0 ? "رایگان" : `${Math.round(classes.price / 1000)} هزار تومان`}
                                        </Typography>
                                    </CardContent>
                                    <Divider variant='middle' />
                                    <CardContent>
                                        <Typography
                                            margin='10px 0'
                                            variant='body1'
                                            color='gray'
                                            fontWeight={200}
                                        >
                                            مدرس :  {classes.master}
                                        </Typography>
                                        <Typography
                                            margin='10px 0'
                                            variant='body1'
                                            color='gray'
                                            fontWeight={200}
                                        >

                                        </Typography>
                                        <Typography
                                            margin='10px 0'
                                            variant='caption'
                                            color='gray'
                                            fontWeight={200}
                                        >

                                        </Typography>
                                        <Typography
                                            margin='10px 0'
                                            variant='body1'
                                            color='gray'
                                            fontWeight={200}
                                        >
                                            ضرفیت باقی مانده :       {classes.capacity}
                                        </Typography>
                                        <Typography
                                            margin='10px 0'
                                            variant='subtitle2'
                                            color='gray'
                                            fontWeight={200}
                                        >
                                            ساعت کلاس : {classes.time[0]}   تا {classes.time[1]}


                                        </Typography>
                                        <Typography
                                            margin='10px 0'
                                            variant='subtitle2'
                                            color='gray'
                                            fontWeight={200}
                                        >
                                            جلسات در هفته :  {classes.week.map((data, index) => (
                                                data == 0 ? " شنبه ، " 
                                                    :
                                                    data == 1 ? " یکشنبه ، "
                                                        :
                                                        data == 2 ? " دوشنبه ، "
                                                            :
                                                            data == 3 ? " سه شنبه ، "
                                                                :
                                                                data == 4 ? " چهارشنبه ، "
                                                                    :
                                                                    data == 5 ? " پنج شنبه  ، "
                                                                        :
                                                                        data == 6 ? " جمعه "
                                                                            :
                                                                            " "
                                            


                                            ))}


                                        </Typography>
                                        <Typography
                                            margin='10px 0'
                                            variant='subtitle2'
                                            color='gray'
                                            fontWeight={200}
                                        >
                                            مکان یرگذاری : {classes.place}
                                        </Typography>
                                        <Typography margin='10px 0' variant='subtitle2' color='gray' fontWeight={200}>
                                            آخرین بروزرسانی :  {classes.createdAt ? moment(classes.createdAt).locale('fa').format("YYYY/MM/DD") : ""}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        {check == true ?
                                            <Grid container spacing={1} >

                                                <Grid item xs={12}>

                                                    <Button disabled
                                                        color='success'
                                                        sx={{ width: "100%" }}
                                                        variant='contained'
                                                        size="large"

                                                    > شما این آزمون را خریداری کردید
                                                    </Button>
                                                </Grid>
                                                <Grid item xs={12}>

                                                    <Button
                                                        color='secondary'
                                                        sx={{ width: "100%" }}
                                                        variant='contained'
                                                        size="large"

                                                    > مشاهده در پنل
                                                    </Button>
                                                </Grid>

                                            </Grid>
                                            :
                                            <Grid container spacing={1} >

                                                <Grid item xs={12}>

                                                    <Button
                                                        color='success'
                                                        sx={{ width: "100%" }}
                                                        variant='contained'
                                                        size="large"
                                                        onClick={handleClickOpenDialog()}
                                                    >خرید اقساطی
                                                    </Button>
                                                </Grid>
                                                <Grid item xs={12}>

                                                    <Button
                                                        onClick={() => buying({ userId, serviceId: classes._id, category: "class", })}
                                                        color='error'
                                                        sx={{ width: "100%" }}
                                                        variant='outlined'
                                                        size="large"

                                                    >
                                                        خرید کل پکیج
                                                    </Button>
                                                </Grid>
                                            </Grid>
                                        }
                                    </CardActions>
                                </Card>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={12} md={8}  >
                            <div className='content-img'>
                                {parse(classes.caption)}
                            </div>
                        </Grid>


                    </Grid>

                    <Footer />
                </Container>
            </div>
        </>
    )
}


export async function getStaticPaths() {
    const res = await axiosJWT.get(`${baseUrl}/class`);

    const paths = res.data.classes.map(classes => ({
        params: {
            oneclass: `${classes.path}-id-${classes._id}`,
        },
    }))
    console.log(paths);

    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({ params }) {

    let Id = params.oneclass
    let type
    type = Id.lastIndexOf('-')
    type = Id.substr(type + 1)
    console.log(params.oneclass);
    console.log(type);

    const res = await axiosJWT.get(`${baseUrl}/class/${type}`);
    console.log(res.data);


    return {
        props: {
            classes: res.data.classes ? res.data.classes : [],
            master: res.data.master ? res.data.master : [],
        },
        revalidate: 3600000
    }
}

export default OneClass

/*
    userId: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    categories: {
        type: String,
        required: true
    },
    prerequisites: {
        type: String,
        required: true
    },
    sessions: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    capacity: {
        type: String,
        required: true
    },
    caption: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    disCount: {
        type: String,
        
    },
    place: {
        type: String,
        required: true
    },
    startTime: {
        type: String,
        required: true
    },
    endTime: {
        type: String,
        required: true
    },
    path: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    isShowcass: {
        type: Boolean,
        default: false
    }
*/