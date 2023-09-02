
// here we are getting the Clear form then adding a click eventlistner to clear form;
document.getElementById("clear").addEventListener("click",ClearForm);

//here we are getting a form with the with the help of Query selector;
let form = document.querySelector("form");

//here we are reset the form on clicking a clear form;
function ClearForm(){
    form.reset();
}

let Backend_url = "https://dark-jade-gosling-hem.cyclic.app/"

//here we are adding a submit eventlistener to form;
form.addEventListener("submit",submitfun);
async function submitfun(e){
    e.preventDefault();
    console.log("in submit fuction");
    let Email = document.getElementById("Email").value;
    let Full_Name = document.getElementById("Full_Name").value;
    let Age = document.getElementById("Age").value;
    let Education = document.getElementById("Education").value;
    let Institute = document.getElementById("Institute").value;
    let Study = document.getElementById("study").value;
    let Admition = document.getElementById("admition").value;
    let Program = document.getElementById("program").value;
    let Country = document.getElementById("country").value;
    let Goals = document.getElementById("goals").value;
    let Elistening = document.getElementById("Elistening").value;
    let Ereading = document.getElementById("Ereading").value;
    let Espeaking = document.getElementById("Espeaking").value;
    let Ewriting = document.getElementById("Ewriting").value;
    let Fee = document.getElementById("fee").value;
    let GIC = document.getElementById("GIC").value;


    //here we are storing all the data in obj;
    let obj = {Email,Full_Name,Age,Education,Institute,Study,Admition,Program,
    Country,Goals,Elistening,Ereading,Espeaking,Ewriting,Fee,GIC};
    console.log(obj);
   
    //here we are sending the data to backend;
    let res = await fetch(`${Backend_url}/data`,{
        method:"POST",
        body : JSON.stringify(obj),
        headers:{
            "Content-Type" : "application/json"
        }
    })
    res = await res.json();
    console.log(res);

    //here we are reset the form after submiting it and sending the to backend;
    form.reset();
}