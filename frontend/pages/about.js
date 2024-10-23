import * as React from 'react';
import About from '@/components/homePage/about';
import NavBar from '@/components/homePage/Navbar';
import Footer from '@/components/homePage/Footer';
import { Container, Grid } from '@mui/material';

export default function AboutPage() {
  return (
    <Container maxWidth="lg">
      <Grid container rowSpacing={8}>
        <Grid item xs={12}>
          <NavBar />

        </Grid>
        <Grid item xs={12}>
          <About />
        </Grid>
        <Grid item xs={12}>
          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
}
