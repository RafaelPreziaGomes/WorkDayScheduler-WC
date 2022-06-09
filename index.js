//  add an array to store user inputs

var textArray = [];

var counterValues = [];
// set a number counter = 0

var counter = "value";

//  for every input list

function addingElement() {
  for (var o = 0; o < counterValues.length; o++) {
    //  remove the input element

    var text = document.querySelectorAll("input")[o].value;

    // add an event listener that captures the value of what was tiped in the input box

    var paragraph = document.createElement("li");

    textArray.push(paragraph);

    paragraph.textContent = text;

    document.querySelectorAll(".col-8")[o].appendChild(textArray.pop(o));

    document.querySelectorAll(".col-8")[o].removeChild("li");
  }
}

for (var i = 0; i < document.querySelectorAll("input").length; i++) {
  //   add an event listener to each save button

  document
    .querySelectorAll(".btn-primary")
    [i].addEventListener("click", function () {
      counterValues.push(counter);
      console.log(i);
      console.log(o);

      //  push value to counterValue
      if (counterValues.length == 0) {
        addingElement();
      } else if (counterValues.length == 1) {
        addingElement();
      } else if (counterValues.length == 2) {
        addingElement();
      } else if (counterValues.length == 3) {
        addingElement();
      } else if (counterValues.length == 4) {
        addingElement();
      } else if (counterValues.length == 5) {
        addingElement();
      } else if (counterValues.length == 6) {
        addingElement();
      } else if (counterValues.length == 7) {
        addingElement();
      } else if (counterValues.length == 8) {
        addingElement();
      }
      //  for each counterValue object
    });

  //  for each click in the save button
}
