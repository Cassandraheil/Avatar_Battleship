window.onload = function(){
var aang = {name:"Aang", alignment: "hero", pic: "n/a"};
var sokka = {name:"Sokka", alignment:"hero"};
var katara  = {name:"Katara", alignment: "hero"};
var toph = {name:"Toph", alignment:"hero", pic: "n/a"};
var ozai = {name:"Ozai", alignment:"villian"};
var azula = {name:"Azula", alignment: "villian"};
var tiLee = {name:"Ti Lee", alignment:"villian"};
var mai = {name:"Mai", alignment:"villian"};


var fighters = [aang, sokka, katara, toph, ozai, azula, tiLee, mai]

fighters.forEach((element) => {
    console.log(element),
    $("#gameArea").append("<div class='fighter'>",element.name,"</div>")
});



}