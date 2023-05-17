let title = ""
let userName = prompt("Please Enter Your Name")
userName = isEmpty(userName)

let userGender = prompt("Please Enter Your Gender\n please note that gender must be male or female");
userGender = isEmpty(userGender)
userGender.toLowerCase()

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


const q1 = confirm("do like listen to music?");
const q2 = confirm("do like watching movies?");
const q3 = confirm("do like reading books?");

let array = [userName, userGender, userAge, q1, q2, q3];
array.forEach(elm=>{
    console.log(elm);
})

function isEmpty(text) {
    if (text == ''||text==null) return "invalid"

    return text;
}
