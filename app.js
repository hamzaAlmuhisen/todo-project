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
q1 = isEmpty(q1)
q1 = isValid(q1.toLowerCase());

let q2 = prompt("do like watching movies?");
q2 = isEmpty(q2)
q2 = isValid(q2.toLowerCase());

let q3 = prompt("do like reading books?");
q3 = isEmpty(q3)
q3 = isValid(q3.toLowerCase());


let array1 = [q1, q2, q3];



let array = [userName, userGender, userAge];
array.forEach(elm => {
    console.log(elm);
})

console.log(array1);


function isEmpty(text) {
    if (text == '' || text == null) return "invalid"

    return text;
}

function isValid(text) {
    if (text == "yes" || text == "no") return text;
    return "invalids";
}


