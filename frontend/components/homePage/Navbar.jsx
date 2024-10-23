import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';

import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';

import MenuItem from '@mui/material/MenuItem';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Badge from '@mui/material/Badge';

import styled from '@emotion/styled';
import { Divider, FormControlLabel, Grid, Switch, Toolbar, Tooltip, alpha } from '@mui/material';
import { useState } from 'react';
import { useContext } from 'react';





import Link from 'next/link';

import { UserContext } from '@/context/userContext';

import HeaderImage from '../../assets/bag.png';
import Image from 'next/image';

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    '& .MuiSwitch-switchBase': {
        margin: 1,
        padding: 0,
        transform: 'translateX(6px)',
        '&.Mui-checked': {
            color: '#fff',
            transform: 'translateX(22px)',
            '& .MuiSwitch-thumb:before': {
                backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                    '#fff',
                )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
            },
            '& + .MuiSwitch-track': {
                opacity: 1,
                backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
            },
        },
    },
    '& .MuiSwitch-thumb': {
        backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
        width: 32,
        height: 32,
        '&::before': {
            content: "''",
            position: 'absolute',
            width: '100%',
            height: '100%',
            left: 0,
            top: 0,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                '#fff',
            )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
        },
    },
    '& .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
        borderRadius: 20 / 2,
    },
}));



const pages = [
    {
        name: "صفحه اصلی",
        link: "/",
        true: true
    },
    {
        name: "دوره های ما",
        link: "/class",
        true: false
    },
    {
        name: "آزمون های ما",
        link: "/tests",
        true: false
    },
    {
        name: "وبلاگ",
        link: "/blogs",
        true: false
    },
    {
        name: "تماس با ما",
        link: "/contact",
        true: false
    },
    {
        name: "درباره ما",
        link: "/about",
        true: false
    },
];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function NavBar({ theme }) {
    const { isLogin, setMode, mode, ads, admin, login, decoded, chengeMode } = useContext(UserContext)

    const [isClient, setIsClient] = useState(false)

    React.useEffect(() => {
        setIsClient(true)
    }, [])
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const Login = () => {
        return (


            <Link href={admin ? 'https://admin.amoozkaar.ir/' : "https://panel.amoozkaar.ir/"} >

                <Button
                    size='large'
                    variant='contained'
                    color='warning'
                    onClick={handleOpenUserMenu}
                    sx={{
                        padding: "12px 32px",
                        borderRadius: "8px",
                        fontSize: "18px",
                        fontWeight: 500
                    }}>
                    حساب کاربری
                </Button>

            </Link>

        )
    }
    const Logined = () => {
        return (

            <Tooltip title="Open settings" >
                <Link href='/login'>
                    <Button variant='text' color='inherit'>
                        <Typography variant='h6' >
                            ورود
                        </Typography>
                    </Button>
                </Link>
                {""}
                /{""}
                <Link href='/register' >
                    <Button variant='text' color='inherit'>
                        <Typography variant='h6'>
                            ثبت نام
                        </Typography>
                    </Button>
                </Link>
            </Tooltip>
        )
    }

    return (

        <div style={{
            width: "100%",
            margin: "auto"
        }}>

            <Grid>


                <Grid>


                    <AppBar color='transparent' position="static" sx={{
                        boxShadow: 'none',
                        borderRadius: { md: "10px 10px 0 0", xs: "10px" },



                    }}>
                        <Box>
                            <Toolbar disableGutters sx={{
                                display: "flex",
                                justifyContent: "space-between",


                            }}>


                                <IconButton
                                    size="large"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleOpenNavMenu}
                                    color="inherit"
                                    sx={{
                                        display: { xs: 'flex', md: 'none' },
                                    }}
                                >
                                    <Avatar variant='rounded' sx={{
                                        width: "30px",
                                        height: "30px"

                                    }} />
                                </IconButton>
                                <Box >

                                    <Avatar variant='rounded' sx={{ width: { xs: "50px", md: "70px" }, height: { xs: "50px", md: "70px" } }} />

                                </Box>



                                <Box sx={{
                                    flexGrow: 0,
                                    margin: "auto 0",
                                    display: { xs: 'none', md: 'flex' },

                                }}>
                                    <Grid container spacing={1}>

                                        {pages.map((data, index) => (
                                            <Grid item >

                                                <Link href={data.link} style={{
                                                    textDecoration: "none"
                                                }}>
                                                    <Button color={data.true == true ? "warning" : "inherit"} variant="text"
                                                        key={index}
                                                        onClick={handleCloseNavMenu}
                                                        sx={{ my: 2, fontSize: "18px", fontWeight: 900 }}

                                                    >
                                                        {data.name}
                                                    </Button>
                                                </Link>
                                            </Grid>
                                        ))}
                                    </Grid>
                                </Box>

                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorElNav}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'left',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'left',
                                    }}
                                    open={Boolean(anchorElNav)}
                                    onClose={handleCloseNavMenu}
                                    sx={{
                                        display: { xs: 'block', md: 'none' },
                                    }}
                                >
                                    {pages.map((data, index) => (
                                        <Link href={data.link} style={{
                                            textDecoration: "none"
                                        }}>
                                            <MenuItem key={index} onClick={handleCloseNavMenu}>
                                                <Typography textAlign="center" sx={{
                                                    color: "black",
                                                    borderColor: data.true == true ? "red" : ""
                                                }}>{data.name}</Typography>
                                            </MenuItem>
                                        </Link>
                                    ))}
                                    <MenuItem >
                                        <Box>

                                            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                                                <Badge badgeContent={4} color="error">
                                                    <MailIcon />
                                                </Badge>
                                            </IconButton>
                                            <IconButton
                                                size="large"
                                                aria-label="show 17 new notifications"
                                                color="inherit"
                                            >
                                                <Badge badgeContent={17} color="error">
                                                    <NotificationsIcon />
                                                </Badge>
                                            </IconButton>
                                            <FormControlLabel
                                                control={
                                                    <MaterialUISwitch
                                                        sx={{ m: 1 }}
                                                        onChange={chengeMode}
                                                    />
                                                }
                                            />
                                        </Box>
                                    </MenuItem>

                                    <MenuItem>





                                    </MenuItem>
                                </Menu>
                                <Box></Box>

                                <Box >
                                    <Badge variant='standard' badgeContent={4} color="error">
                                        <Button sx={{p: "0", m: "0"}}>

                                            <Image src={HeaderImage} style={{ width: "60px", height: "40px" }} />
                                        </Button>
                                    </Badge>

                                </Box>
                                <Box >
                                    {isClient ? isLogin === false ? <Logined /> : <Login /> : 'Prerendered'}
                                    { }
                                </Box>


                            </Toolbar>

                        </Box>
                    </AppBar>
                </Grid>

            </Grid>

        </div>
    );
}
export default NavBar;