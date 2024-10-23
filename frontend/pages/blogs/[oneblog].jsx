import React from 'react'
import GroupSharpIcon from '@mui/icons-material/GroupSharp';


import { Container, CssBaseline, Grid, Typography } from '@mui/material'
import './oneblog.module.css'
import parse from 'html-react-parser';
import NavBar from '@/components/homePage/Navbar'
import Footer from '@/components/homePage/Footer'
import { useRouter } from 'next/router'

import { axiosJWT, baseUrl } from '@/utils/baseUrl'
import moment from 'jalali-moment';

const OneBlog = ({ blog }) => {

    return (
        <>
            <div>
                <CssBaseline />
                <Container maxWidth="lg" >
                    <NavBar />
                    <Grid container spacing={{ xs: 2, md: 3 }} >
                        <Grid item xs={12} sm={12} md={8} >


                            <div>
                                <div>

                                    <img style={{
                                        width: "95%",

                                    }} src={blog.image} alt={blog.name} />

                                    <div >
                                        <Typography
                                            margin='5px 0'
                                            color="blue"
                                            variant='h6'
                                            fontWeight={500}>
                                            {blog.categories}
                                        </Typography>
                                        <Typography margin='5px 0' variant='h1' fontSize="32px" fontWeight={700}>
                                            {blog.name}
                                        </Typography>
                                        <Typography margin='10px 0' variant='caption' color='gray' fontWeight={200}>
                                            آخرین بروزرسانی :  {blog.createdAt ? moment(blog.createdAt).locale('fa').format("YYYY/MM/DD") : ""}
                                        </Typography>
                                        <Typography display='inline' margin='10px 20px' variant='subtitle1' color='gray' fontWeight={200}>
                                            <GroupSharpIcon fontSize='inherit' />  {blog.read}
                                        </Typography>
                                    </div>
                                </div>
                                <div className='content-img'>
                                    {parse(blog.blog)}
                                </div>
                            </div>



                        </Grid>
                        <Grid item xs={12} sm={12} md={4}  >

                        </Grid>



                    </Grid>

                    <Footer />
                </Container>
            </div>
        </>
    )
}


export async function getStaticPaths() {
    const res = await axiosJWT.get(`${baseUrl}/blog`);

    const paths = res.data.blog.map(blog => ({
        params: {
            oneblog: `${blog.path}-id-${blog._id}`,
        },
    }))

    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({ params }) {

    let Id = params.oneblog
    let type
    type = Id.lastIndexOf('-')
    type = Id.substr(type + 1)

    const res = await axiosJWT.get(`${baseUrl}/blog/${type}`);


    return {
        props: {
            blog: res.data.blog,
        },
        revalidate: 1000 * 60 * 60
    }
}

export default OneBlog