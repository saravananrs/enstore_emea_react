const express = require('express')

const checkoutCtrl = require('../controllers/checkout-ctrl')

const router = express.Router()

router.get('/quoteId',checkoutCtrl.getQuoteId)
router.post('/cartItems',checkoutCtrl.getCartDetailByQuoteId)
router.get('/allReg', checkoutCtrl.getAlRegionData)
router.post('/savedAddress',checkoutCtrl.getSavedShippingAddress)
router.post('/estimateShipping',checkoutCtrl.getShippingEstimation)
router.post('/shippingInformation',checkoutCtrl.getShippingInformation)
router.post('/discount',checkoutCtrl.getDiscountInformation)
router.post('/createRazorpayOrderID',checkoutCtrl.razorPayCreateOrderId)
router.post('/createOrder',checkoutCtrl.createOrder)

module.exports = router
