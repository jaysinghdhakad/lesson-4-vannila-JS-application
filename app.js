var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#text-input");
var outputDiv = document.querySelector("#output");

var url="https://api.funtranslations.com/translate/minion.json";

function newUrl(text)
{
    return url+"?"+ "text=" + text
}
function errorHandler(error){
    console.log("error has occured",error);
    alert("some thing wrong has occured");
}

function clickHandler(){
    var text=txtInput.value
fetch(newUrl(text))
.then (response => response.json())
.then (json=> {
    var translatedText = json.contents.translated
    outputDiv.innerText= translatedText
})
.catch(errorHandler)
}
btnTranslate.addEventListener("click", clickHandler);