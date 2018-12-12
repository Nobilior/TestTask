function valid (form) {
	var fail = false;
	var email = form.email.value;
	var password = form.password.value;
	var pass_valid = /^(?=.*[a-zа-я])(?=.*[A-ZА-Я])(?=.*[0-9])(?=.*[^\w\s]).{6,}/
	var email_valid = /[0-9a-z_-]+@[0-9a-z_-]+\.[a-z]{2,5}/i;
	if (email == "") {
		fail = "Введите email"
	}
	else if (email_valid.test(email) == false) {
		fail = "Email введен неправильно"
	}
	else if (pass_valid.test(password) == false) {
		fail = "Пароль должен быть: \n— не менее 6 символов; \n— должны быть символы разных регистров;\n— должны присутствовать числа;\n— должны присутствовать спец. символы."
	}
	else if (password == "") {
		fail = "Введите пароль"
	}
	if (fail) {
		alert(fail);
	}
	else
		window.location.reload()
}