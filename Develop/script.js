let mom = moment().format("hA");
console.log(mom);

let h = moment().format("h");
console.log(h);

let H = moment().format("H");

let a = moment().format("A");
console.log(a);

let hour = document.querySelector(".hour");
console.log(hour.parentNode);

let twelve = document.querySelector("#twelve");
let one = document.querySelector("#one");
let two = document.querySelector("#two");
let pm = document.querySelector("#pm");

let array = [twelve, one, two, pm];
console.log(array);

for (i = 0; i < array.length; i++) {
    if (a === "AM") {
        if (array[i].innerHTML.includes("AM")) {
            console.log("It is AM");
            console.log(parseInt(array[i].innerHTML));
            if (parseInt(array[i].innerHTML) % 12 > h % 12) {
                array[i].parentNode.children[1].classList.add("future");
                console.log(array[i].innerHTML + ": future");
            } else if (parseInt(array[i].innerHTML) % 12 < h % 12) {
                array[i].parentNode.children[1].classList.add("past");
                console.log(array[i].innerHTML + ": past");
            } else {
                array[i].parentNode.children[1].classList.add("present");
                console.log(array[i].innerHTML + ": present");
            }
        } else {
            array[i].parentNode.children[1].classList.add("future");
            console.log(array[i].innerHTML + ": future");
        }
    } else {
        if (array[i].innerHTML.includes("PM")) {
            console.log("It is PM");
            console.log(parseInt(array[i].innerHTML));
            if (parseInt(array[i].innerHTML) % 12 > h % 12) {
                array[i].parentNode.children[1].classList.add("future");
                console.log(array[i].innerHTML + ": future");
            } else if (parseInt(array[i].innerHTML) % 12 < h % 12) {
                array[i].parentNode.children[1].classList.add("past");
                console.log(array[i].innerHTML + ": past");
            } else {
                array[i].parentNode.children[1].classList.add("present");
                console.log(array[i].innerHTML + ": present");
            }
        } else {
            array[i].parentNode.children[1].classList.add("past");
            console.log(array[i].innerHTML + ": past");
        }
    }
}
