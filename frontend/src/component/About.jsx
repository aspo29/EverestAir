import React from "react";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    document.title = "About Delta";
  }, []);

  return (
    <>
      <div>
        <video
          src="src\component\Images\hightakeoff.mp4"
          width="100%"
          height="auto"
          autoPlay
          loop // Add loop attribute to make the video loop continuously
          muted // Mute the video
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

        <br />
        <br />
        <br />
        <div className="row">
          {" "}
          <div className="col-2"></div>
          <div className="col-8">
            <p
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.7)",
                padding: "50px",
                borderRadius: "30px",
                fontFamily: "times new roman",
                fontSize: "17px",
                fontStyle: "italic",
              }}
            >
              Everest Air, established in 1992 as Nepal Air Charter Services, provided both scheduled domestic flights and chartered helicopter services across Nepal. 
              Operating from its hub at Tribhuvan International Airport in Kathmandu, Everest Air connected key destinations, including Pokhara, Biratnagar, and Jomsom. 
              Despite its growth, it ceased operations in 1998. Notable fleet included Dornier 228 aircraft, with some former operations utilizing Mil Mi-8 helicopters. 
              Everest Air was a prominent yet short-lived player in Nepal’s aviation sector.
              For more, visit Everest Air on <a href="https://en.wikipedia.org/wiki/Everest_Air">Wikipedia</a>.
            </p>{" "}
          </div>
          <div className="col-2"></div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br /><br />
    </>
  );
};

export default About;
