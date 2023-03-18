const service = require("../services/drugstore.service");

const listDrugstore = (req, res) => {
  const { otherPoint } = req.query;
  res.send(service.listDrugstores(otherPoint));
};

const deleteDrugstore = (req, res) => {
  // TODO
};

module.exports = {
  listDrugstore,
  deleteDrugstore,
};
