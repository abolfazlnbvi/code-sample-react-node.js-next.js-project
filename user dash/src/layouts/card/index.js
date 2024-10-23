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
import DetailedStatisticsCard from "examples/Cards/StatisticsCards/DetailedStatisticsCard";
import DefaultPricingCard from "examples/Cards/PricingCards/DefaultPricingCard";
import PlaceholderCard from "examples/Cards/PlaceholderCard";
import MasterCard from "examples/Cards/MasterCard";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard";
import OutlinedCounterCard from "examples/Cards/CounterCards/OutlinedCounterCard";
import DefaultBlogCard from "examples/Cards/BlogCards/DefaultBlogCard";
import TransparentBlogCard from "examples/Cards/BlogCards/TransparentBlogCard";


// Argon Dashboard 2 MUI base styles
import typography from "assets/theme/base/typography";
import MiniStatisticsCard from "examples/Cards/StatisticsCards/MiniStatisticsCard";
import DefaultProjectCard from "examples/Cards/ProjectCards/DefaultProjectCard";
import bg1 from "assets/images/img-2.jpg";
import bg2 from "assets/images/img-1.jpg";
import bg3 from "assets/images/img-3.jpg";

function Card() {
    const { size } = typography;
    return (
        <DashboardLayout>
            <DashboardNavbar />
            <ArgonBox py={3}>
                <Grid container spacing={3} mb={3}>
                    <Grid item xs={12} md={6} lg={3}>
                        <DetailedStatisticsCard
                            title="DetailedStatisticsCard"
                            count="$53,000"
                            icon={{ color: "info", component: <i className="ni ni-money-coins" /> }}
                            percentage={{ color: "success", count: "+55%", text: "DetailedStatisticsCard" }}
                        />
                    </Grid>
                    <Grid item xs={12} md={6} lg={3}>
                        <MiniStatisticsCard
                            title="MiniStatisticsCard"
                            count="2,300"
                            icon={{ color: "error", component: <i className="ni ni-world" /> }}
                            percentage={{ color: "success", count: "+3%", text: "since last week" }}
                        />
                    </Grid>
                    
                   
                    <Grid item xs={12} md={6} lg={3}>
                        <MasterCard
                            color="dark"
                            number="6666758469568009"
                            holder="MasterCard"
                            expires="MasterCard"
                        />
                    </Grid>
                    <Grid item xs={12} md={6} lg={3}>
                        <DefaultInfoCard

                            color="success"
                            icon={<i className="ni ni-world" />}
                            title="DefaultInfoCard"
                            description="DefaultInfoCard DefaultInfoCard"
                            value="5555"

                        />
                    </Grid>
                    <Grid item xs={12} md={6} lg={3}>
                        <DefaultPricingCard
                            title="DefaultPricingCard" price={{
                                currency: "TON",
                                value: "5000"
                            }}
                            specifications={[{ label: "DefaultPricingCard", includes: "remove" }, { label: "DefaultPricingCard", includes: "done" }]}
                            action={{
                                type: "internal",
                                route: "",
                                label: "dd",
                                color:
                                    "primary",
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} md={6} lg={3}>
                        <PlaceholderCard
                            icon={<i className="ni ni-world" />}
                            title={{
                                variant: "h1",
                                text: "PlaceholderCard",
                            }}
                            hasBorder={true}
                            outlined={true}
                        />
                    </Grid>
                    <Grid item xs={12} md={6} lg={3}>
                        <ProfileInfoCard
                            color="success"

                            title="ProfileInfoCard"
                            description="ProfileInfoCard ProfileInfoCard"

                            info={["ProfileInfoCard", "ProfileInfoCard", "ProfileInfoCard", "ProfileInfoCard", "ProfileInfoCard"]}
                            social={[{ link: "#", icon: <i className="ni ni-world" />, color: "facebook" }]}
                            action={{
                                route: "",
                                tooltip: "ProfileInfoCard",
                            }}

                        />
                    </Grid>
                    <Grid item xs={12} md={6} lg={3}>
                        <OutlinedCounterCard
                            color="primary"
                            count="555000"
                            title="OutlinedCounterCard"
                            prefix="OutlinedCounterCard"
                            suffix={<i className="ni ni-world" />}
                        />
                    </Grid>
                    <Grid item xs={12} md={6} lg={3}>
                        <DefaultBlogCard
                            image={bg2}
                            category={{

                                color: "warning",
                                label: DefaultBlogCard,
                            }}

                            title="DefaultBlogCard"
                            description="DefaultBlogCard DefaultBlogCard DefaultBlogCard "
                            author={{

                                image: bg3,
                                name: "DefaultBlogCard",
                                date: Date.now(),

                            }}
                            action={{
                                type: "external",
                                route: "80reg",
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} md={6} lg={3}>
                        <TransparentBlogCard
                              image={bg2}
                            title="TransparentBlogCard"
                            description="DefaultBlogCard DefaultBlogCard DefaultBlogCard "
                            action={{
                              type:"internal",
                              route: "#",
                              label: "TransparentBlogCard",
                              color: "dark",
    
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} md={6} lg={3}>
                        <DefaultProjectCard
                            image={bg1}
                            label="DefaultProjectCard"
                            title="DefaultProjectCard"
                            description="DefaultProjectCard"
                            action={{
                                type: "internal",
                                route: "",
                                color: "primary",

                                label: "DefaultProjectCard",
                            }} />
                    </Grid>
                </Grid>

            </ArgonBox>

        </DashboardLayout>
    );
}

export default Card;
