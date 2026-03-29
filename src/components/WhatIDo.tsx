import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);
  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };

  useEffect(() => {
    if (ScrollTrigger.isTouch) {
      containerRef.current.forEach((container) => {
        if (container) {
          container.classList.remove("what-noTouch");
          container.addEventListener("click", () => handleClick(container));
        }
      });
    }
    return () => {
      containerRef.current.forEach((container) => {
        if (container) {
          container.removeEventListener("click", () =>
            handleClick(container)
          );
        }
      });
    };
  }, []);

  return (
    <div className="whatIDO">
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>
      </div>

      <div className="what-box">
        <div className="what-box-in">

          {/* DevOps & Cloud */}
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 0)}
          >
            <div className="what-content-in">
              <h3>DEVOPS & CLOUD</h3>
              <h4>Infrastructure & Automation</h4>
              <p>
                I design and manage scalable infrastructure across on-premises 
                and AWS environments. Focused on automation, CI/CD pipelines, 
                and high availability systems to ensure smooth deployments.
              </p>

              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">AWS</div>
                <div className="what-tags">Docker</div>
                <div className="what-tags">Jenkins</div>
                <div className="what-tags">GitLab CI/CD</div>
                <div className="what-tags">Linux</div>
                <div className="what-tags">Ansible</div>
              </div>
            </div>
          </div>

          {/* Monitoring & Performance */}
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 1)}
          >
            <div className="what-content-in">
              <h3>MONITORING & OPTIMIZATION</h3>
              <h4>Performance & Reliability</h4>
              <p>
                I monitor system performance, optimize databases, and ensure 
                reliability of applications. Experienced in handling large-scale 
                data, improving system efficiency, and reducing downtime.
              </p>

              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">Prometheus</div>
                <div className="what-tags">Grafana</div>
                <div className="what-tags">MySQL Optimization</div>
                <div className="what-tags">RAID Storage</div>
                <div className="what-tags">Backup & Recovery</div>
                <div className="what-tags">System Tuning</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default WhatIDo;

function handleClick(container: HTMLDivElement) {
  container.classList.toggle("what-content-active");
  container.classList.remove("what-sibling");

  if (container.parentElement) {
    const siblings = Array.from(container.parentElement.children);

    siblings.forEach((sibling) => {
      if (sibling !== container) {
        sibling.classList.remove("what-content-active");
        sibling.classList.toggle("what-sibling");
      }
    });
  }
}
