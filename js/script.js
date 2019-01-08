/* global $ */


//$(document).ready(function(){
    var options = [`Some random guy who hates alcohol`,`Jay Gatsby`,`nick carraway`,
    `Daisy Buchanan`,`Tom Buchanan`,`Jordan Baker`,`dog`,`Myrtle Wilson`,
    `George Wilson`];

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
        console.log(options);
        
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
        
        removes("Jay Gatsby");
        removes("nick carraway");
        removes("Daisy Buchanan");
        removes("Tom Buchanan");
        removes("Jordan Baker");
        removes("Myrtle Wilson");
        removes("George Wilson");
        
    }else if(q2.trim() !== ""){
        q2A = false;
        
        removes("Some random guy who hates alcohol");
        
    }else{
        //literally nothing
    }
}

//question3
function question3(){
    var q3 = $("#question3").val();
    if(q3.toLowerCase().trim() === "green light"){
        q3A = true;
        
        removes("Some random guy who hates alcohol");
        removes("dog");
        removes("nick carraway");
        removes("Daisy Buchanan");
        removes("Tom Buchanan");
        removes("Jordan Baker");
        removes("Myrtle Wilson");
        removes("George Wilson");
        
    }else if(q3.toLowerCase().trim() !== ""){
        q3A = false;
        
        //gatsby remove?
        
    }else{
        //literally nothing
    }
}

//question4
function question4(){
    var q4 = $("input[name='c']:checked").val();      
        if(q4 === "yes"){
            q4A = true;
            
        removes("Some random guy who hates alcohol");
        removes("Jay Gatsby");
        removes("nick carraway");
        removes("Daisy Buchanan");
        removes("Tom Buchanan");
        removes("Jordan Baker");

        }else if(q4 === "no"){
            q4A = false;
            
        removes("Myrtle Wilson");
        removes("George Wilson");
            
        }else{
        //nothing
        }
    }
        
//question 5
function question5(){
    var q5 = $("input[name = 'b']:checked").val();
        if(q5 ==="yes" || q5 ==="someTimes"){
            q5A = true;
            
        removes("George Wilson");
        

        }else if(q5 ==="no"){
            q5A = false;
            
        removes("Myrtle Wilson");
        removes("nick carraway");
        removes("Daisy Buchanan");
        removes("Tom Buchanan");
        removes("Jordan Baker");

        }else{/*nothing at all*/}
    }
    
// question 6 bad driver
function question6(){
    var q6 = $("input[name = 'a']:checked").val();
        if(q6 ==="yes"){
            q6A = true;
            
        removes("Myrtle Wilson");
        removes("nick carraway");
        removes("Daisy Buchanan");
        removes("Tom Buchanan");
        removes("Jay Gatsby");

        }else if(q6 ==="no"){
            q6A = false;
            
        removes("Daisy Buchanan");
        removes("Jordan Baker");
            
        }else{/*nothing at all*/} 
}
//  question 7 range
function question7(){
    var q7 = $("input[name = 'd']:checked").val();
        if(q7 ==="yes"){
            q7A = true;
            
        removes("Jay Gatsby");
        removes("nick carraway");
        removes("Daisy Buchanan");
        removes("Tom Buchanan");
        removes("Jordan Baker");
        removes("Myrtle Wilson");
        removes("George Wilson");
        removes("Some random guy who hates alcohol");
    
            
            console.log("you're a dog.");
        }else if(q7 ==="no"){
            q7A = false;
            
            removes("dog")
            
        }else{/*nothing at all*/} 
}
    
 
//the function that give you the result yay
function removes(Cname){
    if(options.indexOf(Cname) !== -1){
        options.splice(options.indexOf(Cname), 1);
        console.log("removed "+Cname);
    }
    
    
    
    
    // for(var i =0;i<options.length;i++){
    //     if(options.indexOf(i) === Cname){
    //         console.log(i);
    //         return i;
    //    }
    //}
}





//});

        
        


