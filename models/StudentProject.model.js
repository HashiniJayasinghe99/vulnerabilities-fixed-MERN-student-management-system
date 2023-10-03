const mongoose = require("mongoose");
const { Schema } = mongoose;

const studentProjectSchema = new Schema({
    groupID: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        index: true,
    },
    groupName: String,
    leaderITNum: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        index: true,
    },
    leaderEmail: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        index: true,
    },
    topicName: String,
    reqSupervisor: String,
    description: String,
});

module.exports = StudentProject = mongoose.model("StudentProject", studentProjectSchema);