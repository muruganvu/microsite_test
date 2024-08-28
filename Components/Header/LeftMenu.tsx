import  { useState } from "react";
import { Box, Drawer, Toolbar, IconButton, Button, Link} from "@mui/material";
import LoginIcon from '@mui/icons-material/Login';
import HowToRegOutlinedIcon from '@mui/icons-material/HowToRegOutlined';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import logo from '../../Images/main-logo.png';
import hamber from '../../Images/hamber.png';
import phone from '../../Images/phone.png';

export const LeftMenu =()=> {


    const [isOpen, setIsOpen]=useState(false);
    const [submenu, setSubMenu]=useState(false);
    const handleClick= () => {
        setIsOpen(true);
    }
    const handleDrawerClose = () => {
        setIsOpen(false);
      };

      const submenuClick =() => {
        setSubMenu(current => !current);
      }


return(
    <Box>
        <Toolbar sx={{ pr: '0!important',pl: '0!important', minHeight:'100%!important'}} >
            <div onClick={handleClick} >
                <img src={hamber} className="hamber-icons" alt="logo" />
            </div>
            
        
            <Drawer anchor="left" open={isOpen} onClose={()=>setIsOpen(false)} className="left-menu">
            <div className="drawer-header" >
                <Link onClick={handleDrawerClose}  href="/">
                    <img src={logo} className="drawer-header-logo" alt="logo"  />
                </Link>
                <IconButton className="brawer-close-button" onClick={handleDrawerClose} >
                    <CloseRoundedIcon />
                </IconButton>
                
                </div>
              
            <Button href="tel:1(203)408-1666" color="secondary" sx={{alignItems:'left', justifyContent:'left', fontSize:'20px', fontWeight:600}}>
            <IconButton color="primary" aria-label="upload picture" component="label">
            <img src={phone} className="imageicons" alt="logo" />
            </IconButton>
                1(203) 408 - 1666
            </Button>            
            <ul className="drawer-header-list">
                
                <li onClick={handleDrawerClose} className="linkstyle">Part Search</li>
                <li className="linkstyle" onClick={submenuClick}>
                Products
                    <IconButton>
                        {submenu ? <RemoveIcon fontSize="small" /> : <AddIcon fontSize="small"/>}
                    </IconButton> 
                   
                </li>
                {submenu && ( 
                    <ul className="submenu">
                     <li>
                        <Link className="submenustyle">
                         Alternators And Starter Motors
                         </Link>
                    </li>
                    <li>
                    <Link className="submenustyle">
                         Lighting
                         </Link>
                    </li>
                    <li>
                    <Link className="submenustyle">
                         Motors
                         </Link>
                    </li>
                    <li >
                    <Link className="submenustyle" >
                         Diesel Fuel System
                         </Link>
                    </li>
                   </ul>
                  )}
                <li onClick={handleDrawerClose} className="linkstyle"><Link href="/Services">Services</Link></li>
                <li onClick={handleDrawerClose} className="linkstyle"><Link>Order History</Link></li>
                <li onClick={handleDrawerClose} className="linkstyle"><Link href="/TechBulletins">Tech Bulletins</Link></li>
                <li onClick={handleDrawerClose} className="linkstyle"><Link >Dearler Location</Link></li>
                <li onClick={handleDrawerClose} className="linkstyle">
                Literature / Videos
                    <IconButton>
                        <AddIcon fontSize="small"/>
                    </IconButton> </li>
                <li onClick={handleDrawerClose} className="linkstyle">
                Information / How to Videos
                    <IconButton>
                        <AddIcon fontSize="small"/>
                    </IconButton></li>
                <li onClick={handleDrawerClose} className="linkstyle"><Link href="/Contact">Contact</Link></li>
            </ul>
            <Box sx={{display:'flex', m:1, alignItems:'center'}}>
            <Button variant="contained" sx={{mr:2}} >
                <LoginIcon sx={{pr:1}} /> Login
            </Button>
            <Button variant="contained">
                <HowToRegOutlinedIcon sx={{pr:1}} /> Sign Up
            </Button>
            </Box>
            </Drawer>
            
            </Toolbar>
        </Box>
)
}