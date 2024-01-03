// your code here

// let buttonEle=dcoument.getElementById("")

function formSubmit() {
	let nameInput=document.getElementById("name");
let name=nameInput.value;
let yearInput=document.getElementById("year");
let year=yearInput.value;

let displayUrl=document.getElementById("url");
let urlText=displayUrl.textContent;
	urlText=displayUrl+`${name} & ${year}`;

	
	
	
}
