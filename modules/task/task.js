/*Declare Variables*/
const ai_Summary=document.querySelector(".summary_Button")
const active_Completed_Session= document.querySelector(".active_Completed_Session")
const task_Window= document.querySelector(".task_Window")
const ai_Section_container= document.querySelector(".ai_Section_container")
const task_Button = document.querySelector(".task_Button")
const add_Task_Button= document.querySelector(".add_Task_Button")
console.log(add_Task_Button)
const  task_Window_Modal= document.querySelector(".task_Window_Modal")
const  history_Button = document.querySelector(".history_Button ")


let ai_summary_Display=()=>{
        ai_Section_container.style.display='flex'
        active_Completed_Session.innerHTML=''
        task_Window.style.display='none'
   ai_Section_container.innerHTML= `
                        <section class="ai_Session">
                    <section class="ai_Powered_Summary">
                        <div class="powered_Summary">
                            <h4 class="aI_Powered_Task">AI Powered Task Summary</h4>
                            <p class="get_Insight_Paragraph">Get insights and recommendations for your tasks</p>
                        </div>
                    
                        <button class="generate_New_Button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" stroke="#fff">
                                <g fill="none">
                                    <path fill="#000" fill-opacity="0.16"
                                        d="m12 2l2.4 7.619l7.6-.005l-6.114 4.181l2.29 7.253L12 16.624l-6.181 4.424l2.29-7.253L2 9.615l7.595.004z" />
                                    <path stroke="#fff" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5"
                                        d="m12 2l2.4 7.619l7.6-.005l-6.114 4.181l2.29 7.253L12 16.624l-6.181 4.424l2.29-7.253L2 9.615l7.595.004z" />
                                </g>
                            </svg>
                            Generate New
                        </button>
                    
                    </section>
                    
                    <div class="lastest_AI_Summary">
                        <button class="latest_Summary_Button task_Button ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256">
                                <path fill="#000"
                                    d="M228.81 114.89L164.5 91.5l-23.39-64.31a13.95 13.95 0 0 0-26.22 0L91.5 91.5l-64.31 23.39a13.95 13.95 0 0 0 0 26.22L91.5 164.5l23.39 64.31a13.95 13.95 0 0 0 26.22 0l23.39-64.31l64.31-23.39a13.95 13.95 0 0 0 0-26.22m-4.1 15l-66.94 24.34a6 6 0 0 0-3.59 3.59l-24.34 66.94a2 2 0 0 1-3.68 0l-24.34-66.94a6 6 0 0 0-3.59-3.59l-66.94-24.39a2 2 0 0 1 0-3.68l66.94-24.34a6 6 0 0 0 3.59-3.59l24.34-66.94a2 2 0 0 1 3.68 0l24.34 66.94a6 6 0 0 0 3.59 3.59l66.94 24.34a2 2 0 0 1 0 3.68Z" />
                            </svg>
                            Lastest Task
                        </button>
                    
                        <button class="history_Button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                                <path fill="#000"
                                    d="M12.75 7a.75.75 0 0 0-1.5 0v5a.75.75 0 0 0 .352.636l3 1.875a.75.75 0 1 0 .796-1.272l-2.648-1.655z" />
                                <path fill="#000" fill-rule="evenodd"
                                    d="M12 3.25a8.75 8.75 0 1 0 0 17.5a8.75 8.75 0 0 0 0-17.5M4.75 12a7.25 7.25 0 1 1 14.5 0a7.25 7.25 0 0 1-14.5 0"
                                    clip-rule="evenodd" />
                            </svg>
                            History (0)
                        </button>
                    
                    </div>
                    
                    <div class="task_Window">
                        <div class="task_Window_Content">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                                <path fill="#000" d="M22 21H2V3h2v16h2v-9h4v9h2V6h4v13h2v-5h4z"></path>
                            </svg>
                    
                            <p class="task_Window_Text">No summary generated yet</p>
                            <p class="task_Window_Text_Plus">Click "Generate New" to get AI-powered insights</p>
                    
                        </div>
                    </div>
               </section> `

            ai_Section_container.appendChild( ai_Summary.innerHTML)
}

/*click the ai_summary_Button*/
ai_Summary.addEventListener("click", ai_summary_Display)


function task_Display(){
    ai_Section_container.style.display='none'
    active_Completed_Session.innerHTML=`
                    <div class="active_Completed_Session_Status">
                        <div class="active_Details">
                            <p class="active_Task_Count">0</p>
                            <p class="active_Task_Status">Active tasks</p>
                        </div>
                        
                        <div class="completed_details">
                            <p class="completed_Task_Count">0</p>
                            <p class="completed_Task_Status">Completed</p>
                        </div>
                    </div>

                    <button class="add_Task_Button"> Add Task</button>
                    
    `
    task_Window.style.display='flex'
}

/*click the My task_Display_Button*/
task_Button.addEventListener("click", task_Display)


function add_Task(){
    task_Window_Modal.style.display='flex'
   

}

add_Task_Button.addEventListener("click", add_Task)

function history_Display(){
      
}
history_Button.addEventListener("click", history_Display )