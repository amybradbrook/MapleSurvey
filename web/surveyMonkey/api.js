fetch("https://api.surveymonkey.com/v3/surveys", {
  "method": "GET",
  "headers": {
    "Accept": "application/json",
    "Authorization": "Bearer {access-token}"
  }
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});