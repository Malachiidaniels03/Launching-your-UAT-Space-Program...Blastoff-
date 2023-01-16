function countDown(code) {
    code = "0000" ;
let answer = prompt("Enter Initation Code");
if (answer === code) { 
  alert("Access Granted Counting down to Blastoff!");
  countBlastoff() }
else if (answer != code) { 
  alert("ACCESS DENIED");
  countSelfDistruct()}}
//This is the same function changes that I implemented in the last assignment to require an initiation code befor counting down. I cleaned it up a little.





function countBlastoff() {
for (let z = 10; z >= 0; z--) {        //I used a for loop to set the timer to 10 and count down by 1 untill z is >= 0 
    setTimeout(function () {                 //I used the setTimeour function similar to the last assignment to make the counter count down over a 1s delay
      if (z === 0) {                        //I used to say if z is = 0 say Blastoff!
         document.getElementById("countdownTimer").innerHTML = "BLASTOFF!!!!!!";  //I used documentgetElementById to display blastoff on the screen 
      } else {                                                          //I used an else statment to ensure when the counter wasnt showing "blastoff" it will show the count 
         document.getElementById("countdownTimer").innerHTML = z; //I used document.getElement again along with else to acomplish what i said ubove
      }
    }, (10 - z) * 1000);  //I subtracted 10-z to find how far z is from 0 then multiplied by 1000 to convert to millisecods to help acomplish adding a delay before each num by 1 second. ( i had a little help from the internet on this part LOL)
}
}



function countSelfDistruct() {
  alert("Counting Down To SELF DISTRUCT!");
  for (let z = 10; z >= 0; z--) {        //I used a for loop to set the timer to 10 and count down by 1 untill z is >= 0 
      setTimeout(function () {                 //I used the setTimeour function similar to the last assignment to make the counter count down over a 1s delay
        if (z === 0) {                        //I used to say if z is = 0 say SELFDISTRUCT!!!!
           document.getElementById("countdownTimer").innerHTML = "SELF DISTRUCTING!!!!!!";  //I used documentgetElementById to display SELFDISTRUCT!!!! on the screen 
        } else {                                                          //I used an else statment to ensure when the counter wasnt showing "SELFDISTRUCT!!!!" it will show the count 
           document.getElementById("countdownTimer").innerHTML = z; //I used document.getElement again along with else to acomplish what i said ubove
        }
      }, (10 - z) * 1000);  //I subtracted 10-z to find how far z is from 0 then multiplied by 1000 to convert to millisecods to help acomplish adding a delay before each num by 1 second. ( i had a little help from the internet on this part LOL)
  }
  }