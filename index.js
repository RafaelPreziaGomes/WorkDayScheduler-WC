//  end goal --> save each input of each section as a li bellow the input element when the designated save button is clicked

// breaking down into smaller tasks

// making the save button clickable

//  make a list for each possible index

array0 = [];
array1 = [];
array2 = [];
array3 = [];
array4 = [];
array5 = [];
array6 = [];
array7 = [];
array8 = [];

// set i as 0

// selecting each button
//  adding an event listener to each different button
document.querySelectorAll(".btn")[0].addEventListener("click", () => {
  // select the data in the input element with the same index
  text = document.querySelectorAll("input")[0].value;
  // push text to the designated array
  array0.push(text);

  // create an li
  listItem = document.createElement("li");
  //  set its inner html as the last item of array0
  listItem.innerHTML = array0[array0.length - 1];
  // append the li below the input
  document.querySelectorAll(".col-8")[0].appendChild(listItem);
  // set item in local storage, the key is the counter and the value is the text
  localStorage.setItem("key" + String(i), document.querySelectorAll("li")[i]);
  // get item in local storage
  localStorage.getItem("key" + String(i));
});

// selecting each button
//  adding an event listener to each different button
document.querySelectorAll(".btn")[1].addEventListener("click", () => {
  // select the data in the input element with the same index
  text = document.querySelectorAll("input")[1].value;
  // push text to the designated array
  array1.push(text);
  // create an li
  listItem = document.createElement("li");
  //  set its inner html as the last item of array0
  listItem.innerHTML = array1[array1.length - 1];
  // append the li below the input
  document.querySelectorAll(".col-8")[1].appendChild(listItem);
});

// selecting each button
//  adding an event listener to each different button
document.querySelectorAll(".btn")[2].addEventListener("click", () => {
  // select the data in the input element with the same index
  text = document.querySelectorAll("input")[2].value;
  // push text to the designated array
  array2.push(text);
  // create an li
  listItem = document.createElement("li");
  //  set its inner html as the last item of array0
  listItem.innerHTML = array2[array2.length - 1];
  // append the li below the input
  document.querySelectorAll(".col-8")[2].appendChild(listItem);
});

// selecting each button
//  adding an event listener to each different button
document.querySelectorAll(".btn")[3].addEventListener("click", () => {
  // select the data in the input element with the same index
  text = document.querySelectorAll("input")[3].value;
  // push text to the designated array
  array3.push(text);
  // create an li
  listItem = document.createElement("li");
  //  set its inner html as the last item of array0
  listItem.innerHTML = array3[array3.length - 1];
  // append the li below the input
  document.querySelectorAll(".col-8")[3].appendChild(listItem);
});

// selecting each button
//  adding an event listener to each different button
document.querySelectorAll(".btn")[4].addEventListener("click", () => {
  // select the data in the input element with the same index
  text = document.querySelectorAll("input")[4].value;
  // push text to the designated array
  array4.push(text);
  // create an li
  listItem = document.createElement("li");
  //  set its inner html as the last item of array0
  listItem.innerHTML = array4[array4.length - 1];
  // append the li below the input
  document.querySelectorAll(".col-8")[4].appendChild(listItem);
});

// selecting each button
//  adding an event listener to each different button
document.querySelectorAll(".btn")[5].addEventListener("click", () => {
  // select the data in the input element with the same index
  text = document.querySelectorAll("input")[5].value;
  // push text to the designated array
  array5.push(text);
  // create an li
  listItem = document.createElement("li");
  //  set its inner html as the last item of array0
  listItem.innerHTML = array5[array5.length - 1];
  // append the li below the input
  document.querySelectorAll(".col-8")[5].appendChild(listItem);
});

// selecting each button
//  adding an event listener to each different button
document.querySelectorAll(".btn")[6].addEventListener("click", () => {
  // select the data in the input element with the same index
  text = document.querySelectorAll("input")[6].value;
  // push text to the designated array
  array6.push(text);
  // create an li
  listItem = document.createElement("li");
  //  set its inner html as the last item of array0
  listItem.innerHTML = array6[array6.length - 1];
  // append the li below the input
  document.querySelectorAll(".col-8")[6].appendChild(listItem);
});

// selecting each button
//  adding an event listener to each different button
document.querySelectorAll(".btn")[7].addEventListener("click", () => {
  // select the data in the input element with the same index
  text = document.querySelectorAll("input")[7].value;
  // push text to the designated array
  array7.push(text);
  // create an li
  listItem = document.createElement("li");
  //  set its inner html as the last item of array0
  listItem.innerHTML = array7[array7.length - 1];
  // append the li below the input
  document.querySelectorAll(".col-8")[7].appendChild(listItem);
});

// selecting each button
//  adding an event listener to each different button
document.querySelectorAll(".btn")[8].addEventListener("click", () => {
  // select the data in the input element with the same index
  text = document.querySelectorAll("input")[8].value;
  // push text to the designated array
  array8.push(text);
  // create an li
  listItem = document.createElement("li");
  //  set its inner html as the last item of array0
  listItem.innerHTML = array8[array8.length - 1];
  // append the li below the input
  document.querySelectorAll(".col-8")[8].appendChild(listItem);
});

//  create a variable today that is equal to todays date
var today = new Date();
//  set the date to equal todaus day
var date =
  today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

// get the time form todays gethours , getminutes and getseconds
var time =
  today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

console.log(today.getHours(), date, time);

// set the date
document.querySelectorAll("p")[1].innerHTML = date;
// set the time
document.querySelectorAll("p")[2].innerHTML = time;

// for hour
for (i = 0; i < document.querySelectorAll(".time").length; i++) {
  // if current hour is greater than past hours, set color to red
  if (
    today.getHours() > Number(document.querySelectorAll(".time")[i].innerHTML)
  ) {
    document.querySelectorAll(".container")[i].style.backgroundColor =
      "#DB678F";

    //  if current hour === hour set color to yellow
  } else if (
    today.getHours() == Number(document.querySelectorAll(".time")[i].innerHTML)
  ) {
    document.querySelectorAll(".container")[i].style.backgroundColor =
      "#EEF739";

    // if current hour is less than hours, set color to green
  } else if (
    today.getHours() < Number(document.querySelectorAll(".time")[i].innerHTML)
  ) {
    document.querySelectorAll(".container")[i].style.backgroundColor =
      "#67DB94";
  }
}
