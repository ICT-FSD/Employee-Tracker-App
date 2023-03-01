const Mongoose = require("mongoose")

const EmployeeSchema = Mongoose.Schema(
    {
        Name : String,
        Email : String,
        Designation : String,
        Phonenumber : Number,
        Password : String
    }
)

const Employee = Mongoose.model("Employees",EmployeeSchema)
module.exports = {EmployeeModel}
