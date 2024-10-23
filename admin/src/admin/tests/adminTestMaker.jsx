import * as React from 'react';
import { Box, CardMedia, SpeedDial, SpeedDialIcon } from '@mui/material';
import { useEffect } from 'react';
import CardTest from './cardTest';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { useContext } from 'react';
import { AuthContext } from '../context/adminContext';

import "./style.css"

// Price
// age
// caption
// category
// createdAt
// imageId
// isActive
// level
// numofques
// performing
// seoCaption
// seoTitle
// testName
// testType
// timer
// url
// vipPrice
// _id



const AdminTestMaker = () => {


  const { getAllTest, test } = useContext(AuthContext)



  useEffect(() => {
    getAllTest()
  }, [])
  console.log('456');
  console.log(test);
  return (

    <Box sx={{
      width:"100%",
      marginTop: '100px'
    }}>
   
      <Grid  container spacing={{ xs: 2, md: 3 }} >

        {test.map((data, index) => (
          <Grid item xs={12} sm={12} md={4} key={index}  >
            <CardTest
              Price={data.Price}
              // age
              caption={data.caption}
              category={data.category}
              // createdAt
              imageId={data.imageId}
              isActive={data.isActive}
              level={data.level}
              numofques={data.numofques}
              performing={data.performing}
              seoCaption={data.seoCaption}
              seoTitle={data.seoTitle}
              testName={data.testName}
              testType={data.testType}
              timer={data.timer}
              url={data.url}
              vipPrice={data.vipPrice}
              id={data._id}


            />
          </Grid>



        ))}


      </Grid>
    </Box>

  )
}
export default AdminTestMaker

