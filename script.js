const tbody = document.querySelector("tbody");
const form = document.querySelector("form");
function clearrecord(event){
const buttonref = event.target;
const row = buttonref.parentNode.parentNode;
row.remove()
}




function addemployee(employee){
    const tr = document.createElement("tr");
    for(let key in employee) {
        const td = document.createElement("td");
        td.innerText = employee[key];
        tr.appendChild(td);
    }
    const options = document.createElement("td");
    let deletebutton = document.createElement("button");
    deletebutton.innerText = "delete";
    deletebutton.addEventListener("click",clearrecord);
    options.appendChild(deletebutton)
tr.appendChild(options);
tbody.append(tr);
}

function onsubmit(event){
    event.preventDefault();
    let employeedata={
        name: form.name.value,
        companyName: form.companyName.value,
        salary: form.salary.value,
        gender: form.gender.value,
        role: form.role.value,
        email: form.email.value
    }
    addemployee(employeedata);
}

form.addEventListener("submit",onsubmit);