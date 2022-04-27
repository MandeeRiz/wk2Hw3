let m=0;
let s=0;
let inIt = document.querySelector(".input")
// press enter for timer to start


function to_start(){

if (inIt.value == time){
    console.log(inIt.value)
    document.querySelector(".main").classList.add("mainRed")
}


switch(document.getElementById('btn').value)
{
case  'Stop':
window.clearInterval(tm); // stop the timer 
document.getElementById('btn').value='Start';
break;
case  'Start':
tm=window.setInterval('disp()',1000);
document.getElementById('btn').value='Stop';
break;
}
}

function disp(){
// Format the output by adding 0 if it is single digit //
if(s<10){'0' + s;}
else{s = s;}
if(m<10){'0' + m;}
else{m=m;}

// Display the output //

let mins = document.querySelector(".minInput");
let secs = document.querySelector(".secInput");

secs.value = s
mins.value = m
// Calculate the stop watch // 
if(s<59){ 
s=s+1;
}else{
s=0;
m=m+1;
if(m==60){
m=0;
} // end if  m ==60
}// end if else s < 59
// end of calculation for next display
}

document.querySelector(".minInput").addEventListener("keypress", function(event){
    if(event.code === "Enter"){
        document.getElementById("myText").focus();
    }
})

//once timer hits user input turn circle background red
let minInput = document.querySelector(".minInput").value
let secInput = document.querySelector(".secInput").value
let time = minInput + ":" + secInput
console.log(time);


document.addEventListener("keypress", to_start);