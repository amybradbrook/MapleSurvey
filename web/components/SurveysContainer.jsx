import React from "react";
import { useFindMany } from "@gadgetinc/react";
import { api } from "../api";
import SurveyTitle from "./SurveyTitle";
import "./SurveysContainer.css";

const SurveysContainer = () => {
  const [{ data: surveys, fetching, error }] = useFindMany(api.survey, {
    sort: { createdAt: "Descending" },
    select: {
      id: true,
      title: true,
      description: true,
      createdAt: true,
      responseCount: true
    }
  });

  if (fetching) {
    return <div className="surveys-loading">Loading surveys...</div>;
  }

  if (error) {
    return <div className="surveys-error">Error loading surveys: {error.message}</div>;
  }

  if (!surveys?.length) {
    return <div className="surveys-empty">No surveys found. Create your first survey to get started!</div>;
  }

  return (
    <div className="surveys-container">
      <SurveyTitle title="Your Surveys" />
      <div className="surveys-grid">
        {surveys.map((survey) => (
          <div key={survey.id} className="survey-card">
            <h3 className="survey-title">{survey.title}</h3>
            <p className="survey-description">{survey.description || "No description provided"}</p>
            <div className="survey-meta">
              <span>Created: {new Date(survey.createdAt).toLocaleDateString()}</span>
              <span>Responses: {survey.responseCount}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SurveysContainer;