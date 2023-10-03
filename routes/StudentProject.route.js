const express = require("express");
const router = express.Router();
const {
    addStudentProject,
    getStudentProjects,
    getStudentProject,
    updateStudentProject,
    /*removeResearchTopic,*/
} = require("../controllers/StudentProject.controller");

router.get("/", getStudentProjects);

router.get("/:id", getStudentProject);

router.post("/", addStudentProject);

router.put("/:id", updateStudentProject);

/*router.delete("/:id", removeResearchTopic);*/

module.exports = router;
