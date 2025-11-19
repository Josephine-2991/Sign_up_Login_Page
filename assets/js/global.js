/* Variables*/
console.log('time')
const login_Display=document.querySelector("#signup_Text")
const login_Button = document.querySelector("#login_Button")
// let login_Button=document.getElementById("#login_Button")
// const signup_Button=document.getElementsByClassName("signup_Button")
const signup_Button = document.querySelector("#signup_Button")
console.log(login_Button)
console.log(signup_Button)
console.log(login_Display)

   
   
// Function
function login_Button_Isclicked() {
    
    console.log(login_Display.innerHTML)
 login_Display.innerHTML = `<h4 class="signup_Text_Heading">Welcome Back</h4>
                        <p class="signup_Text_Create">Create an account to boost your creativity</p>`
console.log(login_Display.innerHTML)
   
}

// Test the function in console
console.log(login_Button_Isclicked());

// Add click event
login_Button.addEventListener("click", login_Button_Isclicked);


// function  login_Button_Isclicked(){
//     let isClick=true

//     if(isClick){   
//    login_Button.innerHTML="<p>This is a fine girl</p>"
//    return login_Button.innerHTML

//     }
    
//}   

// console.log(login_Button_Isclicked())
//  login_Button.addEventListener("click", login_Button_Isclicked)