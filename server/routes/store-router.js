const express = require('express')

const storeCtrl = require('../controllers/store-ctrl')

const router = express.Router()
router.get('/allData', storeCtrl.getAllData)
router.get('/categories', storeCtrl.getCategories)
router.get('/products', storeCtrl.getProducts)
router.get('/productsByURLKey', storeCtrl.getProductByURLKey)
router.post('/login', storeCtrl.enlightenOAuthLogin)
router.get('/quoteId',storeCtrl.getQuoteId)
router.post('/cartItems',storeCtrl.getCartDetailByQuoteId)
router.post('/estimateShipping',storeCtrl.getShippingEstimation)
router.post('/shippingInformation',storeCtrl.getShippingInformation)
router.post('/createOrder',storeCtrl.createOrder)
router.post('/savedAddress',storeCtrl.getSavedShippingAddress)

module.exports = router
