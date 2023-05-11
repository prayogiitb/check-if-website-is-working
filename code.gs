// Code is written by Shivanand Nalgire
//  This code is used to check if the website is working or not.
//  Code is useful in checking the website on large scale in google sheets

function getStatusCode(url){
   var response = UrlFetchApp.fetch(url);
   return response.getResponseCode();
}
