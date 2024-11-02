import AirApplication from '../models/airApplication.js';

export const getApplication = async (req, res) => {
  try {
    const allApplications = await AirApplication.find();
    res.status(200).json(allApplications);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const deleteApplication = async (req, res) => {
  const id = req.params.id;
  console.log('deleteApplication');
  console.log(id);
  try {
    await AirApplication.deleteOne({ _id: id });
    res.send('Successfully deleted!');
  } catch (error) {
    console.log(error);
  }
};

export const updateApplication = async (req, res) => {
  const id = req.params.id;
  console.log('updateApplication');
  console.log(id);
  try {
    await AirApplication.updateOne({ _id: id }, req.body);
    res.send('Successfully updated!');
  } catch (error) {
    console.log(error);
  }
};
// export const createApplication = async (req, res) => {

//     const ticket = req.body.ticket;
//     const ticketInStringFormat=ticket.toString();

//     const passport = req.body.passport;
//     const passportInStringFormat=passport.toString();

//     const newApplication = new AirApplication({
//         ticket: ticketInStringFormat,
//         passport: passportInStringFormat
//     });
//     try{
//         await newApplication.save();
//         res.json(newApplication);

//     }catch(error){
//         console.log("Not saved....");

//     }

// }
// ;
export const createApplication = async (req, res) => {
  console.log('createApplication');
  try {
    // Extract necessary data from the request body
    const {
      firstName,
      lastName,
      passport,
      age,
      departureDate,
      returnDate,
      email,
      phone,
      departureAirport,
      arrivalAirport,
      gender,
    } = req.body;

    // Validate required fields for creating an application
    const requiredFields = [
      'firstName',
      'lastName',
      'passport',
      'age',
      'departureDate',
      'returnDate',
      'address',
      'email',
      'phone',
    ];
    // for (let field of requiredFields) {
    //   if (!req.body[field]) {
    //     return res.status(400).json({ error: `Please fill in the ${field}.` });
    //   }
    // }

    // Create a new AirApplication using the extracted data
    const newApplication = new AirApplication(req.body);

    // Save the application to the database
    await newApplication.save();
    res.status(201).json({ newApplication, redirectTo: '/CheckBooking' });
  } catch (error) {
    console.error('Error while creating application:', error);
    res.status(500).json({ error: error.message });
  }
};
