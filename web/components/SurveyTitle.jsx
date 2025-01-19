import React from "react";
import PropTypes from "prop-types";

const styles = {
  container: {
    position: "relative",
    padding: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "60px",
  },
  text: {
    transformOrigin: "center center",
    whiteSpace: "nowrap",
    fontSize: "24px",
    fontWeight: "bold",
    color: "#333333",
    letterSpacing: "2px",
    textTransform: "uppercase",
  }
};

function SurveyTitle({ title = "Surveys", className, style }) {
  return (
    <div 
      className={className}
      style={{
        ...styles.container,
        ...style
      }}
    >
      <div style={styles.text}>
        {title}
      </div>
    </div>
  );
}

SurveyTitle.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object
};

export default SurveyTitle;