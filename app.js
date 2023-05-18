'use strict';

let title = ""
let userName = (prompt("Please Enter Your Name"))
userName = isEmpty(userName)

let userGender = prompt("Please Enter Your Gender\n please note that gender must be male or female").toLowerCase();
userGender = isEmpty(userGender)


if (userGender == "male") {
    title = "Mr";
}
else if (userGender == "female") {
    title = "Ms";
}



let userAge = prompt("Please Enter Your Age");
userAge = isEmpty(userAge)

if (userAge <= 0) {
    alert("age should be more than zero")
}

const skip = confirm("do you want to skip the welcoming message?");
if (!skip) alert(`welcome here ${title + " " + userName}`);


let q1 = prompt("do like listen to music?");
q1 = isEmpty(q1);

while (true) {
    if (q1 == "yse" || q1 == "no") {
        break;
    }
    alert("you enter invalid input, the answer should be yes or no ")
}


let q2 = prompt("do like watching movies?");
q2 = isEmpty(q1);
while (true) {
    if (q2 == "yse" || q2 == "no") {
        break;
    }
    alert("you enter invalid input, the answer should be yes or no ")
}


let q3 = prompt("do like reading books?");
q3 = isEmpty(q1);

while (true) {
    if (q3 == "yse" || q3 == "no") {
        break;
    }
    alert("you enter invalid input, the answer should be yes or no ")
}




let array = [userName, userGender, userAge, q1, q2, q3];
array.forEach(elm => {
    console.log(elm);
})

function isEmpty(text) {
    if (text == '') return "invalid"

    return text;
}