let colorPicker = document.getElementById("colorPicker");
let mydiv=document.getElementById("mydiv");

    	colorPicker.addEventListener("change", function(){
		mydiv.style.backgroundColor=colorPicker.value;
}); 