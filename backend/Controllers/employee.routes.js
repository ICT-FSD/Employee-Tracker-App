const express = require("express");
const employee = require("../Models/employee.schema");

const employeeController = express.Router();

employeeController.get("/", async (req, res) => {
  const { userEmail } = req.body;
  const { project } = req.query;
  const employee = await employee.find({ project, userEmail });
  try {
    if (employee.length === 0) {
      res.status(401).send("No employee");
    } else {
      res.status(200).send(employee);
    }
  } catch (err) {
    res.status(500).send("Internal Server Error!");
  }
});

employeeController.post("/create", async (req, res) => {
  try {
    const newemployee = employee.create(req.body);
    res.status(201).send({ message: "New employee added!", newemployee });
  } catch (err) {
    res.status(500).send("Internal server error!");
  }
});

employeeController.patch("/update/:employeeId", async (req, res) => {
  const { employeeId } = req.params;
  const update = await employee.findByIdAndUpdate({ _id: employeeId }, req.body, {
    new: true,
  });
  res.status(200).send({ message: "employee updated!", update });
});

employeeController.delete("/delete/:employeeId", async (req, res) => {
  const { employeeId } = req.params;
  await employee.findByIdAndDelete({ _id: employeeId });
  res.status(200).send({ message: "employee Deleted!" });
});

module.exports = employeeController;
