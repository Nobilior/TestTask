function startJavaScript() {
	startTime();
	startDate();
	startWeekday();
}

function startTime()
{
var tm=new Date();
var h=tm.getHours();
var m=tm.getMinutes();
var s=tm.getSeconds();
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);
}
function checkTime(i)
{
if (i<10)
{
i="0" + i;
}
return i;
}

function startDate() {
var d=new Date();
var day=d.getDate();
var month=d.getMonth() + 1;
var year=d.getFullYear();
document.getElementById('day').innerHTML=day + "." + month + "." + year;
}

function startWeekday() {
var day=new Date();
var weekday=new Array(7);
weekday[0]="Воскресенье";
weekday[1]="Понедельник";
weekday[2]="Вторник";
weekday[3]="Среда";
weekday[4]="Четверг";
weekday[5]="Пятница";
weekday[6]="Суббота";
document.getElementById('weekday').innerHTML=weekday[day.getDay()];
}


var ua = navigator.userAgent;    
if (ua.search(/Trident/) > 0) {;
alert('Вы пользуетесь не тем браузером');
}

