const mongoose = require('mongoose');

const HistoryPushSchema = mongoose.Schema({
    userid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    sender_userid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    status: String,
    message: String,
    route: String,
    type: String,
    actions: String,
    image: String,
    active: {type: Boolean, default: true}
}, {
    timestamps: true
});

module.exports = mongoose.model('push_history', HistoryPushSchema);
