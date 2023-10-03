const StudentProject = require("../models/StudentProject.model");

//Add/ Create Student Project
const addStudentProject = (req, res) => {
    const {
        groupID,
        groupName,
        leaderITNum,
        leaderEmail,
        topicName,
        reqSupervisor,
        description,
    } = req.body;

    const studentProject = new StudentProject({
        groupID,
        groupName,
        leaderITNum,
        leaderEmail,
        topicName,
        reqSupervisor,
        description,
    });

    studentProject
        .save()
        .then((createdStudentProject) => {
            res.json(createdStudentProject);
        })
        .catch((error) => {
            res.status(400).json(error);
        });
};


//View Student Projects
const getStudentProjects = async (req, res) => {
    try {
        const studentProjects = await StudentProject.find();
        res.json(studentProjects);
    } catch (error) {
        res.status(400).json(error);
    }
};

//View unique Student Project 
const getStudentProject = async (req, res) => {
    const StudentProjectID = req.params.id;

    try {
        const studentProject = await StudentProject.findById(StudentProjectID);
        res.json(studentProject);
    } catch (error) {
        res.status(400).json(error);
    }
};

//Update Student Project 
const updateStudentProject = async (req, res) => {
    const StudentProjectID = req.params.id;

    try {
        const topic = await StudentProject.findById(StudentProjectID);

        if (!topic) {
            return res.status(404).json("There is no that Student Project for update");
        }

        const {
            groupID,
            groupName,
            leaderITNum,
            leaderEmail,
            topicName,
            reqSupervisor,
            description,
        } = req.body;

        const updatedStudentProject = await StudentProject.findByIdAndUpdate(StudentProjectID, {
            groupID,
            groupName,
            leaderITNum,
            leaderEmail,
            topicName,
            reqSupervisor,
            description,
        });

        res.status(200).json(updatedStudentProject);
    } catch (error) {
        res.status(400).json(error.message);
    }
};

/*
//Delete Student Group
const removeResearchTopic = async (req, res) => {
    const ResarchTopicID = req.params.id;

    try {
        const topic = await ResearchTopic.findById(ResarchTopicID);

        if (!topic) {
            return res.status(404).json("There is no such a research topic to delete");
        }

        const removedResearchTopic = await ResearchTopic.findByIdAndDelete(ResarchTopicID);
        res.status(200).json(removedResearchTopic);
    } catch (error) {
        res.status(400).json(error.message);
    }
};
*/

module.exports = {
    addStudentProject,
    getStudentProjects,
    getStudentProject,
    updateStudentProject,
    /*removeResearchTopic,*/
};
