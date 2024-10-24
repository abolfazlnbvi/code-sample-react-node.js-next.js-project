/* eslint-disable no-unused-vars */
/**
=========================================================
* Argon Dashboard 2 MUI - v3.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-material-ui
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";

// Argon Dashboard 2 MUI example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DetailedStatisticsCard from "examples/Cards/StatisticsCards/DetailedStatisticsCard";
import SalesTable from "examples/Tables/SalesTable";
import CategoriesList from "examples/Lists/CategoriesList";
import GradientLineChart from "examples/Charts/LineCharts/GradientLineChart";

// Argon Dashboard 2 MUI base styles
import typography from "assets/theme/base/typography";

// Dashboard layout components
import Slider from "layouts/dashboard/components/Slider";

// Data
import { gradientLineChartData } from "layouts/dashboard/data/gradientLineChartData";
import salesTableData from "layouts/dashboard/data/salesTableData";
import categoriesListData from "layouts/dashboard/data/categoriesListData";
import { useContext, useEffect } from "react";
import { UserContext } from "context/userContext";
import { getDayDifference } from "utils/addweek";
import { getPersianDateDetails } from "utils/addweek";

function Default() {
  const { userdashboard, dashboard } = useContext(UserContext)
  useEffect(() => {
    userdashboard()
  }, [])

  const { size } = typography;
  return (
    <DashboardLayout>
      <DashboardNavbar />
      {dashboard.dashboard ?
        <ArgonBox py={3}>
          <Grid container spacing={3} mb={3}>
            <Grid item xs={12} md={6} lg={3}>
              <DetailedStatisticsCard
                title="کلاس ها"
                count={`${dashboard.dashboard.classes.length != 0 ? dashboard.dashboard.classes.length : "0"} کلاس فعال`}
                icon={{ color: "info", component: <i className="ni ni-money-coins" /> }}
                percentage={{
                  color: "info",
                  count: `${Math.round(Math.random() * 7)}`,
                  text: dashboard.dashboard.tests.length != 0 ? `روز تا نزدیک ترین کلاس ${getPersianDateDetails(dashboard.dashboard.tests[0].date)}` : "کلاسی پیش رو نداری"

              
                }}
              />
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <DetailedStatisticsCard
                title="آزمون ها"
                count={`${dashboard.dashboard.tests.length} آزمون باقی مانده`}
                icon={{ color: "success", component: <i className="ni ni-world" /> }}
                percentage={{
                  color: "success",
                  count: `${dashboard.dashboard.tests.length != 0 ? getDayDifference(dashboard.dashboard.tests[0].date) : ""}`,
                  text: dashboard.dashboard.tests.length != 0 ? `روز تا آزمون ${getPersianDateDetails(dashboard.dashboard.tests[0].date)}` : "آزمونی پیش رو نداری"
                }}
              />
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <DetailedStatisticsCard
                title="مشاوره"
                count={`${dashboard.dashboard.counseling.length} مشاوره انجام شده`}
                icon={{ color: "error", component: <i className="ni ni-paper-diploma" /> }}
                percentage={{
                  color: "error",
                  count:
                    `${dashboard.dashboard.counseling.length != 0 ?
                      getDayDifference(dashboard.dashboard.counseling.counselingTime)
                      :
                      ""
                    }`,
                  text:
                    `${dashboard.dashboard.counseling.length != 0 ?
                      "روز گذشته از آخرین مشاوره"
                      :
                      "هنوز مشاوره ای نداشتی"
                    }`,
                }}
              />
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <DetailedStatisticsCard
                title="دفتر تحصیلی"
                count={dashboard.dashboard ? dashboard.dashboard.counseling.length == 0 ? "عدم اشتراک" : dashboard.dashboard.counseling.length >= 0 ? "دفتر فعال است" : "" : ""}
                icon={{ color: "warning", component: <i className="ni ni-cart" /> }}
                percentage={{ color: "warning", count: `${Math.round(Math.random() * 300)}`, text: "روز تا پایان اشتراک" }}
              />
            </Grid>
          </Grid>
          <Grid container spacing={3} mb={3}>
            <Grid item xs={12} lg={7}>
              <GradientLineChart
                title="Sales Overview"
                description={
                  <ArgonBox display="flex" alignItems="center">
                    <ArgonBox fontSize={size.lg} color="success" mb={0.3} mr={0.5} lineHeight={0}>
                      <Icon sx={{ fontWeight: "bold" }}>arrow_upward</Icon>
                    </ArgonBox>
                    <ArgonTypography variant="button" color="text" fontWeight="medium">
                      4% more{" "}
                      <ArgonTypography variant="button" color="text" fontWeight="regular">
                        in 2022
                      </ArgonTypography>
                    </ArgonTypography>
                  </ArgonBox>
                }
                chart={gradientLineChartData}
              />
            </Grid>
            <Grid item xs={12} lg={5}>
              <Slider ads={dashboard.dashboard ? dashboard.dashboard.ads : []} />
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={12} md={8}>
              <SalesTable title="Sales by Country" rows={salesTableData} />
            </Grid>
            <Grid item xs={12} md={4}>
              <CategoriesList title="categories" categories={categoriesListData} />
            </Grid>
          </Grid>
        </ArgonBox>
        : "loading..."}
      <Footer />
    </DashboardLayout>
  );
}

export default Default;
