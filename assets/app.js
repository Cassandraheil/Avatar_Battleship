window.onload = function(){
var aang = {name:"Aang", alignment: "hero", pic: "https://i.insider.com/5ebdbc8c3ad8612a1c7aa143?width=856&format=jpeg"};
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
    $("#gameArea").append("<h3 class='fighter'>",element.name,"</h3>")
    $("#gameArea").append("<img src="+element.pic+" alt='charater in Avatar' height='200' width='200'>")
}); 



}

$(".fighter").click(function(){
    console.log("this was clicked")
})