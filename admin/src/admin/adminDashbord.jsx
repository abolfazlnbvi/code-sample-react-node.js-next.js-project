import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Link, Outlet } from 'react-router-dom';
import { Button, Slide, SpeedDial } from '@mui/material';
import BookIcon from '@mui/icons-material/Book';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import { useState } from 'react';

import CloudUploadSharpIcon from '@mui/icons-material/CloudUploadSharp';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import ArticleIcon from '@mui/icons-material/Article';
import QuizIcon from '@mui/icons-material/Quiz';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


import { useContext } from "react";


import Dialog from '@mui/material/Dialog';



import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';


import { useFormik } from "formik";


import { toast } from "react-toastify";
import { AuthContext } from './context/adminContext';
import { baseUrlImage } from '../utils/baseUrl';
import Upload from './uploads/Upload';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { useEffect } from 'react';

import moment from 'jalali-moment';
import { useId } from 'react';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});



const meno = [

  {
    name: 'کاربران', url: "users",
    disable: true,
    inner: [
      { name: 'افزودن', url: "users/add" },
      { name: 'لیست', url: "users/list" },
      { name: 'اطلاعات', url: "users/details" }
    ]
  },

  {
    name: 'سفارشات', url: "order",
    disable: false,
    inner: [
      { name: 'افزودن', url: "order/add" },
      { name: 'لیست', url: "order/list" },
      { name: 'اطلاعات', url: "order/details" }
    ]
  },

  {
    name: 'محصولات', url: "product",
    disable: false,
    inner: [
      { name: 'افزودن', url: "product/add" },
      { name: 'لیست', url: "product/list" },
      { name: 'اطلاعات', url: "product/details" }
    ]
  },

  {
    name: 'بلاگ', url: "blog",
    disable: true,
    inner: [
      { name: 'افزودن', url: "blog/add" },
      { name: 'لیست', url: "blog/list" },
      { name: 'اطلاعات', url: "blog/details" }
    ]
  },

  {
    name: 'آزمون ها', url: "test",
    disable: true,
    inner: [
      { name: 'افزودن', url: "test/add" },
      { name: 'لیست', url: "test/list" },
      { name: 'کارد', url: "test/card" },
      { name: 'اطلاعات', url: "test/details" }
    ]
  },

  {
    name: 'تبلیغ ها', url: "ads",
    disable: true,
    inner: [
      { name: 'افزودن', url: "ads/add" },
      { name: 'لیست', url: "ads/list" },
      { name: 'اطلاعات', url: "ads/details" }
    ]
  },
  {
    name: 'کلاس ها', url: "class",
    disable: true,
    inner: [
      { name: 'افزودن', url: "class/add" },
      { name: 'لیست', url: "class/list" },
      { name: 'اطلاعات', url: "class/details" }
    ]
  },
  {
    name: 'دسته بندی ها', url: "category",
    disable: true,
    inner: [
      { name: 'افزودن', url: "category/add" },
      { name: 'لیست', url: "category/list" },
      { name: 'اطلاعات', url: "category/details" }
    ]
  },

]

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const Admindashbord = ({ children }) => {
  const id = useId()
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [openin, setOpenin] = React.useState(false);
  const [date, setDate] = React.useState(undefined);
  const [opendiv, setOpendiv] = React.useState(false);
  const { getAllUploaded, logout, handleDashboard } = useContext(AuthContext)
  useEffect(() => {
    const interval = setInterval(() => {
      setDate(Date.now());
    }, 1000);
    // پاکسازی اینتروال هنگام از بین رفتن کامپوننت
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    handleDashboard()

  }, [])
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleOpen = (e) => {
    setOpenin(e);
  };

  const handleDClose = () => {
    setOpenin(null);
  };



  const handleClickOpen = () => {
    setOpendiv(true);
    getAllUploaded()
  };
  const handleClose = () => {
    setOpendiv(false);
  };



  return (
    <>
      <Box sx={{ display: 'flex' }}>

        <CssBaseline />

        <AppBar color='default' position="fixed" open={open}>
          <Toolbar sx={{ display: 'flex', justifyContent: "space-between" }} >
            <div>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{
                  marginRight: 5,
                  ...(open && { display: 'none' }),
                }}
              >
                <MenuIcon />
              </IconButton>

              <Button onClick={logout} color='warning'>
                LOGOUT
              </Button>
              <Link to="https://amoozkaar.ir">
                <Button>
                  home
                </Button>
              </Link>
            </div>
            <div>
              <Typography color='inherit'>

                {date ? moment(date).locale('fa').format("HH:mm:ss YYYY/MM/DD ") : ""}
              </Typography>
            </div>


          </Toolbar>
        </AppBar>

        <Drawer variant="permanent" open={open}>
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            <Link to="/dashboard">

              <ListItem key={id} disablePadding sx={{ display: 'block' }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    <DashboardIcon />

                  </ListItemIcon>
                  <ListItemText sx={{ opacity: open ? 1 : 0 }} >
                    <Button color='success' variant='text' >داشبورد</Button>

                  </ListItemText>


                </ListItemButton>
              </ListItem>
            </Link>
            {meno.map((text, index) => (
              <div key={index}>

                <ListItem
                  key={index}
                  disablePadding
                  sx={{
                    display: 'block',
                  }}
                >
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? 'initial' : 'space-around',
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : 'auto',
                        justifyContent: 'center',
                      }}
                    >

                      {index == 0 ? <PeopleAltIcon /> : null}
                      {index == 1 ? <LocalGroceryStoreIcon /> : null}
                      {index == 2 ? <PrecisionManufacturingIcon /> : null}
                      {index == 3 ? <ArticleIcon /> : null}
                      {index == 4 ? <QuizIcon /> : null}
                      {index == 5 ? <PeopleAltIcon /> : null}
                      {index == 6 ? <PeopleAltIcon /> : null}
                      {index == 7 ? <PeopleAltIcon /> : null}
                      {index == 8 ? <PeopleAltIcon /> : null}
                      {index == 9 ? <PeopleAltIcon /> : null}
                    </ListItemIcon>
                    <ListItemText sx={{ opacity: open ? 1 : 0 }} >
                      <Button color={text.disable == false ? "warning" : "success"} variant='text' >{text.name}</Button>
                      <Button onClick={() => {
                        text.disable == false ? alert("برای تعمیر بسته شده") :
                          handleOpen(index)
                      }} sx={{ display: openin === index ? "none" : "black" }} >

                        <KeyboardArrowDownIcon />
                      </Button>
                      <Button onClick={handleDClose} sx={{ display: openin === index ? "black" : "none" }} >
                        <KeyboardArrowRightIcon />

                      </Button>
                    </ListItemText>


                  </ListItemButton>
                </ListItem>

                {text.inner.map((text, indexs) => (
                  <Box sx={{ display: openin === index ? "black" : "none" }}>

                    <Link to={text.url}>
                      <ListItem key={indexs} disablePadding sx={{ display: 'block' }}>
                        <ListItemButton
                          sx={{
                            minHeight: 48,
                            justifyContent: open ? 'initial' : 'center',
                            px: 2.5,
                          }}
                        >

                          <ListItemText sx={{ opacity: open ? 1 : 0 }} >
                            <Button color='info' variant='text' >{text.name}</Button>
                          </ListItemText>
                        </ListItemButton>
                      </ListItem>
                    </Link>
                  </Box>
                ))}
              </div>
            ))}
          </List>
          <Divider />
          <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem key={text} disablePadding sx={{ display: 'block' }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>


        <Box component="main">
          <DrawerHeader />
          {children}
        </Box>







        <Outlet />

        <SpeedDial
          ariaLabel="SpeedDial basic example"
          sx={{ position: 'fixed', bottom: 24, right: 24 }}
          icon={<CloudUploadSharpIcon />}
          onClick={handleClickOpen}
        />
      </Box>
      <Upload open={opendiv} handleClose={handleClose} />
    </>
  );
}
export default Admindashbord