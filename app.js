// DOM document ->html file deerh buh code
/*console.log(document);
var h1 =document.getElementsByTagName('h1')
console.log(h1)
var h1 = document.getElementsByTagName('h1')[0];
console.log(h1);
h1.innerText = "mr walt egg";
h1.style.color="green"
h12.style.color="red"*/
var inputAge = document.getElementsByTagName('input')[0];
console.log(inputAge);
result = document.getElementsByTagName('p')[0];
console.log(result);
var jil=2023, jil2;
function convert(){
	if(inputAge.value>110){
	result.innerText="error404";
	result.style.color="red";
	}else if(inputAge.value<0){
		result.innerText="no negative numbers";
	result.style.color="red";
	}else if(inputAge.value==""){
		alert("no numbers.Please fill the number error")
	}else{
	jil2 = jil - inputAge.value;
	result.innerText="tursun on : " +jil2;
	result.style.color="green"
	}
}