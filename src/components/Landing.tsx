import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          
          {/* Intro */}
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              ASHISH
              <br />
              <span>TAMBI</span>
            </h1>
          </div>

          {/* Info */}
          <div className="landing-info">
            <h3>DevOps Engineer &</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">Cloud</div>
              <div className="landing-h2-2">Infrastructure</div>
            </h2>
            <h2>
              <div className="landing-h2-info">Automation</div>
              <div className="landing-h2-info-1">Monitoring</div>
            </h2>
          </div>

        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
