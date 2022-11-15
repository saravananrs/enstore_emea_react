const express = require('express')

const catalogCtrl = require('../controllers/catalog-ctrl')

const router = express.Router()
router.get('/allData', catalogCtrl.getAllData)
router.get('/allLocalData', catalogCtrl.getAllDataFromLocal)
router.get('/categories', catalogCtrl.getCategories)
router.get('/products', catalogCtrl.getProducts)
router.get('/productsByURLKey', catalogCtrl.getProductByURLKey)
router.post('/updateCartItems',catalogCtrl.updateCartDetailByQuoteId)
router.post('/removeCartItems', catalogCtrl.removeCartDetailByQuoteId)

module.exports = router
