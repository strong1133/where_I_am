var express = require("express");
var router = express.Router();

const controller = require("../controllers/msgController");
const { responseDtoJson } = require("../utils/responseDto");

router.post("/push",  (req, res) =>{


    controller.psuhMsg(req.body, (err, value) => {
        responseDtoJson(err, value, res);
    });
});

module.exports = router;
