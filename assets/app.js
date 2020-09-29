window.onload = function(){
var aang = {name:"Aang", alignment: "hero", pic: "https://i.insider.com/5ebdbc8c3ad8612a1c7aa143?width=856&format=jpeg"};
var sokka = {name:"Sokka", alignment:"hero", pic:"https://vignette.wikia.nocookie.net/avatar/images/e/e6/Sokka_with_war_paint.png/revision/latest/scale-to-width-down/340?cb=20130822162323"};
var katara  = {name:"Katara", alignment: "hero", pic:"https://static1.srcdn.com/wordpress/wp-content/uploads/2020/05/Katara-Avatar-Featured.jpg"};
var toph = {name:"Toph", alignment:"hero", pic: "https://pixl.varagesale.com/http://s3.amazonaws.com/hopshop-image-store-production/169296145/93e1a525a887a7bee1558d4b2d18a0bc.png?_ver=large_uploader_thumbnail&w=640&h=640&fit=crop&s=83667a120d7366583e0f8a61f21b55f6"};
var ozai = {name:"Ozai", alignment:"villian", pic:"https://vignette.wikia.nocookie.net/avatar/images/d/d9/Ozai_angry.png/revision/latest/scale-to-width-down/340?cb=20120724205440"};
var azula = {name:"Azula", alignment: "villian", pic:"https://vignette.wikia.nocookie.net/avatar/images/1/12/Azula.png/revision/latest/top-crop/width/720/height/900?cb=20140905084941"};
var tiLee = {name:"Ti Lee", alignment:"villian", pic:"https://i.ytimg.com/vi/soGepprLqbc/maxresdefault.jpg"};
var mai = {name:"Mai", alignment:"villian", pic:"https://vignette.wikia.nocookie.net/p__/images/0/0d/Mai_%28AVATAR%29.png/revision/latest?cb=20140722120237&path-prefix=protagonist"};


var fighters = [aang, sokka, katara, toph, ozai, azula, tiLee, mai]

fighters.forEach((element) => {
    console.log(element),
    $("#gameArea").append("<h3 class='fighter'>",element.name,"</h3>")
    $("#gameArea").append("<img class='fighter' src="+element.pic+" alt='charater in Avatar' height='200' width='200'>")
}); 



}

$(".fighter").click(function(){
    console.log("this was clicked")
})