let mom = moment().format("hA");
console.log(mom);

let h = moment().format("h");
console.log(h);

// let H = moment().format("H");

let a = moment().format("A");
console.log(a);

// let hour = document.querySelector(".hour");
// console.log(hour.parentNode);

let twelveam = document.querySelector("#twelveam");
let oneam = document.querySelector("#oneam");
let twoam = document.querySelector("#twoam");

let nine = document.querySelector("#nine");
let ten = document.querySelector("#ten");
let eleven = document.querySelector("#eleven");
let twelve = document.querySelector("#twelve");
let one = document.querySelector("#one");
let two = document.querySelector("#two");
let three = document.querySelector("#three");
let four = document.querySelector("#four");
let five = document.querySelector("#five");

let array = [twelveam, oneam, twoam, nine, ten, eleven, twelve, one, two, three, four, five];
console.log(array);

// for (i = 0; i < array.length; i++) {
//     if (a === "AM") {
//         if (array[i].innerHTML.includes("AM")) {
//             if (parseInt(array[i].innerHTML) % 12 > h % 12) {
//                 array[i].parentNode.children[1].classList.add("future");
//             } else if (parseInt(array[i].innerHTML) % 12 < h % 12) {
//                 array[i].parentNode.children[1].classList.add("past");
//             } else {
//                 array[i].parentNode.children[1].classList.add("present");
//             }
//         } else {
//             array[i].parentNode.children[1].classList.add("future");
//         }
//     } else {
//         if (array[i].innerHTML.includes("PM")) {
//             if (parseInt(array[i].innerHTML) % 12 > h % 12) {
//                 array[i].parentNode.children[1].classList.add("future");
//             } else if (parseInt(array[i].innerHTML) % 12 < h % 12) {
//                 array[i].parentNode.children[1].classList.add("past");
//             } else {
//                 array[i].parentNode.children[1].classList.add("present");
//             }
//         } else {
//             array[i].parentNode.children[1].classList.add("past");
//         }
//     }
// }

for (i = 0; i < array.length; i++) {
    if (a[0] === array[i].innerHTML[array[i].innerHTML.length - 2]) {
        console.log("Its that time of day");
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
    } else if (a === "AM") {
        array[i].parentNode.children[1].classList.add("future");
        console.log(array[i].innerHTML + ": future");
    } else {
        array[i].parentNode.children[1].classList.add("past");
        console.log(array[i].innerHTML + ": past");
    }
}
