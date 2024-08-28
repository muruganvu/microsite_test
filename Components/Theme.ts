import { createTheme } from '@mui/material/styles';

// import "@fontsource/teko";
// import "@fontsource/krub";


const font = "'-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue','Arial','sans-serif','Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol'";


export const MyTheme = createTheme({
  palette: {
    primary: {
      main: '#ed7d20',
      contrastText: "#fff",
      light:"#000",
    },
    secondary: {
      light: '#2f5597',
      main: '#2f5597',
      contrastText: '#fff',
    },
    success: {
      main: '#29a32c',
    },
    error: {
      main: '#EF233C',
    },
    info: {
      main: '#0288d1',
    },
    myCustomColor: {
      main:'#fff',
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  typography: {
    fontFamily: font,
    h1: {
      fontFamily: 'Roboto, sans-serif',
      fontSize: '28px',
      fontWeight: '600',
      // lineHeight:'2',
      color:'#333231',
      lineHeight:1.4,
      textTransform:'uppercase',
    },
    h2: {
      fontFamily: 'Roboto, sans-serif',
      fontSize: '18px',
      fontWeight: '400',
      color:'#333',
      lineHeight:1.4,
    },
    h3: {
      fontFamily: 'Roboto Condensed, sans-serif',
      fontSize: '20px',
      fontWeight: '600',
      lineHeight:1.4,
      textTransform:'uppercase',
    },
    h4: {
      fontFamily: 'Roboto, sans-serif',
      fontSize: '16px',
      lineHeight:1.4,
      fontWeight: 400,
    },
    h5: {
      fontFamily: 'Roboto, sans-serif',
      fontSize: '17px',
      fontWeight: 500,
      lineHeight:1.4,
      textTransform:'uppercase',
    },
    h6: {
      fontFamily: 'Roboto, sans-serif',
      fontSize: '20px',
      fontWeight: 500,
      lineHeight:1.4,
    },
    subtitle1: {
      fontFamily: 'Roboto Condensed, sans-serif',
      fontSize: '20px',
      fontWeight: 600,
      lineHeight:1.4,
    },
    subtitle2: {
      fontFamily: 'Roboto Condensed, sans-serif',
      fontSize: '16px',
      fontWeight: 600,
      lineHeight:1.4,
    },
    body1: {
      fontSize: '16px',
      color:'#2d2d2d',
      lineHeight:1.4,
    },
    body2: {
      fontSize: '14px',
      color:'#2d2d2d',
      lineHeight:1.4,
    }



  },
  components: {
  //   MuiButtonBase: {
  //     defaultProps: {
  //       fontFamily: 'krub, sans-serif',
  //     },
  //   },

    MuiContainer: {
      styleOverrides: {
        maxWidthLg: {
          '&.MuiContainer-maxWidthLg': {
            maxWidth: 1400,
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          minWidth: 'auto',
          fontSize:'14px',
          textTransform:'capitalize',
        },
       
      },
    },
    // MuiAvatar:{
    //   styleOverrides: {
    //     root:{
    //       background:'transparent',
    //     },
    //   },
    // },
    MuiOutlinedInput:{
      styleOverrides: {
        input:{
         padding:'10px 12px',
         fontSize:'14px',
        },
      },
    },
    MuiAccordionSummary:{
      styleOverrides: {
          content:{
            marginLeft:'0px!important',
          },
      },
    }

  },


});