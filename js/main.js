document.getElementById('login').addEventListener('click',function(){
    let userEmail=document.getElementById('email');
    let email=userEmail.value;
    let userPassword=document.getElementById('password');
    let password=userPassword.value;
    if(email=='prashanta0234@gmail.com' && password=='samantajaman')
    {
        window.location.href="bank.html";
    }
    else{
       alert('Your email and password is worng please input correct!');
    }
})