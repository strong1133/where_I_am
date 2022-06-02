const fcmAdmin = require("firebase-admin");

const logger = require("../utils/logger");
const serviceAccount = require("../config/serviceAccountKey.json");

fcmAdmin.initializeApp({
    credential: fcmAdmin.credential.cert(serviceAccount),
});

const fcmService = async (req, res) => {
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

    await fcmAdmin
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

    console.log(fcmParam);

    return fcmParam;
};

module.exports = {
    fcmService,
};
