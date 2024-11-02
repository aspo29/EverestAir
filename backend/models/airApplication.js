import mongoose from "mongoose";

//attributes of the table/collection
const airApplicationSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  passport: String,
  age: Number,
  gender: String,
  departureAirport: String,
  arrivalAirport: String,
  departureDate: Date,
  returnDate: Date,
  address:String,
  email: String,
  phone: String,
});

//basically this table/collection is called AirApplication in mongodb

const AirApplication = mongoose.model("AirApplication", airApplicationSchema);

export default AirApplication;

