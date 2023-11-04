<?php
header("Access-Control-Allow-Origin: *"); //add this CORS header to enable any domain to send HTTP requests to these endpoints:
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Request-Headers, Authorization, X-Requested-With");
$host = "localhost"; 
$user = "root"; 
$password = ""; 
$dbname = "student_manage"; 
 
$con = mysqli_connect($host, $user, $password,$dbname);
 
$data = json_decode(file_get_contents("php://input"));
$email = $data->email;
$password = $data->password;
$sql = "SELECT * FROM users WHERE email='".$email."' AND password='".$password."'";
$result = mysqli_query($con, $sql);
$nums = mysqli_num_rows($result);
$rs = mysqli_fetch_array($result);
if($nums >=1){
    http_response_code(200);
    $outp = "";
    $outp .= '{"email":"' .$rs["email"] . '",';
    $outp .= '"Status":"200"}';
    echo $outp;
}
else {
    http_response_code(202);
}
$con->close();



