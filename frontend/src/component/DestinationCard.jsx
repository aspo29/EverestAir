import React from "react";
import { Link } from "react-router-dom";

const DestinationCard = ({ imageSrc, destination, price }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card border-rounded-30">
        <img
          src={imageSrc}
          className="card-img-top"
          alt="Placeholder"
          style={{ width: "100%", height: "200px" }}
        />
        <div className="card-body text-dark bg-light">
          <h5 className="card-title">{destination}</h5>
          <p className="card-text">{price}</p>
          {/* Use Link component to navigate */}
          <Link to="/WhereToFly" className="btn btn-primary">
            &nbsp; Fly ! &nbsp;
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
