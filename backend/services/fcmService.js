const logger = require("../utils/logger");

const fcmService = (req, res)=>{    
    logger('fcmService',' Service', true, req)
    
    let fcmParam = {
        "deviceToken": req['deviceToken'],
        'pushFlag': false
    }
    return fcmParam;
}


module.exports= {
    fcmService,
}