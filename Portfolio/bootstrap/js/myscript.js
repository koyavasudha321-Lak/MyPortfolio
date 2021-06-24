/* login*/
function myFun(){
    var x = document.getElementById("myInput");
    var y = document.getElementById("hide01");
    
    var z = document.getElementById("hide02");

    if(x.type === 'password'){
        x.type = "text";
        y.style.display = "block";
        z.style.display = "none";
    }
    else{
        x.type = "password";
        y.style.display = "none";
        z.style.display = "block";
    }
}
/* register */
function myFun1(){
    var x = document.getElementById("myInput1");
    var y = document.getElementById("hide11");
    
    var z = document.getElementById("hide12");

    if(x.type === 'password'){
        x.type = "text";
        y.style.display = "block";
        z.style.display = "none";
    }
    else{
        x.type = "password";
        y.style.display = "none";
        z.style.display = "block";
    }
}

function myFun2(){
    var x = document.getElementById("myInput2");
    var y = document.getElementById("hide21");
    
    var z = document.getElementById("hide22");

    if(x.type === 'password'){
        x.type = "text";
        y.style.display = "block";
        z.style.display = "none";
    }
    else{
        x.type = "password";
        y.style.display = "none";
        z.style.display = "block";
    }
}

/* emai validation */
function email_validate(){
    var pat = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    var email = $('#email').val();

    if(email !== ''){
        if(pat.test(email)){
            $('#email').css('border','3px solid green');
            $('#success').css('display','block');
            $('#error').css('display','none');
            $('#warning').css('display','none');
        }else{
            $('#email').css('border','2px solid red');
            $('#success').css('display','none');
            $('#error').css('display','block');
            $('#warning').css('display','none');
        }
    }else{
        $('#email').css('border','2px solid orange');
        $('#success').css('display','none');
        $('#error').css('display','none');
        $('#warning').css('display','block');


    }
}


