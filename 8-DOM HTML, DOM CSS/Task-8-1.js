logPass = [
	{ "name": "aleksey", "password": "qwerty1" },
	{ "name": "aibar", "password": "qwerty2" },
	{ "name": "arslan", "password": "qwerty3" },
	{ "name": "dima", "password": "qwerty4" },
];
function toCheck() {

	let textLog = document.getElementById('inputLog');
	let textPas = document.getElementById('inputPas');
	let textLogPas = document.getElementById('LogPas');
	let n = parseInt(0)

	for (let logPas of logPass) {
		if (textLog.value == logPas.name && textPas.value == logPas.password) {
			textLogPas.innerHTML = "You are authenticated"
			n++
			break
		}
	}
	if (n==0){
		textLog.style.borderColor = "red"
		textPas.style.borderColor = "red"
	}
}