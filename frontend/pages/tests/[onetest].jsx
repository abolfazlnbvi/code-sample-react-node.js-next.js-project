import React, { useContext, useEffect } from 'react'


import { Box, Button, Card, CardActions, CardContent, Collapse, Container, CssBaseline, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import parse from 'html-react-parser';

import NavBar from '@/components/homePage/Navbar'
import Footer from '@/components/homePage/Footer'
import { axiosJWT, baseUrl } from '@/utils/baseUrl'

import IconButton from '@mui/material/IconButton';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import ScrollDialog from '@/components/dialog';
import { UserContext } from '@/context/userContext';

import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Stack from '@mui/material/Stack';

const oneTest = ({ test, exam }) => {

    const [value, setValue] = React.useState("1");
    const [price, setPrice] = React.useState(0);
    const [check, setcheck] = React.useState(false);
    const [open, setOpen] = React.useState();
    const { addRequest, getBuyed, userId, error, buying, setError } = useContext(UserContext)
    const [openDialog, setOpenDialog] = React.useState(false);
    useEffect(() => {
        setError("")
        getBuyed({ requestId: test._id, userId }).then(result => {
            setcheck(result)
        });
        var x = 0
        for (let index = 0; index < exam.length; index++) {
            const element = exam[index];
            console.log(x = element.price + x);
            setPrice(x)

        }



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
    const columns = [

        { id: 'name', label: 'آزمون' },
        { id: 'date', label: 'تاریخ برگذاری' },
        { id: 'endDate', label: 'مهلت ثبت نام' },
        { id: 'price', label: 'قیمت' },


    ];
    return (
        <>


            <ScrollDialog
                open={openDialog}
                handleClose={handleCloseDialog}
                handleClickOpen={handleClickOpenDialog}
                handler={() => addRequest({
                    requestId: test._id,
                    userId,
                    request: "درخواست استفاده از سرویس اعتباری جهت خرید اشتراک آزمون",
                    status: 0,
                    categories: "خرید اقساطی",
                    place: ["test", "آزمون"],

                })}
                title="قوانین استفاده از سرویس اقساطی"
            />
            <div>
                <CssBaseline />
                <Container maxWidth="lg">
                    <NavBar />


                    <Stack sx={{ width: '100%', display: error ? "block" : "none" }} spacing={2}>
                        <Alert icon={<CheckIcon fontSize="inherit" />} severity={error.code == 1 ? "error" : error.code == 2 ? "warning" : "success"}>
                            {error.Message}
                        </Alert>

                    </Stack>

                    <Grid container sx={{ marginTop: "15px", display: "flex", alignItems: "stretch" }} spacing={3}  >

                        <Grid item xs={12} md={9} >
                            <Card variant='elevation' sx={{
                                padding: "15px",
                                borderRadius: "16px"
                            }}>
                                <Grid container spacing={2} >
                                    <Grid item xs={12} md={6} >
                                        <img style={{

                                            borderRadius: "10px"
                                        }}
                                            src={test.imageId}
                                            alt={test.name}
                                        />
                                    </Grid >
                                    <Grid item xs={12} md={6} sx={{ textAlign: "justify" }}>
                                        <Typography variant='h1' padding={1} fontSize={`24px`}>
                                            {test.name}
                                        </Typography>
                                        <Typography variant='h2' color="text.secondary" padding={1} fontSize={`16px`}>
                                            {test.seoCaption}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={3} >
                            <Card
                                variant='outlined'
                                sx={{
                                    height: "100%",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "space-between",
                                    borderRadius: "16px"
                                }}>
                                <CardContent>

                                </CardContent>
                                <CardContent sx={{
                                    textAlign: "center",
                                }}>
                                    <Typography variant='h2' sx={{ fontSize: 24, }} color="green" gutterBottom>

                                        {Math.round(price / 1000) == 0 ? "رایگان" : `${Math.round(price / 1000)} هزار تومان`}
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
                                                    onClick={() => buying({userId, serviceId: test._id, category: "test",})}
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
                        </Grid>
                        <Grid item sx={{ width: '100%' }}>
                            <Card sx={{ width: '100%', borderRadius: "16px" }}>
                                <Box sx={{ width: '100%', typography: 'body1' }}>
                                    <TabContext sx={{ width: '100%' }} value={value}>
                                        <Box sx={{ borderBottom: 1, borderColor: 'divider', width: '100%' }}>
                                            <TabList
                                                sx={{ width: '100%' }}
                                                onChange={handleChange}
                                                aria-label="lab API tabs example"
                                            >
                                                <Tab label="توضیحات" value="1" />
                                                <Tab label="اطلاعات آزمون ها" value="2" />
                                                <Tab disabled label="نظرات" value="3" />
                                            </TabList>
                                        </Box>
                                        <TabPanel value="1">
                                            <div className='content-img'>
                                                {parse(test.caption)}
                                            </div>
                                        </TabPanel>
                                        <TabPanel value="2">

                                            <TableContainer sx={{ overflow: "scroll" }}>
                                                <Table sx={{ overflow: "scroll" }} stickyHeader aria-label="sticky table">
                                                    <TableHead>
                                                        <TableRow>
                                                            <TableCell
                                                                sx={
                                                                    {
                                                                        textAlign: "center",
                                                                        Width: "10px"
                                                                    }
                                                                }
                                                            >
                                                                توضیحات
                                                            </TableCell>
                                                            {columns.map((column) => (
                                                                <TableCell sx={
                                                                    {
                                                                        textAlign: "center"
                                                                    }
                                                                }
                                                                    key={column.id}
                                                                    align={column.align}                                    >
                                                                    {column.label}
                                                                </TableCell>
                                                            ))}


                                                        </TableRow>
                                                    </TableHead>
                                                    <TableBody>
                                                        {exam
                                                            .sort((a, b) => new Date(a.date) - new Date(b.date))
                                                            .map((data, index) => {
                                                                return (
                                                                    <>

                                                                        <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                                                                            <TableCell sx={{ textAlign: "center" }}>
                                                                                <IconButton
                                                                                    aria-label="expand row"
                                                                                    size="small"
                                                                                    onClick={() => setOpen(open == index ? -1 : index)}
                                                                                >
                                                                                    {open == index ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                                                                                </IconButton>
                                                                            </TableCell>
                                                                            <TableCell
                                                                                sx={{ textAlign: "center" }}>
                                                                                {data.name}
                                                                            </TableCell>
                                                                            <TableCell
                                                                                sx={{ textAlign: "center" }}>
                                                                                {data.date}
                                                                            </TableCell>
                                                                            <TableCell
                                                                                sx={{ textAlign: "center" }}>
                                                                                {data.endDate}
                                                                            </TableCell>
                                                                            <TableCell
                                                                                sx={{ textAlign: "center" }}>
                                                                                {data.price}
                                                                            </TableCell>
                                                                        </TableRow>

                                                                        <TableRow>
                                                                            <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={2}>
                                                                                <Collapse in={open == index ? true : false} >
                                                                                    <Box sx={{ margin: 2 }}>
                                                                                        <Typography sx={{ textAlign: "justify" }} color="text.secondary" fontSize={`14px`} variant="h6" >
                                                                                            مکان برگذاری :  {data.place}
                                                                                        </Typography>
                                                                                        <Typography sx={{ textAlign: "justify" }} color="text.secondary" fontSize={`18px`} variant="h6" >
                                                                                            توضیحات:
                                                                                        </Typography>
                                                                                        <Typography sx={{ textAlign: "justify" }} color="text.secondary" fontSize={`14px`} variant="h6" >
                                                                                            {data.caption}
                                                                                        </Typography>
                                                                                    </Box>
                                                                                </Collapse>
                                                                            </TableCell>



                                                                        </TableRow>

                                                                    </>
                                                                );
                                                            })}
                                                    </TableBody>
                                                </Table>
                                            </TableContainer>
                                        </TabPanel>
                                        <TabPanel value="3">Item Three</TabPanel>
                                    </TabContext>
                                </Box>
                            </Card>
                        </Grid>



                    </Grid>







                </Container>
                <Footer />
            </div >
        </>
    )
}


export async function getStaticPaths() {
    const res = await axiosJWT.get(`${baseUrl}/test/active/true`);

    const paths = res.data.test.map(data => ({
        params: {
            onetest: `${data.url}-id-${data._id}`,
        },
    }))

    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({ params }) {

    let Id = params.onetest
    let type
    type = Id.lastIndexOf('-')
    type = Id.substr(type + 1)
    console.log(type);
    const res = await axiosJWT.get(`${baseUrl}/test/id/${type}`);
    const resExam = await axiosJWT.get(`${baseUrl}/test/exam/testID/${type}`);



    return {
        props: {
            test: res.data.test,
            exam: resExam.data.test
        },
        revalidate: 1000 * 60 * 60
    }
}

export default oneTest