const Notice = require("../models/Notice.model");

const addNotice = (req, res) => {
  const { date, topic, faculty, message } = req.body;

  const notice = new Notice({
    date,
    topic,
    faculty,
    message,
  });

  notice
    .save()
    .then((createdNotice) => {
      res.json(createdNotice);
    })
    .catch((error) => {
      res.status(400).json(error);
    });
};

const getNotices = async (req, res) => {
  try {
    const notices = await Notice.find();
    res.json(notices);
  } catch (error) {
    res.status(400).json(error);
  }
};

const getNotice = async (req, res) => {
  const noticeId = req.params.id;

  try {
    const notice = await Notice.findById(noticeId);
    res.json(notice);
  } catch (error) {
    res.status(400).json(error);
  }
};

const updateNotice = async (req, res) => {
  const noticeId = req.params.id;

  try {
    const notice = await Notice.findById(noticeId);

    if (!notice) {
      return res.status(404).json("There is no faculty notice to update");
    }

    const { date, topic, faculty, message } = req.body;

    const updatedNotice = await Notice.findByIdAndUpdate(noticeId, {
      date,
      topic,
      faculty,
      message,
    });

    res.status(200).json(updatedNotice);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const removeNotice = async (req, res) => {
  const noticeId = req.params.id;

  try {
    const notice = await Notice.findById(noticeId);

    if (!notice) {
      return res.status(404).json("There is no faculty notice to remove");
    }

    const removedNotice = await Notice.findByIdAndDelete(noticeId);
    res.status(200).json(removedNotice);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = {
  addNotice,
  getNotices,
  getNotice,
  updateNotice,
  removeNotice,
};
