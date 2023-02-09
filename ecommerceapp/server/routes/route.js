import express  from "express";
import { userSignup,userLogin } from "../controller/user-control.js";
import { getProducts } from "../controller/product-controller.js";
import { getProductById } from "../controller/product-controller.js";
import { addPaymentGateWay,paytmResponse } from "../controller/payment-controller.js";
const router =express.Router();



router.post('/signup',userSignup);
router.post('/login',userLogin);

router.get('/products',getProducts);
router.get('/product/:id',getProductById);

router.post('/payment',addPaymentGateWay);
router.post('/callback',paytmResponse);

export default router;