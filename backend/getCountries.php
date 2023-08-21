<?php
ini_set('display_errors', true);
error_reporting(E_ALL);
require_once('./lib/nusoap.php');
include 'cors.php';
header('Content-Type: application/json; charset=utf-8');
cors();
$error = '';
$result = array();

//link for web service

$wsdl = "http://webservices.oorsprong.org/websamples.countryinfo/CountryInfoService.wso?WSDL";

try {
    $client = new SoapClient($wsdl, array('trace' => 1));
    $result = $client->ListOfCountryNamesByName();
    
    // checks if soap runs correctly
    if (!empty($result->ListOfCountryNamesByNameResult->tCountryCodeAndName)) {
        $countryArray = $result->ListOfCountryNamesByNameResult->tCountryCodeAndName;

        

        //print codes and names of countries
        // foreach ($countryArray as $country) {
        //     echo "ISO Code: " . $country->sISOCode . ", Name: " . $country->sName . "<br>";
        // }
         echo json_encode($countryArray);
    } else {
        echo "No country data available.";
    }
} catch (Exception $e) {
    echo "Error fetching SOAP data: " . $e->getMessage();
}
?>
