// ==UserScript==
// @name Easy Explain XKCD
// @namespace http://github.com/neptune12100
// @description Add an "Explain XKCD" button to xkcd.com comics.
// @include /^https?://(www\.)?xkcd\.com/.*/
// ==/UserScript==

var re = new RegExp("Permanent link to this comic: https://xkcd.com/(.+)/<br>");
var container = document.getElementById("middleContainer");
var match = re.exec(container.innerHTML);
if (match === null) return;
var explainURL = "https://www.explainxkcd.com/wiki/index.php/" + match[1];
var link = document.createElement("DIV");
link.innerHTML = '<a href="' + explainURL + '">Explain XKCD</a>';
container.insertBefore(link, document.getElementsByClassName("comicNav")[0]);