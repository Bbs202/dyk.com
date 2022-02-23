$(document).ready(function(){

    //toggle button
    $("#toggle-btn").click(function(){
        $("body").toggleClass("change-background");
        $(this).css("border", "1px solid #f5f5f5");
    $("span#font").text($("span#font").text()=="Normal Mode"?"Dark Mode" : "Normal Mode");
    })
    $("toggle-btn").click(function(){
        $(this).find("i").toggleClass("fa-moon fa-sun")      
   
    })
    
})