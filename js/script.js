/* global $ */

$(document).ready(function() {
    $("button").click(function() {
        var name = $("#name").val();
        console.log(name);
        console.log($("question4").prop('checked'));

var SES;        

        
        // var imgSrc = "https://media.giphy.com/media/22zgHX8aop488/giphy.gif";
        // var q1Result = $("#question1").val();
        // var q2Result = $("#question2").val();
        // var q3Result = $("#question3").val();


// debugger
//question1
function question1(){
    var name = $("#question1").val();
}


//question2
function question2(){
    var q2 = $("#question2").val();
    if(q2.toLowerCase().trim() === "alcohol"){
        SES = 99999;
    }else{
        SES +=1;
    }
}

//question3
function question3(){
    var q3 = $("#question3").val();
    if(q3.toLowerCase().trim() === "green light"){
        SES = 99999;
    }else{
        SES +=1;
    }
}

//question4
function queston4(){
    var q4 = $("input[name='c']:checked").val();      
        if(q4 === "yes"){
            SES -=1;
        }else{
            SES +=1;   
        }
    }
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
    });

});
