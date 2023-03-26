const service = require("../services/drugstore.service");

const listDrugstore = (req, res) => {
  let otherPoint = req.body.coordonnees
  console.log(otherPoint)
  res.send(service.listDrugstores(otherPoint));
};

const deleteDrugstore = (req, res) => {
  // TODO
};

module.exports = {
  listDrugstore,
  deleteDrugstore,
};
