import { Box, CardMedia } from '@mui/material'
import { useContext } from 'react'

import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { UserContext } from '../../context/userContext';


const Ads = (prames) => {
    const { ads } = useContext(UserContext)

    return (
        <div>
             <Box container sx={{
                width: {md: "100%", xs: "95%"},
            }} spacing={{ xs: 2, md: 3 }} >
                <Swiper
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    
                    rewind={true}
                    navigation={true}
                    modules={[Autoplay, Navigation]}
                    className="mySwiper"
                >
                    {
                       ads != [] ? 
                       ads.map((data, index) => (
                            data.hasOwnProperty('place') && data.place.includes(prames.place) ?
                                <SwiperSlide>
                                    <Box>
                                        <a href={data.path}>
                                            <CardMedia
                                                sx={
                                                    {

                                                        justifyContent: 'center',
                                                        borderRadius: "10px"
                                                    }
                                                }

                                                component="img"

                                                image={data.image}

                                                alt="szfdxgchbjk"
                                            />
                                        </a>
                                    </Box>
                                </SwiperSlide>
                                : ""
                        )) 
                        : ""

                    }
                </Swiper>

            </Box>
        </div>

    )
}


export default Ads