const express = require('express');
const drugstoreController = require("./src/controllers/drugstore.controller");
const cors = require('cors')

const app = express();
const PORT = 3310;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/", drugstoreController.listDrugstore);
app.get("/drugstore", drugstoreController.listDrugstore);
app.delete("/drugstore/:id", drugstoreController.deleteDrugstore);

app.listen(PORT, (error) => {
    if (!error)
        console.log("Server is Successfully Running, and App is listening on port " + PORT)
    else
        console.log("Error occurred, server can't start", error);
});

module.exports = app;