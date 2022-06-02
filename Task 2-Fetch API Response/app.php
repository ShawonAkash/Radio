//Create Using PHP
<?php
$client = new Client();
$headers = [
  'Authorization' => 'Bearer d7c01847de4c083cb154e9a533294301e9f05f93dbae7d589e42ece63226c0a3',
  'Content-Type' => 'application/json'
];
$body = '{
  "id": 3904,
  "name": "Shawon",
  "email": "brad@gmail.com",
  "gender": "male",
  "status": "active"
}';
$request = new Request('POST', 'https://gorest.co.in/public/v1/users', $headers, $body);
$res = $client->sendAsync($request)->wait();
echo $res->getBody();