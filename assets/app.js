window.onload = function(){

// --------- defining the characters/fighters
var aang = {name:"Aang", alignment: "hero", pic: "https://i.insider.com/5ebdbc8c3ad8612a1c7aa143?width=856&format=jpeg"};
var sokka = {name:"Sokka", alignment:"hero", pic:"https://vignette.wikia.nocookie.net/avatar/images/e/e6/Sokka_with_war_paint.png/revision/latest/scale-to-width-down/340?cb=20130822162323"};
var katara  = {name:"Katara", alignment: "hero", pic:"https://static1.srcdn.com/wordpress/wp-content/uploads/2020/05/Katara-Avatar-Featured.jpg"};
var toph = {name:"Toph", alignment:"hero", pic: "https://pixl.varagesale.com/http://s3.amazonaws.com/hopshop-image-store-production/169296145/93e1a525a887a7bee1558d4b2d18a0bc.png?_ver=large_uploader_thumbnail&w=640&h=640&fit=crop&s=83667a120d7366583e0f8a61f21b55f6"};
var ozai = {name:"Ozai", alignment:"villian", pic:"https://vignette.wikia.nocookie.net/avatar/images/d/d9/Ozai_angry.png/revision/latest/scale-to-width-down/340?cb=20120724205440"};
var azula = {name:"Azula", alignment: "villian", pic:"https://vignette.wikia.nocookie.net/avatar/images/1/12/Azula.png/revision/latest/top-crop/width/720/height/900?cb=20140905084941"};
var tiLee = {name:"Ti Lee", alignment:"villian", pic:"https://i.ytimg.com/vi/soGepprLqbc/maxresdefault.jpg"};
var mai = {name:"Mai", alignment:"villian", pic:"https://vignette.wikia.nocookie.net/p__/images/0/0d/Mai_%28AVATAR%29.png/revision/latest?cb=20140722120237&path-prefix=protagonist"};

// ----- looping through each fighter and showing on DOM
var fighters = [aang, sokka, katara, toph, ozai, azula, tiLee, mai]
var fighter = "";
var numVillians = 0;
var numHeros = 0;

fighters.forEach((element) => {
    fighter += "<img class='fighter' src="+element.pic+" alt='"+element.name+"' height='200' width='200' data="+element.alignment+">"

    $("#gameArea").html(fighter)

    if (element.alignment === "hero"){
        numHeros +=1;
    }
    else {
        numVillians +=1;
    };
}); 


var heroCounter = 0;
var villianCounter = 0;


// ----------- able to click fighter
$(".fighter").click(function(){
    var alignment = this.getAttribute("data")
    console.log("le numhero", numVillians)

    if (alignment === "hero"){
        console.log("yay hero!!")
        heroCounter ++;
        $("#heroCount").html("Heros:" +" "+  heroCounter +"/" + numHeros)
    }
    else{
        console.log("flip... its a villian")
        villianCounter ++;
        $("#villianCount").html("Villians:" +" "+  villianCounter +"/"+ numVillians)
    }
    
})


}