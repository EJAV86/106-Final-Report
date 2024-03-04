function SaveTask(){
    console.log("saving..");
    //get values
    const title = $("#inpuTitle").val();
    const description = $("#inpuDescription").val();
    const startDate = $("#inputStartDate").val();
    const budget = $("#inputBudget").val();
    const status = $("#inputStatus").val();
    const color = $("#inputColor").val();
    console.log(title,description,startDate,budget,status,color);

    //build the object
    let task =  new Task(title,description,startDate,budget,status,color);
    console.log(task);



    //save to server

    //display the task
}

function init(){
    console.log("this is a task manager");
    //load data


   // hook events
    $("#btnSave").click(SaveTask);
   //document.getElementByID("btnSave")

}

window.onload = init;

