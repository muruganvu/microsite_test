
import React, { useState, useRef, useEffect } from 'react';
import { AppBar, Toolbar, alpha, Button, 
    Container, styled, Divider, InputBase, Paper, Stack, Link, Box, Grid, Menu} from "@mui/material";
import { LeftMenu } from "./LeftMenu";
import logo from '../../Images/main-logo.png';

import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
//import './header.style.scss';
// import { CartCount } from "../Cart/CartCount";

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: '12px',
    backgroundColor: '#fff',
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    border:'1px solid #ccc',
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('lg')]: {
      marginLeft: theme.spacing(2),
      width: '550px',
      display: 'flex',
    },
    [theme.breakpoints.up('md')]: {
      marginLeft: theme.spacing(2),
      width: '450px',
      display: 'flex',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    right:'0',
    top:'0',
   // background:'#ff4400',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width:'100%',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 5, 1, 2),
      // vertical padding + font size from searchIcon
      paddingright: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '100%',
        '&:focus': {
          width: '100%',
        },
      },
    },
  }));

  interface MutableRefObject<T> {
    current: T;
}

export const MenuHeader =()=> {

  
  const [sticky, setSticky] = useState({ isSticky: false, offset: 0 });
  const headerRef = useRef<HTMLDivElement | null>(null);
  const current = headerRef.current;

  const handleScroll = (elTopOffset:any, elHeight:any) => {
    if (window.pageYOffset > (elTopOffset + elHeight)) {
      setSticky({ isSticky: true, offset: elHeight });
    } else {
      setSticky({ isSticky: false, offset: 0 });
    }
  };


  useEffect(() => {
    //var header = current.getBoundingClientRect();
    const handleScrollEvent = () => {
      //handleScroll(header.top, header.height)
    }

    window.addEventListener('scroll', handleScrollEvent);

    return () => {
      window.removeEventListener('scroll', handleScrollEvent);
    };
  }, []);

//  const [anchorEl, setanchorEl]=useState(null)
    const [anchorpopupEl, setanchorpopupEl]=React.useState<null | HTMLElement>(null);
  
  
//     const open = Boolean(anchorEl)
    const openpopup = Boolean(anchorpopupEl)
    const mymenuClickpopup =(event: React.MouseEvent<HTMLButtonElement>) => {
      setanchorpopupEl(event.currentTarget)
  }
  const mymenuClosepopup = () =>{
    setanchorpopupEl(null)
  }
  
  
//     const mymenuClick =(event:MouseEvent<HTMLButtonElement>) => {
//         setanchorEl(event.currentTarget)
//     }
//     const mymenuClose = () =>{
//       setanchorEl(null)
//     }




    return (
        <div>
            <AppBar position="static" color="transparent" elevation={0} component="nav" >
            <Container maxWidth="lg">
                <Toolbar className="main-menu-toolbar">
                    
                        <a className="header_logo" href="/">
                        <img src={logo} alt="logo"/>
                        </a>                    
                        
                        <div>
                        <Search>
            
                            <StyledInputBase
                            placeholder="Search by Part Number or Description"
                            inputProps={{ 'aria-label': 'Search by Part Number or Description' }}
                            />
                                <SearchIconWrapper>
                            <SearchIcon  />
                            </SearchIconWrapper>
                        </Search>
                        </div>
                        <Box className='main-menu-right'>
                          <Button 
                          endIcon={<KeyboardArrowDownOutlinedIcon 
                          sx={{verticalAlign:'bottom'}}  />} >
                          My Account
                          </Button>
                          {/* <CartCount /> */}
                       </Box>
                </Toolbar>
            </Container>   
            </AppBar>

            <Paper elevation={0} sx={{padding: '5px 5px', backgroundColor:'#f7f7f7'}} className={`${sticky.isSticky ? ' sticky' : ''}`} ref={headerRef}>
              <Container maxWidth="lg">
              <Stack direction="row"
                      alignItems="center"
                      spacing={5}>
              <LeftMenu /> 

              <Button 
                          endIcon={<ArrowDropDownIcon 
                          sx={{verticalAlign:'bottom'}}  />} 
                          //sx={{textTransform: 'none'}}
                          >
                          Products
                          </Button>
              <Box className='nav-main-menu'>
                <Link href="/PartSearch" className="linkstyle">Part Search</Link>
                <Link href="/contact" className="linkstyle">Contact Us</Link>
                <Link href="/CustomPage" className="linkstyle">Custom Page</Link>
              </Box>
              <Box className='nav-product-menu'>
                <Link className="linkstyle">Lighting</Link>
                <Link className="linkstyle">Motors</Link>
                <Link className="linkstyle">Diesel Fuel System</Link>
                <Link className="linkstyle">Turbochargers</Link>
                <Link className="linkstyle">Brakes</Link>
              </Box>

            <Box className='addtional-menu'>
               <Button variant="contained" id="menumega-button" aria-controls={openpopup ? "menumega" : undefined}
                    aria-haspopup="true"
                    aria-expanded={openpopup ? "true" : undefined}
                    onClick={mymenuClickpopup} endIcon={<KeyboardArrowDownOutlinedIcon 
                      sx={{verticalAlign:'bottom'}}  />}>MORE</Button>
            </Box>

              <Menu
                    id="menumega"
                    open={openpopup}
                    anchorEl={anchorpopupEl}
                    onClose={mymenuClosepopup}
                    MenuListProps={{
                      "aria-labelledby": "menumega-button",
                    }}
                    className="menumega"
                  >
                    <Box
                      display="flex"
                      sx={{ padding: "10px" }}
                      className="menumega-box"
                    >
                    <Box className='nav-main-menu'>
                      <Link href="/" className="linkstyle">Part Search</Link>
                      <Link href="/" className="linkstyle">Contact Us</Link>
                      <Link href="/" className="linkstyle">Custom Page</Link>
                      <Link className="linkstyle">Lighting</Link>
                      <Link className="linkstyle">Motors</Link>
                      <Link className="linkstyle">Diesel Fuel System</Link>
                      <Link className="linkstyle">Turbochargers</Link>
                      <Link className="linkstyle">Brakes</Link>
                      <Link href="/" className="linkstyle">Part Search</Link>
                      <Link href="/" className="linkstyle">Contact Us</Link>
                      <Link href="/" className="linkstyle">Custom Page</Link>
                      <Link className="linkstyle">Lighting</Link>
                      <Link className="linkstyle">Motors</Link>
                      <Link className="linkstyle">Diesel Fuel System</Link>
                      <Link className="linkstyle">Turbochargers</Link>
                      <Link className="linkstyle">Brakes</Link>
                    </Box>
                      {/* <Grid container spacing={2}>
                        
                         
                            <Grid item md={2}>
                              <Button
                               
                                onClick={mymenuClosepopup}
                                className="menumega-list"
                              >
                               REVIEWS
                              </Button>
                            </Grid>
                            <Grid item md={2}>
                              <Button
                               
                                onClick={mymenuClosepopup}
                                className="menumega-list"
                              >
                               TERMS OF USE
                              </Button>
                            </Grid>
                            <Grid item md={2}>
                              <Button
                               
                                onClick={mymenuClosepopup}
                                className="menumega-list"
                              >
                               OPC PARTS LLC WARRANTY
                              </Button>
                            </Grid>
                            <Grid item md={2}>
                              <Button
                               
                                onClick={mymenuClosepopup}
                                className="menumega-list"
                              >
                               SHOP
                              </Button>
                            </Grid>
                            <Grid item md={2}>
                              <Button
                               
                                onClick={mymenuClosepopup}
                                className="menumega-list"
                              >
                               SHOP
                              </Button>
                            </Grid>
                            <Grid item md={2}>
                              <Button
                               
                                onClick={mymenuClosepopup}
                                className="menumega-list"
                              >
                               SHOP
                              </Button>
                            </Grid>
                        
                      </Grid> */}
                    </Box>
                  </Menu>
              
              </Stack>
              
              </Container>
            </Paper>
            <Divider/>
        </div>

)

}