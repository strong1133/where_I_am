const logger = require("../utils/logger");

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

        

        callback(null, req);
    },
};

module.exports = msgController;
