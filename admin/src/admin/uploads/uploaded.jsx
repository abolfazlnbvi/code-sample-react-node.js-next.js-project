import { Box, Button, CardMedia } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import * as React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { AuthContext } from '../context/adminContext';
import { toast } from 'react-toastify';
import { baseUrlImage } from '../../utils/baseUrl';






const Uploaded = () => {

  const { uploaded } = useContext(AuthContext)


  /* 
 
xs={0}
sm={0}
md={3}
lg={2}
xl={2}
 


*/

  return (

    <Box>
      <Grid container >
        <Grid></Grid>
        <Grid spacing={3} container>
          {uploaded.map((data, index) => (
            <Grid xs={12} md={3}>
              <Button  onClick={() => {
                  navigator.clipboard.writeText(`${baseUrlImage}/${data.filename}`)
                  toast("آدرس کپی شد ", {
                    position: "bottom-right",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    theme: "light",
                  })
                }}>

                <CardMedia
                  component="img"

                  image={`${baseUrlImage}/${data.filename}`}

                  alt=''
                />
              </Button>
            </Grid>
          ))}
        </Grid>
      </Grid>

    </Box>

  )
}
export default Uploaded

