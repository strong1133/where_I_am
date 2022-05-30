const timeStamp = require("./timeStamp");

const responseBody = (err, value, code) => {
    let bodyJson = {
        "timeStamp": timeStamp.makeCurStamp(),
        "statusCode": code,
        "errFlag": err ? true : false,
        "errMsg": err ? err.message : null,
        "data": value,
    };
    return bodyJson;
};

module.exports = {
    responseBody:responseBody,
    responseDtoJson: (err, value, res) => {
        if (err) {
            console.error("ERR :: ", err);

            return res.status(500).json(responseBody(err, value, 500));
        } else {
            if (!value) {
                console.error("ERR :: No Such Data");
                return res.status(404).json(responseBody(err, "No Such Data", 404));
            } else {
                return res.status(200).json(responseBody(err, value, 200));
            }
        }
    },
};
