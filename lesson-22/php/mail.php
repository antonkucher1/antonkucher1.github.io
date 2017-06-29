<?php
    //Принимаем постовые данные
    $name=$_POST['username'];
    $email=$_POST['email'];
    $user_message=$_POST['user_message'];
    //Тут указываем на какой ящик посылать письмо
    $to = "Anton@gmail.com";
    //Далее идет тема и само сообщение
    // Тема письма
    $subject = "Заявка с сайта";
    // Сообщение письма
    $message = "
    Имя пользователя: ".htmlspecialchars($username)."<br/>
    Email:".htmlspecialchars($email)."<br/>";
    "Сообщение:".htmlspecialchars($user_message);

    // Отправляем письмо при помощи функции mail();
    $headers = "From: kurse.ru <no-reply@gmail.com>\r\nContent-type: text/html; charset=UTF-8 \r\n";
    // Отправляем письмо при помощи функции mail();
    mail ($to, $subject, $message, $headers);
    // Перенаправляем человека на страницу благодарности и завершаем скрипт
    header('location: thankyou.html');
    exit();
?>
