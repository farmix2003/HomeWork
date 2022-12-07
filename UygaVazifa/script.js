"use strict";
let numOfSeries = +prompt("Nechta serial kordingiz?","");

let seriesDB = {
 count: numOfSeries,
 series: {},
 actors: {},
 geners: [],
 privat: false,
};
// console.log(seriesDB.count);
if(seriesDB.count <= 5){
console.log("Kam serial koribsiz");
}else if(seriesDB.count >=5 && seriesDB.count <=10){
    console.log("Siz classic tomoshabin ekansiz");
}else if(seriesDB.count >= 15){
    console.log("Siz zvezda ekansz");
}


console.log(seriesDB);
for(let i = 1; i<=2; i++){
    const lastSerie = prompt("Ohirgi korgan serialingiz?"),
    yourMark = prompt("Necha baho berasiz?");
    if(lastSerie != null && yourMark != null && lastSerie != "" && yourMark != ""){
    seriesDB.series[lastSerie] = yourMark;
    console.log("Done");
}else{
  console.log("Error!");
  i--;
}
}
