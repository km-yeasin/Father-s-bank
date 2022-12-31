document.getElementById('login-btn').addEventListener('click', function(){
    const emailField=document.getElementById('email-field');
    const emailValue=emailField.value;
    //Get password
    const passwordField=document.getElementById('pw-field');
    const passwordValue=passwordField.value;
    if(emailValue=='kmyeasin29@gmail.com' && passwordValue=='123456'){
        window.location.href='bank.html'
    }
})