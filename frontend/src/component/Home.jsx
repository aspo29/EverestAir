import React from "react";
import { useEffect } from "react";
import DestinationCard from "./DestinationCard";
import DestinationDataHome from "./DestinationDataHome";
import FlightSearchForm from "./FlightSearchForm";
import "./MyCSS.css";
import { Link } from "react-router-dom";

const Home = () => {
  useEffect(() => {
    document.title = "Delta Airlines";
  }, []);

  return (
    <>
      <div className="container mt-4">
        <div>
          <video
            src="src\component\Images\landingvideo (1080p).mp4"
            width="100%"
            height="auto"
            autoPlay
            loop // video loop continuously
            muted // Mute the video
            style={{
              position: "absolute",
              zIndex: "-1",
              top: "0",
              left: "0",
              minWidth: "100%",
              minHeight: "100%",
              objectFit: "cover",
            }}
          />
          <video
            src="src\component\Images\wing.mp4"
            width="100%"
            height="auto"
            autoPlay
            loop
            muted
            style={{
              position: "absolute",
              zIndex: "-1",
              top: "710px",
              left: "0",
              minWidth: "100%",
              minHeight: "230%",
              objectFit: "cover",
            }}
          />
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="row">
          <p className="text-center">
            <img src="src\component\Images\logonavbar.png" height="35" />
          </p>
          <div className="col-1"></div>
          <div className=" col-10 ">
            {/* Display the FlightSearchForm component */}
            <FlightSearchForm />
          </div>
          <div className="col-1"></div>
        </div>
        <br />
        <br />
        <div className="row">
          <div className="col-12  ">
            <div className="col-12 text-center text-white">
              <p>
                We Provide You Best Airline Service. Our Airlines Will Take-up
                care of your comfort zone. We provide you tasty Food and take
                review and suggest About it. We Request you, while travelling
                with us, to put your seat belt, So that You Feel Safe with Us.
              </p>
            </div>
          </div>
        </div>
        <br />
        <div id="card" className="row">
          {DestinationDataHome.map((destination, index) => (
            <DestinationCard
              key={index}
              imageSrc={destination.imageSrc}
              destination={destination.destination}
              price={destination.price}
            />
          ))}
        </div>

        <br />
        <br />

        <div className="row">
          <div className="col-12 text-center text-light ">
            <h3>Holy Places </h3>
            <p>We Provide You Economical Package for Holy Places.</p>
          </div>
          <div className="row ">
            <div className="col-md-1"></div>
            <div className="col-md-4 ">
              {/* bg-image hover-zoom */}
             <Link to="/WhereToFly" style={{ textDecoration: 'none' }}>
             <div className="card ">
                <img
                  src="src\component\Images\pashupatinath.jpg"
                  className="card-img-top "
                  width="70px"
                  height="390px"
                  alt="Placeholder"
                />{" "}
                <div className="card-body text-dark bg-light">
                  <h5 className="card-title">Pashupatinath</h5>
                </div>
              </div></Link>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-1"></div>{" "}
            <div className="col-md-4">
             <Link
              to="/WhereToFly" style={{ textDecoration: 'none' }}>
             <div className="card">
                <img
                  src="src\component\Images\lumbini.jpg"
                  className="card-img-top"
                  width="70px"
                  height="390px"
                  alt="Placeholder"
                />
                <div className="card-body text-dark bg-light">
                  <h5 className="card-title ">Lumbini</h5>{" "}
                </div>
              </div>
             </Link> 


            </div>
            <div className="col-md-1"></div>
            <br />
            <br />
            <br />
          </div>
        </div>

        <br />
        <br />
        <br />
      </div>
    </>
  );
};

export default Home;
