import { useUser, useSignOut, useFindFirst } from "@gadgetinc/react";
import { Link } from "react-router";
import { api } from "../api";
import SurveyStats from "../components/SurveyStats";
import Leaderboard from "../components/Leaderboard";
import { NavBar } from '../components/NavBar';


export default function () {
  var SM_API_BASE = "https://api.surveymonkey.com";
  var AUTH_CODE_ENDPOINT = "/oauth/authorize";

  const user = useUser(api);
  const signOut = useSignOut();

  const [{data, fetching, error}] = useFindFirst(api.userStats, {
    where: {user: user.id}
  });

  function oauth_dialog(client_id, redirect_uri) {
  	var auth_dialog_uri = SM_API_BASE + AUTH_CODE_ENDPOINT + "?redirect_uri=" + redirect_uri + "&client_id=" + client_id + "&response_type=code";

    window.open(auth_dialog_uri, "_blank");
  
  	// Insert code here that redirects user to OAuth Dialog url
  }
  //oauth_dialog("hVfbmWdzSYSzexMO8x5lMw", "https://www.surveymonkey.com");
  return user ? (
    
    <> 
      
      <div style={{flexDirection: "column", backgroundColor: "#f5f5f5", overflowX: "hidden", overflowY: "hidden"}}>
        <NavBar />
      <div style={{flexDirection: "row", display: "flex", zIndex:1}}>
        <div className="aboutus" style={{
          display: "flex",
          flex: "1.5",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center"
        }}>
          <div style=
            {{display: "flex",
              flexDirection: "column",
              alignItems: "center",
              margin: "50px"}}>
            <h1 style=
              {{color: "#545454", fontSize: "50px", textAlign: "center"}}>
              Complete Surveys</h1>
            <h1 style=
              {{backgroundColor: "#4b7531", 
                color: "white",
                padding: "10px",
                paddingLeft: "20px",
                paddingRight: "20px",
                margin: "30px",
                fontSize: "50px",
                textAlign: "center"}}>
              Plant Trees</h1>
            <h3 style={{
                       color: "#545454",
                       paddingLeft: "20px",
                       paddingRight: "20px",
                       textAlign: "center"}}>Here at MapleSurvey, we are dedicated to helping the environment while improving your customer experiences. </h3>
          </div>
        </div>
        <div className = "Survey" style=
          {{alignContent: "center", 
            justifyContent: "flex-start", 
            flex:"2", 
            flexDirection: "column",
            padding: "20px"}}>
          <div style=
            {{alignItems: "center", 
              justifyItems: "center",
              marginBottom: "40px"}}>
            <SurveyStats completedSurveys={90} totalSurveys={4} />
          </div>
          <div style={{
            alignItems: "center",
            justifyItems: "center",
            marginBottom: "40px"
          }}>
            
          </div>
         </div>
       </div>
        <div className = "LeaderBoard">
           <Leaderboard/>
        </div>
    
      </div>
    </>
  ): null;
}
