//GET

var requestOptions = {
  method: 'GET',
  body: raw,
  redirect: 'follow'
};

fetch("https://gorest.co.in/public/v1/users", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));


//Create  

var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer d7c01847de4c083cb154e9a533294301e9f05f93dbae7d589e42ece63226c0a3");
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "id": 4568,
  "name": "Akash",
  "email": "nair_baijayan@ohar.io",
  "gender": "male",
  "status": "active"
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://gorest.co.in/public/v1/users", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

//DELETE

var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer d7c01847de4c083cb154e9a533294301e9f05f93dbae7d589e42ece63226c0a3");

var raw = "";

var requestOptions = {
  method: 'DELETE',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://gorest.co.in/public/v1/users/3904", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

