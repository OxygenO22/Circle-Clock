
const timeContainer = document.getElementById('time');
const clock = document.querySelector('.clock');
const deg = 6;
const hr = document.querySelector('.hr');
const mn = document.querySelector('.mn');
const sc = document.querySelector('.sc');

function makeCircles() {
   var xCenterClock = clock.clientWidth / 2 - 30;
   var yCenterClock = clock.clientHeight / 2 - 30;

   for (var i = 1, j = 1; i <= 12; i++, j++) {

      let hourCircle = document.createElement('div');
      hourCircle.innerHTML = j;
      hourCircle.classList.add('hCircle');

      hourCircle.posx = xCenterClock + Math.round((200 * Math.sin(i * (2 * Math.PI / 12)))) + 'px';
      hourCircle.posy = yCenterClock - Math.round((200 * Math.cos(i * (2 * Math.PI / 12)))) + 'px';
      hourCircle.style.top = hourCircle.posy;
      hourCircle.style.left = hourCircle.posx;

      clock.appendChild(hourCircle);
   }
}
makeCircles();

function addZero(number) {
   let str = number.toString();
   if (str.length < 2) {
      str = "0" + str;
   }
   return str;
}
function formatDateTime(data) {
   var hours = data.getHours();
   var minutes = data.getMinutes();
   var seconds = data.getSeconds();

   return addZero(hours) + ":" + addZero(minutes) + ":" + addZero(seconds);
}

setInterval(() => {
   let currentTime = new Date();
   let hh = currentTime.getHours() * 30;
   let mm = currentTime.getMinutes() * deg;
   let ss = currentTime.getSeconds() * deg;

   hr.style.transform = `rotateZ(${hh + (mm / 12)}deg)`;
   mn.style.transform = `rotateZ(${(mm)}deg)`;
   sc.style.transform = `rotateZ(${(ss)}deg)`;

   var timeString = formatDateTime(currentTime);
   timeContainer.innerHTML = timeString;
})










