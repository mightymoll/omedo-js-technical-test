const harvesineDistance = require("haversine-distance");

class DrugstoreModel {
  constructor({
    id,
    name,
    address,
    point,
    number_of_employees,
    candidate = undefined,
    distance = function () { calculateDistance(otherPoint); },
  }) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.point = point;
    this.number_of_employees = number_of_employees;
    this.candidate_id = candidate;
    this.distance = distance;
  }

  calculateDistance(otherPoint) {
    return harvesineDistance(this.point, otherPoint);
  }
}

module.exports = DrugstoreModel;
