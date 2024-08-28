import { Box, Button, Typography, Paper, Divider, Container} from "@mui/material";
import InventoryIcon from '@mui/icons-material/Inventory';

import phone from '../../Images/phone-receiver.png';

export const TopHeader =()=> {

  return(
    
    <Box>
           <Divider sx={{ bgcolor: 'primary.main', padding:'2px'}}/>
           <Container maxWidth="lg">
              <Paper elevation={0} className='top-bar-sec'>
                  <Typography align="left" color="primary" variant="body2" sx={{fontWeight:600, display:'flex', alignItems:'center'}}>
                  <InventoryIcon sx={{ marginRight:'5px'}} />  Free Ground Shipping Orders Above $500 
                  </Typography>
                  <Typography color='custom.main' variant="body2" sx={{ ml:3}}>
                    <img src={phone} alt='phone' style={{width:'18px'}} />
                  </Typography>
                  <Button href="tel:1(203)408-1666" sx={{fontSize:'18px', color:"#000"}}>
                          1(203) 408 - 1666
                 </Button>
                  
              </Paper>
          </Container>
        </Box>
  );

}