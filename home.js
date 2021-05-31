console.log("hello");



//var age = prompt('What is you age?');

//document.getElementById('someText').innerHTML = age;

function greeting(){
    var name = prompt('what is your name?');
    var result = 'Hello ' + name;
    console.log(result);
}

//greeting();

var num = 0;
while (num < 100){
    num ++;
    console.log(num);
}

let emptyArray = [];
for(num = 0; num <= 10; num++){
    emptyArray.push(num);
}
console.log(emptyArray);

//if statement
var age = 10;

if ((age >= 18) && (age <=35)) {
    status = 'target demo';
    console.log(status);
} else {
    status = 'not my audience';
    console.log(status);
}
//switch statement
 
switch (6) {
    case 0:
        text = 'Weekend';
        break;
    case 6:
        text = 'Weekend';
        break;

    default:
        text = 'Weekday'
        break;
}
console.log(text);