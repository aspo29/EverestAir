import React from "react";
import DestinationCard from "./DestinationCard";
import PackageData from "./PackageData";
import "./MyCSS.css";
import { useEffect } from "react";
const Packages = () => {
  useEffect(() => {
    document.title = "Packages Delta";
  }, []);

  return (
    <>
      <div className="container mt-4">
        <div>
          <video
            src="src\component\Images\wingbrowen.mp4"
            width="100%"
            height="auto"
            autoPlay
            loop
            muted
            style={{
              position: "absolute",
              zIndex: "-1",
              top: "0",
              left: "0",
              minWidth: "100%",
              minHeight: "151%",
              objectFit: "cover",
            }}
          />
          <video
            src="src\component\Images\wing.mp4"
            width="100%"
            height="auto"
            autoPlay
            loop // Add loop attribute to make the video loop continuously
            muted // Mute the video
            style={{
              position: "absolute",
              zIndex: "-1",
              top: "710px",
              left: "0",
              minWidth: "100%",
              minHeight: "151%",
              objectFit: "cover",
            }}
          />

          <div className="row">
            <div className="col-12 text-center text-light $font-family-sans-serif:Segoe UI">
              <h1 className="text-align-center">Domestic Offers </h1>
              <p>
                Save Yor time Effort and Money with our exclusive flight deals
              </p>
            </div>
          </div>

          <div className="container mt-4">
            <div className="row mt-4">
              {PackageData.map((pkg, index) => (
                <DestinationCard
                  key={index}
                  imageSrc={pkg.imageSrc}
                  destination={pkg.destination}
                  price={pkg.price}
                />
              ))}
            </div>

            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
        </div>{" "}
      </div>
    </>
  );
};

export default Packages;
