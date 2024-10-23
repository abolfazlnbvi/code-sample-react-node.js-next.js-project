import { createTheme } from "@mui/material/styles";
import IRANSansWeb from './IRANSansWeb.woff2';


export const lightTheme = createTheme({
    direction: "dark",
    Button: {

    },
    palette: {
        mode: "light",
 
    },
    typography: {
        fontFamily: 'IRANSansWeb',

    },
    Appbar: {
        backgrandColor: 'none'
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: `
            @font-face {
              font-family: 'IRANSansWeb';
              font-style: normal;
              font-display: swap;
              font-weight: 200;
              src: local('Raleway'), local('Raleway-Regular'), url(${IRANSansWeb}) format('woff2');
              unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
            }
          `,
        }
    }
})

export const darkTheme = createTheme({
    direction: "rtl",
    palette: {
        mode: "dark",
       
    },
    typography: {
        fontFamily: 'IRANSansWeb',

    },
    components: {
        MuiCssBaseline: {
            styleOverrides: `
            @font-face {
              font-family: 'IRANSansWeb';
              font-style: normal;
              font-display: swap;
              font-weight: 200;
              src: local('Raleway'), local('Raleway-Regular'), url(${IRANSansWeb}) format('woff2');
              unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
            }
          `,
        }
    }

});
