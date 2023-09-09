// alert("running");
function addNewWEfield(){
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add('wefield');
    newNode.classList.add('mt-2');
   
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter Here");

    let weOb = document.getElementById("we");
    let weAddButtonOb = document.getElementById("weAddButton");

    weOb.insertBefore(newNode,weAddButtonOb);
}

function addNewAQfield(){
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add('aqfield');
    newNode.classList.add('mt-2');
   
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter Here");

    let aqOb = document.getElementById("aq");
    let aqAddButtonOb = document.getElementById("aqAddButton");

    aqOb.insertBefore(newNode,aqAddButtonOb);
}

function addNewPROfield(){
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add('profield');
    newNode.classList.add('mt-2');
   
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter Here");

    let projOb = document.getElementById("pro");
    let projAddButtonOb = document.getElementById("proAddButton");

    projOb.insertBefore(newNode,projAddButtonOb);
}

// generate cv

function generateCV() {
    let namefield = document.getElementById("namefield").value;
    let nameT1= document.getElementById("nameT1");
    nameT1.innerHTML = namefield;

    document.getElementById("nameT2").innerHTML = namefield;

// contact
    
    document.getElementById("contactT").innerHTML =document.getElementById("contactfield").value;

// address
 
    document.getElementById("addressT").innerHTML= document.getElementById("addressfield").value;

    // facebook

    document.getElementById("fbT").innerHTML = document.getElementById("fbfield").value;

    //instagram

    document.getElementById("instaT").innerHTML= document.getElementById("instafield").value;

    // linkdin
    document.getElementById("linkT").innerHTML= document.getElementById("linkdfield").value;

    // going to set the objective
    document.getElementById("objectiveT").innerHTML = document.getElementById("objectivefield").value;

    // here we add the work experience

    let wes = document.getElementsByClassName("wefield");

    let str ="";
     
    for(let e of wes){
        str =str +`<li>${e.value}</li>`;

    }
    document.getElementById("weT").innerHTML = str;

    // now we add the academic qualification

    let aqs = document.getElementsByClassName("aqfield");

    let str1 ="";
     
    for(let e of aqs){
        str1 = str1 +`<li>${e.value}</li>`;

    }
    document.getElementById("aqT").innerHTML = str1;


    let projs = document.getElementsByClassName("profield");

    let str2 ="";
     
    for(let e of projs){
        str2 =str2 +`<li>${e.value}</li>`;

    }
    document.getElementById("proT").innerHTML = str2;



// code for setting image
let file=document.getElementById("imgfield").files[0];
let reader=new FileReader();
reader.readAsDataURL(file);


// set the image to tempalte


reader.onloadend = function(){
    document.getElementById("imgTemplate").src = reader.result;
}




    document.getElementById("cv-form").style.display = "none";
    document.getElementById("cv-template").style.display="block";
}


function printCV(){
    window.print();
}