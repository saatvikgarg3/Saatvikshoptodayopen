import { useEffect } from "react";

import { Fragment } from "react";
//fragments faster than div 
import NavBar from "./NavBar";
import Banner from "./Banner";
import Slide from "./Slide";
import MidSlide from'./MidSlide';
import MidSection from "./MidSection";
import { Box ,styled} from "@mui/material";
import { getProducts} from "../../redux/actions/productActions";
import { useDispatch ,useSelector} from "react-redux";
const Component=styled(Box)`
padding:10px 10px;
background: #F2F2F2;
`;

const Home=()=>{

    //yeh wala getproducts not a function jo niche call hua ..yeh object state se aaya hai
    const {products}=useSelector(state=> state.getProducts);
    const dispatch=useDispatch();

    useEffect(()=>{
        //getproducts redux ka function hai directly call nhi krna
        dispatch(getProducts())
    },[dispatch])
    //empty bracket for component did mount method

    return (
        <Fragment>
            <NavBar/>
        {/*jsx mein dono parent ccomponents ko return nhi kr skte toh 
        //directly navbar k niche banner nhi likh skte toh iko wrap krna hoga*/}
           <Component>
              <Banner/>
              <MidSlide products={products} title="Deal Of The Day" timer={true}/>
              <MidSection/>
              <Slide products={products} title="Discounts For You" timer={false}/>
              <Slide products={products} title="Suggested Items" timer={false}/>
              <Slide products={products} title="Top Selection" timer={false}/>
              <Slide products={products} title="Recommended Items" timer={false}/>
              <Slide products={products} title="Trending Offers" timer={false}/>
              <Slide products={products} title="Season Top Picks" timer={false}/>
              <Slide products={products} title="Top Deals On The Accessories" timer={false}/>
           </Component>
        </Fragment>
        
    )
}
export default Home