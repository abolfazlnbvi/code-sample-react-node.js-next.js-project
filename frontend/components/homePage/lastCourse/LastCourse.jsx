import React from 'react'


import Grid from '@mui/material/Unstable_Grid2/Grid2'
import CourseCard from './CourseCard'



const LastCourse = () => {
  return (
    <div>
      <Grid container spacing={3} sx={{
        marginTop: "60px",
        

      }}>

        <CourseCard />
        <CourseCard />
        <CourseCard />
      </Grid>
    </div>

  )
}


export default LastCourse