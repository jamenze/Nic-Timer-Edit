
console.log("test")
var workLength = 25;
var playLength = 5;
// var alarm = new Audio('http://www.orangefreesounds.com/wp-content/uploads/2016/06/Ringing-clock.mp3?_=1');
var alarm = new Audio('sound/timesup.mp3')
var loop = 0;
$('#reset').hide(); //leaves only start button on start
// document.querySelector("#myCard").classList.toggle("flip")
// $("#myCard").click(function(){          //that was a test button for flipping screen
//     $(".flipper").toggleClass("flip");
// });

//sliding intructions start
$('.slideTogglebox').hide();
$('#slideToggle').mouseover(function(){
    $(this).css("color","blue")
    $('.slideTogglebox').slideToggle();
})
$('#slideToggle').mouseout(function(){
    $(this).css("color","#F0EAD6")
    $('.slideTogglebox').slideToggle();
})
//sliding instructions end

//sliding footer
//sliding intructions start
$('#teamTogglebox').hide();
$('#team').mouseover(function(){
    $(this).css("color","blue")
    $('#teamTogglebox').slideToggle();
})
$('#team').mouseout(function(){
    $(this).css("color","#F0EAD6")
    $('#teamTogglebox').slideToggle();
})
//sliding instructions for footer


////what you see below is for input manipulation////
/// the following are listeners for buttons plus and minus
  $('#work-plus').click(function(){//to add time to work session
    workLength += 5;
    if (workLength > 90){ // logic to limit to 2 digits
        workLength = 95
    }else{
    $('.minutes').text(workLength);
    $('.minutes-interval').text(workLength);// using html and text interchangebly
    }                                       // seems to be no difference
    $('.minutes').text(workLength);
    $('.minutes-interval').text(workLength);
  });


  $('#work-minus').click(function(){//to deduct session time
    workLength -= 5
    if (workLength < 10){
      //logic to prevent going below 5 on time scale.
      workLength = 5;
      $('.minutes').html('0' + workLength); // adds 0 up front before number if below 2 digits
      $('.minutes-interval').html('0' + workLength);
    }else{
      $('.minutes').html(workLength);
    $('.minutes-interval').html(workLength);
    }
  });


  $('#play-plus').click(function(){
    playLength += 5;
    if (playLength > 90){ // logic to limit to 2 digits
      playLength = 95
    }
    $("#playTimer").html(playLength);
  });

  $('#play-minus').click(function(){
    playLength -= 5;
    if (playLength < 10){ //logic to stay with 2 digits
      playLength = 5
      $("#playTimer").text('0' + playLength);
    }else{
      $("#playTimer").text(playLength)
    } 
  });
//end of listeners for buttons plus and minus
////what you see above is for input manipulation////
function startTimer() {    //to start timer
  $('#start').fadeOut();
  $('#reset').fadeIn();
  seconds = 0;
  countDown(workLength, seconds);
}

function reset() {         //to reset timer
    clearInterval(countInt);
    workLength = 25;
    playLength = 5;
    $('.minutes').html(workLength); //resets minutes and seconds on main timer
    $('.seconds').html('00');
    $('.minutes-interval').html(workLength); //resets minutes on user input
    $("#playTimer").html('0' + playLength); //ads 0 in front of 5
    $('#start').fadeIn();
    $('#reset').fadeOut();
    $('#current-session').html('Work Session');
}

function countDown(minutes,seconds) {
 countInt = setInterval(function(){
    if (minutes == 0 && seconds == 0) {
        clearInterval(countInt);
        if (loop == 0) {
            time = playLength;
            loop += 1;
            $('#current-session').text('Rest Time');
            $(".flipper").toggleClass("flip");
        } else {
            time = workLength;
            loop -= 1;
            $(".flipper").toggleClass("flip");
            $('#current-session').text('Work Session');
        }
          alarm.play();
      //var timeOut = setTimeout(explode, 2000);
      countDown(time,0); // recursive timer call
      } else if (seconds != 0) {
          seconds -= 1;
      } else if (seconds == 0) {
          seconds = 59;
          minutes -= 1;
      }
      var formattedMinutes = ("0" + minutes).slice(-2);//format m and s to take 2 digits
      var formattedSeconds = ("0" + seconds).slice(-2); 
      $('.minutes').html(formattedMinutes);
      $('.seconds').html(formattedSeconds);
        
    }, 10);
}   

function explode(){
   $("#current-session").hide( "explode", {pieces: 16 }, 2000 );
   // clearInterval(timeOut);
   return
}

