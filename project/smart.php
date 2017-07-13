<?php
//Принимаем постовые данные
$name=$_POST['username'];
$email=$_POST['email'];
$user-message=$_POST['user-message'];
//Тут указываем на какой ящик посылать письмо
$to = "kraybyfacker";
//Далее идет тема и само сообщение
// Тема письма
$subject = "Заявка с сайта";
// Сообщение письма
$message = "
Имя пользователя: ".htmlspecialchars($name)."<br />
Email:".htmlspecialchars($phone)."</a>"."<br />
Сообщение:".htmlspecialchars($user-message)."</a>";
// Отправляем письмо при помощи функции mail();
$headers = "From: stastroi.ru <mail@stastroi.ru>\r\nContent-type: text/html; charset=UTF-8 \r\n";
mail ($to, $subject, $message, $headers);
// Перенаправляем человека на страницу благодарности и завершаем скрипт
exit();
?>