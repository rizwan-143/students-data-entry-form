
 let allUsers = [];
 let count = 0;
let myForm = document.getElementById("myForm");
myForm.addEventListener(`submit` , function(e){
 e.preventDefault();
 let obj =  {
     firstName : e.target.firstName.value,
     lastName : e.target.laststName.value,
     email : e.target.email.value,
     number : e.target.number.value,
     gender :[ e.target.male.value,],
     address : e.target.address.value,
     dateOfBirth : e.target.dateOfBirth.value,
     city : e.target.city.value,
    id : count++,   
 };
 allUsers.push(obj);
 console.log(obj);
 console.log(allUsers);

 let studentsData = document.getElementById("studentsData");
 let row = document.createElement("tr");
 row.innerHTML = `
 <td>${obj.id}</td>
 <td>${obj.firstName}</td>
 <td>${obj.lastName}</td>
 <td>${obj.email}</td>
 <td>${obj.number}</td>
 <td>${obj.address}</td>
 <td>${obj.city}</td>
 <td>${obj.gender}</td>
 <td>${obj.dateOfBirth}</td>
 
 `
 row.style.cursor = "pointer";
 studentsData.appendChild(row);
 document.querySelector("#myForm").reset();
});

let inputs = document.querySelectorAll("#myForm input");
inputs.forEach(function(input){
input.addEventListener(`focus` , function(){
    input.style.backgroundColor = "lightgray";
    input.style.border = "1px solid gray";

});
 input.addEventListener(`blur` , function(){
    input.style.backgroundColor = "white";
    input.style.border = "1px solid gray";
 })
})