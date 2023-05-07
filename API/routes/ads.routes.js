const Router = require("express");
const router = new Router()
const adsController = require("../controllers/ads.controller")

router.post('/ads', adsController.createAd)
router.get('/ads', adsController.getAd)

module.exports = router