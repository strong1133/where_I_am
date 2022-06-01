const fcmAdmin = require("firebase-admin");

const logger = require("../utils/logger");
const serviceAccount = require("../config/serviceAccountKey.json");

fcmAdmin.initializeApp({
    credential: fcmAdmin.credential.cert(serviceAccount),
});

const fcmService = (req, res) => {
    logger("fcmService", " Service", true, req);

    let fcmParam = {
        deviceToken: req["deviceToken"],
        pushFlag: false,
    };

    let message = {
        notification: {
            title: "여기어디?",
            body: "테스트 알림이다 이말이야~!",
        },
        token: req["deviceToken"],
    };

    fcmAdmin
        .messaging()
        .send(message)
        .then((response) => {
            console.log("발송 성공 , ", response);
            fcmParam["pushFlag"] = true;
        })
        .catch((err) => {
            console.log("발송 실패 , ", err);
            fcmParam["pushFlag"] = false;
        });

    return fcmParam;
};

module.exports = {
    fcmService,
};
