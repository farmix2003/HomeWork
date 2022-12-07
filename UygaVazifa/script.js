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

const lastSerie = prompt("Ohirgi korgan serialingiz?"),
 yourMark = prompt("Necha baho berasiz?"),
 lastSeries = prompt("Ohirgi korgan serialingiz?"),
 yourMarks = prompt("Necha baho berasiz?");
seriesDB.series.lastSerie = yourMark;
seriesDB.series.lastSeries = yourMarks;

