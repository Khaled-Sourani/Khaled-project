let registerBtn = document.getElementById('register');
let container = document.getElementById('container');
let loginBtn = document.getElementById('login');
let pas = document.getElementById('pas');
let ema = document.getElementById('ema');
let nam = document.getElementById('nam');
let sip = document.getElementById('sip');
let sin = document.getElementById('sin');
let ema1 = document.getElementById('ema1');
let pas1 = document.getElementById('pas1');


registerBtn.addEventListener('click',()=>{
    container.classList.add('active');
}
);
loginBtn.addEventListener('click',()=>{
    container.classList.remove('active');
}
);



let form = document.getElementById('form');
let firstname_input = document.getElementById('nam');
let email_input = document.getElementById('ema');
let password_input = document.getElementById('pas');

form.addEventListener('submit',(e) => {
    //e.preventDefault()//
    let errors = []
    if(firstname_input){
        errors = getSignupFormErrors(firstname_input.value, email_input.value,password_input.value)
    }
    else{
        errors = getLoginFormErrors(email_input.value,password_input.value)
    }

    if(errors.length > 0){
        e.preventDefault()
    }
})

function getSignupFormErrors(firstname,email,password){
    let errors = [] 

    if(firstname === '' || firstname == null){
        errors.push('Firstname is required')
        firstname_input.parentElement.classList.add('incorrect')
    }
    if(email === '' || email == null){
        errors.push('Email is required')
        email_input.parentElement.classList.add('incorrect')
    }
    if(password === '' || password == null){
        errors.push('Password is required')
        password_input.parentElement.classList.add('incorrect')
    }

    return errors;
}









