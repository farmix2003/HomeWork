"use strict";
let numOfSeries = +prompt("Nechta serial kordingiz?","");
let seriesDB = {
 count: numOfSeries,
 series: {},
 actors: {},
 geners: [],
 privat: false,
};
console.log(seriesDB.count);

const lastSerie = prompt("Ohirgi korgan serialingiz?");
let yourMark = prompt("Necha baho berasiz?");
