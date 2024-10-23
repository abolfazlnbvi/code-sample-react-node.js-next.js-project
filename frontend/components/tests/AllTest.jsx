import React from 'react'

import { Box, Grid, Typography } from '@mui/material'
import { useContext } from 'react'
import { useEffect } from 'react'

import TestCard from './TestCard'
import { UserContext } from '../../context/userContext'

const AllTest = () => {

    const { test } = useContext(UserContext)

    return (
        <Box>
            <Grid container>
                <Grid >
                    <Typography>
                        آزمون ها
                    </Typography>
                </Grid>
            </Grid>

            <Grid container spacing={{ xs: 2, md: 3 }} >

                {test != [] ? test.map((data, index) => (
                    <Grid item xs={12} sm={12} md={4} key={index}  >
                        <TestCard
                            price={data.price}
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



                )) : ""}


            </Grid>





        </Box>
    )
}

export default AllTest