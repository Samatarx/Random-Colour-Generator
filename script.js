const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const background = document.body.style
const textColor = document.querySelector(".hexcode").style
const button = document.querySelector(".btn")
const text = document.querySelector("span")
const letters = document.querySelector("letter")

button.addEventListener ('click', function(){
    let hexcol= "#";
for (var i = 0; i < 6; i++) {
  hexcol += hex[getRandom()];
}

background.backgroundColor = hexcol;
textColor.color = hexcol;
text.innerHTML = hexcol;

document.querySelector("textarea").innerHTML = `background-color: ${hexcol};`

})


function getRandom() {
  return Math.floor(Math.random() * hex.length);
}

//Button copies the textarea into the clipboard
const copytextarea = document.querySelector(".copybtn");

copytextarea.addEventListener("click", function () {
  var copyText = document.getElementById("copy");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
  alert("CSS Properties have been copied!");
});