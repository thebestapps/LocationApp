const moment = require('moment');

function formatMessage(user_id, username, pin_id, text){
    return {
        user_id,
        username,
        text,
        pin_id,
        time: moment().format('h:mm a'),
        date: moment().format('YYYY-MM-DD'),
        createdAt: new Date(),
    }
}

module.exports = formatMessage;