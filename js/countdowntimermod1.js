//nick's version of timer

console.log('loading script');
//Todays date
//Todays date
// var date = new Date();
// var today = date.toDateString();
// console.log(`Today is ${today}`);
// document.getElementById('today').innerHTML = today;
document.getElementById("start").addEventListener("click", function(){ // listens for start button
  var usWork = document.getElementsByClassName('work-interval-form')[0].value;
  var usBreak = document.getElementsByClassName('break-interval-form')[0].value;
  console.log(usWork, usBreak);
  formValidation(usWork, usBreak);
});

document.getElementById("pause").addEventListener("click", function(){ // listens for reset button
  location.reload(); //reloads the page
});


document.getElementById("reset").addEventListener("click", function(){ // listens for reset button
  // location.reload(); //reloads the page
  document.getElementById("start").value="" // listens for start button

});

function formValidation(work, br){
  if (work == '' || br == '' || isNaN(work) || isNaN(br) ){
    document.getElementById('time-error').style.color = "red";
    document.getElementById('time-error').innerHTML = "Number required!!!";
    document.getElementsByClassName("work-interval-form")[0].style.borderColor = "red";
    document.getElementsByClassName("break-interval-form")[0].style.borderColor = "red";
    document.getElementsByClassName("work-interval-form")[0].placeholder = "Required";
    document.getElementsByClassName("break-interval-form")[0].placeholder = "Required";
       
  }else{
    document.getElementById('time-error').innerHTML = "";
    document.getElementsByClassName("work-interval-form")[0].style.borderColor = "green";
    document.getElementsByClassName("break-interval-form")[0].style.borderColor = "green";
    console.log(br);
    var timerInt = timerWork(work);
    return br
  }
}

function timerWork(limit){
  var seconds = 0;
  var minutes = 0;
  var x = setInterval(function(){
    if (limit <= minutes){
      clearInterval(x);
    }else if (seconds >= 60){
      minutes += 1;
      seconds = 0;
    }else{
      seconds += 1;
    }
  document.getElementsByClassName('minutes')[0].style.fontSize = "125px";
  document.getElementsByClassName('seconds')[0].style.fontSize = "125px";
  document.getElementsByClassName('minutes')[0].innerHTML = minutes.toLocaleString(undefined,{minimumIntegerDigits: 2});//converts the seconds to double digits;;
  document.getElementsByClassName('seconds')[0].innerHTML = seconds.toLocaleString(undefined,{minimumIntegerDigits: 2});//converts the seconds to double digits;;
  console.log(minutes, seconds);
  }, 100)
  return x
}
