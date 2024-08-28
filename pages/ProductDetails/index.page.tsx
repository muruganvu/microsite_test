import  { useState } from "react";
import { Typography, Container, Paper, Box, Grid, Divider, Stack, Button, TextField } from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import EastIcon from '@mui/icons-material/East';
import { PartAccessories, AlternativeProduct } from "../../Components/Product/ProductList";
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import IconButton from '@mui/material/IconButton';

import publication from '../../Images/publication.jpg';

import '../../Css/productdetails.style.css';
import '../../Components/Product/product.style.css';

export { Page }

function Page() {

    const [count, setCount ] = useState(1); 

    return(
        <div>   
            <Paper elevation={0} sx={{mt:2, mb:1, py:3,}}>
                <Container>
                    <div className="product-detail-main-container">
                        <div className="product-detail-left">
                            
                            <div className="product-detail-container">
                                 <div className="product-detail-slider">
                                    hai
                                 </div>
                                <div className="product-detail-desc">
                                    <Typography variant="body1" fontWeight={600}>
                                    <b>AP0040 </b> - ALLIANT POWER NEW G2.8 INJECTOR CONNECTOR FITS FORD 6.0L POWER STROKE 4.5L POWER STROKE NAVISTAR VT365 VT275 AND MAXXFORCE 5 ENGINES POWER STROKE
                                    </Typography>
                                    
                                    {/* <Typography variant="body2">
                                    <b>Description :</b> Alliant Power New G2.8 Injector Connector Fits Ford F Series Excursion Applications With 6.0L Power Stroke Engines Model Years 2003 Thru 2007, Fits Ford E Series Applications With 6.0L Power Stroke Engines Model Years 2004 Thru 2010,   
                                    <a className="view-more">View More</a>
                                    </Typography> */}
                                    <Stack direction="row" spacing={1} mt={1} className="part-notes-box">

                                        {/* <div className="part-notes">
                                                <b>Part Notes :</b> Part Notes will be displayed here
                                        </div> */}
                                         <p className="ready-to-ship">
                                            <CheckCircleIcon /> Ready to Ship
                                        </p>
                                        <div>
                                            <WarningRoundedIcon sx={{color:'#f1c40f', verticalAlign:'bottom'}} /> <span className="view-more">Prop65</span>
                                        </div>
                                    </Stack>
                                    <Divider sx={{my:2}}/>
                                    <Stack direction="row" spacing={1} mt={2} alignItems="center">
                                        <Typography variant='subtitle2' color="primary" fontSize={28}>
                                        ${count * 455.50}
                                        </Typography>
                                        <Typography className='price-original'>
                                        Price : $816.40
                                        </Typography>
                                        <div className="price-save">
                                        <Typography variant="body2" sx={{px:1}}>
                                            10.45% OFF
                                        </Typography>
                                    </div>
                                    </Stack>
                                    <Stack direction="row" spacing={1} mt={1} alignItems="center" className="core-box">
                                        <p className="core-deposit">
                                            + Core Deposit : $5.00
                                        </p>
                                        <p className='core-policy'>
                                            Core Return Policy
                                        </p>
                                    </Stack>
                                    <Divider sx={{my:2}}/>
                                    <Stack direction="row" spacing={1} my={2} alignItems="center">
                                        <div className="qty-box">
                                           <span className="qty-label">Qty: </span>
                                           <Button onClick={() => setCount(count - 1)} disabled = {count === 1}>-</Button>
                                            <TextField variant="outlined" value={count} />
                                            <Button onClick={() => setCount(count + 1)}>+</Button>
                                        </div>
                                        <div className="package-qty">
                                            Package Qty : <b>{count}</b>
                                        </div>
                                    </Stack>
                                    <Stack direction="row" spacing={1}>
                                        <Button className="addtocart" endIcon={<ShoppingCartOutlinedIcon />}>Add To Cart</Button>
                                            <Typography variant="h1" sx={{px:1}}>Or</Typography>
                                        <Button className="buynow" endIcon={<KeyboardArrowRightIcon />}>Buy Now</Button>
                                    </Stack>
                                </div>
                            </div>
                            <div>
                               
                                <div className="product-specification">
                                    <div className="product-right-border">
                                        <Typography variant="subtitle2" sx={{mb:1}}>PART NOTE</Typography>
                                    </div> 
                                    <Typography variant="body2" sx={{mb:1}} color="error">Part Notes given will be displayed in this area.</Typography>
                                </div>
                            </div>
                            <div>
                               
                               <div className="product-specification">
                                   <div className="product-right-border">
                                       <Typography variant="subtitle2" sx={{mb:1}}>DESCRIPTION</Typography>
                                   </div> 
                                   <Typography variant="body2" sx={{mb:1}} >Alliant Power New G2.8 Injector Connector Fits Ford F Series Excursion Applications With 6.0L Power Stroke Engines Model Years 2003 Thru 2007, Fits Ford
E Series Applications With 6.0L Power Stroke Engines Model Years 2004 Thru 2010</Typography>
                               </div>
                           </div>
                            <div>
                               
                                <div className="product-specification">
                                    <div className="product-right-border">
                                        <Typography variant="subtitle2" sx={{mb:1}}>SPECIFICATIONS</Typography>
                                    </div> 
                                    <div className="table-div">
                                        <table className="specification-table">
                                            <tbody>
                                                <tr>
                                                    <th>Brand Name </th>
                                                    <td>Alliant Power</td>
                                                    <th>Warranty</th>
                                                    <td>12 Months</td>
                                                </tr>
                                                <tr>
                                                    <th>Product Family</th>
                                                    <td>G2.8</td>
                                                    <th>New or Reman</th>
                                                    <td>Reman</td>
                                                </tr>
                                                <tr>
                                                    <th>Core Type</th>
                                                    <td>G2.8 CORE</td>
                                                    <th>Manufacturer</th>
                                                    <td>Alliant Power</td>
                                                </tr>
                                                <tr>
                                                    <th>Type</th>
                                                    <td>Electronic</td>
                                                    <th>Etc……</th>
                                                    <td>Value</td>
                                                </tr>
                                                </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div>
                               
                                <div className="product-specification">
                                    <div className="product-right-border">
                                        <Typography variant="subtitle2" sx={{mb:1}}>PUBLICATIONS</Typography>
                                    </div>
                                    
                                    <Grid container spacing={2}>
                                        <Grid item md={3}>
                                            <Box className='publications-box'>
                                                <div className="publications-img">
                                                    <img src={publication} alt="images" />
                                                </div>
                                                <Typography variant="body2" color='secondary'>Alternator conditions of use</Typography>
                                                <IconButton sx={{alignItems:'end',color:"#a2a2a2"}}>
                                                    <DownloadForOfflineIcon />
                                                </IconButton>
                                            </Box>
                                        </Grid>
                                        <Grid item md={3}>
                                            <Box className='publications-box'>
                                                <div className="publications-img">
                                                    <img src={publication} alt="images" />
                                                </div>
                                                <Typography variant="body2" color='secondary'>TSB-1033 Alternator care and cleaning</Typography>
                                                <IconButton sx={{alignItems:'end',color:"#a2a2a2"}}>
                                                    <DownloadForOfflineIcon />
                                                </IconButton>
                                            </Box>
                                        </Grid>
                                        <Grid item md={3}>
                                            <Box className='publications-box'>
                                                <div className="publications-img">
                                                    <img src={publication} alt="images" />
                                                </div>
                                                <Typography variant="body2" color='secondary'>TSM-4011 AC172R Technical Service Manual</Typography>
                                                <IconButton sx={{alignItems:'end',color:"#a2a2a2"}} >
                                                    <DownloadForOfflineIcon />
                                                </IconButton>
                                            </Box>
                                        </Grid>
                                        <Grid item md={3}>
                                            <Box className='publications-box'>
                                                <div className="publications-img">
                                                    <img src={publication} alt="images" />
                                                </div>
                                                <Typography variant="body2" color='secondary'>TSM-4011 AC172R Technical Service Manual</Typography>
                                                <IconButton sx={{alignItems:'end',color:"#a2a2a2"}} >
                                                    <DownloadForOfflineIcon />
                                                </IconButton>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </div>
                            </div>
                            <div>
                               
                                <div className="product-specification">
                                    <div className="product-right-border">
                                        <Typography variant="subtitle2" sx={{mb:1}}>APPLICATION INFORMATION</Typography>
                                    </div>
                                    
                                    <div className="application-info">
                                        <table className="application-info-table">
                                            <tbody>
                                                <tr>
                                                    <td>1994 Ford CF8000 Cargo Series, Cummins FD-1460 Engine, 8.3L, Diesel</td>
                                                </tr>
                                                <tr>
                                                    <td>2002 - 2004 Ford CF8000 Cargo Series, Cummins FD-1460 Engine, 8.3L, Diesel</td>
                                                </tr>
                                                <tr>
                                                    <td>1994 Ford CF8000 Cargo Series, Cummins FD-1460 Engine, 8.3L, Diesel</td>
                                                </tr>
                                                <tr>
                                                    <td>1994 Ford CF8000 Cargo Series, Cummins FD-1460 Engine, 8.3L, Diesel</td>
                                                </tr>
                                                <tr>
                                                    <td>1994 Ford CF8000 Cargo Series, Cummins FD-1460 Engine, 8.3L, Diesel</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div>
                                
                                <div className="product-specification">
                                    <div className="product-right-border">
                                        <Typography variant="subtitle2" sx={{mb:1}}>CROSS REFERENCES</Typography>
                                    </div>
                                    
                                    <div className="cross-ref">
                                        <table className="cross-ref-table">
                                            <tbody>
                                                <tr>
                                                    <th>Competitor Part No</th>
                                                    <th>Competitor Name</th>
                                                    <th>InterChange Type</th>
                                                    <th>Notes</th>
                                                </tr>
                                                <tr>
                                                    <td>AP60901</td>
                                                    <td>DELPHI</td>
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
                                </div>
                            </div>
                            
                        </div>
                        <div className="product-detail-right">
                            <div className="product-border">
                               
                                <div className='part-box'>
                                    <Stack direction="row" alignItems="center" spacing={5} className='justify-space' >
                                        <Typography variant="subtitle2">
                                            Part Accessories
                                        </Typography>
                                        <Button variant='outlined' size="small" sx={{fontSize:'10px'}} endIcon={<EastIcon />} href="OurProducts">View More</Button>
                                    </Stack>
                                    <Divider sx={{my:2}}/>
                                    <PartAccessories />
                                </div>
                            </div>
                            <div className="product-border">
                               
                                <div className='part-box'>
                                <Stack direction="row" alignItems="center" spacing={5} className='justify-space'>
                                    <Typography variant="subtitle2">
                                        Alternative Product
                                    </Typography>
                                    <Button variant='outlined' size="small" sx={{fontSize:'10px'}} endIcon={<EastIcon />} href="OurProducts">View More</Button>
                                </Stack>
                                <Divider sx={{my:2}}/>
                                <AlternativeProduct />
                            </div>
                            </div>
                        </div>
                    </div>                   
                </Container>
            </Paper>
        </div>
    )
}


