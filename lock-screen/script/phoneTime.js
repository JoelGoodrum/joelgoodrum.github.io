let months = ["January","Febuary","March","April","May","June","July","August","September","October","November","December"];

function updatePhoneTime() {

	let time = new Date();
	let hours = time.getHours();
	let min = time.getMinutes();
	let sec = time.getSeconds();
	let month = time.getMonth();
	let day = time.getDate();

	if(sec < 10) {
		sec = `0${sec}`;
	}
	
	if(min < 10){
		min = `0${min}`;
	}	
	
	document.getElementById('iTime').innerText = `${hours % 12}:${min}`;
	document.getElementById('iSecond').innerText = sec;
	document.getElementById('date').innerText = `${months[month].toString()} ${day}`;	

}

window.setInterval(function(){
	updatePhoneTime();
}, 1000);

