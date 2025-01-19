import React from "react";
import { api } from "../api";
import { useFindMany } from "@gadgetinc/react";
import "./Leaderboard.css";
import leaf from "../assets/leaf.png"
import hibiscus1 from "../assets/hibiscus1.png"
import hibiscus2 from "../assets/hibiscus2.png"

const Leaderboard = () => {

  const [{data, fetching, error}] = useFindMany(api.userStats, {
    sort: [{"surveysCompleted": "Descending"}],
    first: 3,
    select: {
      surveysCompleted: true,
      user: {
        firstName: true,
        lastName: true
      }
    }
  });  

  if (fetching) {
    return <div className="leaderboard-container">Loading leaderboard...</div>;
  }
  if (error) {
    return <div className="leaderboard-container">Error loading leaderboard: {error.message}</div>;
  }

  const decorationStyles = {
    container: {
      position: 'relative',
      width: '100%',
    },
    leaf1: {
      position: 'absolute',
      width: '250px',
      top: '-100px',
      left: '-40px',
      transform: 'rotate(5deg)',
      zIndex: 0
    },
    leaf2: {
      position: 'absolute',
      width: '250px',
      bottom: '-140px',
      right: '-10px',
      transform: 'rotate(-120deg)',
      zIndex: 0
    },
    leaf3: {
      position: 'absolute',
      width: '250px',
      bottom: '-125px',
      left: '-40px',
      transform: 'rotate(-40deg)',
      zIndex: 0
    },
    hibiscus1: {
      position: 'absolute',
      width: '125px',
      bottom: '-50px',
      right: '50px',
      zIndex: 2
    },
    hibiscus2: {
      position: 'absolute',
      width: '150px', 
      top: '-20px',
      left: '60px',
      zIndex: 2
    },
  };

  return (
    <div style={decorationStyles.container}>
      <img src={leaf} alt="" style={decorationStyles.leaf1}/>
      <img src={leaf} alt="" style={decorationStyles.leaf2} />
      <img src={leaf} alt="" style={decorationStyles.leaf3} />
      <img src={hibiscus1} alt="" style={decorationStyles.hibiscus1} />
      <img src={hibiscus2} alt="" style={decorationStyles.hibiscus2} />
      
      <div className="leaderboard-container">
        <div className="leaderboard-header">
          <h2>Leaderboard</h2>
        </div>
        <ul className="leaderboard-list">
          {data && data.map((stat, index) => (
            <li key={stat.id} className="leaderboard-entry">
              <div className="rank-circle">
                {index + 1}
              </div>
              <div className="user-info">
                {stat.user?.firstName || "Anonymous"} {stat.user?.lastName || ""}
              </div>
              <div className="count-circle">
                {stat.surveysCompleted}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Leaderboard;
