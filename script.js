"use strict";

let userFilter = document.getElementById("input-filter");
let list = document.getElementById("list");
let array = [];

async function asyncFnc() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
      throw new Error("can not fetch data");
    }
    let UserData = await response.json();
    UserData.forEach((element) => {
      let li = document.createElement("li");
      li.innerText = `${element.name}`;

      array.push(li);
      list.appendChild(li);
    });
  } catch (error) {
    console.log(error);
  }
}
asyncFnc();

function Filter(index) {
  array.forEach((element) => {
    if (element.innerText.toLowerCase().includes(index.toLowerCase())) {
      element.classList.remove("active");
    }
    else{
        element.classList.add("active");
    }
  });
}
userFilter.addEventListener('keyup',function(){
    Filter(this.value)
})