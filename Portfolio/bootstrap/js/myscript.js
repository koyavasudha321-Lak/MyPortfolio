//var passwo ;
/* login*/
function myFun(){
    var x = document.getElementById("myInput");
    //let passwo = document.getElementById("myInput").value;
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
            $('#email').css('border','2px solid green');
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

/*pass strength*/
function passFun(){
    var e, l;
    e = document.getElementById("txt");
    l = document.getElementById("myInput1").value.length;

    if(l == 0){
        e.innerHTML = "";
        document.getElementById("myInput1").style.border="";
    }else if(l < 5){
        e.innerHTML = "Weak Password";
        e.style.color = "tomato";
        document.getElementById("myInput1").style.border="2px solid red";
    }else if(l < 10){
        e.innerHTML = "Normal Password";
        e.style.color = "#b8860b";
        document.getElementById("myInput1").style.border="2px solid orange";
    }else{
        e.innerHTML = "Strong Password";
        e.style.color = "#90ee90";
        document.getElementById("myInput1").style.border="2px solid green";

    }
}

/* confirm password*/
function checkPass(){
    let password = document.getElementById("myInput1").value;
    let cfmPass = document.getElementById("myInput2").value;
   
    console.log(password,cfmPass);
    let message = document.getElementById("txt1");
    if(password.length != 0){
        if(password == cfmPass){
            message.textContent = "passwords matched";
            message.style.backgroundColor = "green";
            $('#hide8').css('display','none');
            $('#hide9').css('display','block');
        }else{
            message.textContent = "passwords should match";
            message.style.backgroundColor = "crimson";
            $('#hide8').css('display','block');
            $('#hide9').css('display','none');
        }
    }
}
/*login form validation*/
function login_form_validate(){
    let ema = document.getElementById('em_er').value;
    let pasw = document.getElementById('myInput').value;
    if(ema ==""){
        alert('Please Enter your Valid Email');
        document.getElementById('em_er').style.borderColor = "red";


    }
    if(pasw == ""){
        alert('Please Enter your Valid password');
        document.getElementById('myInput').style.borderColor = "orange";
    }
   
    
}


/*login*/

function enter_login(){
    var uEmail = document.getElementById('em_er').value;
    let passwo = document.getElementById('myInput').value;
    console.log(uEmail);
    console.log(passwo)
    var hey = (uEmail === "koyavasudha321@gmail.com") && (passwo === "Vasudha@123");
    console.log(hey)
    if(hey){
        
        window.open("file:///C:/Users/91966/OneDrive/Desktop/Portfolio/HTMLS/Port.html");
    }else{
        window.alert('Login Failed');
    }




}





    
