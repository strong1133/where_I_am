const logger = require("../utils/logger");

const {fcmService} = require('../services/fcmService');

const msgController = {
    /**
     * Push 알람을 발송한다.
     * @param {Map}  {"deviceToken":"", "userId":""}
     * @param {Function}  리턴 콜백 함수
     * @returns {Map}  {"userId":"", "flag":""}
     */
    pushMsg: async (req, callback) => {
        let param = req;
        logger('msgController',' Controller', true, param)
        logger('msgController',' Controller', true, param['deviceToken'])

        if(!param['deviceToken']){
            let err = new Error('Invaild deviceToken');
            return callback(err,400, null);
        }
        let resBody = fcmService(param);

        callback(null,null, resBody);
    },
};

module.exports = msgController;
