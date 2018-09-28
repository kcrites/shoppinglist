
var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.querySelectorAll("li");

// Provides the length of the text input box value
function inputLen(){
	return input.value.length;
}

//Creates a new LI item with the value from the text input and the associated delete button
// Adds the event listner that turns the LI to complete by clicking on the LI text
function createListElement() {
	var liCreate = document.createElement("li");
	liCreate.appendChild(document.createTextNode(input.value));
	ul.appendChild(liCreate);
	liCreate.addEventListener("click", toggleListAfterClick);
	input.value = "";
	addDeleteButton(liCreate);

}
//empty function - delete?
function deleteListElements(){
	var liDelete;
}

// Add the LI item after clicking the button
function addListAfterClick(){
	if (inputLen() > 0){
		createListElement();
	}
}

//Adds the LI item after pressing Enter
function addListAfterKeypress(event){
	if (inputLen() > 0 && event.keyCode === 13){
		createListElement();
	}
}

//Toggles on and off the class "done" from the css file
function toggleListAfterClick(item){
	
	if (this.className !== "done"){ this.className = "done";}
		else {
			this.className = "";
		}
}

// Deletes the LI after clicking on the delete button
function deleteListItemAfterClick(item){
	//console.log("functionis hit" + this.parentNode);
	//this.parentNode.removeChild(this);
	this.parentNode.parentNode.removeChild(this.parentNode);
	
}

//Add the delete button to the existing LI items
// along with the Delete button event listener
function addDeleteButton(item){
	var btn = document.createElement("button");
	var t = document.createTextNode("Delete");
	btn.appendChild(t);
	item.appendChild(btn);
	btn.addEventListener("click", deleteListItemAfterClick);
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

// Adds event listner to toggle on and off "done"
// creates delete button associated event listener for each LI
li.forEach(function(item){
	item.addEventListener("click", toggleListAfterClick);
	addDeleteButton(item);
});
