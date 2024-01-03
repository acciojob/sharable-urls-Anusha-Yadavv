// your code here

// let buttonEle=dcoument.getElementById("")
let buttonEle=document.getElementById("button");

buttonEle.addEventListener("click",()=>{
	let nameInput=document.getElementById("name");
let name=nameInput.value;
let yearInput=document.getElementById("year");
let year=yearInput.value;

let displayUrl=document.getElementById("url");
let urlText=displayUrl.textContent;
	urlText.innerText=displayUrl+`${name} ${year}`;

	
})
	
	
	
	
