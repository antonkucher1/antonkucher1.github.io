function searchnone()
{
    alert("Нечего искать!");
}

function checkvalid()
{
    var email = document.getElementById('email-input');
    var pass = document.getElementById('pass-input');
    if (email.value<=0)
    {
        email.style.border = '2px solid red';
        
    }
    if (pass.value<=0)
    {
        pass.style.border = '2px solid red';
    }
    if (email.value<=0||pass.value<=0)
    {
        alert('Необходимо заполнить все поля.');
    }
    else
    {
                alert('Вы успешно вошли!');
    }
}

function focusp(inp)
{
   var inp = document.getElementById(inp);
    alert (inp.value);
}