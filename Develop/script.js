let mom = moment().format("hA");
console.log(mom);

let h = moment().format("h");
console.log(h);

let a = moment().format("A");
console.log(a);

let nine = document.querySelector("#nine");
let ten = document.querySelector("#ten");
let eleven = document.querySelector("#eleven");
let twelve = document.querySelector("#twelve");
let one = document.querySelector("#one");
let two = document.querySelector("#two");
let three = document.querySelector("#three");
let four = document.querySelector("#four");
let five = document.querySelector("#five");

let array = [nine, ten, eleven, twelve, one, two, three, four, five];
console.log(array);

for (i = 0; i < array.length; i++) {
    let text = array[i].innerHTML;
    if (a[0] === text[text.length - 2]) {
        // console.log("Its that time of day");
        // console.log(parseInt(text));
        if (parseInt(text) % 12 > h % 12) {
            array[i].parentNode.children[1].classList.add("future");
            // console.log(text + ": future");
        } else if (parseInt(text) % 12 < h % 12) {
            array[i].parentNode.children[1].classList.add("past");
            // console.log(text + ": past");
        } else {
            array[i].parentNode.children[1].classList.add("present");
            // console.log(text + ": present");
        }
    } else if (a === "AM") {
        array[i].parentNode.children[1].classList.add("future");
        // console.log(text + ": future");
    } else {
        array[i].parentNode.children[1].classList.add("past");
        // console.log(text + ": past");
    }
}
