import React from "react";
import pretttyyy from "../assets/pretttyyyyyy.png";
import PropTypes from "prop-types";

const styles = {
  wrapper: {
    position: "relative",
    width: "500px",
    height: "500px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  backgroundImage: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "500px",
    width: "500px",
    zIndex: 1
  },
  circleContainer: {
    position: "absolute",
    backgroundColor: "white",
    borderRadius: "50%",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "275px",
    height: "275px",
    zIndex: 2,
  },
  statsContent: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    zIndex: 3,
    textAlign: "center",
  },
  statsNumber: {
    fontSize: "90px",
    fontWeight: "700",
    color: "#4CAF50",
    width: "60px",
    height: "60px",
    zIndex: 3
  }
};

const SurveyStats = ({ completedSurveys}) => {
 
  const radius = 122.5;
  const circumference = 2 * Math.PI * radius;
  const progress = completedSurveys === 0 ? 0 : (completedSurveys / 4) * 100;
  const strokeDashoffset = circumference - (progress / 100) * circumference;
  const percentage = Math.round(progress);
  const treesPlanted = Math.floor(completedSurveys / 4);

  return (
    <div style={styles.wrapper}>
      <img src={pretttyyy} alt="background" style={styles.backgroundImage} />
      <div style={styles.circleContainer}>
        <svg width="275" height="275" viewBox="0 0 275 275">
          <circle
            stroke="#F5F5F5"
            strokeWidth="30"
            fill="transparent"
            r={radius}
            cx="137.5"
            cy="137.5"
          />
          <circle
            stroke="#4CAF50"
            strokeWidth="30"
            fill="transparent"
            r={radius}
            cx="137.5"
            cy="137.5"
            strokeLinecap="round"
            transform="rotate(-90 137.5 137.5)"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            style={{
              transition: "stroke-dashoffset 0.3s ease"
            }}
          />
        </svg>
      </div>
      <div style={styles.statsContent}>
        <p style={{fontSize: "40px", color: "#4b7531", fontWeight: "bold"}}>{treesPlanted}</p>
        <p style={{ fontSize: "16px", color: "#666", marginTop: "4px" }}>Trees Planted</p>
      </div>
    </div> 
  );
};

SurveyStats.propTypes = {
  completedSurveys: PropTypes.number.isRequired,
  totalSurveys: PropTypes.number.isRequired
};

SurveyStats.defaultProps = {
  completedSurveys: 0,
  totalSurveys: 0
};

export default SurveyStats;
