var express = require("express");
var router = express.Router();

const controller = require("../controllers/msgController");
const { responseDtoJson } = require("../utils/responseDto");

// api - /msg/push : 토큰으로 fcm 발송
router.post("/push",  (req, res) =>{
    controller.pushMsg(req.body, (err, errCode, value ) => {
        responseDtoJson(err, errCode, value, res);
    });
});

module.exports = router;
