const express = require('express');
const router = express.Router();
const controller = require('../controllers/index.controller');

router.route("/health").get(controller.getHealth);
    

module.exports = router;