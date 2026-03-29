import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          {/* Current Role */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>DevOps Engineer</h4>
                <h5>Growth Grids Pvt. Ltd.</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Managing scalable infrastructure across on-premises and AWS environments. 
              Working on CI/CD pipelines using Jenkins and GitLab, containerization with Docker, 
              and monitoring using Prometheus and Grafana. Handling production deployments, 
              automation, and performance optimization for high-traffic applications.
            </p>
          </div>

          {/* Previous Role */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Server Administrator</h4>
                <h5>CEG Technoconsult Pvt. Ltd.</h5>
              </div>
              <h3>2023–2024</h3>
            </div>
            <p>
              Designed and managed server infrastructure including RAID storage systems 
              and networking. Worked on database performance tuning (MySQL), backup strategies, 
              and infrastructure setup for development, staging, and production environments.
            </p>
          </div>

          {/* Internship */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>DevOps Engineer Intern</h4>
                <h5>Grras Solutions Pvt. Ltd.</h5>
              </div>
              <h3>2022–2023</h3>
            </div>
            <p>
              Gained hands-on experience in Linux administration, Docker, AWS basics, 
              and automation. Assisted in deploying applications and managing servers, 
              while learning real-world DevOps practices and troubleshooting techniques.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Career;
