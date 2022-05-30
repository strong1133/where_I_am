const msgController = {
    /**
     * Push 알람을 발송한다.
     * @param {Map}  {"deviceToken":"", "userId":""}
     * @param {Function}  리턴 콜백 함수
     * @returns {Map}  {"userId":"", "flag":""}
     */
    psuhMsg: async (req, callback) => {
        console.log(req);
        
        callback(null, req)
    },
};

module.exports = msgController;
