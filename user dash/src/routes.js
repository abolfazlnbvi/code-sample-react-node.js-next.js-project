import { lazy } from "react";
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

/** 
  All of the routes for the Soft UI Dashboard React are added here,
  You can add a new route, customize the routes and delete the routes here.
  Once you add a new route on this file it will be visible automatically on
  the Sidenav.
  For adding a new route you can follow the existing routes in the routes array.
  1. The `type` key with the `collapse` value is used for a route.
  2. The `type` key with the `title` value is used for a title inside the Sidenav. 
  3. The `type` key with the `divider` value is used for a divider between Sidenav items.
  4. The `name` key is used for the name of the route on the Sidenav.
  5. The `key` key is used for the key of the route (It will help you with the key prop inside a loop).
  6. The `icon` key is used for the icon of the route on the Sidenav, you have to add a node.
  7. The `collapse` key is used for making a collapsible item on the Sidenav that has other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  8. The `route` key is used to store the route location which is used for the react router.
  9. The `href` key is used to store the external links location.
  10. The `title` key is only for the item with the type of `title` and its used for the title text on the Sidenav.
  10. The `component` key is used to store the component of its route.
*/

// Argon Dashboard 2 MUI layouts
const Dashboard = lazy(() => import("layouts/dashboard"))
const Card = lazy(() => import("layouts/card"))
const Charts = lazy(() => import("layouts/charts"))
const Tables = lazy(() => import("layouts/tables"))
const Billing = lazy(() => import("layouts/billing"))
const VirtualReality = lazy(() => import("layouts/virtual-reality"))
const Profile = lazy(() => import("layouts/profile"))
const SignIn = lazy(() => import("layouts/authentication/sign-in"))
const SignUp = lazy(() => import("layouts/authentication/sign-up"))

// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";

const routes = [
  {
    type: "route",
    name: "داشبورد",
    key: "dashboard",
    route: "/dashboard",
    icon: <ArgonBox component="i" color="primary" fontSize="14px" className="ni ni-tv-2" />,
    component: <Dashboard />,
  },
  {
    type: "route",
    name: "مشاوره های من",
    key: "charts",
    route: "/myAdvice",
    icon: <ArgonBox component="i" color="secondary" fontSize="14px"  className="ni ni-headphones" />,
    component: <Charts />,
  },
  {
    type: "route",
    name: "آزمون های من",
    key: "card",
    route: "/myTest",
    icon: <ArgonBox component="i" color="warning" fontSize="14px" className="ni ni-diamond" />,
    component: <Card />,
  },
  {
    type: "route",
    name: "کلاس های من",
    key: "tables",
    route: "/myClass",
    icon: (
      <ArgonBox component="i" color="info" fontSize="14px" className="ni ni-hat-3" />
    ),
    component: <Tables />,
  },
  {
    type: "route",
    name: "درخواست های من",
    key: "billing",
    route: "/myRequests",
    icon: <ArgonBox component="i" color="success" fontSize="14px" className="ni ni-box-2" />,
    component: <Billing />,
  },
  {
    type: "route",
    name: "Virtual Reality",
    key: "virtual-reality",
    route: "/virtual-reality",
    icon: <ArgonBox component="i" color="info" fontSize="14px" className="ni ni-app" />,
    component: <VirtualReality />,
  },
  { type: "title", title: "صفحه اکانت", key: "account-pages" },
  {
    type: "route",
    name: "پروفایل",
    key: "profile",
    route: "/profile",
    icon: <ArgonBox component="i" color="dark" fontSize="14px" className="ni ni-single-02" />,
    component: <Profile />,
  },
  {
    type: "collapse",
    name: "Sign In",
    key: "sign-in",
    route: "/authentication/sign-in",
    icon: (
      <ArgonBox component="i" color="warning" fontSize="14px" className="ni ni-single-copy-04" />
    ),
    component: <SignIn />,
  },
  {
    type: "collapse",
    name: "Sign Up",
    key: "sign-up",
    route: "/authentication/sign-up",
    icon: <ArgonBox component="i" color="info" fontSize="14px" className="ni ni-collection" />,
    component: <SignUp />,
  },
];

export default routes;
