const { lead } = require("../models");
const db = require("../models");

const Lead = db.lead;
const Op = db.Sequelize.Op;

const get = async (req, res) => {
  try {
    const leads = await Lead.findAll();
    if (!leads) {
      res.json({ message: "no leads exist!" });
    }
    res.status(200).json({
      data: leads,
      message: "fetched leads successfully",
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: "error occured" });
  }
};

const create = async (req, res) => {
  try {
    const lead = await Lead.create(req.body.lead);
    res.json({
      data: lead,
      message: "lead added successfully",
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: "error occured" });
  }
};
const edit = async (req, res) => {
  const lead = await Lead.update(req.body.lead, {
    where: { id: req.params.id },
  });

  res.json({
    data: lead,
    message: "lead updated successfully",
  });
};
const del = async (req, res) => {
  Lead.destroy({
    where: { id: req.params.id },
  });
  res.json({
    message: "lead delete successfully",
  });
};
module.exports = {
  create,
  edit,
  del,
  get,
};
