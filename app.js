/*console.log("Checking");
//alert("hi there");
var name =prompt("give me some sunshine");
alert(`This is my name ${name}`);*/
/*translateBtn.style.color='red';  */ 


/*
textarea tag => document.querySelector("textarea") ;
buttons with id =>querySelector("#btn-translate")
element with class btn-primary=> querySelector(".btn-primary");
input element with attribute name='translator' =>
querySelector("input[name='translator']");
*/ 





/* How do we interact----- addEventListener("click",callback)*/

var translateBtn =document.querySelector("#btn-translate") ;
var textInput=document.querySelector("#text-input");
var outputDiv=document.querySelector("#output");
var resetBtn=document.querySelector("#reset");
/*For Reset button-----------------*/
function resetHandler(){
    outputDiv.innerHTML='' ;
    textInput.value='';
}
resetBtn.addEventListener("click",resetHandler);




var serverURL="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";
function translationURL(text){
    return serverURL+"?"+"text="+text ;
}


/*For traslate button--------------*/
function clickHandler(){
 var input=textInput.value ;
 fetch(translationURL(input)) 
 .then(response=> response.json())
 .then(json=>console.log(json.contents.translated))
}
translateBtn.addEventListener("click",clickHandler);
