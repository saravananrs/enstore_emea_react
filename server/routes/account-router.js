const express = require('express')

const accountCtrl = require('../controllers/account-ctrl')

const router = express.Router()

router.post('/login', accountCtrl.enlightenOAuthLogin)
router.post("/usertoken", accountCtrl.grtTokenfromLogin)

module.exports = router
