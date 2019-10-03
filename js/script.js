// jQuery 'listens' for document to be fully loaded 
// then executes this ...
// note: Every time you see $, think jQuery.

$(document).ready(function() {
    // code to be executed goes here
    
   $("#text").append(". Coming from script.js. This is cool.");

});