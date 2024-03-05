setInterval(clock, 1000);

function clock() {
  let time = document.getElementById("clock");

  let curr_time = new Date();
  let Hours = curr_time.getHours();
  let min = curr_time.getMinutes();
  let seconds = curr_time.getSeconds();
  time.innerText = formateNum(Hours) + ":" + formateNum(min) + ":" + formateNum(seconds);
}

function formateNum(val) {
  if (val < 10) {
    val = "0" + val;
    return val;
  } else {
    return val;
  }
}
