import React from 'react';
import { NavBar } from '../components/NavBar';
import leaf from "../assets/leaf.png"
import hibiscus1 from "../assets/hibiscus1.png"
import hibiscus2 from "../assets/hibiscus2.png"
 

const SurveysPage = () => {
 
  // Mock survey data matching the model structure
  const mockSurveys = [
    {
      id: "1",
      title: "Customer Satisfaction Survey",
      description: "Help us improve our services by sharing your experience",
      responseCount: 24
    },
    {
      id: "2", 
      title: "Product Feedback",
      description: "Tell us what you think about our latest product features",
      responseCount: 15
    },
    {
      id: "3",
      title: "Website Usability Survey",
      description: "Share your thoughts on our website's design and functionality",
      responseCount: 38
    },
    {
      id: "4",
      title: "Employee Engagement Survey",
      description: "Help us create a better workplace environment",
      responseCount: 42
    }
  ];

  const decorationStyles = {
    container: {
      position: 'relative',
      width: '100%',
    },
    leaf1: {
      position: 'absolute',
      width: '250px',
      top: '50px',
      left: '-90px',
      transform: 'rotate(180deg)',
      zIndex: 0
    },
    leaf2: {
      position: 'absolute',
      width: '250px',
      bottom: '-140px',
      right: '-20px',
      transform: 'rotate(90deg)',
      zIndex: 0
    },
    leaf3: {
      position: 'absolute',
      width: '250px',
      bottom: '-125px',
      left: '-40px',
      transform: 'rotate(120deg)',
      zIndex: 0
    },
    hibiscus1: {
      position: 'absolute',
      width: '125px',
      bottom: '-60px',
      right: '50px',
      zIndex: 2
    },
    hibiscus2: {
      position: 'absolute',
      width: '150px', 
      top: '50px',
      right: '-40px',
      zIndex: 2
    },
  };
 
  return (
    <div style={{overflowX: "hidden", overflowY: "hidden", position: "relative", width: '100%'}}>
      <NavBar />
      <img src={leaf} alt="" style={decorationStyles.leaf1}/>
      <img src={leaf} alt="" style={decorationStyles.leaf2} />
      <img src={leaf} alt="" style={decorationStyles.leaf3} />
      <img src={hibiscus1} alt="" style={decorationStyles.hibiscus1} />
      <img src={hibiscus2} alt="" style={decorationStyles.hibiscus2} />
      <div style={{
        minHeight: "100vh",
        width: "100%",
        backgroundColor: "rgba(75, 117, 49, 0.1)",
        padding: "20px",
        overflowX: "hidden",
        overflowY: "hidden"
      }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "20px",
          padding: "20px"
        }}>
          {mockSurveys.map(survey => (
            <div key={survey.id} style={{
              backgroundColor: "white",
              padding: "20px",
              margin: "15px",
              borderRadius: "8px",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
            }}>
              <h3 style={{ marginTop: 0, marginBottom: "10px", alignSelf: "center", justifySelf: "center" }}>{survey.title}</h3>
              <p style={{ marginBottom: "15px", color: "#666" }}>{survey.description}</p>
              <div style={{alignItems: "center", justifyItems: "center"}}>
              <button style={{ margin: 0, backgroundColor: "#4B7531", color: "white", alignContent: "center", justifyContent: "center", display: "flex", borderWidth: "0px", padding: "10px", borderRadius: "10px"}}>Responses: {survey.responseCount}</button>
              </div>
            </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default SurveysPage;
