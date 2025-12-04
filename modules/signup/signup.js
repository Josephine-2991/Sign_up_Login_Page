// /* Variables*/
// console.log('time')
// const login_Display=document.querySelector("#signup_Text")
// const login_Button = document.querySelector("#login_Button")
// // let login_Button=document.getElementById("#login_Button")
// // const signup_Button=document.getElementsByClassName("signup_Button")
// const signup_Button = document.querySelector("#signup_Button")
// console.log(login_Button)
// console.log(signup_Button)
// console.log(login_Display)

   
   
// // Function
// function login_Button_Isclicked() {
    
//     console.log(login_Display.innerHTML)
//  login_Display.innerHTML = `<h4 class="signup_Text_Heading">Welcome Back</h4>
//                         <p class="signup_Text_Create">Create an account to boost your creativity</p>`
// console.log(login_Display.innerHTML)
   
// }

// // Test the function in console
// console.log(login_Button_Isclicked());

// // Add click event
// login_Button.addEventListener("click", login_Button_Isclicked);


// // function  login_Button_Isclicked(){
// //     let isClick=true

// //     if(isClick){   
// //    login_Button.innerHTML="<p>This is a fine girl</p>"
// //    return login_Button.innerHTML

// //     }
    
// //}   

// // console.log(login_Button_Isclicked())
// //  login_Button.addEventListener("click", login_Button_Isclicked)

// Go to Login Page
document.getElementById("goToLogin").addEventListener("click", () => {
    window.location.href = "../login/login.html";
});

// Signup form logic
document.getElementById("signupForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("signupName").value.trim();
    const email = document.getElementById("signupEmail").value.trim();
    const password = document.getElementById("signupPassword").value.trim();

    if (!name || !email || !password) {
        alert("All fields are required!");
        return;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters!");
        return;
    }

    // Check if user exists
    if (localStorage.getItem(email)) {
        alert("User already exists. Please login.");
        return;
    }

    // Save user in localStorage
    const userData = { name, email, password };
    localStorage.setItem(email, JSON.stringify(userData));

    alert("Account created successfully!");
    window.location.href = "../login/login.html";  
});

// Go to Signup Page
document.getElementById("goToSignup").addEventListener("click", () => {
    window.location.href = "../signup/signup.html";
});

// Login Logic
document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value.trim();

    if (!email || !password) {
        alert("Please enter both email and password!");
        return;
    }

    const storedUser = localStorage.getItem(email);

    if (!storedUser) {
        alert("User not found! Please sign up.");
        return;
    }

    const parsedUser = JSON.parse(storedUser);

    if (parsedUser.password !== password) {
        alert("Incorrect password!");
        return;
    }

    // Save active user session
    localStorage.setItem("activeUser", email);

    alert("Login successful!");
    window.location.href = "../../dashboard/dashboard.html";  
});
