


import { Container, Box, Typography, Stack, Button, Grid } from "@mui/material";
import Paper from "@mui/material/Paper";
import EastIcon from '@mui/icons-material/East';
import '../../Css/home.style.css';
import Aboutimg from "../../Images/about-image.jpg";
import { ProductGrid } from "../../Components/Product/ProductGrid";
import { ProductList } from "../../Components/Product/ProductList";

export function Home() {

    return (
        <div>
            <Container maxWidth={'lg'} >
                <Box sx={{ width: '100%', margin: "10px 0" }} key="B2">
                    <Typography variant="h3" color="custom" key="T1">
                        WE STOCK THE LARGEST INVENTORY OF ENGINE PARTS IN THE USA.
                    </Typography>
                    <Typography variant="body1" key="T2">
                        Here at the Engine Parts Superstore we only sell Quality Engine Parts from an assortment of Original Equipment and Aftermarket manufacturers.
                    </Typography>
                </Box>
            </Container>

            <Paper elevation={0} sx={{ mt: 2, mb: 2, py: 3, }} >
                <Container maxWidth={'lg'}>
                    <Box sx={{ width: '100%', margin: "10px 0" }}>

                        <Stack direction="row" alignItems="center" spacing={5} >
                            <Typography variant="h3" color="custom">
                                Featured Parts
                            </Typography>
                            <Button variant='outlined' endIcon={<EastIcon />}>View More</Button>
                        </Stack>
                        <Box sx={{ mt: 3, backgroundColor: 'rgb(240, 240, 240)', px: 3, py: 3 }} >
                            <ProductGrid />
                        </Box>
                    </Box>
                </Container>
            </Paper>


            <Paper elevation={0} sx={{ mt: 2, mb: 2, py: 3, }} >
                <Container maxWidth={'lg'}>
                    <Box sx={{ width: '100%', margin: "10px 0" }}>

                        <Stack direction="row" alignItems="center" spacing={5} >
                            <Typography variant="h3" color="custom">
                                Our Products
                            </Typography>
                            <Button variant='outlined' endIcon={<EastIcon />} >View More</Button>
                        </Stack>
                        <Box sx={{ mt: 3, backgroundColor: 'rgb(240, 240, 240)', px: 3, py: 3 }} >
                            <ProductList />
                        </Box>
                    </Box>
                </Container>
            </Paper>

            <Container maxWidth={'lg'} id="Aboutus">
                <Box sx={{ display: 'block', pt: 5, pb: 3 }}>

                    <Grid container spacing={2}>
                        <Grid item xs={12} md={4}>
                            <Box className="about-img">
                               
                                <img src={Aboutimg} alt="aboutimage" />
                                <Box className="about-img-layer" sx={{bgcolor: 'primary.main'}}></Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={8}>
                            <Typography variant='h3' pb={2} color='#000' >ABOUT US</Typography>
                            <Typography align='justify'>Mondial Automotive, Inc. stocks a complete line of remanufactured and new alternators, starters, carburetors, turbos, injectors, diesel fuel pumps, diesel particulate filters, water pumps, fan clutches and filtration products for heavy-duty, agricultural, passenger car, industrial, and marine engines. The company was founded in 1956 by Showky Kaldawy Sr. with the core beliefs of honesty, integrity and respect. These values continue to act as an integral thread within the fabric of our organization. Mondial is proud to continue the company legacy into the second generation of our family business. We are committed to supplying our customers the highest quality parts backed with superior service. When quality counts, you can rely on Mondial for all your needs.</Typography>
                        </Grid>

                    </Grid>
                </Box>
            </Container>


            <Box  sx={{pt:4, pb:4}}>
                <Container maxWidth={'lg'}>
                <Typography variant='h1' pb={2} >GOCADENCE - EVERYTHING YOU NEED TO RUN YOUR BUSINESS</Typography>

                <Typography variant="h2" pb={1} >
                GOCadence is a cloud solution which comes innate with everything you need to run your business.
                </Typography>
                <Typography  variant="body2">
                We are a cloud based software solution provider based in NYC with our corporate office located in Connecticut. Our software solution was designed specifically for businesses in the automotive and heavy-duty parts industry, electrical and diesel manufacturing or remanufacturing / rebuilding facilities, repair shops as well as many other business models. Our system is fully capable in managing the complexities of inventory management, core tracking, vehicle service repair, work orders etc.
                    </Typography>
                </Container>
            </Box>


        </div>
    )

}