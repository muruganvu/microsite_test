

import { Grid, Box, Button, Divider, Menu, Link, Typography, Tooltip } from '@mui/material';
import './product.style.css';
import '../../Css/product.style.css';
import product1 from '../../Images/webp/additives-chemicals.webp';
import product2 from '../../Images/webp/starter-motors.webp';
import product3 from '../../Images/webp/alternators.webp';
import product4 from '../../Images/webp/battery.webp';
import product5 from '../../Images/webp/turbo-chargers.webp';
import product6 from '../../Images/webp/battery-chargers-booster-packs.webp';
import { Stack } from '@mui/system';

export function ProductList() {

    const data = {
        topProduct: [
          {
            "id": 1,
            "title": "Mico 1",
            "description": "Additives and Chemicals",
            "price": '$20',
            "category": "smartphones",
            "thumbnail": product1,
            "images": product1
          },
          {
            "id": 2,
            "title": "Mico 2",
            "description": "Alliant Power Product",
            "price": '$20',
            "category": "smartphones",
            "thumbnail": product5,
            "images": product5
          },
          {
            "id": 3,
            "title": "Mico 3",
            "description": "Alternators and Starter Motors",
            "price": '$20',
            "category": "smartphones",
            "thumbnail": product2,
            "images": product2
          },
          {
            "id": 4,
            "title": "Mico 4",
            "description": "Battery and Related Accessories",
            "price": '$20',
            "category": "smartphones",
            "thumbnail": product3,
            "images": product3
          },
          {
            "id": 5,
            "title": "Mico 5",
            "description": "Battery Chargers and Booster Packs",
            "price": '$20',
            "category": "smartphones",
            "thumbnail": product6,
            "images": product6
          },
          {
            "id": 6,
            "title": "Mico 6",
            "description": "Battery Connectors and Lugs",
            "price": '$20',
            "category": "smartphones",
            "thumbnail": product4,
            "images": product4
          },
        ],
        id: [1, 2, 3, 4]
      };

    return(
        <Box>
        <Grid container spacing={2}>
        {data.topProduct.map((elem, index) => (
            <Grid item xs={12} sm={3} md={2}  key={index}>
                <div className="categorybox">
                    <div className='category-inner'>
                        <Typography className="categoryimage">
                        <img src={elem.images} alt='category1' />
                        </Typography>
                        <Typography className="categorytitle" variant='body2'>
                        {elem.description}
                        </Typography>
                    </div>
                </div>
            </Grid>
        ))}
      </Grid>
     
      
    </Box>
    )

}

export function PartAccessories() {

  const data = {
      topProduct: [
        {
          "id": 1,
          "title": "Mico 1",
          "description": "Additives and Chemicals",
          "price": '$20',
          "category": "smartphones",
          "thumbnail": product1,
          "images": product1,
          "productnumber":"AP60901"
        },
        {
          "id": 2,
          "title": "Mico 2",
          "description": "Alliant Power Product",
          "price": '$20',
          "category": "smartphones",
          "thumbnail": product5,
          "images": product5,
          "productnumber":"AP60901"
        },
        {
          "id": 3,
          "title": "Mico 3",
          "description": "Alternators and Starter Motors",
          "price": '$20',
          "category": "smartphones",
          "thumbnail": product2,
          "images": product2,
          "productnumber":"AP60901"
        },
        {
          "id": 4,
          "title": "Mico 4",
          "description": "Battery and Related Accessories",
          "price": '$20',
          "category": "smartphones",
          "thumbnail": product3,
          "images": product3,
          "productnumber":"AP60901"
        },
        {
          "id": 5,
          "title": "Mico 5",
          "description": "Battery Chargers and Booster Packs",
          "price": '$20',
          "category": "smartphones",
          "thumbnail": product6,
          "images": product6,
          "productnumber":"AP60901"
        },
        {
          "id": 6,
          "title": "Mico 6",
          "description": "Battery Connectors and Lugs",
          "price": '$20',
          "category": "smartphones",
          "thumbnail": product4,
          "images": product4,
          "productnumber":"AP60901"
        },
      ],
      id: [1, 2, 3, 4]
    };

  return(
      <Box>
      {data.topProduct.map((elem, index) => (
          <div className="part-accessories-box" key={index}>
              <div className='part-accessories-inner'>
                  <div className="part-accessories-image">
                    <img src={elem.images} alt='category1' />
                  </div>
                  <div className='part-accessories-content'>
                    <Typography className="part-accessories-title" variant='body2'>
                    {elem.description}
                    </Typography>
                    <Stack direction="row" spacing={2} className="stack-mrg-left">
                        <Typography variant='body2' className="part-accessories-number">{elem.productnumber}</Typography>
                        <Typography variant='body2' color='success.main'>Ready to Ship</Typography>
                    </Stack>
                    <Typography variant='subtitle2'>{elem.price}</Typography>
                  </div>
              </div>
          </div>
      ))}
   
    
  </Box>
  )

}


export function AlternativeProduct() {

  const data = {
      topProduct: [
        {
          "id": 1,
          "title": "Mico 1",
          "description": "Additives and Chemicals",
          "price": '$20',
          "category": "smartphones",
          "thumbnail": product1,
          "images": product1,
          "productnumber":"AP60901"
        },
        {
          "id": 2,
          "title": "Mico 2",
          "description": "Alliant Power Product",
          "price": '$20',
          "category": "smartphones",
          "thumbnail": product5,
          "images": product5,
          "productnumber":"AP60901"
        },
        {
          "id": 3,
          "title": "Mico 3",
          "description": "Alternators and Starter Motors",
          "price": '$20',
          "category": "smartphones",
          "thumbnail": product2,
          "images": product2,
          "productnumber":"AP60901"
        },
        
      ],
      id: [1, 2, 3, 4]
    };

  return(
      <Box>
      {data.topProduct.map((elem, index) => (
          <div className="part-accessories-box" key={index}>
              <div className='part-accessories-inner'>
                  <div className="part-accessories-image">
                    <img src={elem.images} alt='category1' />
                  </div>
                  <div className='part-accessories-content'>
                    <Typography className="part-accessories-title" variant='body2'>
                    {elem.description}
                    </Typography>
                    <Stack direction="row" spacing={2} className="stack-mrg-left">
                        <Typography variant='body2'>{elem.productnumber}</Typography>
                        <Typography variant='body2' color='success.main'>Ready to Ship</Typography>
                    </Stack>
                    <Typography variant='subtitle2'>{elem.price}</Typography>
                  </div>
              </div>
          </div>
      ))}
   
    
  </Box>
  )

}