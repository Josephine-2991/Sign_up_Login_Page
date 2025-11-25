// const componentElements=document.querySelectorAll('[data-import]')
// console.log(componentElements)
// for(let element of componentElements){
//     const data_Import =element.getAttribute('data-import')
//     console.log(data_Import)
//     fetch(data_Import)
//     .then((response)=>{
//         return response.text
//     })
//     .then((component)=>{
//         element.innerHTML=component
//     })
//     .catch(()=>{
//         element.innerHTML="<h4>Component not found<h4>"
//     })
// }

const componentElements = document.querySelectorAll("[data-import]");
 
const renderComponents = (elements) => {
  elements.forEach((element) => {
    // ✅ Prevent loading same component twice
    if (element.dataset.loaded) return;
    element.dataset.loaded = "true";

    const dataImport = element.getAttribute("data-import");

    fetch(dataImport)
      .then((res) => {
        if (!res.ok) throw "Not found";
        return res.text();
      })
      .then((component) => {
        element.innerHTML = component;
        loadComponentScripts(element);

        // ✅ ONLY load new nested components, NOT EVERYTHING AGAIN
        const newComponents = element.querySelectorAll("[data-import]");
        if (newComponents.length > 0) {
          renderComponents(newComponents);
        }
      })
      .catch(() => {
        element.innerHTML = `<h4>Component not found</h4>`;
      });
  });
};

 
 
function loadComponentScripts(element){
  const scripts = element.querySelectorAll("script");
 
  for (let script of scripts) {
      const newScript = document.createElement("script");
 
      if (script.src) newScript.src = script.src;
      if (script.textContent) newScript.textContent = script.textContent;
 
      script.remove();
      document.body.appendChild(newScript);
  }
}
renderComponents(componentElements);
 
    const links = document.querySelectorAll(".sidebar li");
    const pageContainer = document.getElementById("pageContainer");
 
  links.forEach(link => {
    link.addEventListener("click", () => {
      const page = link.getAttribute("data-page");
      pageContainer.innerHTML = `<div data-import="${page}"></div>`;
      renderComponents(document.querySelectorAll("[data-import]"));
    });
  });
 
 
// const fibonacci = (num)=>{
//     if (num < 0){
//         return(`${num} must be more than 0`)
//     }
//     if(num == 0 || num ==1){
//         return(num)
//     }
//     return fibonacci(num - 1)+ fibonacci(-2)
// }
// console.log()
 












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