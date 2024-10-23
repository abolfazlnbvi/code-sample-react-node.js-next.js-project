import { ThemeProvider } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import { HelmetProvider } from "react-helmet-async";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import 'react-toastify/dist/ReactToastify.css';
import Grid from "@mui/material/Unstable_Grid2";

import { lightTheme, darkTheme } from "./theme/theme";
import { CssBaseline } from "@mui/material";
import { ToastContainer } from "react-toastify";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../admin/context/adminContext";

const cacheRTL = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
});

const MainLayout = ({ children }) => {
    const {mode} = useContext(AuthContext)
    const theme = mode === false ? darkTheme : lightTheme;

    return (

        <CacheProvider value={cacheRTL}>
            <ThemeProvider theme={theme}>
                <HelmetProvider>
                    <Grid container sx={{justifyContent: 'center'}} >
                        <CssBaseline />
                        <ToastContainer
                            position="top-right"
                            autoClose
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            theme="dark"
                        />
                        {children}
                    </Grid>
                </HelmetProvider>
            </ThemeProvider>
        </CacheProvider>
    );
};

export default MainLayout;
