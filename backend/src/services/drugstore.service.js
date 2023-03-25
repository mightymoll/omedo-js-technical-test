const repository = require("../repositories/drugstore.repository");

const listDrugstores = () => {
  return repository.listDrugstores();
};


const deleteDrugstore = (drugstoreId) => {
  // TODO
};


module.exports = {
  listDrugstores,
  deleteDrugstore,
};
