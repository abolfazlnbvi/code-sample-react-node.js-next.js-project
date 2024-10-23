import { Box, CardMedia, Grid } from '@mui/material';
import * as React from 'react';
import MainCard from './mainCard';
import { useEffect } from 'react';
import moment from 'jalali-moment';
import { useContext } from 'react';
import { AuthContext } from '../context/adminContext';
import { DatePicker } from 'jalaali-react-date-picker';

import "jalaali-react-date-picker/lib/styles/index.css";






const Adminblog = () => {
  const { getMainDashboard, main } = useContext(AuthContext)
  /* 
 
xs={0}
sm={0}
md={3}
lg={2}
xl={2}
 


*/
  useEffect(() => {
    getMainDashboard(moment(Date.now()).locale('fa').format("YYYY-MM-DD"))
  }, [])

  return (

    <Box sx={{
      width: '100%',
      marginTop: '70px'
    }}>
      <Grid container spacing={3}>

        <Grid item xs={12} md={8} >
          <Grid container spacing={3}>
            <Grid item xs={12} md={4} >
              <MainCard
                title="کاربران"
                num1={main.User} numTitle1="کل کاربران "
                num2={main.date ? main.date.user : ""} numTitle2="کاربران جدید"
                num3={main.UserActive} numTitle3="کاربران ادمین"
                num4={main.User - main.UserActive} numTitle4="کاربران عادی"
                image=''
                url='users/list'
              />
            </Grid>
            <Grid item xs={12} md={4} >
              <MainCard
                title="آزمون ها"
                num1={main.Tests} numTitle1="کل آزمون ها"
                num2={main.TestsActive} numTitle2="آزمون های فعال"
                num3='0' numTitle3="کل شرکت کننده ها"
                num4='0' numTitle4="ثبت نام امروز"
                image=''
                url='test/list'
              />
            </Grid>
            <Grid item xs={12} md={4} >
              <MainCard
                title="مقالات"
                num1={main.blog} numTitle1="کل مقالات"
                num2={main.blogActive} numTitle2="مقالات فعال"
                num3="-" numTitle3="کل یازدید ها"
                num4={main.date ? main.date.blog : ""} numTitle4="بازدید های امروز"
                image=''
                url='blog/list'
              />
            </Grid>
            <Grid item xs={12} md={4} >
              <MainCard
                title="کلاس ها"
                num1={main.Class} numTitle1="کل کلاس ها"
                num2={main.ClassActive} numTitle2="کلاس های فعال"
                num3='0' numTitle3="کل دانش آموزان"
                num4={main.date ? main.date.class : ""} numTitle4="ثبت نامی های امروز"
                image=''
                url='class/list'
              />
            </Grid>
            <Grid item xs={12} md={4} >
              <MainCard
                title="درخواست ها"
                num1={main.Request} numTitle1="کل درخواست ها"
                num2={main.date ? main.date.request : ""} numTitle2="درخواست های امروز"
                num3={main.RequestActive} numTitle3="درخواست های مشاهده شده"
                num4={main.Request - main.RequestActive} numTitle4="درخواست های باز نشده"
                image=''
                url='request/list'
              />
            </Grid>
            <Grid item xs={12} md={4} >
              <MainCard
                title="پرداختی ها"
                num1={main.Buy} numTitle1="کل تعداد خرید ها"
                num2={main.Buy} numTitle2="کل درامد سایت"
                num3={main.Buy} numTitle3="تعداد کل فروش"
                num4={main.date ? main.date.buy : ""} numTitle4="تعداد فروش امروز"
                image=''
                url='buy/list'
              />
            </Grid>
            <Grid item xs={12} md={4} >
              <MainCard title=""
                num1='777' numTitle1="کل"
                num2='777' numTitle2=""
                num3='777' numTitle3=""
                num4='777' numTitle4=""
                image=''
                url='class/list'
              />
            </Grid>
            <Grid item xs={12} md={4} >
              <MainCard title=""
                num1='777' numTitle1="کل"
                num2='777' numTitle2=""
                num3='777' numTitle3=""
                num4='777' numTitle4=""
                image=''
              />
            </Grid>

            <Grid item xs={12} md={4} >
              <MainCard title=""
                num1='777' numTitle1="کل"
                num2='777' numTitle2=""
                num3='777' numTitle3=""
                num4='777' numTitle4=""
                image=''
              />
            </Grid>


          </Grid>
        </Grid>
        <Grid item xs={12} md={4} >
          <DatePicker

            onChange={(d) => getMainDashboard(moment(d != null ? d._d : moment(Date.now()), "YYYY-MM-DD---").locale('fa').format("YYYY-MM-DD"))
            }
          />
        </Grid>
      </Grid>
    </Box>

  )
}
export default Adminblog

