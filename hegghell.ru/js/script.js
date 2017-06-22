jQuery('document').ready(function() {



jQuery( "#target" ).click(function() {
 
  var site = "http://testwork.webutu.com/textolite/"
								var login = "hegg";
								var password = "hell";
								logincorrect = prompt ("Введите логин:");
									//Если введеный логин не правильный, то
									if (logincorrect != login) 
									{
										alert ("Некорректный логин!");
									}
										else 
											{
											passcorrect = prompt ("Введите пароль:");
											if (passcorrect != password) {
											alert ("Некорректный пароль!");
										}
										else {
											$(location).attr('href',site);
										}
									}
});















});





	//$(location).attr('href',site);