const express = require('express')

const storeCtrl = require('../controllers/store-ctrl')

const router = express.Router()

router.get('/categories', storeCtrl.getCategories)
router.get('/products', storeCtrl.getProducts)
router.get('/productsByURLKey', storeCtrl.getProductByURLKey)
router.get('/login', storeCtrl.enlightenOAuthLogin)

module.exports = router
