import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          I am a DevOps Engineer and Linux Server Administrator with 3+ years of experience 
          in managing scalable infrastructure across on-premises and cloud environments (AWS). 
          I specialize in server administration, automation, and performance optimization, 
          with hands-on expertise in Docker, CI/CD pipelines, and monitoring tools like 
          Prometheus and Grafana.

          I have strong experience in deploying and managing applications including PHP, 
          Laravel, Node.js, React, and Next.js, along with optimizing large-scale MySQL 
          databases for high-performance workloads. I have also designed and managed RAID-based 
          storage systems and built reliable server infrastructures for production environments.

          Currently, I focus on improving system reliability, automating workflows, and 
          building scalable DevOps solutions that reduce downtime and improve efficiency.
        </p>
      </div>
    </div>
  );
};

export default About;
