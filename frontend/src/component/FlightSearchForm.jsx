import React, { useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import "./MyCSS.css";

const FlightSearchForm = () => {
  const [departureCity, setDepartureCity] = useState("");
  const [arrivalCity, setArrivalCity] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [searchedDetails, setSearchedDetails] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission - perform search, API call, etc.
    const details = {
      departureCity,
      arrivalCity,
      departureDate,
      returnDate,
    };
    setSearchedDetails(details);
  };

  return (
    <>
      <Form onSubmit={handleSubmit} className="flight-search-form">
        <div className="row g-3 align-items-center">
          <div className="col">
            <Form.Label htmlFor="departureCity">Departure City</Form.Label>
            <Form.Select
              id="departureCity"
              aria-label="Departure City"
              value={departureCity}
              onChange={(e) => setDepartureCity(e.target.value)}
            >
              <option value="">Select Departure City</option>
              <option value="Kathmandu">Kathmandu</option>
              <option value="Pokhara">Pokhara</option>
              <option value="Bhadrapur">Bhadrapur</option>
              <option value="Biratnagar">Biratnagar</option>
              <option value="Janakpur">Janakpur</option>
              <option value="Nepalgunj">Nepalgunj</option>
              <option value="Bhairahawa">Bhairahawa</option>
              <option value="Dhangadhi">Dhangadhi</option>
              <option value="Jomsom">Jomsom</option>

              {/* International options */}
              <option value="Bangkok">Bangkok</option>
              <option value="Singapore">Singapore</option>
              <option value="New York">New York</option>
              <option value="Tokyo">Tokyo</option>
              <option value="Sydney">Sydney</option>
            </Form.Select>
          </div>
          <div className="col">
            <Form.Label htmlFor="arrivalCity">Arrival City</Form.Label>
            <Form.Select
              id="arrivalCity"
              aria-label="Arrival City"
              value={arrivalCity}
              onChange={(e) => setArrivalCity(e.target.value)}
            >
              <option value="">Select Arrival City</option>
              <option value="Kathmandu">Kathmandu</option>
              <option value="Pokhara">Pokhara</option>
              <option value="Bhadrapur">Bhadrapur</option>
              <option value="Biratnagar">Biratnagar</option>
              <option value="Janakpur">Janakpur</option>
              <option value="Nepalgunj">Nepalgunj</option>
              <option value="Bhairahawa">Bhairahawa</option>
              <option value="Dhangadhi">Dhangadhi</option>
              <option value="Jomsom">Jomsom</option>

              {/* International options */}
              <option value="Bangkok">Bangkok</option>
              <option value="Singapore">Singapore</option>
              <option value="New York">New York</option>
              <option value="Tokyo">Tokyo</option>
              <option value="Sydney">Sydney</option>
            </Form.Select>
          </div>
          <div className="col">
            <Form.Label htmlFor="departureDate">Departure Date</Form.Label>
            <Form.Control
              id="departureDate"
              type="date"
              value={departureDate}
              onChange={(e) => setDepartureDate(e.target.value)}
            />
          </div>
          <div className="col">
            <Form.Label htmlFor="returnDate">Return Date</Form.Label>
            <Form.Control
              id="returnDate"
              type="date"
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
            />
          </div>
          <div className="col-auto">
            <Button variant="primary" type="submit">
              Search Flights
            </Button>
          </div>
        </div>
      </Form>

      {searchedDetails && (
        <Card className="search-details">
          <Card.Body>
            <Card.Title>Searched Details</Card.Title>
            <Card.Text>
              <p>Departure City: {searchedDetails.departureCity}</p>
              <p>Arrival City: {searchedDetails.arrivalCity}</p>
              <p>Departure Date: {searchedDetails.departureDate}</p>
              <p>Return Date: {searchedDetails.returnDate}</p>
            </Card.Text>
            <Alert variant="success">Flights are available!</Alert>
          </Card.Body>
        </Card>
      )}
    </>
  );
};

export default FlightSearchForm;
