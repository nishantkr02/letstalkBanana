
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

/*var serverURL="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";
*/
var serverURL="https://api.funtranslations.com/translate/minion.json"
function translationURL(text){
    return serverURL+"?"+"text="+text ;
}

function errorHandler(error){
    console.log("Error Occured",error)
}

/*For traslate button--------------*/
function clickHandler(){
 var input=textInput.value ;

 fetch(translationURL(input)) 
 .then(response=> response.json())
 .then(json=>{
    var translatedText=json.contents.translated
     outputDiv.innerText=translatedText;
})
.catch(errorHandler) ;
}
translateBtn.addEventListener("click",clickHandler);
