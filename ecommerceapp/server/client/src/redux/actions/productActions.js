
import axios from "axios";
import * as actionTypes from '../constants/producConstants';

const URL='';

export const getProducts=()=> async(dispatch)=>{
    try{
        //data object destructring se aaya hai response ki
       const {data}= await axios.get(`${URL}/products`);
       
       dispatch({type: actionTypes.GET_PRODUCTS_SUCCESS, payload:data })

    }catch(error){
        dispatch({type: actionTypes.GET_PRODUCTS_FAIL,payload: error.message })
    }
}


//response iss form mein aata hai pr actual data data k ander hota hai 
// let obj={
//     config: {},
//     data: [],
//     headers: {},
//     status: 200,
//     message: ''
// }


export const getProductDetails=(id)=>async(dispatch)=>{
    try{
    dispatch({type: actionTypes.GET_PRODUCT_DETAILS_REQUEST});
    const {data}= await axios.get(`${URL}/product/${id}`);
    dispatch({type: actionTypes.GET_PRODUCT_DETAILS_SUCCESS, payload:data })


    }catch(error){
        dispatch({type: actionTypes.GET_PRODUCT_DETAILS_FAIL,payload:error.message})

    }
}