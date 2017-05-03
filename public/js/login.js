/* Handle all of the socket.io functions */
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
            $("#login_form").addClass('shake_effect');
        }, 1);
    }
});

/* Declare variables */
var login;

/* First run when we see the page */
function init() {
    login = document.getElementById('login_form');
    showpopup();
}

/* Handle the login modal */

function showpopup()
{
    login.style.display = "block";
}

function hidepopup()
{
    login.style.display = "none";
}

function check_login()
{
    console.log("Attempting to Login");
    var name=$("#username").val();
    var pass=$("#password").val();
    socket.emit('login', {username: name, password: pass });
}
