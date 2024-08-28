import React, { useState } from "react";
import { Grid, Box, Button, Divider, Link, Typography, Tooltip, Menu, Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Paper } from '@mui/material';
import CachedIcon from '@mui/icons-material/Cached';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import product1 from '../../Images/webp/starter-motors.webp';
import product2 from '../../Images/webp/alternators.webp';
import product3 from '../../Images/webp/battery.webp';
import product4 from '../../Images/webp/turbo-chargers.webp';
import './product.style.css'
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import DescriptionIcon from '@mui/icons-material/Description';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';



export function ProductGrid() {

    const data = {
        topProduct: [
          {
            "id": 1,
            "title": "Product 1",
            "partnumber":"1-457-436-088",
            "description": "BOSCH DIESEL EMISSIONS FLUID UREA FILTER",
            "price": '$37.50',
            "lineprice":'$41.8750',
            "yousave":'10.45% OFF',
            "category": 'motor',
            "ship":'Ready to Ship',
            "thumbnail": product1,
            "images": product1
          },
          {
            "id": 2,
            "title": "Product 2",
            "partnumber":"A160203",
            "description": "PRESTOLITE LEECE NEVILLE NEW ALTERNATOR AVI SERIES PAD MOUNT TYPE 12V 240A",
            "price": '$27.95',
            "lineprice":'$32.2000',
            "yousave":'13.20% OFF',
            "ship":'Ready to Ship',
            "category": "motor",
            "thumbnail": product2,
            "images": product2
          },
          {
            "id": 3,
            "title": "Product 3",
            "partnumber":"10208R",
            "description": "TRUCK-LITE 10208R SUPER 10 INCANDESCENT RED ROUND 1 BULB ...",
            "price": '$455.00',
            "lineprice":'$770.0000',
            "yousave":'40.91% OFF',
            "ship":'Ready to Ship',
            "category": "motor",
            "thumbnail": product3,
            "images":product3
          },
          
        ],
        id: [1, 2, 3]
      };

      const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

      const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
      };
      const open= Boolean(anchorEl);

      const [contactAvailability, setContactAvailability] =useState <null | HTMLElement>(null);


      const contactAvailabilityClick = (event: React.MouseEvent<HTMLElement>) => {
        setContactAvailability(contactAvailability ? null : event.currentTarget);
      };
        const openContact = Boolean(contactAvailability)

    const [popup, setPopup] = React.useState(false);
    const [specpopup, setSpecPopup] = React.useState(false);

  const handleClickOpen = () => {
    setPopup(true);
  };
  const openPopup= Boolean(popup);
  const handleClose = () => {
    setPopup(false);
  };

  const specClickOpen = () => {
    setSpecPopup(true);
  };
  const specPopup= Boolean(specpopup);
  const specClose = () => {
    setSpecPopup(false);
  };
    return(
        <Box>
            <Grid container spacing={2}>
                {data.topProduct.map((elem, index) => (
                     <Grid item xs={12} sm={6} md={3} key={index}>
                         <Box className='product_wrapper'>
                            <div className='product_image_wrapper'>
                            <Box sx={{display:'flex',p:1 }}>
                              <Tooltip title="PRESTOLITE - Direct Replacement" arrow placement='right'>
                              <IconButton color='error' onClick={handleClickOpen}>
                                <CachedIcon />
                              </IconButton>
                                </Tooltip>
                                <Dialog
                                  open={openPopup}
                                  onClose={handleClose}
                                  aria-labelledby="alert-dialog-title"
                                  aria-describedby="alert-dialog-description"
                                >
                                  <DialogTitle id="alert-dialog-title">
                                  Cross Reference <IconButton
                                    aria-label="close"
                                    onClick={handleClose}
                                    sx={{
                                      position: 'absolute',
                                      right: 8,
                                      top: 8,
                                      color: (theme) => theme.palette.grey[500],
                                    }}
                                   
                                  >
                                    <CloseIcon />
                                  </IconButton>
        
                                  </DialogTitle>
                                  <DialogContent>
                                  <div className="cross-ref">
                                        <table className="cross-ref-table">
                                            <tbody>
                                                <tr>
                                                    <th>Competitor Partnumber</th>
                                                    <th>Competitor Name</th>
                                                    <th>InterChange Type</th>
                                                    <th>Notes</th>
                                                </tr>
                                                <tr>
                                                    <td>102526</td>
                                                    <td>DAVCO</td>
                                                    <td>Direct Replacement</td>
                                                    <td>Notes goes here…</td>
                                                </tr>
                                                <tr>
                                                    <td>3C3Z95E527EARM</td>
                                                    <td>FORD</td>
                                                    <td>Direct Replacement</td>
                                                    <td>Notes goes here…</td>
                                                </tr>
                                                <tr>
                                                    <td>3C3Z-9E527-EARM</td>
                                                    <td>FORD</td>
                                                    <td>Direct Replacement</td>
                                                    <td>Notes goes here…</td>
                                                </tr>
                                                <tr>
                                                    <td>4C3Z9E527AA</td>
                                                    <td>FORD</td>
                                                    <td>Direct Replacement</td>
                                                    <td>Notes goes here…</td>
                                                </tr>
                                                
                                            </tbody>
                                        </table>
                                    </div>
                                  </DialogContent>
                                 
                                </Dialog>
                               

                              
                              <IconButton aria-label="settings" sx={{marginLeft:'auto'}} onClick={specClickOpen}>
                              <DescriptionIcon />
                              </IconButton>
                              <Dialog
                                  open={specPopup}
                                  onClose={specClose}
                                  fullWidth={true}
                                  aria-labelledby="alert-dialog-title"
                                  aria-describedby="alert-dialog-description"
                                 maxWidth="sm"
                                 
                                >
                                  <DialogTitle id="alert-dialog-title">
                                  Specification <IconButton
                                    aria-label="close"
                                    onClick={specClose}
                                    sx={{
                                      position: 'absolute',
                                      right: 8,
                                      top: 8,
                                      color: (theme) => theme.palette.grey[500],
                                    }}
                                   
                                  >
                                    <CloseIcon />
                                  </IconButton>
        
                                  </DialogTitle>
                                  <DialogContent>
                                  <div className="cross-ref">
                                        <table className="cross-ref-table">
                                            <tbody>
                                                <tr>
                                                    <th colSpan={2}>Specification</th>
                                                   
                                                </tr>
                                                <tr>
                                                    <td>Amperage Rating	</td>
                                                    <td>160</td>
                                                </tr>
                                                <tr>
                                                    <td>3C3Z95E527EARM</td>
                                                    <td>FORD</td>
                                                </tr>
                                                <tr>
                                                    <td>3C3Z-9E527-EARM</td>
                                                    <td>FORD</td>
                                                </tr>
                                                <tr>
                                                    <td>4C3Z9E527AA</td>
                                                    <td>FORD</td>
                                                </tr>
                                                
                                            </tbody>
                                        </table>
                                    </div>
                                  </DialogContent>
                                 
                                </Dialog>
                              {/* <Menu id="spec-menu" elevation={2}
                                  open={open}
                                  anchorEl={anchorEl}
                                  onClose={handleClick}
                                  anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                  }}
                                    transformOrigin={{
                                            vertical:'top',
                                            horizontal:'right',
                                        }}
                                  >
                                <Box display='flex'>
                                <TableContainer component={Paper} elevation={0} >
                          <Table aria-label="simple table">
                            <TableHead>
                              <TableRow sx={{backgroundColor:'#e9e9e9'}}>
                                <TableCell colSpan={2} sx={{p:1}}>Specification</TableCell>
                              </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                  <TableCell>Amperage Rating</TableCell>
                                  <TableCell>330</TableCell>
                                </TableRow>
                                <TableRow>
                                  <TableCell>Brush/Brushless</TableCell>
                                  <TableCell>Brush</TableCell>
                                </TableRow>
                                <TableRow>
                                  <TableCell>Fan Type</TableCell>
                                  <TableCell>External</TableCell>
                                </TableRow>
                            </TableBody>
                          </Table>
                        </TableContainer>
                                  </Box>
                                  </Menu> */}
                              </Box>
                              <Link className='product_imagethumb_link' href="ProductDetails">
                                <img src={elem.images} srcSet={`${elem.images} 760w`} alt='product thumb' className='product_imagethumb' />
                                <span className="water-mark">Water Mark</span>
                              </Link>
                              <div className="product-labels">
                                  <Typography>Exact Match</Typography>
                              </div>
                            </div>
                            <Divider/>
                            <div className='product_info'>
                                <Typography color="custom" className='product_dec'>
                                <Link href="ProductDetails">{elem.description}</Link>
                                </Typography>
                                <Typography className='product_number'>
                                {elem.partnumber}
                                </Typography>
                                <Box className="price-list">
                                <Typography variant="subtitle2" color="primary">
                                {elem.price}
                                </Typography>
                                <Typography color="custom" className='price-line-through'>
                                {elem.lineprice}
                                </Typography>
                                </Box>
                                <Box className="price-save">
                                <Typography variant="body2" sx={{px:1}}>
                                    {elem.yousave}
                                </Typography>
                                </Box>
                               
                                <Box className="price-list price-cart">
                                <Typography variant="body1" className='price-ship'>
                                <CheckCircleIcon sx={{fontSize:'15px', marginRight:'5px'}} /> {elem.ship}
                                </Typography>
                                <IconButton sx={{marginLeft:'auto'}} className="addto-cart-icon">
                                  <ShoppingCartOutlinedIcon />
                                </IconButton>   
                                </Box>
                            
                            
                            </div> 
                        </Box>
                     </Grid>
                ))}
                <Grid item xs={12} sm={6} md={3}>
                  <Box className='product_wrapper'>
                    <div className='product_image_wrapper'>
                      <Box sx={{display:'flex',p:1 }}>
                      <Tooltip title="PRESTOLITE - Can Use" arrow placement='right'>
                        <IconButton color='error' >
                          <InfoOutlinedIcon />
                        </IconButton>
                      </Tooltip>
                      
                      <IconButton aria-label="settings" sx={{marginLeft:'auto'}} >
                      <DescriptionIcon />
                      </IconButton>
                     
                      </Box>
                      
                        <Link className='product_imagethumb_link'>
                          <img src={product4} alt='product thumb' className='product_imagethumb' />
                        </Link>
                    </div>
                    <Divider/>
                    <div className='product_info'>
                    <Typography color="custom" className='product_dec'>
                    <Link >DONALDSON FUEL FILTER WATER SEPARATOR SPIN ON TWIST AND DRAIN</Link>
                    </Typography>
                    <Typography className='product_number'>
                    P551000
                    </Typography>
                    <Box className="price-list">
                      <Typography variant="subtitle2" color="primary">
                      $20.00
                      </Typography>
                      <Typography color="custom" className='price-line-through'>
                      $41.8750
                      </Typography>
                    </Box>
                    <Box className="price-save">
                      <Typography variant="body2" sx={{px:1}}>
                        10.45% OFF
                      </Typography>
                    </Box>
                   
                    <Box className="price-list price-cart">
                    <div className='price-contact' onClick={contactAvailabilityClick}
                        aria-controls={open ? 'contact-availability' : undefined}
                        aria-haspopup='true'
                        aria-expanded={open ? 'true' : undefined}
                      >
                        Contact for Availability <ArrowDropDownIcon />
                        {contactAvailability && (
                        <Menu id="contact-availability" elevation={2} className="contact-availability-popup"
                          open={openContact}
                          anchorEl={contactAvailability}
                          anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                          }}
                          transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                          }}
                        >
                          <div className='contact-availability'>
                            <Box sx={{ textAlign: 'center' }}>
                              Please Contact
                              <Button color="secondary" sx={{ py: 0 }}>
                                1(874) 320 - 9145
                              </Button> or
                              <Button color="secondary" sx={{ py: 0 }}>
                              muruganandham.vu@apaengineering.com
                                
                              </Button>
                              for Availability as the item may not be in stock.

                            </Box>
                          </div>
                        </Menu>
                          )}
                      </div>
                      <IconButton sx={{marginLeft:'auto'}} className="addto-cart-icon">
                       <ShoppingCartOutlinedIcon />
                      </IconButton>
                        {/* <Button sx={{marginLeft:'auto'}} variant="contained">
                        <ShoppingCartOutlinedIcon />
                        </Button> */}
                        

                      
                      
                      </Box>
                    </div>
                  </Box>
                </Grid>
            </Grid>
        </Box>
    );

}