console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("Form submission successful!")
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

let image = document.querySelector('img');

function compliment(){
	alert("Nice mouse bro")
}

image.addEventListener('mouseover', compliment)