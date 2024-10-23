import React from 'react'
import Footer from '@/components/homePage/Footer'
import NavBar from '@/components/homePage/Navbar'
import Header from '@/components/homePage/Header'
import Services from '@/components/homePage/Services'
import Tests from '@/components/homePage/tests'
import { Container, Grid } from '@mui/material'
import Blog from '@/components/homePage/blog'
import Advantage from '@/components/homePage/Advantage'
import Counseling from '@/components/homePage/Counseling'
import About from '@/components/homePage/about'
import Classes from '@/components/homePage/Class'





const HomePage = () => {

  return (
    <Container maxWidth="lg">
      <Grid container rowSpacing={8}>
        <Grid item xs={12}>
          <NavBar />

        </Grid>
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid item xs={12}>
          <Advantage />

        </Grid>
        <Grid item xs={12}>
          <Services />

        </Grid>
        <Grid item xs={12}>
          <Tests />
        </Grid>
        <Grid item xs={12}>
          <Counseling />
        </Grid>
        <Grid item xs={12}>
          <Classes />
        </Grid>
        <Grid item xs={12}>
          <Blog />

        </Grid>
        <Grid item xs={12}>
          <About />
        </Grid>
        <Grid item xs={12}>
          <Footer/>
        </Grid>
  




      </Grid>


    </Container>






  )
}


export default HomePage