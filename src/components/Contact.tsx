import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          
          {/* Connect Section */}
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              <a
                href="https://www.linkedin.com/in/ashish-tambi"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                LinkedIn — ashish-tambi
              </a>
            </p>
            <p>Email — tambiashishkumar@gmail.com</p>
            <p>Phone — +91 8107166612</p>

            <h4>Education</h4>
            <p>
              B.Tech Mechanical Engineering, JECRC Foundation — Jaipur
            </p>
            <p>RHCSA Certified (Red Hat Certified System Administrator)</p>
          </div>

          {/* Social Section */}
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/ashishtambi"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/ashish-tambi"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
          </div>

          {/* Footer */}
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Ashish Tambi</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
