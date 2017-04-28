var socket = io.connect();
socket.on('login', function(res) {
    if(res.message=="success") {
        console.log("Successfully Logged In");
        hidepopup();
        $("#username").val("");
        $("#password").val("");
    }
    else {
        console.log("Incorrect Login");
        $("#login_form").removeClass('shake_effect');
        setTimeout(function() {
            $("#login_form").addClass('shake_effect')
        }, 1);
    }
});

function showpopup()
{
    var login = document.getElementById('login_form');
    login.style.display = "block";
}

function hidepopup()
{
    var login = document.getElementById('login_form');
    login.style.display = "none";
}
/*
function check_login()
{
    var name=$("#username").val();
    var pass=$("#password").val();
    if(name=="test" && pass=="pass") {
        console.log("Successfully Logged In");
        hidepopup();
        $("#username").val("");
        $("#password").val("");
    }
    else
    {
        console.log("Incorrect Login");
        $("#login_form").removeClass('shake_effect');
        setTimeout(function() {
            $("#login_form").addClass('shake_effect')
        }, 1);
    }
}
*/
function login()
{
    console.log("Attempting to Login");
    var name=$("#username").val();
    var pass=$("#password").val();
    socket.emit('login', {username: name, password: pass });
}
