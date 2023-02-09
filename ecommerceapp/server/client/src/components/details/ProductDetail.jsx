
import { Typography,Box,styled, Table, TableBody, TableRow, TableCell } from "@mui/material";
import {LocalOffer as Badge} from '@mui/icons-material';

const SmallText=styled(Box)`
font-size: 14px;
vertical-align: baseline;
&>p{
    font-size:14px;
    margin-top:10px;
}
`;

const StyledBadge=styled(Badge)`
margin-right:10px;
color:#00CC00;
font-size:15px;
`;

const ColumnText=styled(TableRow)`
font-size:14px;
vertical-align:baseline;
&>td{
    font-size:14px;
    margin-top:10px;
    border:none;
}
`;

const ProductDetail=({product})=>{
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';
    const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';
    const date=new Date(new Date().getTime()+(5*24*60*60*1000));
    return (
        <>
            <Typography>{product.title.longTitle}</Typography>
            <Typography style={{marginTop: 5,color: '#878787',fontSize:14}}> 
                8 Ratings & 1 Review
               <Box component="span"><img src={fassured} style={{width:77,marginLeft:20}}/></Box> 
            </Typography> 
             <Typography>
                 <Box component="span" style={{fontSize:28}}>₹{product.price.cost}</Box>&nbsp;&nbsp;&nbsp;
                 <Box component="span" style={{color:'#878787'}}><strike>₹{product.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
                 <Box component="span" style={{color:'#388E3C'}}>{product.price.discount}</Box>
             </Typography>
             <Typography>Available Offers</Typography>
             <SmallText>
                <Typography><StyledBadge/>Get Extra 20% off upto 50 Rs on 1 Item(s) T&C</Typography>
                <Typography><StyledBadge/>Get Extra 13% off (proce inclusive of Dicount)</Typography>
                <Typography><StyledBadge/>Sign up for Flipkart PayLater and get Flipkart Gift card with Rs. 100 Know More </Typography>
                <Typography><StyledBadge/>Buy 2 Items Save 5%, Buy 3 More save 10% T&C</Typography>
                <Typography><StyledBadge/>5% Cashback on Flipkart Axis Bank card</Typography>
                <Typography><StyledBadge/>No cost EMI on Bajaj Finesry EMI Card on cart value above Rs.2999 T&C</Typography>
             </SmallText>
             <Table>
                <TableBody>
                    <ColumnText>
                        <TableCell style={{color: '#878787'}}>Delivery</TableCell>
                        <TableCell style={{fontWeight: 600}}>Delivery By {date.toDateString()} | Rs.40 </TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell style={{color: '#878787'}}>Warranty</TableCell>
                        <TableCell style={{fontWeight: 600}}>No Warranty</TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell style={{color: '#878787'}}>Seller</TableCell>
                        <TableCell >
                        <Box component="span" style={{color:  '#2874f0'}}>SuperComNet </Box>
                        <Typography>GST Invoice Available</Typography>
                        <Typography>View More Selleres Starting from Rs.{product.price.cost}</Typography>
                        </TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell colSpan={2}>
                            <img src={adURL} style={{width: 390}} alt="Flipkart Points" />
                        </TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell style={{color: '#878787'}}>Description</TableCell>
                        <TableCell>{product.description}</TableCell>
                    </ColumnText>
                </TableBody>
             </Table>
        </>
    )
}

export default  ProductDetail;