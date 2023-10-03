const express = require("express");
const router = express.Router();

const {
    addQuiz,
    getQuizzes: getQuizzes,
    validateQuiz,
    getQuiz,
    UpdateQuiz,
    removeQuiz,
} = require("../controllers/Quiz.controller");

router.post("/", addQuiz);

router.get("/",getQuizzes);

router.post("/validate", validateQuiz);

router.get("/:id", getQuiz);

router.put("/:id", UpdateQuiz);

router.delete("/:id", removeQuiz);
module.exports = router