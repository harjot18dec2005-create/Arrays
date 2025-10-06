let students=[];
let studentName = document.getElementById("studentName");
let submit = document.getElementById("submit");
let studentList = document.getElementById("studentList");

submit.addEventListener("click", function(e){
  e.preventDefault();

  if (studentName.value === ""){
    alert("please enter Name");
  } 
  else{
    students.push(studentName.value);
    studentList.innerHTML = "";
    students.forEach(function(name){ 
      studentList.innerHTML +="<li>"+name+"</li>";
    }); 
  }
});