import exams from "./exams.js";
import { Link } from "react-router-dom";
import "./courses.css";
import { useState } from "react";

function Exam() {
  const [filter, setfilter] = useState(exams);
  const [active, setactive] = useState("all");
  function handleClick(req) {
    if (req === "all") {
      setfilter(exams);
      setactive("all")
    } else if (req === "medical") {
      setfilter([exams[1]]);
      setactive("medical");
    } else if (req === "universities") {
      setfilter(exams.filter((_, index) => index !== 1));
      setactive("universities");
    }
    if (req === "engineering") {
      setfilter([exams[5]]);
      setactive("engineering");
    }
  }
  return (
    <section className="coverage" id="coverage">
      <p className="section-label">What we cover</p>
      <div>
        <ul>
          <li
            className={` Filter_btn ${active === "all" ? "active" : ""}`}
            onClick={() => handleClick("all")}
          >
            All exams
          </li>
          <li
            className={` Filter_btn ${active === "universities" ? "active" : ""}`}
            onClick={() => handleClick("universities")}
          >
            Universities
          </li>
          <li
            className={` Filter_btn ${active === "medical" ? "active" : ""}`}
            onClick={() => handleClick("medical")}
          >
            Medical
          </li>
          <li
            className={` Filter_btn ${active === "engineering" ? "active" : ""}`}
            onClick={() => handleClick("engineering")}
          >
            Engineering
          </li>
        </ul>
      </div>
      <div className="exam_cards">
        {filter.map((exam) => {
          return (
            <div
              className={`exam-card ${!exam.available ? "is-soon" : ""}`}
              key={exam.name}
            >
              {!exam.available && <span className="ribbon">Coming Soon</span>}

              <h4 className="exam-cat">{exam.category}</h4>
              <img className="exam-img" src={exam.logo} alt={exam.name} />
              <h3 className="exam-name">{exam.name}</h3>
              <p className="exam-dis">{exam.description}</p>

              {exam.available ? (
                <button className="exam-cta">
                  Start Preparing <span className="arrow">›</span>
                </button>
              ) : (
                <p className="exam-soon-note">
                  🔔 Available soon — check back later!
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
export default Exam;
