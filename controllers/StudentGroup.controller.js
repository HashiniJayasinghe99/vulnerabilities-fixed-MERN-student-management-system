const StudentGroups = require("../models/StudentGroup.model");

const addStudentGroup = (req, res) => {
    const {
        groupID,
        groupName,
        leaderITNum,
        leaderName,
        leaderEmail,
        member1ITNum,
        member1Name,
        member2ITNum,
        member2Name,
    } = req.body;

    const studentGroup = new StudentGroups({
        groupID,
        groupName,
        leaderITNum,
        leaderName,
        leaderEmail,
        member1ITNum,
        member1Name,
        member2ITNum,
        member2Name,
    });

    studentGroup
        .save()
        .then((createdStudentGroup) => {
            res.json(createdStudentGroup);
        })
        .catch((error) => {
            res.status(400).json(error);
        });
};

//View Student Group
const getStudentGroups = async (req, res) => {
    try {
        const studentGroups = await StudentGroups.find();
        res.json(studentGroups);
    } catch (error) {
        res.status(400).json(error);
    }
};

//View unique student group
const getStudentGroup = async (req, res) => {
    const ThegroupID = req.params.id;

    try {
        const studentGroup = await StudentGroups.findById(ThegroupID);
        res.json(studentGroup);
    } catch (error) {
        res.status(400).json(error);
    }
};

//Update Student Group
const updateStudentGroup = async (req, res) => {
    const ThegroupID = req.params.id;

    try {
        const group = await StudentGroups.findById(ThegroupID);

        if (!group) {
            return res.status(404).json("There is no that group to update");
        }

        const {
            groupID,
            groupName,
            leaderITNum,
            leaderName,
            leaderEmail,
            member1ITNum,
            member1Name,
            member2ITNum,
            member2Name,
        } = req.body;

        const updatedGroup = await StudentGroups.findByIdAndUpdate(ThegroupID, {
            groupID,
            groupName,
            leaderITNum,
            leaderName,
            leaderEmail,
            member1ITNum,
            member1Name,
            member2ITNum,
            member2Name,
        });

        res.status(200).json(updatedGroup);
    } catch (error) {
        res.status(400).json(error.message);
    }
};

//Delete Student Group
const removeStudentGroup = async (req, res) => {
    const ThegroupID = req.params.id;

    try {
        const group = await StudentGroups.findById(ThegroupID);

        if (!group) {
            return res.status(404).json("There is no such a group to delete");
        }

        const removedGroup = await StudentGroups.findByIdAndDelete(ThegroupID);
        res.status(200).json(removedGroup);
    } catch (error) {
        res.status(400).json(error.message);
    }
};

module.exports = {
    addStudentGroup,
    getStudentGroups,
    getStudentGroup,
    updateStudentGroup,
    removeStudentGroup,
};
