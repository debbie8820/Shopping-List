// Event video 131.
// Keyboard event and mouse events are the most common


//var button = document.getElementsByTagName("button")[0];
//The getElementsByTagName() method returns a collection of all elements in the document with the specified tag name, as an HTMLCollection object.
//getElementsByTagName找到的會是陣列 需要再加index取出需要的元素


//button.addEventListener("mouseleave",function(){
//	console.log("click!!!");
//});

var button = document.getElementById("enter");
var input = document.getElementById("userinput");
// var ul = document.getElementsByTagName("ul")[0];
var ul = document.querySelector("ul");
// 此行和上一行可互換 var ul = document.querySelector("ul");




function inputLength(){
	return input.value.length;
}


// create list element and delete button
function createListElement(){
	var li = document.createElement("li");
 	li.appendChild(document.createTextNode(input.value + " "));
 	var delbtn = document.createElement("button");
	var text = document.createTextNode("delete");
	delbtn.appendChild(text);
	li.appendChild(delbtn);
 	ul.appendChild(li);
 	// can't replace it with ul.appendChild(li.appendChild(delbtn));
 	input.value = "";	
}


function addListAfterClick(){
	if (inputLength() > 0){
 	createListElement();
 	}
}

function addListAfterKeypress(event){
	if (inputLength() > 0 && event.which === 13){
	createListElement();
	}
}


// GET LINE THROUGH
// DELETE ELEMENTS
ul.onclick = function(event){
	var target = event.target;
	if (target.tagName === "LI"){
		target.classList.toggle("done");
	} else if(target.tagName === "BUTTON"){
		ul.removeChild(target.parentElement);
	}

}



button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);


