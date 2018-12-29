/* global $ */


$(document).ready(function(){
    var result = ["GW","MW","JB","NC","GG","TB","DB"];
    var q2A;
    var q3A;
    var q4A;
    var q5A;
    var q6A;
    var q7A;
    
    $("button").click(function() {
        var name = $("#name").val();
        question1();
        question2();
        question3();
        question4();
        question5();
        question7();
        console.log(name+q2A+q3A+q4A+q5A+q6A+q7A);
        
    });
        
        
        // console.log(name);
        // console.log($("question4").prop('checked'));


        
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
        q2A = true;
    }else if(q2.trim() !== ""){
        q2A = false;
    }else{
        //literally nothing
    }
}

//question3
function question3(){
    var q3 = $("#question3").val();
    if(q3.toLowerCase().trim() === "green light"){
        q3A = true;
        result = "gatsby";
    }else if(q3.toLowerCase().trim() !== ""){
        q3A = false;
    }else{
        //literally nothing
    }
}

//question4
function question4(){
    var q4 = $("input[name='c']:checked").val();      
        if(q4 === "yes"){
            q4A = true;
        }else if(q4 === "no"){
            q4A = false;   
        }else{
        //nothing
        }
    }
        
//question 5
function question5(){
    var q5 = $("input[name = 'b']").val();
        if(q5 ==="yes" || q5 ==="someTimes"){
            q5A = true;
        }else if(q5 ==="no"){
            q5A = false;
        }else{/*nothing at all*/}
    }
    
// question 6 bad driver
function question6(){
    var q6 = $("input[name = 'a']").val();
        if(q6 ==="yes"){
            q6A = true;
        }else if(q6 ==="no"){
            q6A = false;
        }else{/*nothing at all*/} 
}
//  question 7 range
function question7(){
    var q7 = $("#q7").val();
    //console.log(q7);
    //SES = SES += parseInt(q7);
 
    }
});

        
        


